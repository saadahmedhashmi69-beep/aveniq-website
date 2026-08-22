import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { StatCard } from "@/components/admin/StatCard";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Dashboard" };

const STATUS_LABELS: Record<string, string> = {
  NEW: "New",
  CONTACTED: "Contacted",
  QUALIFIED: "Qualified",
  PROPOSAL: "Proposal",
  WON: "Won",
  LOST: "Lost",
  ARCHIVED: "Archived",
};

export default async function AdminDashboardPage() {
  const [statusGroups, sourceGroups, recentInquiries, projectStats, serviceCount] =
    await Promise.all([
      prisma.inquiry.groupBy({ by: ["status"], _count: { _all: true } }),
      prisma.inquiry.groupBy({ by: ["source"], _count: { _all: true } }),
      prisma.inquiry.findMany({ take: 8, orderBy: { createdAt: "desc" } }),
      Promise.all([
        prisma.project.count(),
        prisma.project.count({ where: { published: true } }),
        prisma.project.count({ where: { status: "VERIFIED" } }),
      ]),
      prisma.service.count(),
    ]);

  const totalInquiries = statusGroups.reduce((sum, group) => sum + group._count._all, 0);
  const newCount = statusGroups.find((g) => g.status === "NEW")?._count._all ?? 0;
  const contactCount = sourceGroups.find((g) => g.source === "CONTACT")?._count._all ?? 0;
  const estimatorCount = sourceGroups.find((g) => g.source === "ESTIMATOR")?._count._all ?? 0;
  const [totalProjects, publishedProjects, verifiedProjects] = projectStats;

  return (
    <div className="flex flex-col gap-10">
      <div>
        <Heading as="h1" size="h2">
          Dashboard
        </Heading>
        <Text muted size="sm" className="mt-1">
          An overview of inquiries, portfolio content, and recent activity.
        </Text>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total inquiries" value={totalInquiries} />
        <StatCard label="New" value={newCount} sublabel="Awaiting first response" />
        <StatCard label="Contact submissions" value={contactCount} />
        <StatCard label="Estimator submissions" value={estimatorCount} />
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Projects" value={totalProjects} sublabel={`${publishedProjects} published`} />
        <StatCard label="Verified projects" value={verifiedProjects} />
        <StatCard label="Services" value={serviceCount} />
      </div>

      <div>
        <Heading as="h2" size="h3" className="mb-4">
          Inquiries by status
        </Heading>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {Object.entries(STATUS_LABELS).map(([status, label]) => (
            <StatCard
              key={status}
              label={label}
              value={statusGroups.find((g) => g.status === status)?._count._all ?? 0}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <Heading as="h2" size="h3">
            Recent activity
          </Heading>
          <Link href="/admin/inquiries" className="text-sm font-medium text-accent hover:underline">
            View all inquiries
          </Link>
        </div>

        {recentInquiries.length === 0 ? (
          <div className="rounded-lg border border-dashed border-edge-strong p-8 text-center">
            <Text size="sm" muted>
              No inquiries yet. Contact and estimator submissions will appear here.
            </Text>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-edge">
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
                {recentInquiries.map((inquiry) => (
                  <tr key={inquiry.id}>
                    <td className="px-4 py-3 text-ink">
                      {inquiry.name ?? <span className="text-ink-faint">Anonymous</span>}
                      {inquiry.company ? (
                        <span className="text-ink-faint"> — {inquiry.company}</span>
                      ) : null}
                    </td>
                    <td className="px-4 py-3 text-ink-muted">{inquiry.source}</td>
                    <td className="px-4 py-3 text-ink-muted">
                      {STATUS_LABELS[inquiry.status] ?? inquiry.status}
                    </td>
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
    </div>
  );
}
