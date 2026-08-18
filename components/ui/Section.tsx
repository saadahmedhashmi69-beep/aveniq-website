import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  as: Tag = "section",
  id,
  className,
  children,
}: {
  as?: ElementType;
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
