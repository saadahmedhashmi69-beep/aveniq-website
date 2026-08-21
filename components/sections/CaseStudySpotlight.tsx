import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { asStringArray } from "@/lib/data/project-helpers";
import { prisma } from "@/lib/prisma";

/**
 * Combines the "proof / trust" framing with the Siraj Din Electronics
 * spotlight into one section — see docs/phase-1-architecture.md's
 * truth-first rules. No screenshots are shown here (none are available
 * yet); the section relies on real project description, not imagery.
 */
export async function CaseStudySpotlight() {
  const project = await prisma.project.findFirst({
    where: { status: "VERIFIED", published: true },
    orderBy: { order: "asc" },
  });

  if (!project) return null;

  const customerExperience = asStringArray(project.customerExperience);
  const adminExperience = asStringArray(project.adminExperience);
  const outcomes = asStringArray(project.outcomes);

  return (
    <Section className="border-b border-edge bg-surface/40">
      <Container>
        <div className="max-w-2xl">
          <Badge>Real work</Badge>
          <Heading as="h2" className="mt-4">
            Proof, not promises.
          </Heading>
          <Text size="lg" muted className="mt-5">
            We&apos;d rather show you something we&apos;ve actually built than describe it in bigger
            words. Here&apos;s a system currently in use.
          </Text>
        </div>

        <div className="mt-10 rounded-xl border border-edge bg-surface p-8 md:p-10">
          <Badge>{project.industry}</Badge>
          <Heading as="h3" size="h2" className="mt-5">
            {project.companyName}
          </Heading>
          <Text size="base" muted className="mt-2 font-medium text-ink-muted">
            {project.type}
          </Text>
          <Text size="base" muted className="mt-4 max-w-2xl">
            {project.summary}
          </Text>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <Text size="sm" className="font-semibold uppercase tracking-wide text-ink-faint">
                For customers
              </Text>
              <ul className="mt-3 flex flex-col gap-2">
                {customerExperience.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Text size="sm" className="font-semibold uppercase tracking-wide text-ink-faint">
                Behind the scenes
              </Text>
              <ul className="mt-3 flex flex-col gap-2">
                {adminExperience.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-edge pt-6">
            <Text size="sm" className="font-semibold uppercase tracking-wide text-ink-faint">
              What it enables
            </Text>
            <ul className="mt-3 flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-sm text-ink-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden="true" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
