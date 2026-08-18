/**
 * The production domain is not confirmed yet (see
 * docs/phase-1-architecture.md, section Q) — rather than guessing it,
 * this reads from an environment variable with a safe local fallback.
 * Set NEXT_PUBLIC_SITE_URL once the real domain is known (see
 * .env.example).
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  "",
);

export const siteName = "Aveniq";
