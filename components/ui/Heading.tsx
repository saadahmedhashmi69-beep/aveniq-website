import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Level = "h1" | "h2" | "h3";
type Size = "display" | Level;

const sizeClasses: Record<Size, string> = {
  display: "text-display font-semibold text-ink",
  h1: "text-h1 font-semibold text-ink",
  h2: "text-h2 font-semibold text-ink",
  h3: "text-h3 font-semibold text-ink",
};

export function Heading({
  as = "h2",
  size,
  id,
  className,
  children,
}: {
  as?: Level;
  size?: Size;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const Tag = as;
  return (
    <Tag id={id} className={cn(sizeClasses[size ?? as], className)}>
      {children}
    </Tag>
  );
}
