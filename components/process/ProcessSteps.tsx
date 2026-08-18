import { Text } from "@/components/ui/Text";
import { processStages } from "@/lib/data/process";

/**
 * The full, deliverables-inclusive version of the process — distinct
 * from the condensed lib/data/process.ts summary shown on the homepage
 * (components/sections/ProcessOverview.tsx, left untouched).
 */
export function ProcessSteps() {
  return (
    <ol className="flex flex-col divide-y divide-edge border-y border-edge">
      {processStages.map((stage) => (
        <li key={stage.number} className="flex flex-col gap-4 py-8 sm:flex-row sm:gap-10">
          <span className="font-mono text-sm text-accent sm:w-14 sm:shrink-0" aria-hidden="true">
            {stage.number}
          </span>
          <div>
            <h3 className="text-xl font-semibold text-ink">{stage.title}</h3>
            <Text size="base" muted className="mt-2 max-w-xl">
              {stage.summary}
            </Text>
            <ul className="mt-4 flex flex-wrap gap-2">
              {stage.deliverables.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-edge bg-surface px-3 py-1.5 text-xs text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
