import { notFound } from "next/navigation";
import { SeoForm } from "@/components/admin/SeoForm";
import { Heading } from "@/components/ui/Heading";
import { updateSeoSettingAction } from "@/lib/actions/seo";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Edit SEO Override" };

export default async function AdminEditSeoPage(props: PageProps<"/admin/seo/[id]/edit">) {
  const { id } = await props.params;
  const setting = await prisma.sEOSetting.findUnique({ where: { id } });

  if (!setting) {
    notFound();
  }

  return (
    <div>
      <Heading as="h1" size="h2" className="mb-6">
        Edit SEO override
      </Heading>
      <SeoForm setting={setting} action={updateSeoSettingAction} />
    </div>
  );
}
