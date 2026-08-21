import type { Project } from "@prisma/client";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { ProjectStatusBadge } from "@/components/work/ProjectStatusBadge";
import { asStringArray } from "@/lib/data/project-helpers";

export function CaseStudyCard({ project }: { project: Project }) {
  const keyFeatures = asStringArray(project.keyFeatures);

  return (
    <div className="rounded-xl border border-edge bg-surface p-8 md:p-10">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{project.industry}</Badge>
        <ProjectStatusBadge status={project.status} />
      </div>
      <Heading as="h2" size="h2" className="mt-5">
        {project.projectName}
      </Heading>
      <Text size="base" muted className="mt-2 font-medium text-ink-muted">
        {project.companyName} — {project.type}
      </Text>
      <Text size="base" muted className="mt-4 max-w-2xl">
        {project.summary}
      </Text>

      <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
        {keyFeatures.slice(0, 4).map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-ink-muted">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button href={`/work/${project.slug}`} variant="primary">
          View project
        </Button>
      </div>
    </div>
  );
}
