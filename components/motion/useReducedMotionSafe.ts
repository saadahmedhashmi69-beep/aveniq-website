"use client";

import { useEffect, useState } from "react";

/**
 * Reads prefers-reduced-motion without the hydration-mismatch risk of
 * framer-motion's own useReducedMotion() hook, which resolves
 * synchronously on the client's first render — see the comment in
 * Reveal.tsx for the full explanation and how this was confirmed with a
 * reduced-motion browser context. Starts false (matching the server) on
 * both the server and the client's first paint, then updates in an
 * effect once the real preference is known.
 */
export function useReducedMotionSafe(): boolean {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    // One-time read of a browser-only API (matchMedia) that doesn't
    // exist during SSR — same justified exception as ContactForm.tsx's
    // sessionStorage read and HeroVisualDynamic.tsx's capability check.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduceMotion(query.matches);
    const onChange = () => setReduceMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduceMotion;
}
