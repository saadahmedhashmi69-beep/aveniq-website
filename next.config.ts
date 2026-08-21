import type { NextConfig } from "next";

/**
 * Static-rendering-compatible CSP tier (no nonces). Next.js's own CSP
 * guide notes that nonce-based strict CSP requires forcing every page to
 * dynamic rendering — a real cost this mostly-static marketing site
 * doesn't have a matching security need for: there's no arbitrary
 * user-generated script/HTML rendered anywhere and no
 * `dangerouslySetInnerHTML` outside the site's own static JSON-LD.
 * `'unsafe-inline'` on script/style is the tradeoff that keeps static
 * generation; everything else (remote origins, framing, base tag
 * injection, object embeds) is locked down.
 *
 * img-src allows any https: origin (not just 'self') because the admin
 * Media module (app/admin/(dashboard)/media) references externally
 * hosted image URLs by design — there's no file upload pipeline, so
 * <img> src values are admin-supplied external URLs, not attacker-
 * controlled input. This only affects what images can load, not script
 * execution.
 */
const isDev = process.env.NODE_ENV === "development";
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' https: blob: data:;
  font-src 'self';
  connect-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspHeader },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
