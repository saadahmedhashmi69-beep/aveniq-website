import type { ProjectStatus } from "@prisma/client";
import { cn } from "@/lib/utils";

const labels: Record<ProjectStatus, string> = {
  VERIFIED: "Verified Project",
  CONCEPT: "Concept",
  PROTOTYPE: "Internal Prototype",
  DEMONSTRATION: "Portfolio Demonstration",
};

export function ProjectStatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const isVerified = status === "VERIFIED";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        isVerified
          ? "border-success/30 bg-success/10 text-success"
          : "border-edge-strong bg-surface text-ink-muted",
        className,
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", isVerified ? "bg-success" : "bg-ink-faint")}
        aria-hidden="true"
      />
      {labels[status]}
    </span>
  );
}
