import { SeoForm } from "@/components/admin/SeoForm";
import { Heading } from "@/components/ui/Heading";
import { createSeoSettingAction } from "@/lib/actions/seo";

export const metadata = { title: "New SEO Override" };

export default function AdminNewSeoPage() {
  return (
    <div>
      <Heading as="h1" size="h2" className="mb-6">
        New SEO override
      </Heading>
      <SeoForm action={createSeoSettingAction} />
    </div>
  );
}
