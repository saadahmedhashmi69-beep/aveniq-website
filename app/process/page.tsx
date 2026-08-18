import { pageMetadata } from "@/lib/metadata";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { ProcessSteps } from "@/components/process/ProcessSteps";
import { securityPractices } from "@/lib/data/process";

export const metadata = pageMetadata({
  title: "Process",
  description:
    "How working with Aveniq actually works — a six-stage process from discovery to launch, and the engineering practices behind it.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="What working with Aveniq actually looks like."
        description="A clear, six-stage process — start to finish. Scope, timeline, and cost depend on the actual project; nothing here is a fixed guarantee."
      />

      <Section>
        <Container>
          <ProcessSteps />
        </Container>
      </Section>

      <Section className="border-t border-edge bg-surface/40">
        <Container className="max-w-3xl">
          <Badge>Why we start with discovery</Badge>
          <Heading as="h2" className="mt-4">
            Discovery exists to stop you from building the wrong thing.
          </Heading>
          <Text size="base" muted className="mt-5">
            It&apos;s easy to start writing code before the actual problem is fully understood — and
            expensive to find that out halfway through a project. Discovery is where we map your
            workflow, your users, and your constraints, so the system we design actually fits
            before a single screen is built.
          </Text>
        </Container>
      </Section>

      <Section className="border-t border-edge">
        <Container>
          <div className="max-w-2xl">
            <Badge>Engineering discipline</Badge>
            <Heading as="h2" className="mt-4">
              Built with security in mind, not as an afterthought.
            </Heading>
            <Text size="base" muted className="mt-5">
              Not a certification — a set of practices we build with by default, on every
              project.
            </Text>
          </div>
          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {securityPractices.map((practice) => (
              <li key={practice} className="flex items-start gap-3 text-sm text-ink-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {practice}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta title="Ready to start with discovery?" />
    </>
  );
}
