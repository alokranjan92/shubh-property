import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bath, BedDouble, MapPin, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionShell } from "@/components/home/section-shell";
import { featuredProperties } from "@/lib/homepage/data";

export function FeaturedProperties() {
  return (
    <SectionShell
      id="featured-properties"
      eyebrow="Curated listings"
      title="Featured properties in Dehradun"
      description="Premium, family-ready and investment-focused properties structured for verified discovery."
      className="bg-background"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {featuredProperties.map((property) => (
          <Card
            key={property.href}
            className="group overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative overflow-hidden">
              <Image
                src={property.image}
                alt={property.title}
                width={1200}
                height={820}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 flex gap-2">
                <Badge>{property.purpose}</Badge>
                <Badge variant="secondary">{property.type}</Badge>
              </div>
            </div>
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="line-clamp-2 text-lg font-semibold leading-6">{property.title}</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {property.location}
                  </p>
                </div>
                <Link
                  href={property.href}
                  aria-label={`View ${property.title}`}
                  className="rounded-full border border-border p-2 transition-colors hover:bg-secondary"
                >
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-5 text-2xl font-semibold">{property.price}</p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <BedDouble className="h-4 w-4 text-primary" aria-hidden="true" />
                  {property.beds} Beds
                </span>
                <span className="flex items-center gap-1.5">
                  <Bath className="h-4 w-4 text-primary" aria-hidden="true" />
                  {property.baths} Baths
                </span>
                <span>{property.area}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild size="lg" variant="outline">
          <Link href="/properties">
            View all properties <MoveRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </SectionShell>
  );
}
