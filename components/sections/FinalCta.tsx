import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export function FinalCta({
  title,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <Section className="border-t border-edge bg-surface/40">
      <Container className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <Heading as="h2" className="max-w-xl">
          {title}
        </Heading>
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Button href="/estimator" variant="primary">
            Start a Project
          </Button>
          {secondaryLabel && secondaryHref ? (
            <Button href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
