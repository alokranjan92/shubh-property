import Link from "next/link";
import { Home, MessageCircle, Search, Tag, WalletCards } from "lucide-react";

const mobileNavItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Search", href: "/properties", icon: Search },
  { label: "Buy", href: "/buy", icon: WalletCards },
  { label: "Rent", href: "/rent", icon: Tag },
  { label: "Contact", href: "/contact", icon: MessageCircle }
];

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Mobile quick navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-12px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-5">
        {mobileNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-md px-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <item.icon className="h-5 w-5" aria-hidden="true" />
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
