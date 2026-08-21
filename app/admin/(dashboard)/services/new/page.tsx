import { ServiceForm } from "@/components/admin/ServiceForm";
import { Heading } from "@/components/ui/Heading";
import { createServiceAction } from "@/lib/actions/services";

export const metadata = { title: "New Service" };

export default function AdminNewServicePage() {
  return (
    <div>
      <Heading as="h1" size="h2" className="mb-6">
        New service
      </Heading>
      <ServiceForm action={createServiceAction} />
    </div>
  );
}
