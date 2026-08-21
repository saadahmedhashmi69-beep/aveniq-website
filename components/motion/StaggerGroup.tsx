"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

type Tag = "div" | "ul" | "ol";

/**
 * Pairs with StaggerItem.tsx — wrap a list/grid in this, wrap each item
 * in StaggerItem, and framer-motion cascades the reveal automatically
 * via shared variant names (no manual index/delay math).
 *
 * `as` is a closed union (not a generic ElementType) and each tag is a
 * literal motion.<tag> JSX element rather than a dynamically-chosen
 * component reference — see components/ui/Container.tsx's comment for
 * why a generic polymorphic `as` breaks once @react-three/fiber is
 * anywhere in the program. See Reveal.tsx for why reduced-motion
 * detection uses a state+effect pattern instead of framer-motion's own
 * useReducedMotion() hook (avoids a real hydration mismatch).
 */
export function StaggerGroup({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const reduceMotion = useReducedMotionSafe();

  if (reduceMotion) {
    if (as === "ul") return <ul className={className}>{children}</ul>;
    if (as === "ol") return <ol className={className}>{children}</ol>;
    return <div className={className}>{children}</div>;
  }

  const motionProps = {
    className,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.2 },
    variants: containerVariants,
  };

  if (as === "ul") return <motion.ul {...motionProps}>{children}</motion.ul>;
  if (as === "ol") return <motion.ol {...motionProps}>{children}</motion.ol>;
  return <motion.div {...motionProps}>{children}</motion.div>;
}
