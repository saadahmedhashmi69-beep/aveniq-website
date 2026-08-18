import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { HeroVisual } from "@/components/hero/HeroVisual";

export function Hero() {
  return (
    <section className="border-b border-edge">
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:py-28">
        <div>
          <Heading as="h1" size="display">
            We Build Digital Systems That Move Businesses Forward
          </Heading>
          <Text size="lg" muted className="mt-6 max-w-xl">
            From high-performance websites to custom business software, CRMs, dashboards, and
            automation — we design and build systems around the way your business actually works.
          </Text>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/estimator" variant="primary">
              Start a Project
            </Button>
            <Button href="/work" variant="secondary">
              View Our Work
            </Button>
          </div>
        </div>

        <div className="mx-auto aspect-[5/4] w-full max-w-md lg:max-w-none">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
