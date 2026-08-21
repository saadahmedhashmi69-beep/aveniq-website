import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/work/CaseStudyDetail";
import { caseStudies } from "@/lib/data/case-studies";
import { pageMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const caseStudy = caseStudies.find((entry) => entry.slug === slug);

  if (!caseStudy) {
    return { title: "Case Study" };
  }

  return pageMetadata({
    title: caseStudy.client,
    description: caseStudy.summary,
    path: `/work/${caseStudy.slug}`,
  });
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const caseStudy = caseStudies.find((entry) => entry.slug === slug);

  if (!caseStudy) {
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
        name: caseStudy.client,
        item: `${siteUrl}/work/${caseStudy.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CaseStudyDetail caseStudy={caseStudy} />
    </>
  );
}
