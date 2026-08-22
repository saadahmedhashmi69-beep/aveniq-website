import type { ProcessStage } from "@/types";

/**
 * The six-stage process. No timelines are stated anywhere in this data —
 * see docs/phase-1-architecture.md's truth-first rules: Aveniq doesn't
 * have a confirmed standard delivery timeline to publish.
 */
export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Discover",
    summary: "Understand the business, the users, and the actual problem before proposing a solution.",
    deliverables: [
      "Business requirements",
      "User and stakeholder needs",
      "Existing workflow and tools",
      "Constraints and dependencies",
    ],
  },
  {
    number: "02",
    title: "Plan",
    summary: "Define what's being built, how, and in what order.",
    deliverables: ["Scope definition", "System architecture", "Technical approach", "Project milestones"],
  },
  {
    number: "03",
    title: "Design",
    summary: "Design the experience and interface around real workflows, not decoration.",
    deliverables: ["UX structure", "Interface design", "Prototypes", "Responsive behavior"],
  },
  {
    number: "04",
    title: "Build",
    summary: "Develop the actual system — frontend, backend, and the logic that makes it work.",
    deliverables: ["Frontend implementation", "Backend and business logic", "Integrations", "Data structure"],
  },
  {
    number: "05",
    title: "Test",
    summary: "Validate that the system actually works before it reaches real users.",
    deliverables: [
      "Functional QA",
      "Responsive and cross-device testing",
      "Accessibility checks",
      "Security-minded review",
    ],
  },
  {
    number: "06",
    title: "Launch",
    summary: "Deploy the system and hand it over in a state your team can actually run with.",
    deliverables: ["Deployment", "Handover", "Documentation", "Ongoing support where applicable"],
  },
];

/**
 * Engineering-discipline practices, not certifications. Framed as what
 * Aveniq builds with, never as a compliance claim — see
 * docs/phase-1-architecture.md, section K (Security positioning).
 */
export const securityPractices: string[] = [
  "Secure authentication where the system requires it",
  "Role-based authorization and access control",
  "Input validation on every user-facing entry point",
  "Secrets and credentials kept out of source code",
  "HTTPS by default",
  "Dependency updates as part of normal maintenance",
  "Separated development, staging, and production environments",
  "Deployment practices built for reliability, not just speed",
];
