export interface NavItem {
  label: string;
  href: string;
}

export interface Capability {
  title: string;
  description: string;
  featured?: boolean;
}

export interface ProcessStage {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
}

/** One layer in the Interactive Architecture Demo. Purely illustrative. */
export interface ArchitectureLayer {
  id: string;
  title: string;
  description: string;
}

/** Fictional CRM demo record — never real customer data. */
export type CrmStage = "New" | "Qualified" | "Proposal" | "Won";

export interface CrmTask {
  id: string;
  label: string;
  done: boolean;
}

export interface CrmLead {
  id: string;
  name: string;
  company: string;
  note: string;
  exampleValue: number;
  stage: CrmStage;
  tasks: CrmTask[];
}

export interface Value {
  title: string;
  description: string;
}

export type EstimatorStepType = "single" | "multi" | "text" | "textarea";

export interface EstimatorStep {
  id: string;
  question: string;
  type: EstimatorStepType;
  options?: string[];
  required?: boolean;
  placeholder?: string;
}

export type EstimatorAnswer = string | string[];
export type EstimatorAnswers = Record<string, EstimatorAnswer>;
