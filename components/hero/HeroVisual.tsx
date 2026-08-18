/**
 * Purely decorative — the headline and supporting copy in Hero.tsx already
 * carry the full message, so this is `aria-hidden`. Built in inline
 * SVG/CSS only (see docs/phase-1-architecture.md, sections F/H): no
 * WebGL, no client JS, no external assets. Reads left-to-right as
 * "scattered inputs → engineered system → organized output."
 */
export function HeroVisual() {
  const scatteredNodes = [
    { x: 50, y: 106, w: 40, h: 28, rotate: -8 },
    { x: 28, y: 206, w: 46, h: 30, rotate: 6 },
    { x: 70, y: 286, w: 36, h: 26, rotate: -5 },
    { x: 38, y: 346, w: 44, h: 28, rotate: 9 },
  ];

  const outputNodes = [
    { y: 102, label: "Website" },
    { y: 212, label: "Business system" },
    { y: 322, label: "Dashboard" },
  ];

  return (
    <svg
      viewBox="0 0 600 480"
      className="h-full w-full"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {/* scattered inputs → converge on the system node */}
      {scatteredNodes.map((node, index) => {
        const cx = node.x + node.w / 2;
        const cy = node.y + node.h / 2;
        return (
          <g key={index}>
            <line
              x1={cx}
              y1={cy}
              x2={250}
              y2={240}
              stroke="var(--color-edge-strong)"
              strokeWidth={1.5}
              strokeDasharray="2 5"
              strokeLinecap="round"
            />
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={node.h}
              rx={6}
              fill="var(--color-surface)"
              stroke="var(--color-edge-strong)"
              strokeWidth={1.5}
              transform={`rotate(${node.rotate} ${cx} ${cy})`}
            />
          </g>
        );
      })}

      {/* the engineered system */}
      <rect
        x={220}
        y={170}
        width={140}
        height={140}
        rx={20}
        fill="var(--color-surface)"
        stroke="var(--color-accent)"
        strokeWidth={2}
      />
      <rect
        x={244}
        y={194}
        width={92}
        height={92}
        rx={14}
        fill="none"
        stroke="var(--color-accent)"
        strokeOpacity={0.35}
        strokeWidth={1.5}
      />

      {/* system → organized, structured output */}
      {outputNodes.map((node, index) => (
        <g key={index}>
          <line
            x1={360}
            y1={240}
            x2={470}
            y2={node.y + 28}
            stroke="var(--color-accent)"
            strokeWidth={1.5}
            className="hero-flow-line"
          />
          <rect
            x={470}
            y={node.y}
            width={110}
            height={56}
            rx={10}
            fill="var(--color-surface)"
            stroke="var(--color-edge)"
            strokeWidth={1.5}
          />
        </g>
      ))}
    </svg>
  );
}
