import type { EstimatorStep } from "@/types";

/**
 * Data-driven step configuration for the Project Estimator — see
 * docs/phase-1-architecture.md section J. This produces a "Preliminary
 * Project Profile," never a price. Only steps 1 and 3 are required; the
 * rest include a "not sure yet" style option so the flow never blocks
 * someone who doesn't have an answer.
 */
export const estimatorSteps: EstimatorStep[] = [
  {
    id: "projectType",
    question: "What are you building?",
    type: "single",
    required: true,
    options: [
      "Website",
      "E-commerce",
      "Business software",
      "CRM",
      "Dashboard",
      "Customer portal",
      "Automation",
      "Mobile application",
      "Other",
    ],
  },
  {
    id: "businessType",
    question: "What type of business is this for?",
    type: "text",
    placeholder: "e.g. retail, healthcare, logistics, professional services",
  },
  {
    id: "problem",
    question: "What problem are you trying to solve?",
    type: "textarea",
    required: true,
    placeholder: "Tell us what's slowing the business down or what you're trying to build.",
  },
  {
    id: "userScale",
    question: "How many people will use the system?",
    type: "single",
    options: ["Just me", "2–10", "11–50", "51–200", "200+", "Not sure yet"],
  },
  {
    id: "functionality",
    question: "What functionality do you need?",
    type: "multi",
    options: [
      "Authentication",
      "Admin panel",
      "CRM",
      "Payments",
      "Booking",
      "Inventory",
      "Reporting",
      "Notifications",
      "Integrations",
      "Automation",
    ],
  },
  {
    id: "platform",
    question: "What platforms are required?",
    type: "single",
    options: ["Web", "Mobile", "Both", "Not sure yet"],
  },
  {
    id: "timeline",
    question: "Desired timeline?",
    type: "single",
    options: ["Flexible", "1–3 months", "3–6 months", "6+ months", "ASAP"],
  },
  {
    id: "budget",
    question: "Approximate budget?",
    type: "single",
    options: ["Not sure yet", "Under $5,000", "$5,000–$15,000", "$15,000–$40,000", "$40,000+"],
  },
];
