import type { ServiceCategory } from "@/types";

/**
 * Mirrors the homepage capability hierarchy (lib/data/capabilities.ts) —
 * Business Software & Custom Systems leads as the featured category, kept
 * consistent with the homepage so the site reads as one system. Each
 * category follows problem → what we build → why it matters, per the
 * Phase 4 brief, rather than generic marketing copy.
 */
export const serviceCategories: ServiceCategory[] = [
  {
    title: "Business Software & Custom Systems",
    problem:
      "Off-the-shelf software is built for an average business — not yours. Sooner or later, your team ends up working around the tool instead of the tool working for them.",
    whatWeBuild: [
      "Admin panels and internal tools",
      "Workflow and approval systems",
      "Business rules modeled around your actual process",
      "Systems that connect to how your team already operates",
    ],
    whyItMatters:
      "This is the core of what we do. When the software fits the business instead of the other way around, your team stops managing the tool and starts using it.",
    featured: true,
  },
  {
    title: "Websites & E-commerce",
    problem:
      "A template site can look fine and still fail to represent the business, convert visitors, or hold up as the business grows.",
    whatWeBuild: [
      "Business and marketing websites",
      "E-commerce and product catalogues",
      "Customer-facing platforms",
      "Content structured for speed and search",
    ],
    whyItMatters:
      "A website built with the same engineering discipline as your internal systems performs better and lasts longer than a generic template.",
  },
  {
    title: "CRM & Customer Systems",
    problem:
      "Generic CRMs force your sales process into their structure — fields you don't need, stages that don't match how you actually sell.",
    whatWeBuild: [
      "Lead and contact management",
      "Sales pipeline and stage tracking",
      "Customer records and history",
      "Follow-up and task workflows",
    ],
    whyItMatters:
      "A CRM shaped around your actual sales process gets used consistently — one built around someone else's process usually doesn't.",
  },
  {
    title: "Dashboards & Admin Systems",
    problem:
      "Data spread across spreadsheets and disconnected tools makes it hard to see what's actually happening in the business.",
    whatWeBuild: [
      "Operational dashboards",
      "Management and reporting panels",
      "Role-based access to information",
      "Interfaces built for daily use, not demos",
    ],
    whyItMatters:
      "When your team can see accurate, current information in one place, decisions get faster and more confident.",
  },
  {
    title: "Automation & Integrations",
    problem:
      "Manually moving information between tools wastes time and introduces errors that compound over time.",
    whatWeBuild: [
      "Connections between existing systems",
      "Automated notifications and handoffs",
      "Removal of repetitive manual steps",
      "API integrations with the tools you already use",
    ],
    whyItMatters:
      "Automation only helps when it's built around your actual workflow — this removes work your team shouldn't be doing by hand.",
  },
  {
    title: "Applications",
    problem:
      "A specific business need — a customer portal, an internal tool, a mobile companion app — rarely fits inside an off-the-shelf product.",
    whatWeBuild: [
      "Customer-facing web applications",
      "Internal, employee-facing tools",
      "Applications built around one specific workflow",
      "Mobile application projects where appropriate",
    ],
    whyItMatters:
      "Purpose-built applications solve the actual problem directly, instead of asking your business to adapt to generic software.",
  },
];
