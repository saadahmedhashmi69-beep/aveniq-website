"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { assertAdmin, logActivity } from "@/lib/actions/guard";
import { prisma } from "@/lib/prisma";

function linesToArray(value: FormDataEntryValue | null): string[] {
  return String(value ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function str(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

function buildServiceData(formData: FormData) {
  const slug = str(formData, "slug");
  if (!/^[-a-z0-9]+$/.test(slug)) {
    throw new Error("Slug must be lowercase letters, numbers, and hyphens only.");
  }

  return {
    slug,
    title: str(formData, "title"),
    category: str(formData, "category"),
    problem: str(formData, "problem"),
    whatWeBuild: linesToArray(formData.get("whatWeBuild")),
    whyItMatters: str(formData, "whyItMatters"),
    published: formData.get("published") === "on",
    featured: formData.get("featured") === "on",
    order: Number(formData.get("order")) || 0,
  };
}

export async function createServiceAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const data = buildServiceData(formData);

  const service = await prisma.service.create({ data });
  await logActivity(admin.id, "service.created", "Service", service.id, { slug: service.slug });

  revalidatePath("/admin/services");
  revalidatePath("/services");
  redirect("/admin/services");
}

export async function updateServiceAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const id = str(formData, "id");
  if (!id) throw new Error("Missing service id.");
  const data = buildServiceData(formData);

  await prisma.service.update({ where: { id }, data });
  await logActivity(admin.id, "service.updated", "Service", id, { slug: data.slug });

  revalidatePath("/admin/services");
  revalidatePath("/services");
  redirect("/admin/services");
}

export async function deleteServiceAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const id = str(formData, "id");
  if (!id) throw new Error("Missing service id.");

  const service = await prisma.service.delete({ where: { id } });
  await logActivity(admin.id, "service.deleted", "Service", id, { slug: service.slug });

  revalidatePath("/admin/services");
  revalidatePath("/services");
}

export async function toggleServiceFieldAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const id = str(formData, "id");
  const field = str(formData, "field");
  if (!id || (field !== "published" && field !== "featured")) {
    throw new Error("Invalid toggle request.");
  }

  const current = await prisma.service.findUniqueOrThrow({
    where: { id },
    select: { published: true, featured: true },
  });
  const nextValue = field === "published" ? !current.published : !current.featured;

  await prisma.service.update({ where: { id }, data: { [field]: nextValue } });
  await logActivity(admin.id, `service.${field}_toggled`, "Service", id, { [field]: nextValue });

  revalidatePath("/admin/services");
  revalidatePath("/services");
}
