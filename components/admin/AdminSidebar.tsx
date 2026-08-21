"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminNavItems } from "@/lib/data/admin-nav";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Admin" className="flex flex-col gap-1 p-4">
      {adminNavItems.map((item) => {
        const isActive =
          item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ease-out motion-reduce:transition-none",
              isActive
                ? "bg-accent/10 text-accent"
                : "text-ink-muted hover:bg-surface hover:text-ink",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
