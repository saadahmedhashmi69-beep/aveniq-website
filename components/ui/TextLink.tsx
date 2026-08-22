import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TextLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-sm text-sm font-medium text-ink underline decoration-edge-strong underline-offset-4 transition-colors duration-150 ease-out motion-reduce:transition-none hover:text-accent hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className,
      )}
    >
      {children}
    </Link>
  );
}
