import Link from "next/link";
import { ConfirmButton } from "@/components/admin/ConfirmButton";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { deleteSeoSettingAction } from "@/lib/actions/seo";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "SEO" };

export default async function AdminSeoPage() {
  const settings = await prisma.sEOSetting.findMany({ orderBy: { path: "asc" } });

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <Heading as="h1" size="h2">
            SEO
          </Heading>
          <Text muted size="sm" className="mt-1">
            Per-page overrides for title, description, and Open Graph image. Any page without an
            override here uses its built-in default copy.
          </Text>
        </div>
        <Button href="/admin/seo/new" variant="primary">
          New override
        </Button>
      </div>

      {settings.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-edge-strong p-8 text-center">
          <Text size="sm" muted>
            No overrides configured yet.
          </Text>
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-lg border border-edge">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-edge bg-surface text-xs uppercase tracking-wide text-ink-faint">
              <tr>
                <th className="px-4 py-3 font-semibold">Path</th>
                <th className="px-4 py-3 font-semibold">Title</th>
                <th className="px-4 py-3 font-semibold" />
              </tr>
            </thead>
            <tbody className="divide-y divide-edge">
              {settings.map((setting) => (
                <tr key={setting.id}>
                  <td className="px-4 py-3 font-mono text-ink">{setting.path}</td>
                  <td className="px-4 py-3 text-ink-muted">{setting.title ?? "—"}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-4">
                      <Link href={`/admin/seo/${setting.id}/edit`} className="text-ink-muted hover:text-accent">
                        Edit
                      </Link>
                      <form action={deleteSeoSettingAction}>
                        <input type="hidden" name="id" value={setting.id} />
                        <ConfirmButton confirmMessage={`Remove the SEO override for "${setting.path}"?`}>
                          Delete
                        </ConfirmButton>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
