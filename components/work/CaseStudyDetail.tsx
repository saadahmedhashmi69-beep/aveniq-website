import type { ReactNode } from "react";
import type { Project } from "@prisma/client";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { ProjectStatusBadge } from "@/components/work/ProjectStatusBadge";
import { asStringArray } from "@/lib/data/project-helpers";

function NumberedSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
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

export function CaseStudyDetail({ project }: { project: Project }) {
  const challenge = asStringArray(project.challenge);
  const objectives = asStringArray(project.objectives);
  const architecture = asStringArray(project.architecture);
  const keyFeatures = asStringArray(project.keyFeatures);
  const customerExperience = asStringArray(project.customerExperience);
  const adminExperience = asStringArray(project.adminExperience);
  const workflows = asStringArray(project.workflows);
  const integrations = asStringArray(project.integrations);
  const security = asStringArray(project.security);
  const technology = asStringArray(project.technology);
  const deliverables = asStringArray(project.deliverables);
  const outcomes = asStringArray(project.outcomes);
  const isConcept = project.status !== "VERIFIED";

  return (
    <>
      <section className="border-b border-edge">
        <Container className="py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{project.industry}</Badge>
              <ProjectStatusBadge status={project.status} />
            </div>
            <Heading as="h1" size="h1" className="mt-4">
              {project.projectName}
            </Heading>
            <Text size="base" className="mt-2 font-medium text-ink-muted">
              {project.companyName} — {project.type}
            </Text>
            <Text size="lg" muted className="mt-5 max-w-2xl">
              {project.summary}
            </Text>
            {isConcept ? (
              <div className="mt-6 max-w-2xl rounded-lg border border-edge-strong bg-surface p-4">
                <Text size="sm" muted>
                  This is an illustrative concept representing the kind of system Aveniq designs —
                  not a delivered engagement for a real, named client. Company names shown as{" "}
                  <span className="font-mono">[COMPANY NAME]</span> are placeholders.
                </Text>
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <NumberedSection number="01" title="Overview">
            <Text size="base" muted>
              {project.overview}
            </Text>
          </NumberedSection>

          <NumberedSection number="02" title="Business Context">
            <FeatureList items={challenge} />
          </NumberedSection>

          <NumberedSection number="03" title="Objectives">
            <FeatureList items={objectives} />
          </NumberedSection>

          <NumberedSection number="04" title="What We Built">
            <Text size="base" muted>
              {project.solution}
            </Text>
            <div className="mt-5">
              <Text size="sm" className="mb-3 font-semibold text-ink">
                Architecture
              </Text>
              <FeatureList items={architecture} />
            </div>
          </NumberedSection>

          <NumberedSection number="05" title="Key Features">
            <FeatureList items={keyFeatures} />
          </NumberedSection>

          <NumberedSection number="06" title="Customer Experience">
            <FeatureList items={customerExperience} />
          </NumberedSection>

          <NumberedSection number="07" title="Business / Admin Experience">
            <FeatureList items={adminExperience} />
          </NumberedSection>

          <NumberedSection number="08" title="Workflows">
            <FeatureList items={workflows} />
          </NumberedSection>

          <NumberedSection number="09" title="Integrations & Security">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <Text size="sm" className="mb-3 font-semibold text-ink">
                  Integrations
                </Text>
                <FeatureList items={integrations} />
              </div>
              <div>
                <Text size="sm" className="mb-3 font-semibold text-ink">
                  Security
                </Text>
                <FeatureList items={security} />
              </div>
            </div>
          </NumberedSection>

          <NumberedSection number="10" title="Design & Responsive Experience">
            <Text size="base" muted>
              {project.designApproach}
            </Text>
            <Text size="base" muted className="mt-3">
              {project.responsiveExperience}
            </Text>
          </NumberedSection>

          <NumberedSection number="11" title="Technology">
            <FeatureList items={technology} />
          </NumberedSection>

          <NumberedSection number="12" title="Scope, Deliverables & Timeline">
            <Text size="base" muted>
              {project.projectScope}
            </Text>
            <div className="mt-5">
              <Text size="sm" className="mb-3 font-semibold text-ink">
                Deliverables
              </Text>
              <FeatureList items={deliverables} />
            </div>
            <Text size="sm" muted className="mt-5">
              {project.timeline}
            </Text>
          </NumberedSection>

          <NumberedSection number="13" title="Outcome">
            <Text size="base" muted className="mb-5">
              What the system enables:
            </Text>
            <FeatureList items={outcomes} />
          </NumberedSection>

          {!project.galleryAvailable ? (
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
            {project.ctaText}
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
