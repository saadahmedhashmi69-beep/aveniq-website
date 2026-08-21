import { NextResponse } from "next/server";
import { validateContactPayload, type ContactFieldName } from "@/lib/contact-validation";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

/**
 * Contact form submission endpoint.
 *
 * Sends via Resend's REST API (https://resend.com) using plain `fetch` —
 * deliberately no SDK dependency. Requires RESEND_API_KEY and
 * CONTACT_TO_EMAIL to be set (see .env.example); until they are, this
 * route correctly reports itself as unconfigured rather than faking
 * success — see docs/phase-1-architecture.md's truth-first rules.
 *
 * Spam mitigation (no CAPTCHA, kept low-friction):
 * - Honeypot field ("website") — bots that autofill it are silently
 *   dropped (reported as success so scripts don't adapt; this deceives
 *   automated abuse, not a real visitor, since no human ever fills a
 *   hidden field).
 * - Minimum time-on-page — submissions faster than a human could
 *   plausibly fill the form are silently dropped the same way.
 * - A best-effort in-memory rate limit per IP. This resets whenever the
 *   serverless instance recycles, so it is a deterrent, not a guarantee —
 *   documented in the Phase 5 report rather than oversold as robust.
 */

const MIN_FILL_TIME_MS = 2500;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(`contact:${ip}`, RATE_LIMIT_WINDOW_MS, RATE_LIMIT_MAX)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again later." },
      { status: 429 },
    );
  }

  const data = body as Record<string, unknown>;

  // Honeypot: real visitors never populate this hidden field.
  if (typeof data.website === "string" && data.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Timing check: reject submissions faster than a human could plausibly fill the form.
  const renderedAt = typeof data.renderedAt === "number" ? data.renderedAt : 0;
  if (renderedAt > 0 && Date.now() - renderedAt < MIN_FILL_TIME_MS) {
    return NextResponse.json({ ok: true });
  }

  const { valid, errors } = validateContactPayload(data);
  if (!valid) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not configured.");
    return NextResponse.json(
      {
        ok: false,
        error: "This form isn't connected to a live inbox yet. Please try again later.",
      },
      { status: 503 },
    );
  }

  const fields = data as Record<ContactFieldName, string>;
  const summary = (Object.keys(fields) as ContactFieldName[])
    .filter((key) => fields[key]?.trim())
    .map((key) => `${key}: ${fields[key]}`)
    .join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Aveniq Website <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: fields.email,
        subject: `New project inquiry — ${fields.company || fields.name}`,
        text: summary,
      }),
    });

    if (!response.ok) {
      console.error("Contact form: Resend API returned", response.status);
      return NextResponse.json(
        { ok: false, error: "Something went wrong sending your inquiry. Please try again." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact form: failed to reach email provider.", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your inquiry. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
