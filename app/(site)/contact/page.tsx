import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Start a conversation with Aveniq about a business system you need built.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project."
        description="A direct way to reach out if you already know what you want to talk about."
      >
        <p className="mt-2 max-w-2xl text-sm text-ink-muted">
          Prefer a guided flow instead? Use the{" "}
          <TextLink href="/estimator">Project Estimator</TextLink>.
        </p>
      </PageHero>

      <Section>
        <Container className="max-w-3xl">
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
