import Link from "next/link";
import { InquiryStatus, type Prisma } from "@prisma/client";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Inquiries" };

const STATUS_LABELS: Record<InquiryStatus, string> = {
  NEW: "New",
  CONTACTED: "Contacted",
  QUALIFIED: "Qualified",
  PROPOSAL: "Proposal",
  WON: "Won",
  LOST: "Lost",
  ARCHIVED: "Archived",
};

export default async function AdminInquiriesPage(props: PageProps<"/admin/inquiries">) {
  const searchParams = await props.searchParams;
  const statusFilter = typeof searchParams.status === "string" ? searchParams.status : "";
  const sourceFilter = typeof searchParams.source === "string" ? searchParams.source : "";

  const where: Prisma.InquiryWhereInput = {};
  if (statusFilter && statusFilter in STATUS_LABELS) {
    where.status = statusFilter as InquiryStatus;
  }
  if (sourceFilter === "CONTACT" || sourceFilter === "ESTIMATOR") {
    where.source = sourceFilter;
  }

  const inquiries = await prisma.inquiry.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  function filterHref(next: { status?: string; source?: string }) {
    const params = new URLSearchParams();
    const status = next.status ?? statusFilter;
    const source = next.source ?? sourceFilter;
    if (status) params.set("status", status);
    if (source) params.set("source", source);
    const query = params.toString();
    return query ? `/admin/inquiries?${query}` : "/admin/inquiries";
  }

  return (
    <div>
      <Heading as="h1" size="h2">
        Inquiries
      </Heading>
      <Text muted size="sm" className="mt-1">
        {inquiries.length} shown{statusFilter || sourceFilter ? " (filtered)" : ""}
      </Text>

      <div className="mt-6 flex flex-wrap gap-4">
        <div className="flex flex-wrap gap-2">
          <Link
            href={filterHref({ status: "" })}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${!statusFilter ? "border-accent bg-accent/10 text-accent" : "border-edge text-ink-muted"}`}
          >
            All statuses
          </Link>
          {Object.entries(STATUS_LABELS).map(([value, label]) => (
            <Link
              key={value}
              href={filterHref({ status: value })}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${statusFilter === value ? "border-accent bg-accent/10 text-accent" : "border-edge text-ink-muted"}`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href={filterHref({ source: "" })}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${!sourceFilter ? "border-accent bg-accent/10 text-accent" : "border-edge text-ink-muted"}`}
          >
            All sources
          </Link>
          <Link
            href={filterHref({ source: "CONTACT" })}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${sourceFilter === "CONTACT" ? "border-accent bg-accent/10 text-accent" : "border-edge text-ink-muted"}`}
          >
            Contact
          </Link>
          <Link
            href={filterHref({ source: "ESTIMATOR" })}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${sourceFilter === "ESTIMATOR" ? "border-accent bg-accent/10 text-accent" : "border-edge text-ink-muted"}`}
          >
            Estimator
          </Link>
        </div>
      </div>

      {inquiries.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-edge-strong p-8 text-center">
          <Text size="sm" muted>
            No inquiries match this filter.
          </Text>
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-lg border border-edge">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-edge bg-surface text-xs uppercase tracking-wide text-ink-faint">
              <tr>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Source</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Received</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-edge">
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-surface">
                  <td className="px-4 py-3">
                    <Link href={`/admin/inquiries/${inquiry.id}`} className="text-ink hover:text-accent">
                      {inquiry.name ?? <span className="text-ink-faint">Anonymous</span>}
                    </Link>
                    {inquiry.company ? (
                      <span className="text-ink-faint"> — {inquiry.company}</span>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-ink-muted">{inquiry.source}</td>
                  <td className="px-4 py-3 text-ink-muted">{STATUS_LABELS[inquiry.status]}</td>
                  <td className="px-4 py-3 text-ink-faint">
                    {inquiry.createdAt.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
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
