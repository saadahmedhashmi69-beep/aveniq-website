export interface AdminNavItem {
  label: string;
  href: string;
}

export const adminNavItems: AdminNavItem[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "Inquiries", href: "/admin/inquiries" },
  { label: "Projects", href: "/admin/projects" },
  { label: "Services", href: "/admin/services" },
  { label: "Content", href: "/admin/content" },
  { label: "SEO", href: "/admin/seo" },
  { label: "Media", href: "/admin/media" },
];
