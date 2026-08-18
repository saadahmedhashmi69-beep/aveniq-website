import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import type { CaseStudy } from "@/types";

function NumberedSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-edge py-10 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent" aria-hidden="true">
          {number}
        </span>
        <Heading as="h2" size="h3">
          {title}
        </Heading>
      </div>
      <div className="mt-5 max-w-3xl">{children}</div>
    </div>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  const remaining = caseStudy.installmentExample
    ? caseStudy.installmentExample.cashPrice - caseStudy.installmentExample.downPayment
    : null;
  const monthly =
    remaining !== null && caseStudy.installmentExample
      ? Math.round(remaining / caseStudy.installmentExample.durationMonths)
      : null;

  return (
    <>
      <section className="border-b border-edge">
        <Container className="py-16 md:py-24">
          <div className="max-w-3xl">
            <Badge>{caseStudy.industry}</Badge>
            <Heading as="h1" size="h1" className="mt-4">
              {caseStudy.client}
            </Heading>
            <Text size="base" className="mt-2 font-medium text-ink-muted">
              {caseStudy.projectType}
            </Text>
            <Text size="lg" muted className="mt-5 max-w-2xl">
              {caseStudy.summary}
            </Text>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <NumberedSection number="01" title="Overview">
            <Text size="base" muted>
              {caseStudy.summary}
            </Text>
          </NumberedSection>

          <NumberedSection number="02" title="Business Context">
            <div className="flex flex-col gap-4">
              {caseStudy.challenge.map((paragraph) => (
                <Text key={paragraph} size="base" muted>
                  {paragraph}
                </Text>
              ))}
            </div>
          </NumberedSection>

          <NumberedSection number="03" title="What We Built">
            <Text size="base" muted>
              The system covers two sides: what customers see when browsing and applying, and
              what the Siraj Din Electronics team uses to manage products and review
              applications day to day.
            </Text>
          </NumberedSection>

          <NumberedSection number="04" title="Customer Experience">
            <FeatureList items={caseStudy.customerFeatures} />
          </NumberedSection>

          <NumberedSection number="05" title="Business / Admin Experience">
            <FeatureList items={caseStudy.adminFeatures} />
          </NumberedSection>

          <NumberedSection number="06" title="Key System Capabilities">
            <Text size="base" muted>
              Customers can choose a down payment and installment duration that fits their
              budget, with the system calculating the remaining plan. Here&apos;s how that works,
              using example figures:
            </Text>

            {caseStudy.installmentExample && remaining !== null && monthly !== null ? (
              <div className="mt-5 rounded-lg border border-edge bg-surface p-6">
                <Text size="xs" className="font-semibold uppercase tracking-wide text-ink-faint">
                  Example — for illustration only, not real transaction data
                </Text>
                <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div>
                    <dt className="text-xs text-ink-faint">Cash price</dt>
                    <dd className="mt-1 font-mono text-lg text-ink">
                      {caseStudy.installmentExample.cashPrice}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-faint">Down payment</dt>
                    <dd className="mt-1 font-mono text-lg text-ink">
                      {caseStudy.installmentExample.downPayment}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-faint">Duration</dt>
                    <dd className="mt-1 font-mono text-lg text-ink">
                      {caseStudy.installmentExample.durationMonths} months
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-faint">Per-period amount</dt>
                    <dd className="mt-1 font-mono text-lg text-accent">~{monthly}</dd>
                  </div>
                </dl>
              </div>
            ) : null}

            <Text size="sm" muted className="mt-6">
              {caseStudy.technologyNote}
            </Text>
          </NumberedSection>

          <NumberedSection number="07" title="Outcome">
            <Text size="base" muted className="mb-5">
              What the system enables:
            </Text>
            <FeatureList items={caseStudy.outcomes} />
          </NumberedSection>

          {!caseStudy.screenshotsAvailable ? (
            <div className="border-t border-edge py-10">
              <div className="flex min-h-[180px] flex-col items-center justify-center rounded-lg border border-dashed border-edge-strong text-center">
                <Text size="sm" muted>
                  Project screenshots to be added
                </Text>
              </div>
            </div>
          ) : null}
        </Container>
      </Section>

      <Section className="border-t border-edge bg-surface/40">
        <Container className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <Heading as="h2" size="h3" className="max-w-lg">
            Have a business workflow that needs a better system?
          </Heading>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button href="/estimator" variant="primary">
              Start a Project
            </Button>
            <Button href="/services" variant="secondary">
              Explore Our Services
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
