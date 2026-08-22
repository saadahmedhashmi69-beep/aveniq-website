import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
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
  ogImageUrl,
}: {
  title: string;
  description: string;
  path: string;
  ogImageUrl?: string;
}): Metadata {
  const ogImage = ogImageUrl || `${siteUrl}/og?title=${encodeURIComponent(title)}`;
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

/**
 * Like pageMetadata, but checks for an admin-configured SEOSetting
 * override for this path first (see app/admin/(dashboard)/seo). Falls
 * back to the given defaults for any field the admin hasn't overridden.
 */
export async function pageMetadataWithOverride({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Promise<Metadata> {
  const override = await prisma.sEOSetting.findUnique({ where: { path } }).catch(() => null);

  return pageMetadata({
    title: override?.title || title,
    description: override?.description || description,
    path,
    ogImageUrl: override?.ogImage || undefined,
  });
}
