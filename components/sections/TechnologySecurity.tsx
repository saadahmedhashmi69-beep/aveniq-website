import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { securityPractices } from "@/lib/data/process";
import { technologies } from "@/lib/data/technology";

export function TechnologySecurity() {
  return (
    <Section className="border-t border-edge bg-surface/40">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Badge>What we build with</Badge>
          <Heading as="h2" size="h3" className="mt-4">
            Modern, verifiable technology.
          </Heading>
          <Text size="base" muted className="mt-4">
            This site is built on a current, high-performance stack — the toolset we work in.
          </Text>
          <ul className="mt-6 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-edge bg-surface px-3 py-1.5 text-sm text-ink-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Badge>Engineering discipline</Badge>
          <Heading as="h2" size="h3" className="mt-4">
            Built with security in mind.
          </Heading>
          <Text size="base" muted className="mt-4">
            Not a certification — a set of practices we build with by default.
          </Text>
          <ul className="mt-6 flex flex-col gap-2">
            {securityPractices.slice(0, 6).map((practice) => (
              <li key={practice} className="flex items-start gap-3 text-sm text-ink-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {practice}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
