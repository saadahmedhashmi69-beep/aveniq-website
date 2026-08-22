import { NextResponse } from "next/server";
import { validateEstimatorPayload } from "@/lib/estimator-validation";
import { prisma } from "@/lib/prisma";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

/**
 * Estimator completion endpoint — called once when a visitor reaches
 * their Preliminary Project Profile (components/estimator/EstimatorFlow.tsx),
 * independent of whether they go on to submit the contact form. The
 * estimator never asks for a name or email, so this creates an Inquiry
 * row with those fields left null; if the same visitor later submits the
 * contact form, that's captured as a separate CONTACT-source row (the
 * sessionStorage handoff pre-fills it, but doesn't merge the records).
 */

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 10;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(`estimator:${ip}`, RATE_LIMIT_WINDOW_MS, RATE_LIMIT_MAX)) {
    return NextResponse.json({ ok: false, error: "Too many submissions." }, { status: 429 });
  }

  const { valid, answers } = validateEstimatorPayload(body);
  if (!valid) {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  try {
    await prisma.inquiry.create({
      data: {
        source: "ESTIMATOR",
        message: typeof answers.problem === "string" ? answers.problem : null,
        details: answers,
      },
    });
  } catch (error) {
    console.error("Estimator: failed to save submission.", error);
    return NextResponse.json({ ok: false, error: "Something went wrong." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
