import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { capabilities } from "@/lib/data/capabilities";
import { cn } from "@/lib/utils";

export function Capabilities() {
  const featured = capabilities.find((item) => item.featured);
  const rest = capabilities.filter((item) => !item.featured);

  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Badge>What we build</Badge>
          <Heading as="h2" className="mt-4">
            We don&apos;t just build pages. We build systems.
          </Heading>
          <Text size="lg" muted className="mt-5">
            Every project starts with the same question: what does your business actually need to
            run better? The answer shapes what we build.
          </Text>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured ? (
            <div className="flex flex-col rounded-xl border border-accent/50 bg-surface p-8 shadow-[0_0_0_1px_rgba(0,229,255,0.08),0_24px_48px_-24px_rgba(0,229,255,0.25)] lg:col-span-1 lg:row-span-2">
              <Heading as="h3" className="text-ink">
                {featured.title}
              </Heading>
              <Text size="base" muted className="mt-4">
                {featured.description}
              </Text>
              <Text size="sm" muted className="mt-auto border-t border-edge pt-6 lg:mt-16">
                This is where most engagements start.
              </Text>
            </div>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
            {rest.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "rounded-lg border border-edge bg-surface p-6 transition-colors duration-150 ease-out motion-reduce:transition-none hover:border-edge-strong",
                  index === rest.length - 1 && rest.length % 2 !== 0 && "sm:col-span-2",
                )}
              >
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <Text size="sm" muted className="mt-2">
                  {item.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
