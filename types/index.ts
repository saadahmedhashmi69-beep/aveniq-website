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

/**
 * An illustrative-only calculation used to explain a case study's
 * installment concept. Never populated with real customer data.
 */
export interface InstallmentExample {
  cashPrice: number;
  downPayment: number;
  durationMonths: number;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  projectType: string;
  summary: string;
  challenge: string[];
  customerFeatures: string[];
  adminFeatures: string[];
  installmentExample?: InstallmentExample;
  technologyNote: string;
  outcomes: string[];
  screenshotsAvailable: boolean;
}
