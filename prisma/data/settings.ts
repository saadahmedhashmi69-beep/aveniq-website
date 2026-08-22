// Seeds SiteSetting rows with the exact copy already live on the site, so
// seeding this never changes what a visitor sees — it only makes that
// copy admin-editable going forward.
//
// These values are intentionally duplicated from lib/content.ts's
// defaultHeroContent / defaultHomepageFinalCta / defaultProcessHero rather
// than imported: this file must stay a self-contained plain-data module
// (like prisma/data/projects.ts and prisma/data/services.ts) that a
// standalone `node` process can load without pulling in lib/prisma.ts's
// eager PrismaClient construction before env vars are loaded. Keep this
// in sync with lib/content.ts's defaults by hand.

export const settingSeeds: { key: string; value: Record<string, string> }[] = [
  {
    key: "homepage.hero",
    value: {
      headline: "We Build Digital Systems That Move Businesses Forward",
      subheadline:
        "From high-performance websites to custom business software, CRMs, dashboards, and automation — we design and build systems around the way your business actually works.",
      primaryCtaLabel: "Start a Project",
      primaryCtaHref: "/estimator",
      secondaryCtaLabel: "View Our Work",
      secondaryCtaHref: "/work",
    },
  },
  {
    key: "homepage.finalCta",
    value: {
      title: "Have a business problem worth engineering a system for?",
    },
  },
  {
    key: "process.hero",
    value: {
      eyebrow: "Process",
      title: "What working with Aveniq actually looks like.",
      description:
        "A clear, six-stage process — start to finish. Scope, timeline, and cost depend on the actual project; nothing here is a fixed guarantee.",
    },
  },
];
