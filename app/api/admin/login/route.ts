import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword } from "@/lib/auth/password";
import { createSession, setSessionCookie } from "@/lib/auth/session";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

const LOGIN_RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const LOGIN_RATE_LIMIT_MAX = 8;

// A precomputed hash checked against the submitted password whenever the
// email doesn't match a real account, so an invalid-email response takes
// the same scrypt work as an invalid-password one — without this, response
// timing would leak which admin emails exist.
let dummyHashPromise: Promise<string> | null = null;
function getDummyHash(): Promise<string> {
  if (!dummyHashPromise) {
    dummyHashPromise = hashPassword(randomFillerSecret());
  }
  return dummyHashPromise;
}
function randomFillerSecret(): string {
  return `not-a-real-account-${Date.now()}-${Math.random()}`;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(`admin-login:${ip}`, LOGIN_RATE_LIMIT_WINDOW_MS, LOGIN_RATE_LIMIT_MAX)) {
    return NextResponse.json(
      { ok: false, error: "Too many login attempts. Please try again later." },
      { status: 429 },
    );
  }

  const { email, password } = (body ?? {}) as { email?: unknown; password?: unknown };
  if (typeof email !== "string" || typeof password !== "string" || !email.trim() || !password) {
    return NextResponse.json({ ok: false, error: "Email and password are required." }, { status: 400 });
  }

  const adminUser = await prisma.adminUser.findUnique({
    where: { email: email.trim().toLowerCase() },
  });

  const valid = adminUser
    ? await verifyPassword(password, adminUser.passwordHash)
    : await verifyPassword(password, await getDummyHash());

  if (!adminUser || !valid) {
    return NextResponse.json({ ok: false, error: "Invalid email or password." }, { status: 401 });
  }

  const { token, expiresAt } = await createSession(adminUser.id, {
    ipAddress: ip,
    userAgent: request.headers.get("user-agent"),
  });
  await setSessionCookie(token, expiresAt);
  await prisma.adminUser.update({
    where: { id: adminUser.id },
    data: { lastLoginAt: new Date() },
  });

  return NextResponse.json({ ok: true });
}
