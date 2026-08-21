import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE_NAME, clearSessionCookie, revokeSession } from "@/lib/auth/session";

export async function POST() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE_NAME)?.value;
  if (token) {
    await revokeSession(token);
  }
  await clearSessionCookie();
  return NextResponse.json({ ok: true });
}
