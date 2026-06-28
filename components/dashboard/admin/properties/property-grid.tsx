import Link from "next/link";
import { Edit3, Eye, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { AdminProperty } from "@/lib/properties/admin-property-data";
import { PropertyStatusBadge } from "./property-status-badge";

type PropertyGridProps = {
  properties: AdminProperty[];
};

export function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden">
          <div className="flex h-40 items-center justify-center bg-secondary text-sm font-medium text-muted-foreground">
            Cover image placeholder
          </div>
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              <PropertyStatusBadge status={property.status} />
              <PropertyStatusBadge status={property.verificationStatus} />
              {property.featured ? <PropertyStatusBadge status="Featured" /> : null}
            </div>
            <h3 className="mt-4 text-base font-semibold leading-6">{property.title}</h3>
            <p className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {property.locality}, {property.city}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-md bg-secondary/60 p-3">
                <p className="text-muted-foreground">Price</p>
                <p className="mt-1 font-semibold">{property.priceLabel}</p>
              </div>
              <div className="rounded-md bg-secondary/60 p-3">
                <p className="text-muted-foreground">Area</p>
                <p className="mt-1 font-semibold">
                  {property.area} {property.areaUnit}
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button asChild className="min-h-11 flex-1">
                <Link href={`/dashboard/admin/properties/${property.id}`}>
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  View
                </Link>
              </Button>
              <Button asChild variant="outline" className="min-h-11 flex-1">
                <Link href={`/dashboard/admin/properties/${property.id}/edit`}>
                  <Edit3 className="h-4 w-4" aria-hidden="true" />
                  Edit
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
