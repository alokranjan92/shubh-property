"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { adminNavItems } from "@/lib/dashboard/admin-data";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-border bg-card px-5 py-6 lg:block">
      <Link href="/" className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Building2 className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block font-semibold text-foreground">Shubh Property</span>
          <span className="text-xs text-muted-foreground">Admin Control Center</span>
        </span>
      </Link>

      <nav className="mt-8 space-y-1" aria-label="Admin navigation">
        {adminNavItems.map((item) => {
          const isActive =
            pathname === item.href || (item.href !== "/dashboard/admin" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="absolute inset-x-5 bottom-6 rounded-lg border border-border bg-background p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b8860b]">
          Market Focus
        </p>
        <p className="mt-2 text-lg font-semibold">Dehradun</p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Built for Uttarakhand today, ready for all India expansion.
        </p>
      </div>
    </aside>
  );
}
