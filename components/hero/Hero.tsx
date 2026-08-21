import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { getHeroContent } from "@/lib/content";

export async function Hero() {
  const content = await getHeroContent();

  return (
    <section className="border-b border-edge">
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:py-28">
        <div>
          <Heading as="h1" size="display">
            {content.headline}
          </Heading>
          <Text size="lg" muted className="mt-6 max-w-xl">
            {content.subheadline}
          </Text>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={content.primaryCtaHref} variant="primary">
              {content.primaryCtaLabel}
            </Button>
            <Button href={content.secondaryCtaHref} variant="secondary">
              {content.secondaryCtaLabel}
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
