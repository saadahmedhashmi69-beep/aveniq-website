import { ComingSoon } from "@/components/admin/ComingSoon";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Services" };

export default async function AdminServicesPage() {
  const count = await prisma.service.count();
  return (
    <ComingSoon
      title="Services"
      description="Manage the service categories shown on the public /services page."
      countLabel="services listed"
      count={count}
    />
  );
}
