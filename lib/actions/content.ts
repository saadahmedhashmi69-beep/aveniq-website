"use server";

import { revalidatePath } from "next/cache";
import type { Prisma } from "@prisma/client";
import { assertAdmin, logActivity } from "@/lib/actions/guard";
import {
  HERO_CONTENT_KEY,
  HOMEPAGE_FINAL_CTA_KEY,
  PROCESS_HERO_KEY,
  type FinalCtaContent,
  type HeroContent,
  type PageHeroContent,
} from "@/lib/content";
import { prisma } from "@/lib/prisma";

function str(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

async function upsertSetting(key: string, value: Prisma.InputJsonValue) {
  await prisma.siteSetting.upsert({
    where: { key },
    create: { key, value },
    update: { value },
  });
}

export async function updateHeroContentAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const value: HeroContent = {
    headline: str(formData, "headline"),
    subheadline: str(formData, "subheadline"),
    primaryCtaLabel: str(formData, "primaryCtaLabel"),
    primaryCtaHref: str(formData, "primaryCtaHref"),
    secondaryCtaLabel: str(formData, "secondaryCtaLabel"),
    secondaryCtaHref: str(formData, "secondaryCtaHref"),
  };
  await upsertSetting(HERO_CONTENT_KEY, value as unknown as Prisma.InputJsonValue);
  await logActivity(admin.id, "content.updated", "SiteSetting", HERO_CONTENT_KEY);

  revalidatePath("/");
  revalidatePath("/admin/content");
}

export async function updateFinalCtaContentAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const secondaryLabel = str(formData, "secondaryLabel");
  const secondaryHref = str(formData, "secondaryHref");
  const value: FinalCtaContent = {
    title: str(formData, "title"),
    ...(secondaryLabel ? { secondaryLabel } : {}),
    ...(secondaryHref ? { secondaryHref } : {}),
  };
  await upsertSetting(HOMEPAGE_FINAL_CTA_KEY, value as unknown as Prisma.InputJsonValue);
  await logActivity(admin.id, "content.updated", "SiteSetting", HOMEPAGE_FINAL_CTA_KEY);

  revalidatePath("/");
  revalidatePath("/admin/content");
}

export async function updateProcessHeroContentAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const value: PageHeroContent = {
    eyebrow: str(formData, "eyebrow"),
    title: str(formData, "title"),
    description: str(formData, "description"),
  };
  await upsertSetting(PROCESS_HERO_KEY, value as unknown as Prisma.InputJsonValue);
  await logActivity(admin.id, "content.updated", "SiteSetting", PROCESS_HERO_KEY);

  revalidatePath("/process");
  revalidatePath("/admin/content");
}
