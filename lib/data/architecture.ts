import type { ArchitectureLayer } from "@/types";

/**
 * The six layers shown in the Interactive Architecture Demo, in flow
 * order. Descriptions are deliberately written for a non-technical
 * business owner, not as an engineering reference — see
 * docs/phase-1-architecture.md section H.
 */
export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Customer-facing interface and application experience.",
  },
  {
    id: "api",
    title: "API",
    description: "Communication layer between the interface and application logic.",
  },
  {
    id: "auth",
    title: "Authentication",
    description: "Identity and access control.",
  },
  {
    id: "logic",
    title: "Business Logic",
    description: "Rules and workflows that make the application work.",
  },
  {
    id: "database",
    title: "Database",
    description: "Persistent business information.",
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Connections to external services.",
  },
];
