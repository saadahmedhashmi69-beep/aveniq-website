import { cn } from "@/lib/utils";
import type { ArchitectureLayer } from "@/types";

export function ArchitectureNode({
  layer,
  index,
  total,
  isSelected,
  isFlowing,
  onSelect,
}: {
  layer: ArchitectureLayer;
  index: number;
  total: number;
  isSelected: boolean;
  isFlowing: boolean;
  onSelect: () => void;
}) {
  const isLast = index === total - 1;

  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={isSelected}
        className={cn(
          "flex w-full items-center gap-4 rounded-lg border px-5 py-4 text-left transition-colors duration-150 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
          isSelected || isFlowing
            ? "border-accent bg-surface-hover"
            : "border-edge bg-surface hover:border-edge-strong",
        )}
      >
        <span
          className="font-mono text-xs text-accent"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-base font-semibold text-ink">{layer.title}</span>
      </button>
      {!isLast ? (
        <div className="flex justify-start pl-[calc(1.25rem+1.5rem)]" aria-hidden="true">
          <span
            className={cn(
              "h-6 w-px transition-colors duration-150 motion-reduce:transition-none",
              isFlowing ? "bg-accent" : "bg-edge-strong",
            )}
          />
        </div>
      ) : null}
    </li>
  );
}
