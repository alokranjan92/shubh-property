"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Grid2X2, List, Plus } from "lucide-react";
import { AdminPageHeader } from "@/components/dashboard/admin/admin-page-header";
import { AdminSectionCard } from "@/components/dashboard/admin/admin-section-card";
import { Button } from "@/components/ui/button";
import type { AdminProperty } from "@/lib/properties/admin-property-data";
import { PropertyBulkActions } from "./property-bulk-actions";
import { PropertyEmptyState } from "./property-empty-state";
import { PropertyFilters } from "./property-filters";
import { PropertyGrid } from "./property-grid";
import { PropertyStatsCards } from "./property-stats-cards";
import { PropertyTable } from "./property-table";

type PropertyManagementPageProps = {
  properties: AdminProperty[];
  stats: {
    total: number;
    published: number;
    pending: number;
    verified: number;
    featured: number;
    enquiries: number;
  };
};

type ViewMode = "table" | "grid";

const defaultFilters = {
  status: "",
  purpose: "",
  type: "",
  locality: "",
  verification: "",
  featured: "",
  priceRange: ""
};

export function PropertyManagementPage({ properties, stats }: PropertyManagementPageProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("table");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(defaultFilters);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const searchTarget = [
        property.title,
        property.locality,
        property.city,
        property.assignedAgent,
        property.contactName,
        property.type
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchTarget.includes(search.toLowerCase());
      const matchesStatus = !filters.status || property.status === filters.status;
      const matchesPurpose = !filters.purpose || property.purpose === filters.purpose;
      const matchesType = !filters.type || property.type === filters.type;
      const matchesLocality = !filters.locality || property.locality === filters.locality;
      const matchesVerification =
        !filters.verification || property.verificationStatus === filters.verification;
      const matchesFeatured =
        !filters.featured ||
        (filters.featured === "featured" && property.featured) ||
        (filters.featured === "standard" && !property.featured);
      const matchesPrice =
        !filters.priceRange ||
        (filters.priceRange === "under-50" && property.price < 5000000) ||
        (filters.priceRange === "50-100" && property.price >= 5000000 && property.price <= 10000000) ||
        (filters.priceRange === "100-200" && property.price > 10000000 && property.price <= 20000000) ||
        (filters.priceRange === "200-plus" && property.price > 20000000);

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPurpose &&
        matchesType &&
        matchesLocality &&
        matchesVerification &&
        matchesFeatured &&
        matchesPrice
      );
    });
  }, [filters, properties, search]);

  return (
    <>
      <AdminPageHeader
        title="Property Management"
        description="Manage Shubh Property listings, approvals, verification, featured placement, SEO and assignment workflows."
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Button asChild className="min-h-11">
          <Link href="/dashboard/admin/properties/new">
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add New Property
          </Link>
        </Button>
      </div>

      <PropertyStatsCards stats={stats} />
      <PropertyBulkActions />

      <PropertyFilters
        search={search}
        onSearchChange={setSearch}
        filters={filters}
        onFilterChange={(key, value) => setFilters((current) => ({ ...current, [key]: value }))}
      />

      <AdminSectionCard
        title="Properties"
        description={`${filteredProperties.length} listings shown from ${properties.length} total mock listings.`}
        action={
          <div className="flex rounded-md border border-border bg-background p-1">
            <Button
              type="button"
              variant={viewMode === "table" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("table")}
              aria-pressed={viewMode === "table"}
            >
              <List className="h-4 w-4" aria-hidden="true" />
              List
            </Button>
            <Button
              type="button"
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              aria-pressed={viewMode === "grid"}
            >
              <Grid2X2 className="h-4 w-4" aria-hidden="true" />
              Grid
            </Button>
          </div>
        }
      >
        {filteredProperties.length ? (
          viewMode === "table" ? (
            <PropertyTable properties={filteredProperties} />
          ) : (
            <PropertyGrid properties={filteredProperties} />
          )
        ) : (
          <PropertyEmptyState />
        )}

        <div className="mt-4 flex flex-col gap-3 rounded-lg border border-dashed border-border bg-secondary/35 p-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Pagination placeholder: Page 1 of 1</span>
          <div className="flex gap-2">
            <Button type="button" variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button type="button" variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </AdminSectionCard>
    </>
  );
}
