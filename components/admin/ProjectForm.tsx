import type { ReactNode } from "react";
import type { Prisma, Project } from "@prisma/client";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { asStringArray } from "@/lib/data/project-helpers";

const STATUS_OPTIONS = ["VERIFIED", "CONCEPT", "PROTOTYPE", "DEMONSTRATION"] as const;

function linesValue(value: Prisma.JsonValue | undefined): string {
  return value === undefined ? "" : asStringArray(value).join("\n");
}

function Fieldset({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="rounded-lg border border-edge p-6">
      <legend className="px-2 text-sm font-semibold uppercase tracking-wide text-ink-faint">
        {title}
      </legend>
      <div className="mt-2 grid gap-5">{children}</div>
    </fieldset>
  );
}

export function ProjectForm({
  project,
  action,
}: {
  project?: Project;
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action} className="flex flex-col gap-6">
      {project ? <input type="hidden" name="id" value={project.id} /> : null}

      <Fieldset title="Identity">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Slug" htmlFor="slug" required>
            <Input
              id="slug"
              name="slug"
              required
              pattern="[-a-z0-9]+"
              defaultValue={project?.slug}
              placeholder="e.g. concept-example-project"
            />
          </FormField>
          <FormField label="Status" htmlFor="status" required>
            <Select id="status" name="status" defaultValue={project?.status ?? "CONCEPT"} required>
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Company name" htmlFor="companyName" required>
            <Input id="companyName" name="companyName" required defaultValue={project?.companyName} />
          </FormField>
          <FormField label="Project name" htmlFor="projectName" required>
            <Input id="projectName" name="projectName" required defaultValue={project?.projectName} />
          </FormField>
          <FormField label="Category" htmlFor="category" required>
            <Input id="category" name="category" required defaultValue={project?.category} />
          </FormField>
          <FormField label="Industry" htmlFor="industry" required>
            <Input id="industry" name="industry" required defaultValue={project?.industry} />
          </FormField>
          <FormField label="Type" htmlFor="type" required>
            <Input id="type" name="type" required defaultValue={project?.type} />
          </FormField>
        </div>
      </Fieldset>

      <Fieldset title="Summary">
        <FormField label="Summary (one sentence)" htmlFor="summary" required>
          <Textarea id="summary" name="summary" rows={2} required defaultValue={project?.summary} />
        </FormField>
        <FormField label="Overview" htmlFor="overview" required>
          <Textarea id="overview" name="overview" rows={4} required defaultValue={project?.overview} />
        </FormField>
        <FormField label="Solution" htmlFor="solution" required>
          <Textarea id="solution" name="solution" rows={3} required defaultValue={project?.solution} />
        </FormField>
      </Fieldset>

      <Fieldset title="Business context (one item per line)">
        <FormField label="Challenge" htmlFor="challenge">
          <Textarea id="challenge" name="challenge" rows={3} defaultValue={linesValue(project?.challenge)} />
        </FormField>
        <FormField label="Objectives" htmlFor="objectives">
          <Textarea id="objectives" name="objectives" rows={3} defaultValue={linesValue(project?.objectives)} />
        </FormField>
      </Fieldset>

      <Fieldset title="What was built (one item per line)">
        <FormField label="Architecture" htmlFor="architecture">
          <Textarea id="architecture" name="architecture" rows={3} defaultValue={linesValue(project?.architecture)} />
        </FormField>
        <FormField label="Key features" htmlFor="keyFeatures">
          <Textarea id="keyFeatures" name="keyFeatures" rows={3} defaultValue={linesValue(project?.keyFeatures)} />
        </FormField>
        <FormField label="Customer experience" htmlFor="customerExperience">
          <Textarea
            id="customerExperience"
            name="customerExperience"
            rows={3}
            defaultValue={linesValue(project?.customerExperience)}
          />
        </FormField>
        <FormField label="Admin experience" htmlFor="adminExperience">
          <Textarea
            id="adminExperience"
            name="adminExperience"
            rows={3}
            defaultValue={linesValue(project?.adminExperience)}
          />
        </FormField>
        <FormField label="Workflows" htmlFor="workflows">
          <Textarea id="workflows" name="workflows" rows={3} defaultValue={linesValue(project?.workflows)} />
        </FormField>
        <FormField label="Integrations" htmlFor="integrations">
          <Textarea id="integrations" name="integrations" rows={2} defaultValue={linesValue(project?.integrations)} />
        </FormField>
        <FormField label="Security" htmlFor="security">
          <Textarea id="security" name="security" rows={2} defaultValue={linesValue(project?.security)} />
        </FormField>
      </Fieldset>

      <Fieldset title="Design">
        <FormField label="Responsive experience" htmlFor="responsiveExperience" required>
          <Textarea
            id="responsiveExperience"
            name="responsiveExperience"
            rows={2}
            required
            defaultValue={project?.responsiveExperience}
          />
        </FormField>
        <FormField label="Design approach" htmlFor="designApproach" required>
          <Textarea
            id="designApproach"
            name="designApproach"
            rows={2}
            required
            defaultValue={project?.designApproach}
          />
        </FormField>
      </Fieldset>

      <Fieldset title="Outcome & technology (one item per line)">
        <FormField label="Outcomes" htmlFor="outcomes">
          <Textarea id="outcomes" name="outcomes" rows={3} defaultValue={linesValue(project?.outcomes)} />
        </FormField>
        <FormField label="Technology" htmlFor="technology">
          <Textarea id="technology" name="technology" rows={2} defaultValue={linesValue(project?.technology)} />
        </FormField>
      </Fieldset>

      <Fieldset title="Scope">
        <FormField label="Project scope" htmlFor="projectScope" required>
          <Textarea id="projectScope" name="projectScope" rows={2} required defaultValue={project?.projectScope} />
        </FormField>
        <FormField label="Deliverables (one per line)" htmlFor="deliverables">
          <Textarea id="deliverables" name="deliverables" rows={3} defaultValue={linesValue(project?.deliverables)} />
        </FormField>
        <FormField label="Timeline" htmlFor="timeline" required>
          <Input id="timeline" name="timeline" required defaultValue={project?.timeline} />
        </FormField>
      </Fieldset>

      <Fieldset title="Publishing">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Related project slugs (one per line)" htmlFor="relatedProjects">
            <Textarea
              id="relatedProjects"
              name="relatedProjects"
              rows={2}
              defaultValue={linesValue(project?.relatedProjects)}
            />
          </FormField>
          <FormField label="Call-to-action text" htmlFor="ctaText">
            <Input id="ctaText" name="ctaText" defaultValue={project?.ctaText ?? ""} />
          </FormField>
          <FormField label="Sort order" htmlFor="order">
            <Input id="order" name="order" type="number" defaultValue={project?.order ?? 0} />
          </FormField>
        </div>
        <div className="flex flex-wrap gap-6 pt-2">
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" name="published" defaultChecked={project?.published ?? true} />
            Published
          </label>
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" name="featured" defaultChecked={project?.featured ?? false} />
            Featured
          </label>
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" name="galleryAvailable" defaultChecked={project?.galleryAvailable ?? false} />
            Gallery available
          </label>
        </div>
      </Fieldset>

      <div>
        <Button type="submit" variant="primary">
          {project ? "Save changes" : "Create project"}
        </Button>
      </div>
    </form>
  );
}
