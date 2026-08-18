import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/data/case-studies";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/process",
    "/about",
    "/contact",
    "/estimator",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((caseStudy) => ({
    url: `${siteUrl}/work/${caseStudy.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
