import { createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import type { AdminUser } from "@prisma/client";

export const SESSION_COOKIE_NAME = "aveniq_admin_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

// Only the SHA-256 hash of the session token is ever stored — the raw
// token exists solely in the httpOnly cookie, so a database read alone
// can never yield a usable session.
function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export async function createSession(
  adminUserId: string,
  meta: { ipAddress?: string | null; userAgent?: string | null },
): Promise<{ token: string; expiresAt: Date }> {
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

  await prisma.session.create({
    data: {
      tokenHash: hashToken(token),
      adminUserId,
      expiresAt,
      ipAddress: meta.ipAddress ?? undefined,
      userAgent: meta.userAgent ?? undefined,
    },
  });

  return { token, expiresAt };
}

export async function getSessionAdminUser(token: string | undefined | null): Promise<AdminUser | null> {
  if (!token) return null;

  const session = await prisma.session.findUnique({
    where: { tokenHash: hashToken(token) },
    include: { adminUser: true },
  });
  if (!session) return null;

  if (session.expiresAt.getTime() < Date.now()) {
    await prisma.session.delete({ where: { id: session.id } }).catch(() => {});
    return null;
  }

  return session.adminUser;
}

export async function revokeSession(token: string): Promise<void> {
  await prisma.session.deleteMany({ where: { tokenHash: hashToken(token) } });
}

export async function setSessionCookie(token: string, expiresAt: Date): Promise<void> {
  const store = await cookies();
  store.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

export async function clearSessionCookie(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE_NAME);
}

// Server Component / Route Handler helper — reads the session cookie via
// next/headers. Proxy (proxy.ts) reads the request cookie directly instead
// since next/headers isn't available there.
export async function requireAdmin(): Promise<AdminUser | null> {
  const store = await cookies();
  return getSessionAdminUser(store.get(SESSION_COOKIE_NAME)?.value);
}
