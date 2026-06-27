import Image from "next/image";
import Link from "next/link";
import { MapPinned } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/home/section-shell";
import { cities } from "@/lib/homepage/data";

export function BrowseByCity() {
  return (
    <SectionShell
      eyebrow="City-first growth"
      title="Browse by city"
      description="Dehradun is live first. The platform is ready for Uttarakhand, NCR, Rajasthan and every future Indian city."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cities.map((city) => (
          <Link
            key={city.href}
            href={city.href}
            className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative">
              <Image
                src={city.image}
                alt={`${city.name}, ${city.state}`}
                width={1000}
                height={760}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <Badge className="absolute left-3 top-3" variant="secondary">
                {city.state}
              </Badge>
            </div>
            <div className="p-5">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <MapPinned className="h-5 w-5 text-primary" aria-hidden="true" />
                {city.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{city.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
