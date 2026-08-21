import { ProjectForm } from "@/components/admin/ProjectForm";
import { Heading } from "@/components/ui/Heading";
import { createProjectAction } from "@/lib/actions/projects";

export const metadata = { title: "New Project" };

export default function AdminNewProjectPage() {
  return (
    <div>
      <Heading as="h1" size="h2" className="mb-6">
        New project
      </Heading>
      <ProjectForm action={createProjectAction} />
    </div>
  );
}
