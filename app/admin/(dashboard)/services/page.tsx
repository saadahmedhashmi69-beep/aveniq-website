import Link from "next/link";
import { ConfirmButton } from "@/components/admin/ConfirmButton";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { deleteServiceAction, toggleServiceFieldAction } from "@/lib/actions/services";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Services" };

export default async function AdminServicesPage() {
  const services = await prisma.service.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <Heading as="h1" size="h2">
            Services
          </Heading>
          <Text muted size="sm" className="mt-1">
            {services.length} listed
          </Text>
        </div>
        <Button href="/admin/services/new" variant="primary">
          New service
        </Button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-lg border border-edge">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-edge bg-surface text-xs uppercase tracking-wide text-ink-faint">
            <tr>
              <th className="px-4 py-3 font-semibold">Service</th>
              <th className="px-4 py-3 font-semibold">Published</th>
              <th className="px-4 py-3 font-semibold">Featured</th>
              <th className="px-4 py-3 font-semibold" />
            </tr>
          </thead>
          <tbody className="divide-y divide-edge">
            {services.map((service) => (
              <tr key={service.id}>
                <td className="px-4 py-3">
                  <p className="text-ink">{service.title}</p>
                  <p className="text-xs text-ink-faint">{service.category}</p>
                </td>
                <td className="px-4 py-3">
                  <form action={toggleServiceFieldAction}>
                    <input type="hidden" name="id" value={service.id} />
                    <input type="hidden" name="field" value="published" />
                    <button type="submit" className={service.published ? "text-success" : "text-ink-faint"}>
                      {service.published ? "Yes" : "No"}
                    </button>
                  </form>
                </td>
                <td className="px-4 py-3">
                  <form action={toggleServiceFieldAction}>
                    <input type="hidden" name="id" value={service.id} />
                    <input type="hidden" name="field" value="featured" />
                    <button type="submit" className={service.featured ? "text-accent" : "text-ink-faint"}>
                      {service.featured ? "Yes" : "No"}
                    </button>
                  </form>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-4">
                    <Link href={`/admin/services/${service.id}/edit`} className="text-ink-muted hover:text-accent">
                      Edit
                    </Link>
                    <form action={deleteServiceAction}>
                      <input type="hidden" name="id" value={service.id} />
                      <ConfirmButton confirmMessage={`Delete "${service.title}"? This can't be undone.`}>
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
    </div>
  );
}
