import type { ArchitectureLayer } from "@/types";

export function ArchitectureDetailPanel({
  layer,
  position,
  total,
}: {
  layer: ArchitectureLayer | null;
  position: number;
  total: number;
}) {
  return (
    <div
      className="flex min-h-[220px] flex-col justify-center rounded-xl border border-edge bg-surface p-8"
      aria-live="polite"
    >
      {layer ? (
        <>
          <span className="font-mono text-xs text-accent">
            Layer {position} of {total}
          </span>
          <h3 className="mt-3 text-xl font-semibold text-ink">{layer.title}</h3>
          <p className="mt-3 max-w-sm text-base leading-relaxed text-ink-muted">
            {layer.description}
          </p>
        </>
      ) : (
        <p className="max-w-sm text-base leading-relaxed text-ink-muted">
          Select a layer to see what it does — or run the data flow to see how a request moves
          through the whole system.
        </p>
      )}
    </div>
  );
}
