// Best-effort in-memory rate limiting, shared across API routes. Resets
// whenever the serverless instance recycles, so it's a deterrent against
// casual abuse, not a hard guarantee — acceptable for a low-traffic
// contact form and a single-admin login endpoint.

const buckets = new Map<string, number[]>();

export function isRateLimited(key: string, windowMs: number, max: number): boolean {
  const now = Date.now();
  const timestamps = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);
  timestamps.push(now);
  buckets.set(key, timestamps);
  return timestamps.length > max;
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}
