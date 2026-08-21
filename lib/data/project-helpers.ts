import type { Prisma } from "@prisma/client";

// Project's array-shaped fields (challenge, keyFeatures, technology, etc.)
// are stored as Postgres JSON via Prisma and come back typed as
// Prisma.JsonValue rather than string[]. They're always written as plain
// string arrays by prisma/data/projects.ts and the admin CRUD, so this is
// a safe narrowing, not a real runtime possibility we need to branch on.
export function asStringArray(value: Prisma.JsonValue): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}
