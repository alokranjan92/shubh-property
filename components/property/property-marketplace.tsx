"use client";

import { useMemo, useState } from "react";
import { Grid2X2, List, Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PremiumNavbar } from "@/components/home/premium-navbar";
import { ProfessionalFooter } from "@/components/home/professional-footer";
import { PropertyCard } from "@/components/property/property-card";
import { PropertyFilters, type PropertyFiltersState } from "@/components/property/property-filters";
import type { MockProperty, PropertyPurpose } from "@/lib/properties/mock-properties";
import { cn } from "@/lib/utils/cn";

type PropertyMarketplaceProps = {
  properties: MockProperty[];
  initialPurpose?: PropertyPurpose | "All";
  initialLocality?: string;
  title?: string;
  description?: string;
};

export function PropertyMarketplace({
  properties,
  initialPurpose = "All",
  initialLocality = "All",
  title = "Property Marketplace in Dehradun",
  description = "Browse verified homes, plots, rentals and commercial properties across Dehradun with premium filters and trusted Shubh Property data."
}: PropertyMarketplaceProps) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [query, setQuery] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState<PropertyFiltersState>({
    purpose: initialPurpose,
    state: "Uttarakhand",
    city: "Dehradun",
    locality: initialLocality,
    budget: "All",
    bedrooms: "",
    bathrooms: "",
    area: ""
  });

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const searchText = `${property.title} ${property.locality} ${property.city} ${property.propertyType}`.toLowerCase();
      const matchesQuery = !query || searchText.includes(query.toLowerCase());
      const matchesPurpose = filters.purpose === "All" || property.purpose === filters.purpose;
      const matchesState = property.state === filters.state;
      const matchesCity = property.city === filters.city;
      const matchesLocality = filters.locality === "All" || property.locality === filters.locality;
      const matchesBedrooms = !filters.bedrooms || property.bhk >= Number(filters.bedrooms);
      const matchesBathrooms = !filters.bathrooms || property.bathrooms >= Number(filters.bathrooms);
      const matchesArea = !filters.area || property.areaSqFt >= Number(filters.area);
      const matchesBudget =
        filters.budget === "All" ||
        (() => {
          const [min, max] = filters.budget.split("-").map(Number);
          return property.price >= min && property.price <= max;
        })();

      return (
        matchesQuery &&
        matchesPurpose &&
        matchesState &&
        matchesCity &&
        matchesLocality &&
        matchesBedrooms &&
        matchesBathrooms &&
        matchesArea &&
        matchesBudget
      );
    });
  }, [filters, properties, query]);

  return (
    <>
      <PremiumNavbar />
      <main className="min-h-screen bg-background text-foreground">
        <section className="border-b border-border bg-secondary/35 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Find Property. Build Better. Live Better.
            </p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-3xl font-semibold tracking-normal sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {description}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card px-5 py-4">
                <p className="text-3xl font-semibold">{filteredProperties.length}</p>
                <p className="text-sm text-muted-foreground">matching properties</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[320px_1fr]">
            <PropertyFilters filters={filters} onChange={setFilters} className="hidden lg:block" />

            <div>
              <div className="mb-5 flex flex-col gap-4 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative flex-1">
                  <Search
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="pl-10"
                    placeholder="Search locality, project, property type"
                    aria-label="Search properties"
                  />
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-3 sm:flex sm:items-center">
                  <Button
                    type="button"
                    variant="outline"
                    className="lg:hidden"
                    onClick={() => setIsMobileFilterOpen(true)}
                  >
                    <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                    Filters
                  </Button>
                <div className="flex rounded-md border border-border p-1">
                  <Button
                    type="button"
                    size="sm"
                    variant={view === "grid" ? "default" : "ghost"}
                    onClick={() => setView("grid")}
                    aria-pressed={view === "grid"}
                  >
                    <Grid2X2 className="h-4 w-4" aria-hidden="true" />
                    Grid
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant={view === "list" ? "default" : "ghost"}
                    onClick={() => setView("list")}
                    aria-pressed={view === "list"}
                  >
                    <List className="h-4 w-4" aria-hidden="true" />
                    List
                  </Button>
                </div>
                </div>
              </div>

              <div className={cn("grid gap-6", view === "grid" ? "md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1")}>
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} view={view} />
                ))}
              </div>

              {filteredProperties.length === 0 ? (
                <div className="rounded-lg border border-border bg-card p-10 text-center">
                  <h2 className="text-xl font-semibold">No properties found</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try changing budget, locality or property type filters.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {isMobileFilterOpen ? (
          <div className="fixed inset-0 z-[70] bg-background lg:hidden">
            <div className="flex h-16 items-center justify-between border-b border-border px-4">
              <div>
                <p className="font-semibold">Search Filters</p>
                <p className="text-xs text-muted-foreground">Refine Dehradun properties</p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Close filters"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
            <div className="h-[calc(100dvh-4rem)] overflow-y-auto p-4 pb-28">
              <PropertyFilters
                filters={filters}
                onChange={setFilters}
                className="border-0 p-0 shadow-none"
                onReset={() => setIsMobileFilterOpen(false)}
              />
              <Button className="mt-4 w-full" onClick={() => setIsMobileFilterOpen(false)}>
                Show {filteredProperties.length} properties
              </Button>
            </div>
          </div>
        ) : null}
      </main>
      <ProfessionalFooter />
    </>
  );
}
