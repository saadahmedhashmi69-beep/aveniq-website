import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { EstimatorFlow } from "@/components/estimator/EstimatorFlow";

export const metadata: Metadata = {
  title: "Project Estimator",
  description:
    "Describe your project in a few steps and get a preliminary project profile — not an exact quote.",
};

export default function EstimatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Estimator"
        title="Describe your project."
        description="A few quick questions to help us understand what you're building. At the end you'll get a Preliminary Project Profile — not an exact price."
      />

      <Section>
        <Container className="max-w-2xl">
          <EstimatorFlow />
        </Container>
      </Section>
    </>
  );
}
