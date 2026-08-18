import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/types";

function CategorySections({ category }: { category: ServiceCategory }) {
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-3">
      <div>
        <Text size="xs" className="font-semibold uppercase tracking-wide text-ink-faint">
          The problem
        </Text>
        <Text size="sm" muted className="mt-2">
          {category.problem}
        </Text>
      </div>
      <div>
        <Text size="xs" className="font-semibold uppercase tracking-wide text-ink-faint">
          What we build
        </Text>
        <ul className="mt-2 flex flex-col gap-1.5">
          {category.whatWeBuild.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Text size="xs" className="font-semibold uppercase tracking-wide text-ink-faint">
          Why it matters
        </Text>
        <Text size="sm" muted className="mt-2">
          {category.whyItMatters}
        </Text>
      </div>
    </div>
  );
}

export function ServiceCategories({ categories }: { categories: ServiceCategory[] }) {
  const featured = categories.find((category) => category.featured);
  const rest = categories.filter((category) => !category.featured);

  return (
    <div className="flex flex-col gap-6">
      {featured ? (
        <div className="rounded-xl border border-accent/50 bg-surface p-8 shadow-[0_0_0_1px_rgba(0,229,255,0.08),0_24px_48px_-24px_rgba(0,229,255,0.25)] md:p-10">
          <Heading as="h2" size="h3">
            {featured.title}
          </Heading>
          <CategorySections category={featured} />
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-2">
        {rest.map((category, index) => (
          <div
            key={category.title}
            className={cn(
              "rounded-xl border border-edge bg-surface p-8",
              index === rest.length - 1 && rest.length % 2 !== 0 && "lg:col-span-2",
            )}
          >
            <Heading as="h2" size="h3">
              {category.title}
            </Heading>
            <CategorySections category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
