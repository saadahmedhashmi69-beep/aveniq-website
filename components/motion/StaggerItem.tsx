"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

type Tag = "div" | "li";

/**
 * One item inside a StaggerGroup.tsx — see that file for the pattern
 * and the reduced-motion rationale.
 */
export function StaggerItem({
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
    if (as === "li") return <li className={className}>{children}</li>;
    return <div className={className}>{children}</div>;
  }

  if (as === "li") {
    return (
      <motion.li className={className} variants={itemVariants}>
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
