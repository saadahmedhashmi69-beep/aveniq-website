import { cn } from "@/lib/utils";
import type { CrmLead } from "@/types";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function LeadCard({
  lead,
  isSelected,
  onSelect,
}: {
  lead: CrmLead;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={cn(
        "w-full rounded-lg border px-4 py-3 text-left transition-colors duration-150 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        isSelected ? "border-accent bg-surface-hover" : "border-edge bg-surface hover:border-edge-strong",
      )}
    >
      <span className="block text-sm font-semibold text-ink">{lead.name}</span>
      <span className="mt-0.5 block text-xs text-ink-muted">{lead.company}</span>
      <span className="mt-2 block font-mono text-xs text-ink-faint">
        Example value: {currencyFormatter.format(lead.exampleValue)}
      </span>
    </button>
  );
}
