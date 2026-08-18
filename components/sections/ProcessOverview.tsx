import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { processStages } from "@/lib/data/process";

/**
 * A numbered step list rather than another card grid — deliberately
 * different rhythm from Capabilities/CaseStudySpotlight above it, so the
 * homepage doesn't read as a repeating "cards, cards, cards" pattern.
 */
export function ProcessOverview() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Badge>How we work</Badge>
          <Heading as="h2" className="mt-4">
            A clear process, start to finish.
          </Heading>
          <Text size="lg" muted className="mt-5">
            Every project moves through the same six stages, in order — so you always know what
            happens next.
          </Text>
        </div>

        <ol className="mt-10 flex flex-col divide-y divide-edge border-y border-edge">
          {processStages.map((stage) => (
            <li key={stage.number} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8">
              <span className="font-mono text-sm text-accent sm:w-12 sm:shrink-0" aria-hidden="true">
                {stage.number}
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">{stage.title}</h3>
                <Text size="sm" muted className="mt-1 max-w-xl">
                  {stage.summary}
                </Text>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
