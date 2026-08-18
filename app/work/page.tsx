import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { CaseStudyCard } from "@/components/work/CaseStudyCard";
import { caseStudies } from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real projects Aveniq has built — starting with Siraj Din Electronics, a digital commerce and installment-management platform.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Work built around real business problems."
        description="Every project shown here is presented based on what was actually built — not a mockup, not a concept. As more projects are completed, they'll be added here."
      />

      <Section>
        <Container className="flex flex-col gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
          <Text size="sm" muted className="text-center">
            More case studies will be added here as projects are completed.
          </Text>
        </Container>
      </Section>

      <FinalCta title="Have a system in mind? Start a Project." />
    </>
  );
}
