"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectShell } from "@/components/ui/select-shell";
import { dehradunLocalities } from "@/lib/properties/mock-properties";
import { cn } from "@/lib/utils/cn";

export type PropertyFiltersState = {
  purpose: string;
  state: string;
  city: string;
  locality: string;
  budget: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
};

type PropertyFiltersProps = {
  filters: PropertyFiltersState;
  onChange: (filters: PropertyFiltersState) => void;
  className?: string;
  onReset?: () => void;
};

export function PropertyFilters({ filters, onChange, className, onReset }: PropertyFiltersProps) {
  function setFilter(key: keyof PropertyFiltersState, value: string) {
    onChange({ ...filters, [key]: value });
  }

  return (
    <aside className={cn("rounded-lg border border-border bg-card p-5 shadow-sm", className)}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold">Advanced Search</p>
          <p className="text-sm text-muted-foreground">Filter Dehradun properties</p>
        </div>
        <SlidersHorizontal className="h-5 w-5 text-primary" aria-hidden="true" />
      </div>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-2 text-sm font-medium">
          Purpose
          <SelectShell value={filters.purpose} onChange={(event) => setFilter("purpose", event.target.value)}>
            <option value="All">All</option>
            <option value="Buy">Buy</option>
            <option value="Rent">Rent</option>
            <option value="Sell">Sell</option>
            <option value="Commercial">Commercial</option>
            <option value="Plot">Plot</option>
          </SelectShell>
        </label>

        <label className="grid gap-2 text-sm font-medium">
          State
          <SelectShell value={filters.state} onChange={(event) => setFilter("state", event.target.value)}>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Delhi NCR">Delhi NCR</option>
          </SelectShell>
        </label>

        <label className="grid gap-2 text-sm font-medium">
          City
          <SelectShell value={filters.city} onChange={(event) => setFilter("city", event.target.value)}>
            <option value="Dehradun">Dehradun</option>
            <option value="Rishikesh">Rishikesh</option>
            <option value="Haridwar">Haridwar</option>
          </SelectShell>
        </label>

        <label className="grid gap-2 text-sm font-medium">
          Locality
          <SelectShell value={filters.locality} onChange={(event) => setFilter("locality", event.target.value)}>
            <option value="All">All localities</option>
            {dehradunLocalities.map((locality) => (
              <option key={locality} value={locality}>
                {locality}
              </option>
            ))}
          </SelectShell>
        </label>

        <label className="grid gap-2 text-sm font-medium">
          Budget
          <SelectShell value={filters.budget} onChange={(event) => setFilter("budget", event.target.value)}>
            <option value="All">Any budget</option>
            <option value="0-5000000">Under ₹50 Lakh</option>
            <option value="5000000-10000000">₹50 Lakh - ₹1 Cr</option>
            <option value="10000000-25000000">₹1 Cr - ₹2.5 Cr</option>
            <option value="25000000-999999999">₹2.5 Cr+</option>
          </SelectShell>
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="grid gap-2 text-sm font-medium">
            Bedrooms
            <Input
              type="number"
              min="0"
              value={filters.bedrooms}
              onChange={(event) => setFilter("bedrooms", event.target.value)}
              placeholder="Any"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Bathrooms
            <Input
              type="number"
              min="0"
              value={filters.bathrooms}
              onChange={(event) => setFilter("bathrooms", event.target.value)}
              placeholder="Any"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium">
          Minimum area
          <Input
            type="number"
            min="0"
            value={filters.area}
            onChange={(event) => setFilter("area", event.target.value)}
            placeholder="sq.ft"
          />
        </label>

        <Button
          type="button"
          variant="outline"
          onClick={() =>
            {
              onChange({
              purpose: "All",
              state: "Uttarakhand",
              city: "Dehradun",
              locality: "All",
              budget: "All",
              bedrooms: "",
              bathrooms: "",
              area: ""
              });
              onReset?.();
            }
          }
        >
          Reset filters
        </Button>
      </div>
    </aside>
  );
}
