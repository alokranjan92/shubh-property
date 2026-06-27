import Link from "next/link";
import { Building2, Menu, PhoneCall, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/homepage/data";

export function PremiumNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Shubh Property home">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold">Shubh Property</span>
            <span className="block text-xs text-muted-foreground">Property + Construction</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            Verified marketplace
          </div>
          <Button asChild>
            <Link href="/contact">
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Contact
            </Link>
          </Button>
        </div>

        <details className="relative lg:hidden">
          <summary
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-input bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </summary>
          <div className="absolute right-0 top-12 w-64 rounded-lg border border-border bg-card p-3 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3 w-full">
              <Link href="/contact">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Contact
              </Link>
            </Button>
          </div>
        </details>
      </nav>
    </header>
  );
}
