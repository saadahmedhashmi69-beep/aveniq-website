import { notFound } from "next/navigation";
import { ProjectForm } from "@/components/admin/ProjectForm";
import { Heading } from "@/components/ui/Heading";
import { updateProjectAction } from "@/lib/actions/projects";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Edit Project" };

export default async function AdminEditProjectPage(props: PageProps<"/admin/projects/[id]/edit">) {
  const { id } = await props.params;
  const project = await prisma.project.findUnique({ where: { id } });

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Heading as="h1" size="h2" className="mb-6">
        Edit project
      </Heading>
      <ProjectForm project={project} action={updateProjectAction} />
    </div>
  );
}
