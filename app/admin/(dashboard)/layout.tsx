import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { requireAdmin } from "@/lib/auth/session";

export default async function AdminDashboardLayout({ children }: { children: ReactNode }) {
  const adminUser = await requireAdmin();
  if (!adminUser) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="border-b border-edge md:w-60 md:shrink-0 md:border-b-0 md:border-r">
        <div className="px-4 py-5">
          <span className="font-mono text-sm font-semibold tracking-wide text-ink">
            Aveniq <span className="text-accent">Admin</span>
          </span>
        </div>
        <div className="overflow-x-auto md:overflow-visible">
          <AdminSidebar />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between gap-4 border-b border-edge px-6 py-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink">{adminUser.name}</p>
            <p className="truncate text-xs text-ink-faint">{adminUser.email}</p>
          </div>
          <LogoutButton />
        </header>

        <main className="flex-1 px-6 py-8">{children}</main>
      </div>
    </div>
  );
}
