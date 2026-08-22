"use server";

import { revalidatePath } from "next/cache";
import { assertAdmin, logActivity } from "@/lib/actions/guard";
import { prisma } from "@/lib/prisma";

function str(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

export async function createMediaAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const url = str(formData, "url");
  const altText = str(formData, "altText");
  const kind = str(formData, "kind") || "image";

  if (!url) {
    throw new Error("URL is required.");
  }
  try {
    new URL(url);
  } catch {
    throw new Error("Enter a valid, full URL (including https://).");
  }
  if (!altText) {
    throw new Error("Alt text is required for accessibility.");
  }

  const media = await prisma.media.create({ data: { url, altText, kind } });
  await logActivity(admin.id, "media.created", "Media", media.id);

  revalidatePath("/admin/media");
}

export async function deleteMediaAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const id = str(formData, "id");
  if (!id) throw new Error("Missing media id.");

  await prisma.media.delete({ where: { id } });
  await logActivity(admin.id, "media.deleted", "Media", id);

  revalidatePath("/admin/media");
}
