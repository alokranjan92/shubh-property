import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  BedDouble,
  CalendarCheck,
  CheckCircle2,
  GraduationCap,
  Hospital,
  MapPin,
  Maximize2,
  PhoneCall,
  School,
  Share2,
  ShieldCheck,
  ShoppingBag
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PremiumNavbar } from "@/components/home/premium-navbar";
import { ProfessionalFooter } from "@/components/home/professional-footer";
import { PropertyCard } from "@/components/property/property-card";
import type { MockProperty } from "@/lib/properties/mock-properties";

type PropertyDetailPageProps = {
  property: MockProperty;
  similarProperties: MockProperty[];
};

function DetailStat({
  icon: Icon,
  label,
  value
}: {
  icon: typeof BedDouble;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      <p className="mt-3 text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}

function NearbyList({
  icon: Icon,
  title,
  items
}: {
  icon: typeof School;
  title: string;
  items: string[];
}) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="font-semibold">{title}</h2>
        </div>
        <ul className="mt-4 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function PropertyDetailPage({ property, similarProperties }: PropertyDetailPageProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello Shubh Property, I am interested in ${property.title} (${property.priceLabel}). Please share details.`
  );

  return (
    <>
      <PremiumNavbar />
      <main className="min-h-screen bg-background text-foreground">
        <section className="border-b border-border bg-secondary/35 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap gap-2">
              {property.isFeatured ? <Badge variant="luxury">Featured</Badge> : null}
              {property.isVerified ? (
                <Badge className="gap-1 bg-emerald-700 text-white">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Verified
                </Badge>
              ) : null}
              <Badge variant="secondary">{property.purpose}</Badge>
              <Badge variant="outline">{property.propertyType}</Badge>
            </div>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-3xl font-semibold tracking-normal sm:text-5xl">
                  {property.title}
                </h1>
                <p className="mt-4 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {property.address}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card px-6 py-5">
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-3xl font-semibold">{property.priceLabel}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={property.images[0]}
                alt={property.title}
                width={1400}
                height={900}
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {property.images.slice(1, 5).map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt={`${property.title} gallery image ${index + 2}`}
                  width={700}
                  height={520}
                  sizes="(max-width: 1024px) 50vw, 18vw"
                  className="aspect-square w-full rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-28 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <DetailStat
                  icon={BedDouble}
                  label="Bedrooms"
                  value={property.bhk ? `${property.bhk} BHK` : "Open layout"}
                />
                <DetailStat icon={Bath} label="Bathrooms" value={`${property.bathrooms}`} />
                <DetailStat
                  icon={Maximize2}
                  label="Area"
                  value={`${property.areaSqFt.toLocaleString("en-IN")} sq.ft`}
                />
                <DetailStat icon={MapPin} label="Locality" value={property.locality} />
              </div>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold">Property Description</h2>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    {property.description}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold">Amenities</h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {property.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2 rounded-lg border border-border p-3">
                        <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-5 lg:grid-cols-3">
                <NearbyList icon={GraduationCap} title="Nearby Schools" items={property.nearbySchools} />
                <NearbyList icon={Hospital} title="Nearby Hospitals" items={property.nearbyHospitals} />
                <NearbyList icon={ShoppingBag} title="Nearby Markets" items={property.nearbyMarkets} />
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold">Location Map</h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Google Maps placeholder for {property.locality}, Dehradun.
                      </p>
                    </div>
                    <Badge variant="outline">
                      {property.latitude}, {property.longitude}
                    </Badge>
                  </div>
                  <div className="mt-5 flex min-h-80 items-center justify-center rounded-lg border border-dashed border-border bg-secondary/50 text-center">
                    <div>
                      <MapPin className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
                      <p className="mt-3 font-semibold">{property.locality}, Dehradun</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Live Google Map will connect here when API key is active.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h2 className="text-2xl font-semibold">Similar Properties</h2>
                <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {similarProperties.map((similarProperty) => (
                    <PropertyCard key={similarProperty.id} property={similarProperty} view="grid" />
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <Card className="shadow-xl">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Inquiry
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold">Interested in this property?</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Contact Shubh Property for details, documents, site visit coordination and
                    local guidance.
                  </p>
                  <div className="mt-6 grid gap-3">
                    <Button asChild size="lg">
                      <a
                        href={`https://wa.me/919900000001?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Share2 className="h-4 w-4" aria-hidden="true" />
                        WhatsApp Inquiry
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="tel:+919900000001">
                        <PhoneCall className="h-4 w-4" aria-hidden="true" />
                        Call Now
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="secondary">
                      <Link href="/contact">
                        <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                        Schedule Visit
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>

        <div className="fixed inset-x-0 bottom-16 z-40 border-t border-border bg-background/95 p-3 shadow-[0_-12px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl md:hidden">
          <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
            <Button asChild variant="outline">
              <a href="tel:+919900000001">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Call
              </a>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Visit
              </Link>
            </Button>
            <Button asChild>
              <a
                href={`https://wa.me/919900000001?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </main>
      <ProfessionalFooter />
    </>
  );
}
