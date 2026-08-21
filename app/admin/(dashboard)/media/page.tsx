import { ConfirmButton } from "@/components/admin/ConfirmButton";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Heading } from "@/components/ui/Heading";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Text } from "@/components/ui/Text";
import { createMediaAction, deleteMediaAction } from "@/lib/actions/media";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Media" };

export default async function AdminMediaPage() {
  const media = await prisma.media.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <Heading as="h1" size="h2">
        Media
      </Heading>
      <Text muted size="sm" className="mt-1">
        Reference hosted image URLs for use across projects and content. Aveniq doesn&apos;t run a
        file upload pipeline — paste a URL from an external host.
      </Text>

      <form
        action={createMediaAction}
        className="mt-6 grid gap-4 rounded-lg border border-edge p-6 sm:grid-cols-[2fr_1fr_1fr_auto]"
      >
        <FormField label="Image URL" htmlFor="url" required>
          <Input id="url" name="url" type="url" required placeholder="https://…" />
        </FormField>
        <FormField label="Alt text" htmlFor="altText" required>
          <Input id="altText" name="altText" required />
        </FormField>
        <FormField label="Kind" htmlFor="kind">
          <Select id="kind" name="kind" defaultValue="image">
            <option value="image">Image</option>
            <option value="logo">Logo</option>
            <option value="screenshot">Screenshot</option>
          </Select>
        </FormField>
        <div className="flex items-end">
          <Button type="submit" variant="primary" className="w-full">
            Add
          </Button>
        </div>
      </form>

      {media.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-edge-strong p-8 text-center">
          <Text size="sm" muted>
            No media references yet.
          </Text>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {media.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg border border-edge bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element -- external, admin-supplied URLs; not part of next/image's optimized domain allowlist */}
              <img src={item.url} alt={item.altText} className="h-40 w-full object-cover" />
              <div className="flex items-center justify-between gap-2 p-3">
                <div className="min-w-0">
                  <p className="truncate text-xs text-ink">{item.altText}</p>
                  <p className="text-xs text-ink-faint">{item.kind}</p>
                </div>
                <form action={deleteMediaAction}>
                  <input type="hidden" name="id" value={item.id} />
                  <ConfirmButton confirmMessage="Remove this media reference?">Delete</ConfirmButton>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
