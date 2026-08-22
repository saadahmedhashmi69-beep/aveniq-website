import type { Service } from "@prisma/client";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { asStringArray } from "@/lib/data/project-helpers";

export function ServiceForm({
  service,
  action,
}: {
  service?: Service;
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action} className="flex flex-col gap-5">
      {service ? <input type="hidden" name="id" value={service.id} /> : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Slug" htmlFor="slug" required>
          <Input id="slug" name="slug" required pattern="[a-z0-9\-]+" defaultValue={service?.slug} />
        </FormField>
        <FormField label="Title" htmlFor="title" required>
          <Input id="title" name="title" required defaultValue={service?.title} />
        </FormField>
        <FormField label="Category" htmlFor="category" required>
          <Input id="category" name="category" required defaultValue={service?.category} />
        </FormField>
        <FormField label="Sort order" htmlFor="order">
          <Input id="order" name="order" type="number" defaultValue={service?.order ?? 0} />
        </FormField>
      </div>

      <FormField label="The problem" htmlFor="problem" required>
        <Textarea id="problem" name="problem" rows={3} required defaultValue={service?.problem} />
      </FormField>
      <FormField label="What we build (one per line)" htmlFor="whatWeBuild">
        <Textarea
          id="whatWeBuild"
          name="whatWeBuild"
          rows={4}
          defaultValue={asStringArray(service?.whatWeBuild ?? []).join("\n")}
        />
      </FormField>
      <FormField label="Why it matters" htmlFor="whyItMatters" required>
        <Textarea id="whyItMatters" name="whyItMatters" rows={3} required defaultValue={service?.whyItMatters} />
      </FormField>

      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" name="published" defaultChecked={service?.published ?? true} />
          Published
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" name="featured" defaultChecked={service?.featured ?? false} />
          Featured
        </label>
      </div>

      <div>
        <Button type="submit" variant="primary">
          {service ? "Save changes" : "Create service"}
        </Button>
      </div>
    </form>
  );
}
