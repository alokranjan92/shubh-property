import Link from "next/link";
import { ChevronRight, Home, Menu, Search } from "lucide-react";
import { SafeSignOutButton } from "@/components/auth/safe-sign-out-button";
import { SafeUserButton } from "@/components/auth/safe-user-button";
import { Button } from "@/components/ui/button";

type AdminTopbarProps = {
  breadcrumb: string;
};

export function AdminTopbar({ breadcrumb }: AdminTopbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="flex min-h-16 items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Button variant="ghost" size="icon" className="lg:hidden" type="button" aria-label="Admin menu">
            <Menu className="h-5 w-5" aria-hidden="true" />
          </Button>
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Link href="/" className="inline-flex items-center gap-1 hover:text-foreground">
                <Home className="h-3.5 w-3.5" aria-hidden="true" />
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link href="/dashboard/admin" className="hover:text-foreground">
                Admin
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="truncate text-foreground">{breadcrumb}</span>
            </div>
            <p className="mt-1 hidden text-sm text-muted-foreground sm:block">
              Find Property. Build Better. Live Better.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="outline" size="icon" type="button" aria-label="Search admin">
            <Search className="h-4 w-4" aria-hidden="true" />
          </Button>
          <SafeSignOutButton />
          <SafeUserButton />
        </div>
      </div>
    </header>
  );
}
