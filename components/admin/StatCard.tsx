export function StatCard({
  label,
  value,
  sublabel,
}: {
  label: string;
  value: number | string;
  sublabel?: string;
}) {
  return (
    <div className="rounded-lg border border-edge bg-surface p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{label}</p>
      <p className="mt-2 font-mono text-3xl text-ink">{value}</p>
      {sublabel ? <p className="mt-1 text-xs text-ink-faint">{sublabel}</p> : null}
    </div>
  );
}
