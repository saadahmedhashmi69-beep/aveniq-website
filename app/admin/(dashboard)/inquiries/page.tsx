import { ComingSoon } from "@/components/admin/ComingSoon";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Inquiries" };

export default async function AdminInquiriesPage() {
  const count = await prisma.inquiry.count();
  return (
    <ComingSoon
      title="Inquiries"
      description="Manage contact and estimator submissions — status, notes, search, and filtering."
      countLabel="inquiries stored"
      count={count}
    />
  );
}
