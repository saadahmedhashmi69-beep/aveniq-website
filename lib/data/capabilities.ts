import type { Capability } from "@/types";

/**
 * "Business Software & Custom Systems" is marked featured — it carries
 * more visual weight in the Capabilities section so the grid doesn't read
 * as six identical service cards. See docs/phase-1-architecture.md,
 * section 20 direction: "We don't just build pages. We build systems."
 */
export const capabilities: Capability[] = [
  {
    title: "Business Software & Custom Systems",
    description:
      "The core of what we do. We design and build the internal software that runs your operations — from admin panels to workflow tools — engineered around how your business actually works, not a generic template.",
    featured: true,
  },
  {
    title: "Websites",
    description:
      "High-performance business and e-commerce websites built for speed, clarity, and conversion.",
  },
  {
    title: "CRMs",
    description:
      "Lead, customer, and sales management systems tailored to your process, not a rigid out-of-the-box tool.",
  },
  {
    title: "Dashboards",
    description:
      "Operational and business-intelligence interfaces that turn your data into something your team can actually use.",
  },
  {
    title: "Automation",
    description:
      "Workflow automation and integrations that remove repetitive manual work from your team's day.",
  },
  {
    title: "Applications",
    description:
      "Custom web and mobile applications built around a specific business need, not a generic feature set.",
  },
];
