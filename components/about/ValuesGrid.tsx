import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { values } from "@/lib/data/values";

export function ValuesGrid() {
  return (
    <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value) => (
        <StaggerItem key={value.title} className="rounded-lg border border-edge bg-surface p-6">
          <h3 className="text-base font-semibold text-ink">{value.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.description}</p>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
