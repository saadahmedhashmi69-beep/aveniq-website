import { ComingSoon } from "@/components/admin/ComingSoon";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Projects" };

export default async function AdminProjectsPage() {
  const count = await prisma.project.count();
  return (
    <ComingSoon
      title="Projects"
      description="Create, edit, publish, feature, and reorder portfolio projects."
      countLabel="projects in the portfolio"
      count={count}
    />
  );
}
