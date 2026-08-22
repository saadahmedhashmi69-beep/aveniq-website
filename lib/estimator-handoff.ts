import type { EstimatorAnswers } from "@/types";

/**
 * Bridges the Estimator's answers into the Contact form so a visitor who
 * completes the estimator doesn't have to re-type everything — read by
 * ContactForm.tsx, written by EstimatorFlow.tsx. sessionStorage (not
 * localStorage) so it doesn't linger past the browser session, and is
 * cleared immediately after the Contact form reads it.
 */
export const ESTIMATOR_HANDOFF_KEY = "aveniq:estimator-handoff";

export function buildContactHandoff(answers: EstimatorAnswers): Record<string, string> {
  const asText = (value: EstimatorAnswers[string] | undefined) =>
    Array.isArray(value) ? value.join(", ") : (value ?? "");

  const extras: string[] = [];
  if (answers.userScale) extras.push(`Users: ${asText(answers.userScale)}`);
  if (answers.platform) extras.push(`Platform: ${asText(answers.platform)}`);
  if (answers.functionality) extras.push(`Functionality needed: ${asText(answers.functionality)}`);

  return {
    projectType: asText(answers.projectType),
    businessType: asText(answers.businessType),
    problem: asText(answers.problem),
    budget: asText(answers.budget),
    timeline: asText(answers.timeline),
    additionalInfo: extras.length > 0 ? `From the project estimator:\n${extras.join("\n")}` : "",
  };
}
