import Link from "next/link";
import {
  BarChart3,
  Building2,
  Home,
  Settings,
  ShieldCheck,
  Store,
  UserRound
} from "lucide-react";
import { SafeSignOutButton } from "@/components/auth/safe-sign-out-button";
import { SafeUserButton } from "@/components/auth/safe-user-button";
import { Button } from "@/components/ui/button";
import type { AppRole } from "@/lib/auth/roles";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: BarChart3 },
  { label: "Admin", href: "/dashboard/admin", icon: ShieldCheck },
  { label: "Agent", href: "/dashboard/agent", icon: Building2 },
  { label: "Customer", href: "/dashboard/customer", icon: UserRound },
  { label: "Supplier", href: "/dashboard/supplier", icon: Store },
  { label: "Settings", href: "/user-profile", icon: Settings }
];

type DashboardShellProps = {
  role: AppRole | null;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function DashboardShell({ role, title, description, children }: DashboardShellProps) {
  return (
    <main className="min-h-screen bg-secondary/30 text-foreground">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-border bg-card px-5 py-6 lg:block">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block font-semibold">Shubh Property</span>
            <span className="text-xs text-muted-foreground">Account Dashboard</span>
          </span>
        </Link>

        <nav className="mt-8 space-y-1" aria-label="Dashboard navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute inset-x-5 bottom-6 rounded-lg border border-border bg-background p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Active role
          </p>
          <p className="mt-2 text-lg font-semibold capitalize">{role ?? "Mock mode"}</p>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-xl">
          <div className="flex min-h-16 items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="lg:hidden">
              <Link href="/">
                <Home className="h-4 w-4" aria-hidden="true" />
                Home
              </Link>
            </Button>
            <div className="hidden lg:block">
              <p className="text-sm text-muted-foreground">Find Property. Build Better. Live Better.</p>
            </div>
            <div className="flex items-center gap-3">
              <SafeSignOutButton />
              <SafeUserButton />
            </div>
          </div>
        </header>

        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Dashboard
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">{title}</h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                {description}
              </p>
            </div>

            <div className="mt-6">{children}</div>
          </div>
        </section>
      </div>

      <nav
        aria-label="Mobile dashboard navigation"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden"
      >
        <div className="mx-auto grid max-w-md grid-cols-5">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-md px-1 text-[11px] font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <item.icon className="h-5 w-5" aria-hidden="true" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
