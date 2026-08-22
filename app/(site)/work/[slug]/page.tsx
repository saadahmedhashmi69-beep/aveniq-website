import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/work/CaseStudyDetail";
import { pageMetadata } from "@/lib/metadata";
import { prisma } from "@/lib/prisma";
import { siteUrl } from "@/lib/site";

export async function generateStaticParams() {
  const projects = await prisma.project.findMany({
    where: { published: true },
    select: { slug: true },
  });
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = await prisma.project.findUnique({ where: { slug } });

  if (!project || !project.published) {
    return { title: "Project" };
  }

  return pageMetadata({
    title: project.projectName,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = await prisma.project.findUnique({ where: { slug } });

  if (!project || !project.published) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/work` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.projectName,
        item: `${siteUrl}/work/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CaseStudyDetail project={project} />
    </>
  );
}
