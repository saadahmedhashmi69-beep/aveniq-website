"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

/**
 * Fades and slides a block into place the first time it scrolls into
 * view. Used to wrap server-rendered section content — the children
 * themselves can be (and usually are) plain Server Components; only this
 * wrapper needs to be a Client Component. See useReducedMotionSafe.ts
 * for why reduced-motion detection doesn't use framer-motion's own hook.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotionSafe();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
