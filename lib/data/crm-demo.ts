import type { CrmLead, CrmStage } from "@/types";

/**
 * Entirely fictional records for the Interactive Demo CRM — see
 * docs/phase-1-architecture.md's truth-first rules. Names, companies,
 * and values are invented for illustration only and never represent a
 * real Aveniq client, lead, or revenue figure.
 */
export const crmStages: CrmStage[] = ["New", "Qualified", "Proposal", "Won"];

export const crmLeads: CrmLead[] = [
  {
    id: "lead-1",
    name: "Dana Whitfield",
    company: "Marlow Fitness Co.",
    note: "Wants to replace a spreadsheet-based class booking system.",
    exampleValue: 4200,
    stage: "New",
    tasks: [{ id: "t1", label: "Send discovery call invite", done: false }],
  },
  {
    id: "lead-2",
    name: "Theo Park",
    company: "Brightwell Dental Group",
    note: "Multiple locations, needs a shared patient scheduling view.",
    exampleValue: 6800,
    stage: "New",
    tasks: [{ id: "t2", label: "Confirm number of locations", done: false }],
  },
  {
    id: "lead-3",
    name: "Ines Calder",
    company: "Sable & Finch Supply Co.",
    note: "Manual inventory tracking across two warehouses.",
    exampleValue: 5400,
    stage: "Qualified",
    tasks: [
      { id: "t3", label: "Share example inventory workflow", done: true },
      { id: "t4", label: "Schedule technical walkthrough", done: false },
    ],
  },
  {
    id: "lead-4",
    name: "Marcus Boyle",
    company: "Rundell Logistics",
    note: "Needs a driver dispatch dashboard connected to existing routing tool.",
    exampleValue: 7600,
    stage: "Qualified",
    tasks: [{ id: "t5", label: "Review integration requirements", done: false }],
  },
  {
    id: "lead-5",
    name: "Priya Naik",
    company: "Corvid Home Services",
    note: "Ready to move forward on a customer portal proposal.",
    exampleValue: 9100,
    stage: "Proposal",
    tasks: [
      { id: "t6", label: "Send final proposal", done: true },
      { id: "t7", label: "Follow up on timeline questions", done: false },
    ],
  },
  {
    id: "lead-6",
    name: "Owen Radcliffe",
    company: "Halden & Voss Accounting",
    note: "Signed off on a client-document workflow system.",
    exampleValue: 8300,
    stage: "Won",
    tasks: [{ id: "t8", label: "Kick off discovery", done: true }],
  },
];
