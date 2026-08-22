import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Heading } from "@/components/ui/Heading";
import { Input } from "@/components/ui/Input";
import { Text } from "@/components/ui/Text";
import { Textarea } from "@/components/ui/Textarea";
import {
  updateFinalCtaContentAction,
  updateHeroContentAction,
  updateProcessHeroContentAction,
} from "@/lib/actions/content";
import { getHeroContent, getHomepageFinalCta, getProcessHero } from "@/lib/content";

export const metadata = { title: "Content" };

export default async function AdminContentPage() {
  const [hero, finalCta, processHero] = await Promise.all([
    getHeroContent(),
    getHomepageFinalCta(),
    getProcessHero(),
  ]);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <Heading as="h1" size="h2">
          Content
        </Heading>
        <Text muted size="sm" className="mt-1">
          Edit homepage and process page copy. Changes take effect immediately on the live site.
        </Text>
      </div>

      <section className="rounded-lg border border-edge p-6">
        <Heading as="h2" size="h3" className="mb-4">
          Homepage hero
        </Heading>
        <form action={updateHeroContentAction} className="grid gap-5">
          <FormField label="Headline" htmlFor="headline" required>
            <Textarea id="headline" name="headline" rows={2} required defaultValue={hero.headline} />
          </FormField>
          <FormField label="Subheadline" htmlFor="subheadline" required>
            <Textarea id="subheadline" name="subheadline" rows={3} required defaultValue={hero.subheadline} />
          </FormField>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Primary CTA label" htmlFor="primaryCtaLabel" required>
              <Input id="primaryCtaLabel" name="primaryCtaLabel" required defaultValue={hero.primaryCtaLabel} />
            </FormField>
            <FormField label="Primary CTA link" htmlFor="primaryCtaHref" required>
              <Input id="primaryCtaHref" name="primaryCtaHref" required defaultValue={hero.primaryCtaHref} />
            </FormField>
            <FormField label="Secondary CTA label" htmlFor="secondaryCtaLabel" required>
              <Input
                id="secondaryCtaLabel"
                name="secondaryCtaLabel"
                required
                defaultValue={hero.secondaryCtaLabel}
              />
            </FormField>
            <FormField label="Secondary CTA link" htmlFor="secondaryCtaHref" required>
              <Input id="secondaryCtaHref" name="secondaryCtaHref" required defaultValue={hero.secondaryCtaHref} />
            </FormField>
          </div>
          <div>
            <Button type="submit" variant="primary">
              Save hero
            </Button>
          </div>
        </form>
      </section>

      <section className="rounded-lg border border-edge p-6">
        <Heading as="h2" size="h3" className="mb-4">
          Homepage final CTA
        </Heading>
        <form action={updateFinalCtaContentAction} className="grid gap-5">
          <FormField label="Title" htmlFor="title" required>
            <Textarea id="title" name="title" rows={2} required defaultValue={finalCta.title} />
          </FormField>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Secondary button label (optional)" htmlFor="secondaryLabel">
              <Input id="secondaryLabel" name="secondaryLabel" defaultValue={finalCta.secondaryLabel ?? ""} />
            </FormField>
            <FormField label="Secondary button link (optional)" htmlFor="secondaryHref">
              <Input id="secondaryHref" name="secondaryHref" defaultValue={finalCta.secondaryHref ?? ""} />
            </FormField>
          </div>
          <div>
            <Button type="submit" variant="primary">
              Save final CTA
            </Button>
          </div>
        </form>
      </section>

      <section className="rounded-lg border border-edge p-6">
        <Heading as="h2" size="h3" className="mb-4">
          Process page hero
        </Heading>
        <form action={updateProcessHeroContentAction} className="grid gap-5">
          <FormField label="Eyebrow" htmlFor="eyebrow" required>
            <Input id="eyebrow" name="eyebrow" required defaultValue={processHero.eyebrow} />
          </FormField>
          <FormField label="Title" htmlFor="title-process" required>
            <Textarea id="title-process" name="title" rows={2} required defaultValue={processHero.title} />
          </FormField>
          <FormField label="Description" htmlFor="description" required>
            <Textarea
              id="description"
              name="description"
              rows={3}
              required
              defaultValue={processHero.description}
            />
          </FormField>
          <div>
            <Button type="submit" variant="primary">
              Save process hero
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
