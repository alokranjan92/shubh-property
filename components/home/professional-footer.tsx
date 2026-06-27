import Link from "next/link";
import { Building2, Mail, MapPin, MessageCircle } from "lucide-react";
import { footerLinks } from "@/lib/homepage/data";

export function ProfessionalFooter() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Building2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-semibold">Shubh Property</span>
              <span className="text-sm text-muted-foreground">India&apos;s Property + Construction Marketplace</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
            Operating in Dehradun today with a scalable marketplace foundation for
            Uttarakhand, Uttar Pradesh, Rajasthan, Delhi NCR and all Indian states.
          </p>
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              Dehradun, Uttarakhand, India
            </p>
            <p className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-primary" aria-hidden="true" />
              Property, supplier and partnership enquiries
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              hello@shubhproperty.in
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Shubh Property. All rights reserved.</p>
        <p>Built for trust, search visibility and national marketplace scale.</p>
      </div>
    </footer>
  );
}
