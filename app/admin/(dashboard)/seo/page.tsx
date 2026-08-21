import { ComingSoon } from "@/components/admin/ComingSoon";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "SEO" };

export default async function AdminSeoPage() {
  const count = await prisma.sEOSetting.count();
  return (
    <ComingSoon
      title="SEO"
      description="Manage per-page titles, descriptions, and Open Graph images."
      countLabel="page-level SEO overrides configured"
      count={count}
    />
  );
}
