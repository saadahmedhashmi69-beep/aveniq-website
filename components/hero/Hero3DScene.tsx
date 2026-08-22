"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

// Mirrors the brand tokens in app/globals.css (--color-accent,
// --color-edge-strong) — hardcoded because Three.js materials need
// literal color values, not CSS custom properties.
const ACCENT = "#00e5ff";
const EDGE = "#63656f";
const INPUT = "#8892a0";

const inputPositions: [number, number, number][] = [
  [-2.4, 1.2, -0.4],
  [-2.1, -1.1, 0.4],
  [-2.6, 0.1, 0.9],
  [-1.7, 1.7, -1.0],
  [-1.9, -1.7, -0.3],
];

function CoreNode() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
      ref.current.rotation.x += delta * 0.05;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.9, 1]} />
      <meshStandardMaterial color={ACCENT} wireframe emissive={ACCENT} emissiveIntensity={0.5} />
    </mesh>
  );
}

function InputNode({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.7}>
      <mesh position={position}>
        <boxGeometry args={[0.22, 0.22, 0.22]} />
        <meshStandardMaterial color={INPUT} />
      </mesh>
    </Float>
  );
}

function Connections() {
  return (
    <>
      {inputPositions.map((pos, i) => (
        <Line
          key={i}
          points={[pos, [0, 0, 0]]}
          color={EDGE}
          lineWidth={1}
          dashed
          dashSize={0.1}
          gapSize={0.08}
          transparent
          opacity={0.5}
        />
      ))}
    </>
  );
}

/**
 * The 3D counterpart to HeroVisual.tsx's SVG diagram — same narrative
 * ("scattered inputs converge on an engineered system"), rendered as a
 * slowly rotating wireframe core with orbiting input nodes. Only
 * mounted client-side, behind capability checks — see
 * HeroVisualDynamic.tsx for the fallback logic (reduced motion, narrow
 * viewports, and missing WebGL all fall back to the static SVG).
 */
export function Hero3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={1.4} color={ACCENT} />
      <pointLight position={[-3, -2, -2]} intensity={0.3} color={INPUT} />
      <CoreNode />
      {inputPositions.map((pos, i) => (
        <InputNode key={i} position={pos} />
      ))}
      <Connections />
    </Canvas>
  );
}
