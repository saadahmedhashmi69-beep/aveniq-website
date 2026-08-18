import type { Value } from "@/types";

/**
 * Principles that reflect the intended operating philosophy — no
 * fabricated history, awards, or credentials attached. See
 * docs/phase-1-architecture.md, section 30.
 */
export const values: Value[] = [
  {
    title: "Understand before building",
    description: "We map how the business actually works before writing a line of code.",
  },
  {
    title: "Simplicity over unnecessary complexity",
    description: "The right system is the simplest one that actually solves the problem.",
  },
  {
    title: "Evidence over exaggeration",
    description: "We'd rather show what was actually built than describe it in bigger words.",
  },
  {
    title: "Software around the workflow",
    description: "The system should fit how your team works — not the other way around.",
  },
  {
    title: "Performance and accessibility from the start",
    description: "Not retrofitted at the end. Built in from the first line of code.",
  },
  {
    title: "Built for maintainability",
    description: "Software that someone else can understand, extend, and support after us.",
  },
];
