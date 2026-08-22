/**
 * Shared between the client form and the server route so both enforce
 * the same rules — client-side checks are UX only; the server route is
 * the actual security boundary (see app/api/contact/route.ts).
 */
export const CONTACT_MAX_LENGTHS = {
  name: 200,
  company: 200,
  email: 320,
  phone: 50,
  country: 100,
  businessType: 200,
  projectType: 100,
  problem: 5000,
  existingSystem: 500,
  budget: 100,
  timeline: 100,
  additionalInfo: 5000,
} as const;

export type ContactFieldName = keyof typeof CONTACT_MAX_LENGTHS;

export interface ContactPayload extends Record<ContactFieldName, string> {
  /** Honeypot — real visitors never fill this in. */
  website: string;
  /** Client-side timestamp (ms) of when the form was rendered. */
  renderedAt: number;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIRED_FIELDS: ContactFieldName[] = ["name", "company", "email"];

export function validateContactPayload(input: unknown): {
  valid: boolean;
  errors: Partial<Record<ContactFieldName, string>>;
} {
  const errors: Partial<Record<ContactFieldName, string>> = {};

  if (typeof input !== "object" || input === null) {
    return { valid: false, errors: { name: "Invalid submission." } };
  }
  const data = input as Record<string, unknown>;

  for (const field of Object.keys(CONTACT_MAX_LENGTHS) as ContactFieldName[]) {
    const raw = data[field];
    const value = typeof raw === "string" ? raw.trim() : "";
    const maxLength = CONTACT_MAX_LENGTHS[field];

    if (REQUIRED_FIELDS.includes(field) && value.length === 0) {
      errors[field] = "This field is required.";
      continue;
    }
    if (value.length > maxLength) {
      errors[field] = `Please keep this under ${maxLength} characters.`;
      continue;
    }
    if (field === "email" && value.length > 0 && !EMAIL_PATTERN.test(value)) {
      errors[field] = "Please enter a valid email address.";
    }
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
