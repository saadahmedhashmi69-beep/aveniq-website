import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import type { CaseStudy } from "@/types";

/**
 * The rich preview used on /work — the index is designed to hold exactly
 * one entry without looking empty, and to scale cleanly once real
 * additional case studies exist (see lib/data/case-studies.ts).
 */
export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="rounded-xl border border-edge bg-surface p-8 md:p-10">
      <Badge>{caseStudy.industry}</Badge>
      <Heading as="h2" size="h2" className="mt-5">
        {caseStudy.client}
      </Heading>
      <Text size="base" muted className="mt-2 font-medium text-ink-muted">
        {caseStudy.projectType}
      </Text>
      <Text size="base" muted className="mt-4 max-w-2xl">
        {caseStudy.summary}
      </Text>

      <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
        {caseStudy.customerFeatures.slice(0, 4).map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-ink-muted">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button href={`/work/${caseStudy.slug}`} variant="primary">
          View case study
        </Button>
      </div>
    </div>
  );
}
