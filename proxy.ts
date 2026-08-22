import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE_NAME, getSessionAdminUser } from "@/lib/auth/session";

const PUBLIC_ADMIN_PATHS = new Set(["/admin/login"]);

// Runs on the Node.js runtime (Next.js 16 default for proxy.ts), which is
// required here since session validation queries Postgres via Prisma.
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_ADMIN_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const adminUser = await getSessionAdminUser(token);

  if (!adminUser) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
