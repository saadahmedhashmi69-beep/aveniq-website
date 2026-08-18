import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-mono text-sm text-accent">404</span>
      <Heading as="h1" size="h2" className="mt-4">
        This page doesn&apos;t exist.
      </Heading>
      <Text size="base" muted className="mt-4 max-w-md">
        The page you&apos;re looking for isn&apos;t here — it may have moved, or the link may be
        incorrect.
      </Text>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/" variant="primary">
          Back to homepage
        </Button>
        <Button href="/work" variant="secondary">
          View Our Work
        </Button>
      </div>
    </Container>
  );
}
