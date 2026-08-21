import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// A closed union rather than the generic ElementType — see the same
// note in components/ui/Container.tsx.
type SectionTag = "section" | "div" | "article";

export function Section({
  as: Tag = "section",
  id,
  className,
  children,
}: {
  as?: SectionTag;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag id={id} className={cn("py-14 md:py-24 xl:py-32", className)}>
      {children}
    </Tag>
  );
}
