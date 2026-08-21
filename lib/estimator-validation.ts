import { estimatorSteps } from "@/lib/data/estimator";

const VALID_STEP_IDS = new Set(estimatorSteps.map((step) => step.id));
const MAX_STRING_LENGTH = 5000;
const MAX_ARRAY_ITEMS = 20;
const MAX_ARRAY_ITEM_LENGTH = 200;

/**
 * Validates and normalizes a submitted estimator payload down to just the
 * known step ids, discarding anything unrecognized (rather than trusting
 * arbitrary client-supplied keys) — shared shape with lib/contact-validation.ts.
 */
export function validateEstimatorPayload(input: unknown): {
  valid: boolean;
  answers: Record<string, string | string[]>;
} {
  if (typeof input !== "object" || input === null) {
    return { valid: false, answers: {} };
  }

  const data = input as Record<string, unknown>;
  const answers: Record<string, string | string[]> = {};

  for (const key of Object.keys(data)) {
    if (!VALID_STEP_IDS.has(key)) continue;
    const value = data[key];

    if (typeof value === "string") {
      if (value.trim().length === 0) continue;
      answers[key] = value.slice(0, MAX_STRING_LENGTH);
      continue;
    }

    if (Array.isArray(value)) {
      const items = value
        .filter((item): item is string => typeof item === "string")
        .slice(0, MAX_ARRAY_ITEMS)
        .map((item) => item.slice(0, MAX_ARRAY_ITEM_LENGTH));
      if (items.length > 0) answers[key] = items;
    }
  }

  return { valid: Object.keys(answers).length > 0, answers };
}
