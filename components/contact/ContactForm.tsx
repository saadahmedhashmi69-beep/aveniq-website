"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Heading } from "@/components/ui/Heading";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Text } from "@/components/ui/Text";
import { Textarea } from "@/components/ui/Textarea";
import { estimatorSteps } from "@/lib/data/estimator";
import { CONTACT_MAX_LENGTHS, validateContactPayload, type ContactFieldName } from "@/lib/contact-validation";
import { ESTIMATOR_HANDOFF_KEY } from "@/lib/estimator-handoff";

const projectTypeOptions = estimatorSteps.find((step) => step.id === "projectType")?.options ?? [];
const budgetOptions = estimatorSteps.find((step) => step.id === "budget")?.options ?? [];
const timelineOptions = estimatorSteps.find((step) => step.id === "timeline")?.options ?? [];

const initialValues: Record<ContactFieldName, string> = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  businessType: "",
  projectType: "",
  problem: "",
  existingSystem: "",
  budget: "",
  timeline: "",
  additionalInfo: "",
};

const fieldLabels: Record<ContactFieldName, string> = {
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone / WhatsApp",
  country: "Country",
  businessType: "Business type",
  projectType: "What do you want to build?",
  problem: "Current problem",
  existingSystem: "Existing system",
  budget: "Approximate budget",
  timeline: "Desired timeline",
  additionalInfo: "Additional information",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<ContactFieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const renderedAt = useRef(0);
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    renderedAt.current = Date.now();

    // One-time hydration of state from a browser-only API (sessionStorage)
    // that doesn't exist during server rendering — there's no way to do
    // this during render itself, so this is the sanctioned exception to
    // the "no setState in effects" rule.
    const raw = window.sessionStorage.getItem(ESTIMATOR_HANDOFF_KEY);
    if (!raw) return;
    try {
      const handoff = JSON.parse(raw) as Partial<Record<ContactFieldName, string>>;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValues((prev) => ({ ...prev, ...handoff }));
    } catch {
      // ignore malformed handoff data
    } finally {
      window.sessionStorage.removeItem(ESTIMATOR_HANDOFF_KEY);
    }
  }, []);

  function update<K extends ContactFieldName>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const { valid, errors: fieldErrors } = validateContactPayload(values);
    setErrors(fieldErrors);
    if (!valid) return;

    setStatus("submitting");
    setFormError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website: honeypotRef.current?.value ?? "",
          renderedAt: renderedAt.current,
        }),
      });

      const result = (await response.json()) as {
        ok: boolean;
        error?: string;
        errors?: Partial<Record<ContactFieldName, string>>;
      };

      if (result.ok) {
        setStatus("success");
        return;
      }

      if (result.errors) setErrors(result.errors);
      setFormError(result.error ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setFormError("Something went wrong. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-edge bg-surface p-8 md:p-10" role="status">
        <Badge>Inquiry sent</Badge>
        <Heading as="h2" size="h3" className="mt-4">
          Thanks — we&apos;ve got it.
        </Heading>
        <Text size="base" muted className="mt-4 max-w-xl">
          Your inquiry has been sent. We&apos;ll get back to you at the email address you
          provided.
        </Text>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">
      <Text size="sm" muted>
        Tell us about your project — the more context you share, the more useful our first
        response can be.
      </Text>

      {/* Honeypot — hidden from real visitors; bots that autofill it get silently dropped. */}
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      {formError ? (
        <p role="alert" className="rounded-md border border-error/40 bg-error/10 px-4 py-3 text-sm text-error">
          {formError}
        </p>
      ) : null}

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
          Your details
        </h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <FormField label={fieldLabels.name} htmlFor="name" required error={errors.name}>
            <Input
              id="name"
              name="name"
              type="text"
              required
              maxLength={CONTACT_MAX_LENGTHS.name}
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={Boolean(errors.name)}
            />
          </FormField>
          <FormField label={fieldLabels.company} htmlFor="company" required error={errors.company}>
            <Input
              id="company"
              name="company"
              type="text"
              required
              maxLength={CONTACT_MAX_LENGTHS.company}
              value={values.company}
              onChange={(e) => update("company", e.target.value)}
              aria-invalid={Boolean(errors.company)}
            />
          </FormField>
          <FormField label={fieldLabels.email} htmlFor="email" required error={errors.email}>
            <Input
              id="email"
              name="email"
              type="email"
              required
              maxLength={CONTACT_MAX_LENGTHS.email}
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
            />
          </FormField>
          <FormField label={fieldLabels.phone} htmlFor="phone">
            <Input
              id="phone"
              name="phone"
              type="tel"
              maxLength={CONTACT_MAX_LENGTHS.phone}
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </FormField>
          <FormField label={fieldLabels.country} htmlFor="country">
            <Input
              id="country"
              name="country"
              type="text"
              maxLength={CONTACT_MAX_LENGTHS.country}
              value={values.country}
              onChange={(e) => update("country", e.target.value)}
            />
          </FormField>
          <FormField label={fieldLabels.businessType} htmlFor="businessType">
            <Input
              id="businessType"
              name="businessType"
              type="text"
              maxLength={CONTACT_MAX_LENGTHS.businessType}
              value={values.businessType}
              onChange={(e) => update("businessType", e.target.value)}
            />
          </FormField>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
          Your project
        </h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <FormField label={fieldLabels.projectType} htmlFor="projectType">
            <Select
              id="projectType"
              name="projectType"
              value={values.projectType}
              onChange={(e) => update("projectType", e.target.value)}
            >
              <option value="">Select an option</option>
              {projectTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label={fieldLabels.existingSystem} htmlFor="existingSystem">
            <Input
              id="existingSystem"
              name="existingSystem"
              type="text"
              maxLength={CONTACT_MAX_LENGTHS.existingSystem}
              placeholder="e.g. spreadsheets, a legacy tool, nothing yet"
              value={values.existingSystem}
              onChange={(e) => update("existingSystem", e.target.value)}
            />
          </FormField>
          <FormField label={fieldLabels.budget} htmlFor="budget">
            <Select
              id="budget"
              name="budget"
              value={values.budget}
              onChange={(e) => update("budget", e.target.value)}
            >
              <option value="">Select a range</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label={fieldLabels.timeline} htmlFor="timeline">
            <Select
              id="timeline"
              name="timeline"
              value={values.timeline}
              onChange={(e) => update("timeline", e.target.value)}
            >
              <option value="">Select a timeline</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <FormField label={fieldLabels.problem} htmlFor="problem" error={errors.problem}>
            <Textarea
              id="problem"
              name="problem"
              maxLength={CONTACT_MAX_LENGTHS.problem}
              value={values.problem}
              onChange={(e) => update("problem", e.target.value)}
            />
          </FormField>
          <FormField label={fieldLabels.additionalInfo} htmlFor="additionalInfo" error={errors.additionalInfo}>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              maxLength={CONTACT_MAX_LENGTHS.additionalInfo}
              value={values.additionalInfo}
              onChange={(e) => update("additionalInfo", e.target.value)}
            />
          </FormField>
        </div>
      </div>

      <div>
        <Button type="submit" variant="primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send inquiry"}
        </Button>
      </div>
    </form>
  );
}
