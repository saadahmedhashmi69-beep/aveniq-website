import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { commonProblems } from "@/lib/data/problems";

export function ProblemFraming() {
  return (
    <Section className="border-b border-edge bg-surface/40">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Badge>Common business problems</Badge>
          <Heading as="h2" className="mt-4">
            If this sounds familiar, you&apos;re not alone.
          </Heading>
          <Text size="lg" muted className="mt-5 max-w-lg">
            Most businesses don&apos;t fail because of bad ideas — they get slowed down by systems
            that don&apos;t fit the way they actually work.
          </Text>
          <Text size="lg" className="mt-5 max-w-lg font-medium">
            We engineer systems around your workflow — not the other way around.
          </Text>
        </Reveal>

        <StaggerGroup as="ul" className="flex flex-col gap-4">
          {commonProblems.map((problem) => (
            <StaggerItem
              key={problem}
              as="li"
              className="flex items-start gap-4 rounded-lg border border-edge bg-surface px-5 py-4"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <Text size="base">{problem}</Text>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
