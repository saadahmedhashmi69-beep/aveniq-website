import { ComingSoon } from "@/components/admin/ComingSoon";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Media" };

export default async function AdminMediaPage() {
  const count = await prisma.media.count();
  return (
    <ComingSoon
      title="Media"
      description="Reference hosted image URLs for use across projects and content — no file upload pipeline."
      countLabel="media references stored"
      count={count}
    />
  );
}
