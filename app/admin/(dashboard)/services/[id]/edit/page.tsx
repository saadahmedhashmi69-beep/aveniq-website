import { notFound } from "next/navigation";
import { ServiceForm } from "@/components/admin/ServiceForm";
import { Heading } from "@/components/ui/Heading";
import { updateServiceAction } from "@/lib/actions/services";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Edit Service" };

export default async function AdminEditServicePage(props: PageProps<"/admin/services/[id]/edit">) {
  const { id } = await props.params;
  const service = await prisma.service.findUnique({ where: { id } });

  if (!service) {
    notFound();
  }

  return (
    <div>
      <Heading as="h1" size="h2" className="mb-6">
        Edit service
      </Heading>
      <ServiceForm service={service} action={updateServiceAction} />
    </div>
  );
}
