import type { Metadata } from "next";
import { pageMetadataWithOverride } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { CaseStudyCard } from "@/components/work/CaseStudyCard";
import { prisma } from "@/lib/prisma";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadataWithOverride({
    title: "Work",
    description:
      "Projects Aveniq has built and designed — from a verified installment-commerce platform to illustrative concepts across a range of industries.",
    path: "/work",
  });
}

export default async function WorkPage() {
  const projects = await prisma.project.findMany({
    where: { published: true },
    orderBy: [{ featured: "desc" }, { order: "asc" }],
  });

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Work built around real business problems."
        description="Verified projects are labeled as such. Everything else is an illustrative concept showing the kind of system Aveniq designs — clearly marked, never presented as a delivered client engagement."
      />

      <Section>
        <Container className="flex flex-col gap-8">
          {projects.map((project) => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
        </Container>
      </Section>

      <FinalCta title="Have a system in mind? Start a Project." />
    </>
  );
}
