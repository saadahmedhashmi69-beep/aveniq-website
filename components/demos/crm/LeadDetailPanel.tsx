import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { CrmLead, CrmStage } from "@/types";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function LeadDetailPanel({
  lead,
  stages,
  onMoveStage,
  onToggleTask,
  onNotify,
}: {
  lead: CrmLead | null;
  stages: CrmStage[];
  onMoveStage: (stage: CrmStage) => void;
  onToggleTask: (taskId: string) => void;
  onNotify: () => void;
}) {
  if (!lead) {
    return (
      <div className="rounded-xl border border-edge bg-surface p-8 text-center">
        <p className="text-base text-ink-muted">Select a lead to see its details.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-edge bg-surface p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-ink">{lead.name}</h3>
          <p className="mt-1 text-sm text-ink-muted">{lead.company}</p>
        </div>
        <span className="font-mono text-sm text-ink-faint">
          Example value: {currencyFormatter.format(lead.exampleValue)}
        </span>
      </div>

      <p className="mt-4 max-w-xl text-sm text-ink-muted">{lead.note}</p>

      <div className="mt-6">
        <span className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
          Move to
        </span>
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Move lead to stage">
          {stages.map((stage) => (
            <button
              key={stage}
              type="button"
              onClick={() => onMoveStage(stage)}
              aria-pressed={lead.stage === stage}
              className={cn(
                "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors duration-150 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                lead.stage === stage
                  ? "border-accent bg-accent text-canvas"
                  : "border-edge-strong text-ink hover:bg-surface-hover",
              )}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <span className="text-sm font-semibold uppercase tracking-wide text-ink-faint">Tasks</span>
        <ul className="mt-3 flex flex-col gap-2">
          {lead.tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-3">
              <input
                type="checkbox"
                id={`task-${task.id}`}
                checked={task.done}
                onChange={() => onToggleTask(task.id)}
                className="h-4 w-4 rounded-sm border-edge-strong bg-surface accent-[#00e5ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              />
              <label
                htmlFor={`task-${task.id}`}
                className={cn("text-sm", task.done ? "text-ink-faint line-through" : "text-ink")}
              >
                {task.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <Button type="button" variant="ghost" onClick={onNotify}>
          Notify assigned team member
        </Button>
      </div>
    </div>
  );
}
