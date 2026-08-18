import type { Metadata } from "next";
import { siteName, siteUrl } from "@/lib/site";

/**
 * Shared per-page metadata builder — canonical, Open Graph, and Twitter
 * card, all pointing at the dynamic branded OG image (app/og/route.tsx).
 * Used by every page so seven-plus routes don't each hand-roll the same
 * few fields.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const ogImage = `${siteUrl}/og?title=${encodeURIComponent(title)}`;
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
