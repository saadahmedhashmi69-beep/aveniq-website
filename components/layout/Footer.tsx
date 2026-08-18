import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/lib/data/nav";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-edge bg-canvas">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between md:py-16">
        <div className="max-w-sm">
          <Link
            href="/"
            className="rounded-sm text-lg font-semibold tracking-tight text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Aveniq
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Premium software engineering, custom business systems, web applications, and digital
            products.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm font-medium text-ink-muted transition-colors duration-150 ease-out motion-reduce:transition-none hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="border-t border-edge py-6">
        <p className="text-xs text-ink-faint">&copy; {currentYear} Aveniq. All rights reserved.</p>
      </Container>
    </footer>
  );
}
