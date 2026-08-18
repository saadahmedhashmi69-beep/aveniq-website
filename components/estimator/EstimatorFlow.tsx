"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Input } from "@/components/ui/Input";
import { SelectableCard } from "@/components/ui/SelectableCard";
import { Text } from "@/components/ui/Text";
import { Textarea } from "@/components/ui/Textarea";
import { estimatorSteps } from "@/lib/data/estimator";
import type { EstimatorAnswers } from "@/types";

function EstimatorProfile({
  answers,
  onReset,
}: {
  answers: EstimatorAnswers;
  onReset: () => void;
}) {
  return (
    <div className="rounded-xl border border-edge bg-surface p-8 md:p-10">
      <Badge>Preliminary Project Profile</Badge>
      <Heading as="h2" size="h2" className="mt-4">
        Here&apos;s what you&apos;ve told us.
      </Heading>

      <dl className="mt-6 flex flex-col gap-4 border-t border-edge pt-6">
        {estimatorSteps.map((step) => {
          const value = answers[step.id];
          const display = Array.isArray(value) ? value.join(", ") : value;
          if (!display) return null;
          return (
            <div key={step.id} className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                {step.question}
              </dt>
              <dd className="text-sm text-ink sm:col-span-2">{display}</dd>
            </div>
          );
        })}
      </dl>

      <Text size="sm" muted className="mt-8 border-t border-edge pt-6">
        This profile is for planning purposes. Final scope, technical requirements, timeline, and
        pricing require a project assessment.
      </Text>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/contact" variant="primary">
          Continue to Contact
        </Button>
        <Button type="button" variant="ghost" onClick={onReset}>
          Start over
        </Button>
      </div>
    </div>
  );
}

export function EstimatorFlow() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<EstimatorAnswers>({});
  const [isComplete, setIsComplete] = useState(false);

  const step = estimatorSteps[stepIndex];
  const totalSteps = estimatorSteps.length;
  const isLastStep = stepIndex === totalSteps - 1;
  const currentValue = answers[step.id];

  function setAnswer(value: EstimatorAnswers[string]) {
    setAnswers((prev) => ({ ...prev, [step.id]: value }));
  }

  function toggleMultiOption(option: string) {
    const current = Array.isArray(answers[step.id]) ? (answers[step.id] as string[]) : [];
    const next = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];
    setAnswer(next);
  }

  const hasAnswer =
    step.type === "multi"
      ? Array.isArray(currentValue) && currentValue.length > 0
      : typeof currentValue === "string" && currentValue.trim().length > 0;
  const canAdvance = !step.required || hasAnswer;

  function goNext() {
    if (!canAdvance) return;
    if (isLastStep) {
      setIsComplete(true);
      return;
    }
    setStepIndex((i) => i + 1);
  }

  function goBack() {
    setStepIndex((i) => Math.max(0, i - 1));
  }

  function reset() {
    setAnswers({});
    setStepIndex(0);
    setIsComplete(false);
  }

  if (isComplete) {
    return <EstimatorProfile answers={answers} onReset={reset} />;
  }

  return (
    <div className="rounded-xl border border-edge bg-surface p-8 md:p-10">
      <Text size="sm" muted>
        Step {stepIndex + 1} of {totalSteps}
      </Text>
      <Heading as="h2" size="h3" className="mt-3">
        {step.question}
        {step.required ? (
          <span className="text-accent" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </Heading>

      <div className="mt-8">
        {step.type === "single" || step.type === "multi" ? (
          <div className="grid gap-3 sm:grid-cols-2" role="group" aria-label={step.question}>
            {step.options?.map((option) => {
              const selected =
                step.type === "multi"
                  ? Array.isArray(currentValue) && currentValue.includes(option)
                  : currentValue === option;
              return (
                <SelectableCard
                  key={option}
                  label={option}
                  selected={selected}
                  onClick={() =>
                    step.type === "multi" ? toggleMultiOption(option) : setAnswer(option)
                  }
                />
              );
            })}
          </div>
        ) : step.type === "textarea" ? (
          <Textarea
            value={(currentValue as string) ?? ""}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder={step.placeholder}
            rows={5}
            aria-label={step.question}
          />
        ) : (
          <Input
            type="text"
            value={(currentValue as string) ?? ""}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder={step.placeholder}
            aria-label={step.question}
          />
        )}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <Button type="button" variant="ghost" onClick={goBack} disabled={stepIndex === 0}>
          Back
        </Button>
        <Button type="button" variant="primary" onClick={goNext} disabled={!canAdvance}>
          {isLastStep ? "See my profile" : "Next"}
        </Button>
      </div>
    </div>
  );
}
