import Link from "next/link";
import { ConfirmButton } from "@/components/admin/ConfirmButton";
import { ProjectStatusBadge } from "@/components/work/ProjectStatusBadge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { deleteProjectAction, toggleProjectFieldAction } from "@/lib/actions/projects";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Projects" };

export default async function AdminProjectsPage() {
  const projects = await prisma.project.findMany({ orderBy: [{ featured: "desc" }, { order: "asc" }] });

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <Heading as="h1" size="h2">
            Projects
          </Heading>
          <Text muted size="sm" className="mt-1">
            {projects.length} in the portfolio
          </Text>
        </div>
        <Button href="/admin/projects/new" variant="primary">
          New project
        </Button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-lg border border-edge">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-edge bg-surface text-xs uppercase tracking-wide text-ink-faint">
            <tr>
              <th className="px-4 py-3 font-semibold">Project</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Published</th>
              <th className="px-4 py-3 font-semibold">Featured</th>
              <th className="px-4 py-3 font-semibold" />
            </tr>
          </thead>
          <tbody className="divide-y divide-edge">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-4 py-3">
                  <p className="text-ink">{project.projectName}</p>
                  <p className="text-xs text-ink-faint">
                    {project.companyName} — /work/{project.slug}
                  </p>
                </td>
                <td className="px-4 py-3">
                  <ProjectStatusBadge status={project.status} />
                </td>
                <td className="px-4 py-3">
                  <form action={toggleProjectFieldAction}>
                    <input type="hidden" name="id" value={project.id} />
                    <input type="hidden" name="field" value="published" />
                    <button
                      type="submit"
                      className={project.published ? "text-success" : "text-ink-faint"}
                    >
                      {project.published ? "Yes" : "No"}
                    </button>
                  </form>
                </td>
                <td className="px-4 py-3">
                  <form action={toggleProjectFieldAction}>
                    <input type="hidden" name="id" value={project.id} />
                    <input type="hidden" name="field" value="featured" />
                    <button
                      type="submit"
                      className={project.featured ? "text-accent" : "text-ink-faint"}
                    >
                      {project.featured ? "Yes" : "No"}
                    </button>
                  </form>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-4">
                    <Link href={`/admin/projects/${project.id}/edit`} className="text-ink-muted hover:text-accent">
                      Edit
                    </Link>
                    <form action={deleteProjectAction}>
                      <input type="hidden" name="id" value={project.id} />
                      <ConfirmButton
                        confirmMessage={`Delete "${project.projectName}"? This can't be undone.`}
                      >
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
