import Link from "next/link";
import { ArrowLeft, Edit3, Eye, MapPin, MessageSquareText } from "lucide-react";
import { AdminPageHeader } from "@/components/dashboard/admin/admin-page-header";
import { AdminSectionCard } from "@/components/dashboard/admin/admin-section-card";
import { Button } from "@/components/ui/button";
import type { AdminProperty } from "@/lib/properties/admin-property-data";
import { PropertySeoPreview } from "./property-seo-preview";
import { PropertyStatusBadge } from "./property-status-badge";

type PropertyDetailViewProps = {
  property: AdminProperty;
};

export function PropertyDetailView({ property }: PropertyDetailViewProps) {
  return (
    <>
      <AdminPageHeader
        title={property.title}
        description="Review listing quality, SEO readiness, media placeholders, enquiry performance and approval status."
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="outline" className="min-h-11">
          <Link href="/dashboard/admin/properties">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Properties
          </Link>
        </Button>
        <Button asChild className="min-h-11">
          <Link href={`/dashboard/admin/properties/${property.id}/edit`}>
            <Edit3 className="h-4 w-4" aria-hidden="true" />
            Edit Property
          </Link>
        </Button>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <AdminSectionCard title="Property Summary">
          <div className="flex h-64 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
            Images placeholder
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <PropertyStatusBadge status={property.status} />
            <PropertyStatusBadge status={property.verificationStatus} />
            {property.featured ? <PropertyStatusBadge status="Featured" /> : null}
          </div>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">{property.description}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-secondary/60 p-4">
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="mt-1 text-xl font-semibold">{property.priceLabel}</p>
            </div>
            <div className="rounded-lg bg-secondary/60 p-4">
              <p className="text-sm text-muted-foreground">Area</p>
              <p className="mt-1 text-xl font-semibold">
                {property.area} {property.areaUnit}
              </p>
            </div>
            <div className="rounded-lg bg-secondary/60 p-4">
              <p className="text-sm text-muted-foreground">Purpose</p>
              <p className="mt-1 text-xl font-semibold">{property.purpose}</p>
            </div>
          </div>
        </AdminSectionCard>

        <div className="space-y-5">
          <AdminSectionCard title="Location">
            <p className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {property.fullAddress}
            </p>
            <div className="mt-4 rounded-lg bg-secondary/60 p-4 text-sm">
              Lat {property.latitude}, Long {property.longitude}
            </div>
          </AdminSectionCard>

          <AdminSectionCard title="Enquiry Stats">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-secondary/60 p-4">
                <Eye className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-3 text-2xl font-semibold">{property.views.toLocaleString("en-IN")}</p>
                <p className="text-sm text-muted-foreground">Views</p>
              </div>
              <div className="rounded-lg bg-secondary/60 p-4">
                <MessageSquareText className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-3 text-2xl font-semibold">{property.enquiries}</p>
                <p className="text-sm text-muted-foreground">Enquiries</p>
              </div>
            </div>
          </AdminSectionCard>
        </div>
      </div>

      <AdminSectionCard title="SEO Preview">
        <PropertySeoPreview title={property.seoTitle} description={property.seoDescription} slug={property.slug} />
      </AdminSectionCard>
    </>
  );
}
