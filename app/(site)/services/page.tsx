import type { Metadata } from "next";
import { pageMetadataWithOverride } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { ServiceCategories } from "@/components/services/ServiceCategories";
import { prisma } from "@/lib/prisma";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadataWithOverride({
    title: "Services",
    description:
      "What Aveniq builds: custom business software, websites, CRMs, dashboards, automation, and applications — engineered around how your business actually works.",
    path: "/services",
  });
}

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    where: { published: true },
    orderBy: { order: "asc" },
  });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Software that fits the way your business operates."
        description="Your workflow doesn't have to fit someone else's software. We design the system around your process, your users, and your operational needs — not a fixed feature list."
      />

      <Section>
        <Container>
          <ServiceCategories services={services} />
        </Container>
      </Section>

      <Section className="border-t border-edge bg-surface/40">
        <Container className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Heading as="h2" size="h3">
              What makes the work custom
            </Heading>
            <Text size="base" muted className="mt-4">
              Every project starts with your actual workflow, not a template. That means
              understanding your users, your business rules, how your systems need to connect,
              and the architecture that supports all of it — before a single interface is
              designed.
            </Text>
            <Text size="base" muted className="mt-4">
              See what that looks like in practice: <TextLink href="/work">our work</TextLink>, or
              read about <TextLink href="/process">how we work</TextLink>.
            </Text>
          </div>
          <div>
            <Heading as="h2" size="h3">
              See it in a real project
            </Heading>
            <Text size="base" muted className="mt-4">
              Siraj Din Electronics needed a single system for its product catalogue, cash and
              installment pricing, and installment applications — with an admin side to manage it
              all.
            </Text>
            <TextLink href="/work/siraj-din-electronics" className="mt-4 inline-block">
              View the case study →
            </TextLink>
          </div>
        </Container>
      </Section>

      <FinalCta title="Have a system in mind?" secondaryLabel="View Our Work" secondaryHref="/work" />
    </>
  );
}
