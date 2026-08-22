"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { architectureLayers } from "@/lib/data/architecture";
import { ArchitectureDetailPanel } from "@/components/demos/architecture/ArchitectureDetailPanel";
import { ArchitectureNode } from "@/components/demos/architecture/ArchitectureNode";

const STEP_DELAY_MS = 550;
const REDUCED_MOTION_STEP_DELAY_MS = 80;

export function ArchitectureDemo() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [flowIndex, setFlowIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  function clearTimers() {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  }

  function playFlow() {
    clearTimers();
    setSelectedId(null);
    setIsPlaying(true);

    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stepDelay = prefersReducedMotion ? REDUCED_MOTION_STEP_DELAY_MS : STEP_DELAY_MS;

    architectureLayers.forEach((_, index) => {
      const timeoutId = setTimeout(() => {
        setFlowIndex(index);
        if (index === architectureLayers.length - 1) {
          const finishId = setTimeout(() => {
            setIsPlaying(false);
            setFlowIndex(null);
          }, stepDelay);
          timeouts.current.push(finishId);
        }
      }, stepDelay * index);
      timeouts.current.push(timeoutId);
    });
  }

  function reset() {
    clearTimers();
    setSelectedId(null);
    setFlowIndex(null);
    setIsPlaying(false);
  }

  const selectedLayer = architectureLayers.find((layer) => layer.id === selectedId) ?? null;
  const position = selectedLayer ? architectureLayers.indexOf(selectedLayer) + 1 : 0;

  return (
    <Section className="border-b border-edge">
      <Container>
        <div className="max-w-2xl">
          <Badge>Interactive Architecture Demo</Badge>
          <Heading as="h2" className="mt-4">
            See how a business system actually fits together.
          </Heading>
          <Text size="lg" muted className="mt-5">
            A custom system connects the customer experience, the rules that run your business,
            and your data into one platform. Select a layer below to see what it does, or run the
            data flow to see how a request moves through the whole system.
          </Text>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 text-sm text-ink-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-ink-faint" aria-hidden="true" />
              Business User
            </span>
            <ol className="flex flex-col">
              {architectureLayers.map((layer, index) => (
                <ArchitectureNode
                  key={layer.id}
                  layer={layer}
                  index={index}
                  total={architectureLayers.length}
                  isSelected={selectedId === layer.id}
                  isFlowing={flowIndex !== null && flowIndex >= index}
                  onSelect={() => {
                    clearTimers();
                    setIsPlaying(false);
                    setFlowIndex(null);
                    setSelectedId(layer.id);
                  }}
                />
              ))}
            </ol>

            <div className="mt-6 flex flex-wrap gap-4">
              <Button type="button" variant="secondary" onClick={playFlow} disabled={isPlaying}>
                {isPlaying ? "Running data flow…" : "Run data flow"}
              </Button>
              <Button type="button" variant="ghost" onClick={reset}>
                Reset
              </Button>
            </div>
          </div>

          <ArchitectureDetailPanel
            layer={selectedLayer}
            position={position}
            total={architectureLayers.length}
          />
        </div>
      </Container>
    </Section>
  );
}
