"use client";

import { useState, type FormEvent } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Heading } from "@/components/ui/Heading";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Text } from "@/components/ui/Text";
import { Textarea } from "@/components/ui/Textarea";
import { estimatorSteps } from "@/lib/data/estimator";

const projectTypeOptions = estimatorSteps.find((step) => step.id === "projectType")?.options ?? [];
const budgetOptions = estimatorSteps.find((step) => step.id === "budget")?.options ?? [];
const timelineOptions = estimatorSteps.find((step) => step.id === "timeline")?.options ?? [];

const initialValues = {
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

type ContactValues = typeof initialValues;

const fieldLabels: Record<keyof ContactValues, string> = {
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
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof ContactValues>(key: K, value: ContactValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof ContactValues, string>> = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.company.trim()) nextErrors.company = "Please enter your company.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    const summaryFields = (Object.keys(values) as (keyof ContactValues)[]).filter(
      (key) => values[key].trim().length > 0,
    );

    return (
      <div className="rounded-xl border border-edge bg-surface p-8 md:p-10" role="status">
        <Badge>Inquiry prepared</Badge>
        <Heading as="h2" size="h3" className="mt-4">
          Thanks for sharing this.
        </Heading>
        <Text size="base" muted className="mt-4 max-w-xl">
          This form isn&apos;t connected to a live inbox yet, so nothing has been sent
          automatically — submission handling is part of a later engineering phase. Here&apos;s a
          summary of what you shared, so you can save or copy it in the meantime.
        </Text>

        <dl className="mt-6 flex flex-col gap-3 border-t border-edge pt-6">
          {summaryFields.map((key) => (
            <div key={key} className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                {fieldLabels[key]}
              </dt>
              <dd className="text-sm text-ink sm:col-span-2">{values[key]}</dd>
            </div>
          ))}
        </dl>

        <Button
          type="button"
          variant="ghost"
          className="mt-6"
          onClick={() => {
            setValues(initialValues);
            setSubmitted(false);
          }}
        >
          Edit inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">
      <Text size="sm" muted>
        This is a project inquiry form. It isn&apos;t connected to a live inbox yet — submission
        handling is part of a later engineering phase.
      </Text>

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
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </FormField>
          <FormField label={fieldLabels.country} htmlFor="country">
            <Input
              id="country"
              name="country"
              type="text"
              value={values.country}
              onChange={(e) => update("country", e.target.value)}
            />
          </FormField>
          <FormField label={fieldLabels.businessType} htmlFor="businessType">
            <Input
              id="businessType"
              name="businessType"
              type="text"
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
          <FormField label={fieldLabels.problem} htmlFor="problem">
            <Textarea
              id="problem"
              name="problem"
              value={values.problem}
              onChange={(e) => update("problem", e.target.value)}
            />
          </FormField>
          <FormField label={fieldLabels.additionalInfo} htmlFor="additionalInfo">
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              value={values.additionalInfo}
              onChange={(e) => update("additionalInfo", e.target.value)}
            />
          </FormField>
        </div>
      </div>

      <div>
        <Button type="submit" variant="primary">
          Send inquiry
        </Button>
      </div>
    </form>
  );
}
