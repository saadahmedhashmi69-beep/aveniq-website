import { ComingSoon } from "@/components/admin/ComingSoon";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Content" };

export default async function AdminContentPage() {
  const count = await prisma.siteSetting.count();
  return (
    <ComingSoon
      title="Content"
      description="Edit homepage hero, calls to action, and other CMS-backed page copy."
      countLabel="editable content blocks"
      count={count}
    />
  );
}
