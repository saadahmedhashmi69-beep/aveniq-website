import { Capabilities } from "@/components/sections/Capabilities";
import { CaseStudySpotlight } from "@/components/sections/CaseStudySpotlight";
import { FinalCta } from "@/components/sections/FinalCta";
import { ProblemFraming } from "@/components/sections/ProblemFraming";
import { ProcessOverview } from "@/components/sections/ProcessOverview";
import { TechnologySecurity } from "@/components/sections/TechnologySecurity";
import { Hero } from "@/components/hero/Hero";
import { ArchitectureDemo } from "@/components/demos/architecture/ArchitectureDemo";
import { CrmDemo } from "@/components/demos/crm/CrmDemo";

export default function Home() {
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
      <FinalCta title="Have a business problem worth engineering a system for?" />
    </>
  );
}
