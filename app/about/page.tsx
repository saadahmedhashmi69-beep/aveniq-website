import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { ValuesGrid } from "@/components/about/ValuesGrid";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Aveniq thinks about software: understand the business before engineering the system.",
};

const questions = [
  "How does the business actually work, day to day?",
  "Where does work get stuck, or take longer than it should?",
  "What information moves between people and teams — and how?",
  "What do your customers actually need from the system?",
  "What do your employees need to do their jobs well?",
  "Which processes are worth automating, and which aren't?",
  "Does an existing product already solve this well?",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We think in systems."
        description="Aveniq isn't only interested in building attractive interfaces. We want to understand how your business works before we engineer anything."
      />

      <Section>
        <Container className="max-w-3xl">
          <Heading as="h2" size="h3">
            Before we build anything, we ask
          </Heading>
          <ul className="mt-6 flex flex-col gap-3">
            {questions.map((question) => (
              <li key={question} className="flex items-start gap-3 text-base text-ink-muted">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {question}
              </li>
            ))}
          </ul>
          <Text size="base" muted className="mt-6">
            The answers shape what we engineer — and sometimes the answer is that you don&apos;t
            need us to build anything at all.
          </Text>
        </Container>
      </Section>

      <Section className="border-t border-edge bg-surface/40">
        <Container className="max-w-3xl">
          <div className="rounded-xl border border-accent/50 bg-surface p-8 shadow-[0_0_0_1px_rgba(0,229,255,0.08),0_24px_48px_-24px_rgba(0,229,255,0.25)] md:p-10">
            <Badge>Our trust principle</Badge>
            <Heading as="h2" size="h3" className="mt-4">
              If an existing product already solves your problem well, we&apos;ll tell you.
            </Heading>
            <Text size="base" muted className="mt-4">
              We&apos;re focused on solving your problem — not on selling custom development you
              don&apos;t need. If a well-built existing tool genuinely fits, that&apos;s the
              honest answer.
            </Text>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-edge">
        <Container>
          <Heading as="h2" size="h3">
            What we value
          </Heading>
          <div className="mt-8">
            <ValuesGrid />
          </div>
        </Container>
      </Section>

      <FinalCta title="Have a business problem worth solving?" secondaryLabel="See Our Work" secondaryHref="/work" />
    </>
  );
}
