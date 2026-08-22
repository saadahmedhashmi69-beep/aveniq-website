import { prisma } from "@/lib/prisma";

// Generic reader for CMS-editable copy stored in SiteSetting. Falls back
// to the given default whenever nothing has been set (or the read fails),
// so the site always renders even before an admin edits anything.
async function getSetting<T>(key: string, fallback: T): Promise<T> {
  try {
    const setting = await prisma.siteSetting.findUnique({ where: { key } });
    return setting ? (setting.value as T) : fallback;
  } catch {
    return fallback;
  }
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export const HERO_CONTENT_KEY = "homepage.hero";
export const defaultHeroContent: HeroContent = {
  headline: "We Build Digital Systems That Move Businesses Forward",
  subheadline:
    "From high-performance websites to custom business software, CRMs, dashboards, and automation — we design and build systems around the way your business actually works.",
  primaryCtaLabel: "Start a Project",
  primaryCtaHref: "/estimator",
  secondaryCtaLabel: "View Our Work",
  secondaryCtaHref: "/work",
};

export function getHeroContent(): Promise<HeroContent> {
  return getSetting(HERO_CONTENT_KEY, defaultHeroContent);
}

export interface FinalCtaContent {
  title: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export const HOMEPAGE_FINAL_CTA_KEY = "homepage.finalCta";
export const defaultHomepageFinalCta: FinalCtaContent = {
  title: "Have a business problem worth engineering a system for?",
};

export function getHomepageFinalCta(): Promise<FinalCtaContent> {
  return getSetting(HOMEPAGE_FINAL_CTA_KEY, defaultHomepageFinalCta);
}

export interface PageHeroContent {
  eyebrow: string;
  title: string;
  description: string;
}

export const PROCESS_HERO_KEY = "process.hero";
export const defaultProcessHero: PageHeroContent = {
  eyebrow: "Process",
  title: "What working with Aveniq actually looks like.",
  description:
    "A clear, six-stage process — start to finish. Scope, timeline, and cost depend on the actual project; nothing here is a fixed guarantee.",
};

export function getProcessHero(): Promise<PageHeroContent> {
  return getSetting(PROCESS_HERO_KEY, defaultProcessHero);
}
