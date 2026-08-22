import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// A closed union rather than the generic ElementType — resolving JSX
// children for a fully generic ElementType requires checking against
// every entry in JSX.IntrinsicElements, which @react-three/fiber's
// three.js element augmentation (see components/hero/Hero3DScene.tsx)
// makes incompatible with plain children: ReactNode. Narrowing to the
// tags this component actually renders avoids that entirely.
type ContainerTag = "div" | "nav" | "section" | "article" | "header" | "footer" | "main";

export function Container({
  as: Tag = "div",
  className,
  children,
}: {
  as?: ContainerTag;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16", className)}>
      {children}
    </Tag>
  );
}
