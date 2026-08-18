import { values } from "@/lib/data/values";

export function ValuesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value) => (
        <div key={value.title} className="rounded-lg border border-edge bg-surface p-6">
          <h3 className="text-base font-semibold text-ink">{value.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.description}</p>
        </div>
      ))}
    </div>
  );
}
