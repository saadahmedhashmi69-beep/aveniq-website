import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

/**
 * Shared page-hero pattern reused across the Phase 4 secondary pages so
 * every page opens the same way instead of each inventing its own hero
 * markup.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-edge">
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl">
          <Badge>{eyebrow}</Badge>
          <Heading as="h1" size="h1" className="mt-4">
            {title}
          </Heading>
          <Text size="lg" muted className="mt-5 max-w-2xl">
            {description}
          </Text>
        </div>
        {children}
      </Container>
    </section>
  );
}
