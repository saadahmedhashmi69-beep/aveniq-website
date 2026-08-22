"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { navItems } from "@/lib/data/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-canvas/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="rounded-sm text-lg font-semibold tracking-tight text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          onClick={() => setOpen(false)}
        >
          Aveniq
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
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

        <div className="hidden md:block">
          <Button href="/estimator" variant="primary" className="h-11 md:h-11 px-5">
            Start a Project
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      <div
        id={panelId}
        className={cn(
          "grid overflow-hidden border-b border-edge bg-canvas transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <Container as="nav" aria-label="Mobile" className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-medium text-ink-muted transition-colors duration-150 ease-out motion-reduce:transition-none hover:bg-surface hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/estimator" variant="primary" className="mt-2 w-full">
              Start a Project
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
