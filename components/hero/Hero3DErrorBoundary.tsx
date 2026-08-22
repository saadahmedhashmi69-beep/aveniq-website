"use client";

import { Component, type ReactNode } from "react";

/**
 * WebGL can fail for reasons feature-detection can't catch ahead of time
 * (driver crashes, context loss, GPU blocklisting) — this catches any
 * render-time error from the 3D scene and falls back to the static SVG
 * rather than breaking the whole hero section.
 */
export class Hero3DErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("3D hero scene failed to render, falling back to static visual.", error);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
