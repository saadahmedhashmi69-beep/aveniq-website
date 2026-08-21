"use server";

import { revalidatePath } from "next/cache";
import { InquiryStatus } from "@prisma/client";
import { assertAdmin, logActivity } from "@/lib/actions/guard";
import { prisma } from "@/lib/prisma";

const VALID_STATUSES = new Set(Object.values(InquiryStatus));

export async function updateInquiryStatusAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!id || !VALID_STATUSES.has(status as InquiryStatus)) {
    throw new Error("Invalid status update.");
  }

  await prisma.inquiry.update({ where: { id }, data: { status: status as InquiryStatus } });
  await logActivity(admin.id, "inquiry.status_changed", "Inquiry", id, { status });

  revalidatePath("/admin/inquiries");
  revalidatePath(`/admin/inquiries/${id}`);
  revalidatePath("/admin");
}

export async function addInquiryNoteAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const id = String(formData.get("id") ?? "");
  const body = String(formData.get("body") ?? "").trim();
  if (!id || !body) {
    throw new Error("Note cannot be empty.");
  }
  if (body.length > 5000) {
    throw new Error("Note is too long.");
  }

  await prisma.inquiryNote.create({
    data: { inquiryId: id, body, createdById: admin.id },
  });
  await logActivity(admin.id, "inquiry.note_added", "Inquiry", id);

  revalidatePath(`/admin/inquiries/${id}`);
}
