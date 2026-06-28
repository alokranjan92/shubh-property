import Link from "next/link";
import { Edit3, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AdminProperty } from "@/lib/properties/admin-property-data";
import { PropertyStatusBadge } from "./property-status-badge";

type PropertyTableProps = {
  properties: AdminProperty[];
};

export function PropertyTable({ properties }: PropertyTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] text-left text-sm">
          <thead className="border-b border-border bg-secondary/60 text-xs uppercase tracking-[0.12em] text-muted-foreground">
            <tr>
              <th className="px-4 py-3">
                <input type="checkbox" aria-label="Select all properties" className="h-4 w-4 rounded border-border" />
              </th>
              <th className="px-4 py-3">Property</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Purpose</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Verification</th>
              <th className="px-4 py-3">Performance</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {properties.map((property) => (
              <tr key={property.id} className="align-top hover:bg-secondary/35">
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    aria-label={`Select ${property.title}`}
                    className="h-4 w-4 rounded border-border"
                  />
                </td>
                <td className="px-4 py-4">
                  <p className="font-semibold text-foreground">{property.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {property.type} • {property.area} {property.areaUnit}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <PropertyStatusBadge status={property.featured ? "Featured" : "Standard"} />
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium">{property.locality}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{property.city}, {property.state}</p>
                </td>
                <td className="px-4 py-4">{property.purpose}</td>
                <td className="px-4 py-4 font-semibold">{property.priceLabel}</td>
                <td className="px-4 py-4">
                  <PropertyStatusBadge status={property.status} />
                </td>
                <td className="px-4 py-4">
                  <PropertyStatusBadge status={property.verificationStatus} />
                </td>
                <td className="px-4 py-4">
                  <p>{property.views.toLocaleString("en-IN")} views</p>
                  <p className="mt-1 text-xs text-muted-foreground">{property.enquiries} enquiries</p>
                </td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="icon" aria-label={`View ${property.title}`}>
                      <Link href={`/dashboard/admin/properties/${property.id}`}>
                        <Eye className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="icon" aria-label={`Edit ${property.title}`}>
                      <Link href={`/dashboard/admin/properties/${property.id}/edit`}>
                        <Edit3 className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
