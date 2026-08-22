"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ProjectStatus } from "@prisma/client";
import { assertAdmin, logActivity } from "@/lib/actions/guard";
import { prisma } from "@/lib/prisma";

const VALID_STATUSES = new Set(Object.values(ProjectStatus));

function linesToArray(value: FormDataEntryValue | null): string[] {
  return String(value ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function str(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

function buildProjectData(formData: FormData) {
  const status = str(formData, "status");
  if (!VALID_STATUSES.has(status as ProjectStatus)) {
    throw new Error("Invalid project status.");
  }

  const slug = str(formData, "slug");
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error("Slug must be lowercase letters, numbers, and hyphens only.");
  }

  return {
    slug,
    status: status as ProjectStatus,
    companyName: str(formData, "companyName"),
    projectName: str(formData, "projectName"),
    category: str(formData, "category"),
    industry: str(formData, "industry"),
    type: str(formData, "type"),
    summary: str(formData, "summary"),
    overview: str(formData, "overview"),
    solution: str(formData, "solution"),
    challenge: linesToArray(formData.get("challenge")),
    objectives: linesToArray(formData.get("objectives")),
    architecture: linesToArray(formData.get("architecture")),
    keyFeatures: linesToArray(formData.get("keyFeatures")),
    customerExperience: linesToArray(formData.get("customerExperience")),
    adminExperience: linesToArray(formData.get("adminExperience")),
    workflows: linesToArray(formData.get("workflows")),
    integrations: linesToArray(formData.get("integrations")),
    security: linesToArray(formData.get("security")),
    responsiveExperience: str(formData, "responsiveExperience"),
    designApproach: str(formData, "designApproach"),
    outcomes: linesToArray(formData.get("outcomes")),
    technology: linesToArray(formData.get("technology")),
    projectScope: str(formData, "projectScope"),
    deliverables: linesToArray(formData.get("deliverables")),
    timeline: str(formData, "timeline"),
    galleryAvailable: formData.get("galleryAvailable") === "on",
    relatedProjects: linesToArray(formData.get("relatedProjects")),
    ctaText: str(formData, "ctaText") || null,
    published: formData.get("published") === "on",
    featured: formData.get("featured") === "on",
    order: Number(formData.get("order")) || 0,
  };
}

export async function createProjectAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const data = buildProjectData(formData);

  const project = await prisma.project.create({ data });
  await logActivity(admin.id, "project.created", "Project", project.id, { slug: project.slug });

  revalidatePath("/admin/projects");
  revalidatePath("/work");
  revalidatePath(`/work/${project.slug}`);
  redirect("/admin/projects");
}

export async function updateProjectAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const id = str(formData, "id");
  if (!id) throw new Error("Missing project id.");

  const existing = await prisma.project.findUnique({ where: { id }, select: { slug: true } });
  const data = buildProjectData(formData);

  await prisma.project.update({ where: { id }, data });
  await logActivity(admin.id, "project.updated", "Project", id, { slug: data.slug });

  revalidatePath("/admin/projects");
  revalidatePath("/work");
  revalidatePath(`/work/${data.slug}`);
  if (existing && existing.slug !== data.slug) {
    revalidatePath(`/work/${existing.slug}`);
  }
  redirect("/admin/projects");
}

export async function deleteProjectAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const id = str(formData, "id");
  if (!id) throw new Error("Missing project id.");

  const project = await prisma.project.delete({ where: { id } });
  await logActivity(admin.id, "project.deleted", "Project", id, { slug: project.slug });

  revalidatePath("/admin/projects");
  revalidatePath("/work");
}

export async function toggleProjectFieldAction(formData: FormData): Promise<void> {
  const admin = await assertAdmin();
  const id = str(formData, "id");
  const field = str(formData, "field");
  if (!id || (field !== "published" && field !== "featured")) {
    throw new Error("Invalid toggle request.");
  }

  const current = await prisma.project.findUniqueOrThrow({ where: { id }, select: { published: true, featured: true, slug: true } });
  const nextValue = field === "published" ? !current.published : !current.featured;

  await prisma.project.update({ where: { id }, data: { [field]: nextValue } });
  await logActivity(admin.id, `project.${field}_toggled`, "Project", id, { [field]: nextValue });

  revalidatePath("/admin/projects");
  revalidatePath("/work");
  revalidatePath(`/work/${current.slug}`);
}
