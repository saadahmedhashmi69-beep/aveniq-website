import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryStatus } from "@prisma/client";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Select } from "@/components/ui/Select";
import { Text } from "@/components/ui/Text";
import { Textarea } from "@/components/ui/Textarea";
import { addInquiryNoteAction, updateInquiryStatusAction } from "@/lib/actions/inquiries";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Inquiry" };

const STATUS_LABELS: Record<InquiryStatus, string> = {
  NEW: "New",
  CONTACTED: "Contacted",
  QUALIFIED: "Qualified",
  PROPOSAL: "Proposal",
  WON: "Won",
  LOST: "Lost",
  ARCHIVED: "Archived",
};

function formatDate(date: Date) {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function AdminInquiryDetailPage(props: PageProps<"/admin/inquiries/[id]">) {
  const { id } = await props.params;
  const inquiry = await prisma.inquiry.findUnique({
    where: { id },
    include: { notes: { include: { createdBy: true }, orderBy: { createdAt: "desc" } } },
  });

  if (!inquiry) {
    notFound();
  }

  const details =
    inquiry.details && typeof inquiry.details === "object" && !Array.isArray(inquiry.details)
      ? (inquiry.details as Record<string, unknown>)
      : {};

  return (
    <div>
      <Link href="/admin/inquiries" className="text-sm text-ink-muted hover:text-accent">
        ← All inquiries
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <Heading as="h1" size="h2">
              {inquiry.name ?? "Anonymous submission"}
            </Heading>
            <Badge>{inquiry.source}</Badge>
          </div>
          <Text muted size="sm" className="mt-1">
            {inquiry.email ?? "No email provided"}
            {inquiry.company ? ` — ${inquiry.company}` : ""}
            {inquiry.phone ? ` — ${inquiry.phone}` : ""}
          </Text>
          <Text muted size="xs" className="mt-1">
            Received {formatDate(inquiry.createdAt)}
          </Text>
        </div>

        <form action={updateInquiryStatusAction} className="flex items-end gap-2">
          <input type="hidden" name="id" value={inquiry.id} />
          <div>
            <label htmlFor="status" className="mb-1 block text-xs font-medium text-ink-faint">
              Status
            </label>
            <Select id="status" name="status" defaultValue={inquiry.status}>
              {Object.entries(STATUS_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </div>
          <Button type="submit" variant="secondary">
            Update
          </Button>
        </form>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <Heading as="h2" size="h3" className="mb-4">
            Submission details
          </Heading>
          {Object.keys(details).length === 0 ? (
            <Text size="sm" muted>
              No additional details were submitted.
            </Text>
          ) : (
            <dl className="flex flex-col gap-4 rounded-lg border border-edge bg-surface p-6">
              {Object.entries(details).map(([key, value]) => {
                const display = Array.isArray(value) ? value.join(", ") : String(value ?? "");
                if (!display) return null;
                return (
                  <div key={key} className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                      {key}
                    </dt>
                    <dd className="whitespace-pre-wrap text-sm text-ink sm:col-span-2">{display}</dd>
                  </div>
                );
              })}
            </dl>
          )}
        </div>

        <div>
          <Heading as="h2" size="h3" className="mb-4">
            Notes
          </Heading>

          <form action={addInquiryNoteAction} className="mb-6 flex flex-col gap-3">
            <input type="hidden" name="id" value={inquiry.id} />
            <Textarea name="body" rows={3} placeholder="Add an internal note…" required />
            <Button type="submit" variant="secondary" className="self-start">
              Add note
            </Button>
          </form>

          {inquiry.notes.length === 0 ? (
            <Text size="sm" muted>
              No notes yet.
            </Text>
          ) : (
            <ul className="flex flex-col gap-4">
              {inquiry.notes.map((note) => (
                <li key={note.id} className="rounded-lg border border-edge bg-surface p-4">
                  <Text size="sm" className="whitespace-pre-wrap text-ink">
                    {note.body}
                  </Text>
                  <Text size="xs" muted className="mt-2">
                    {note.createdBy?.name ?? "Unknown"} — {formatDate(note.createdAt)}
                  </Text>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
