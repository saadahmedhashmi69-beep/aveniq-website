import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export function ComingSoon({
  title,
  description,
  countLabel,
  count,
}: {
  title: string;
  description: string;
  countLabel: string;
  count: number;
}) {
  return (
    <div>
      <Heading as="h1" size="h2">
        {title}
      </Heading>
      <Text muted size="sm" className="mt-1">
        {description}
      </Text>

      <div className="mt-8 rounded-lg border border-dashed border-edge-strong p-8 text-center">
        <Text size="sm" className="font-mono text-ink">
          {count} {countLabel}
        </Text>
        <Text size="sm" muted className="mt-2">
          Full management tools for this section are coming next.
        </Text>
      </div>
    </div>
  );
}
