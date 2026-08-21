import { Capabilities } from "@/components/sections/Capabilities";
import { CaseStudySpotlight } from "@/components/sections/CaseStudySpotlight";
import { FinalCta } from "@/components/sections/FinalCta";
import { ProblemFraming } from "@/components/sections/ProblemFraming";
import { ProcessOverview } from "@/components/sections/ProcessOverview";
import { TechnologySecurity } from "@/components/sections/TechnologySecurity";
import { Hero } from "@/components/hero/Hero";
import { ArchitectureDemo } from "@/components/demos/architecture/ArchitectureDemo";
import { CrmDemo } from "@/components/demos/crm/CrmDemo";
import { getHomepageFinalCta } from "@/lib/content";

export default async function Home() {
  const finalCta = await getHomepageFinalCta();

  return (
    <>
      <Hero />
      <ProblemFraming />
      <Capabilities />
      <CaseStudySpotlight />
      <ProcessOverview />
      <TechnologySecurity />
      <ArchitectureDemo />
      <CrmDemo />
      <FinalCta
        title={finalCta.title}
        secondaryLabel={finalCta.secondaryLabel}
        secondaryHref={finalCta.secondaryHref}
      />
    </>
  );
}
