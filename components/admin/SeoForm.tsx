import type { SEOSetting } from "@prisma/client";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export function SeoForm({
  setting,
  action,
}: {
  setting?: SEOSetting;
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action} className="flex flex-col gap-5">
      {setting ? <input type="hidden" name="id" value={setting.id} /> : null}

      <FormField label="Path" htmlFor="path" required>
        <Input id="path" name="path" required placeholder="/services" defaultValue={setting?.path} />
      </FormField>
      <FormField label="Title override (optional)" htmlFor="title">
        <Input id="title" name="title" defaultValue={setting?.title ?? ""} />
      </FormField>
      <FormField label="Description override (optional)" htmlFor="description">
        <Textarea id="description" name="description" rows={3} defaultValue={setting?.description ?? ""} />
      </FormField>
      <FormField label="Open Graph image URL (optional)" htmlFor="ogImage">
        <Input id="ogImage" name="ogImage" defaultValue={setting?.ogImage ?? ""} />
      </FormField>

      <div>
        <Button type="submit" variant="primary">
          {setting ? "Save changes" : "Create override"}
        </Button>
      </div>
    </form>
  );
}
