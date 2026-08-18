import type { CaseStudy } from "@/types";

/**
 * Real project content only. Every field here is restricted to what is
 * actually known about the project (see the Phase 3 brief's "known
 * context" for Siraj Din Electronics) — no invented history, metrics,
 * team size, dates, or technology stack. Where something isn't verified
 * (e.g. the technology used to build the actual client project, as
 * opposed to this marketing site), it's stated as unconfirmed rather than
 * guessed. See docs/phase-1-architecture.md, section I.
 *
 * Structured as an array so additional real case studies can be added
 * here later without changing how /work or the detail page render.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "siraj-din-electronics",
    client: "Siraj Din Electronics",
    industry: "Electronics & appliance retail",
    projectType: "Digital commerce & installment management platform",
    summary:
      "A digital catalogue and installment-management system built for an electronics and appliance retailer that sells through both cash and installment purchases.",
    challenge: [
      "Siraj Din Electronics sells electronics and appliances through two purchase paths: cash and installment. Installment purchasing — pricing, calculating plans, and handling customer applications — is a significant part of how the business operates.",
      "The project was designed to bring the product catalogue, cash and installment pricing, and the installment application process into a single digital system, with an administrative side to manage products and review applications.",
    ],
    customerFeatures: [
      "Product catalogue browsing and product detail pages",
      "Cash pricing display",
      "Installment pricing display",
      "Installment calculator with down payment and duration options",
      "Installment application workflow",
      "Submitting customer application information",
    ],
    adminFeatures: [
      "Admin dashboard",
      "Product management",
      "Installment plan management",
      "Application management",
      "Application status tracking",
      "Remarks and status workflow",
      "Inquiry management",
    ],
    installmentExample: {
      cashPrice: 500,
      downPayment: 100,
      durationMonths: 6,
    },
    technologyNote:
      "The specific technology stack used to build the Siraj Din Electronics platform is not yet published here — it will be added once confirmed. Naming a stack we haven't verified for this project isn't something we're willing to do, even for our own case study.",
    outcomes: [
      "Centralized product management in one system",
      "Clear, consistent presentation of cash and installment pricing",
      "A structured, digital installment application process",
      "Better operational visibility into applications and their status",
    ],
    screenshotsAvailable: false,
  },
];
