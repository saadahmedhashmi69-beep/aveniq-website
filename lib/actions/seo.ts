"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { assertAdmin, logActivity } from "@/lib/actions/guard";
import { prisma } from "@/lib/prisma";

function str(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

function buildSeoData(formData: FormData) {
  const path = str(formData, "path");
  if (!path.startsWith("/")) {
    throw new Error("Path must start with /.");
  }
  return {
    path,
    title: str(formData, "title") || null,
    description: str(formData, "description") || null,
    ogImage: str(formData, "ogImage") || null,
  };
}

export async function createSeoSettingAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const data = buildSeoData(formData);

  const setting = await prisma.sEOSetting.create({ data });
  await logActivity(admin.id, "seo.created", "SEOSetting", setting.id, { path: setting.path });

  revalidatePath("/admin/seo");
  revalidatePath(data.path);
  redirect("/admin/seo");
}

export async function updateSeoSettingAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const id = str(formData, "id");
  if (!id) throw new Error("Missing SEO setting id.");
  const data = buildSeoData(formData);

  await prisma.sEOSetting.update({ where: { id }, data });
  await logActivity(admin.id, "seo.updated", "SEOSetting", id, { path: data.path });

  revalidatePath("/admin/seo");
  revalidatePath(data.path);
  redirect("/admin/seo");
}

export async function deleteSeoSettingAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const id = str(formData, "id");
  if (!id) throw new Error("Missing SEO setting id.");

  const setting = await prisma.sEOSetting.delete({ where: { id } });
  await logActivity(admin.id, "seo.deleted", "SEOSetting", id, { path: setting.path });

  revalidatePath("/admin/seo");
  revalidatePath(setting.path);
}
