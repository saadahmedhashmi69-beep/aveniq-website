import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Size = "lg" | "base" | "sm" | "xs";

// A closed union rather than the generic ElementType — see the same
// note in components/ui/Container.tsx.
type TextTag = "p" | "span" | "dt" | "dd" | "label" | "figcaption";

const sizeClasses: Record<Size, string> = {
  lg: "text-lg sm:text-xl leading-relaxed",
  base: "text-base leading-relaxed",
  sm: "text-sm leading-relaxed",
  xs: "text-xs leading-relaxed",
};

export function Text({
  as: Tag = "p",
  size = "base",
  muted = false,
  className,
  children,
}: {
  as?: TextTag;
  size?: Size;
  muted?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={cn(sizeClasses[size], muted ? "text-ink-muted" : "text-ink", className)}>
      {children}
    </Tag>
  );
}
