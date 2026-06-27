import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  BedDouble,
  CheckCircle2,
  GitCompare,
  Heart,
  MapPin,
  Maximize2,
  MessageCircle,
  PhoneCall,
  Share2,
  Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";
import type { MockProperty } from "@/lib/properties/mock-properties";

type PropertyCardProps = {
  property: MockProperty;
  view: "grid" | "list";
};

export function PropertyCard({ property, view }: PropertyCardProps) {
  const isList = view === "list";
  const whatsappMessage = encodeURIComponent(
    `Hello Shubh Property, I am interested in ${property.title} (${property.priceLabel}).`
  );

  return (
    <Card
      className={cn(
        "group overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl",
        isList && "grid md:grid-cols-[320px_1fr]"
      )}
    >
      <Link href={`/properties/${property.slug}`} className="relative block overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          width={900}
          height={680}
          sizes={
            isList
              ? "(max-width: 768px) 100vw, 320px"
              : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          }
          className={cn(
            "w-full object-cover transition duration-500 group-hover:scale-105",
            isList ? "h-full min-h-72 md:aspect-auto" : "aspect-[4/3]"
          )}
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {property.isFeatured ? <Badge variant="luxury">Featured</Badge> : null}
          {property.isVerified ? (
            <Badge className="gap-1 bg-emerald-700 text-white">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              Verified
            </Badge>
          ) : null}
        </div>
        <div className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {property.purpose}
        </div>
      </Link>

      <CardContent className="flex flex-col p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-medium text-primary">{property.propertyType}</p>
            <Link href={`/properties/${property.slug}`}>
              <h2 className="mt-1 line-clamp-2 text-xl font-semibold leading-7 hover:text-primary">
                {property.title}
              </h2>
            </Link>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {property.locality}, {property.city}
            </p>
          </div>
          <p className="shrink-0 text-left text-xl font-semibold sm:text-right">{property.priceLabel}</p>
        </div>

        <p className={cn("mt-4 text-sm leading-6 text-muted-foreground", isList ? "line-clamp-3" : "line-clamp-2")}>
          {property.description}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-primary" aria-hidden="true" />
            {property.bhk ? `${property.bhk} BHK` : "Open"}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-primary" aria-hidden="true" />
            {property.bathrooms} Bath
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 className="h-4 w-4 text-primary" aria-hidden="true" />
            {property.areaSqFt.toLocaleString("en-IN")} sq.ft
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {property.amenities.slice(0, isList ? 5 : 3).map((amenity) => (
            <span
              key={amenity}
              className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <Button type="button" variant="outline" size="icon" aria-label="Save property">
            <Heart className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button type="button" variant="outline" size="icon" aria-label="Share property">
            <Share2 className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button type="button" variant="outline" size="icon" aria-label="Compare property">
            <GitCompare className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            Locality verified
          </div>
          <div className="grid grid-cols-3 gap-2 sm:flex">
            <Button asChild variant="outline">
              <a href="tel:+919900000001">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Call
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a
                href={`https://wa.me/919900000001?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </Button>
            <Button asChild>
              <Link href={`/properties/${property.slug}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
