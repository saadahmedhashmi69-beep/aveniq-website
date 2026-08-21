"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Hero3DErrorBoundary } from "@/components/hero/Hero3DErrorBoundary";
import { HeroVisual } from "@/components/hero/HeroVisual";

const Hero3DScene = dynamic(
  () => import("@/components/hero/Hero3DScene").then((mod) => mod.Hero3DScene),
  { ssr: false },
);

const MIN_WIDTH_FOR_3D = 768;

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Renders the 3D hero scene only when it's actually a good idea: not on
 * a narrow viewport (mobile GPUs and battery budgets don't need this),
 * not when the visitor prefers reduced motion, and not when WebGL isn't
 * available. Starts server-rendered as the plain SVG (so there's no
 * hydration mismatch and no-JS visitors get a complete, real visual) and
 * upgrades to 3D after a client-side capability check.
 */
export function HeroVisualDynamic() {
  const [use3D, setUse3D] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isWideEnough = window.innerWidth >= MIN_WIDTH_FOR_3D;
    // One-time capability check against browser-only APIs (matchMedia,
    // innerWidth, WebGL context) that don't exist during SSR — same
    // justified exception as ContactForm.tsx's sessionStorage read.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUse3D(!prefersReducedMotion && isWideEnough && supportsWebGL());
  }, []);

  if (!use3D) {
    return <HeroVisual />;
  }

  return (
    <Hero3DErrorBoundary fallback={<HeroVisual />}>
      <Hero3DScene />
    </Hero3DErrorBoundary>
  );
}
