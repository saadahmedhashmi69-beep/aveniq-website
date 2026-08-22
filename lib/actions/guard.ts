import "server-only";
import type { AdminUser, Prisma } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/session";
import { prisma } from "@/lib/prisma";

/**
 * Every admin Server Action calls this first. proxy.ts already blocks
 * unauthenticated page loads under /admin, but Server Actions are their
 * own entry point — per Next.js's own guidance, authorization must be
 * checked inside each one rather than relying on proxy alone.
 */
export async function assertAdmin(): Promise<AdminUser> {
  const adminUser = await requireAdmin();
  if (!adminUser) {
    throw new Error("Unauthorized");
  }
  return adminUser;
}

export async function logActivity(
  adminUserId: string,
  action: string,
  entityType: string,
  entityId?: string,
  metadata?: Prisma.InputJsonValue,
): Promise<void> {
  await prisma.activityLog.create({
    data: { adminUserId, action, entityType, entityId, metadata },
  });
}
