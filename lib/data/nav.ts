import type { NavItem } from "@/types";

/**
 * Reflects the approved sitemap in docs/phase-1-architecture.md (section D).
 * Destinations are the pages' final intended routes; Services/Work/Process/
 * About are built in later phases and will resolve at these exact paths —
 * no link updates will be needed once each page ships.
 */
export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];
