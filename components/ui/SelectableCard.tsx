import { cn } from "@/lib/utils";

export function SelectableCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "rounded-md border px-4 py-3 text-left text-sm font-medium transition-colors duration-150 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        selected
          ? "border-accent bg-surface-hover text-ink"
          : "border-edge bg-surface text-ink-muted hover:border-edge-strong hover:text-ink",
      )}
    >
      {label}
    </button>
  );
}
