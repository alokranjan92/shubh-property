"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SelectShell } from "@/components/ui/select-shell";
import {
  adminLocalities,
  adminPropertyPurposes,
  adminPropertyStatuses,
  adminPropertyTypes,
  adminVerificationStatuses
} from "@/lib/properties/admin-property-data";

type PropertyFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  filters: {
    status: string;
    purpose: string;
    type: string;
    locality: string;
    verification: string;
    featured: string;
    priceRange: string;
  };
  onFilterChange: (key: keyof PropertyFiltersProps["filters"], value: string) => void;
};

export function PropertyFilters({ search, onSearchChange, filters, onFilterChange }: PropertyFiltersProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by title, locality, agent or contact"
          className="pl-9"
          aria-label="Search properties"
        />
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        <SelectShell value={filters.status} onChange={(event) => onFilterChange("status", event.target.value)}>
          <option value="">All Status</option>
          {adminPropertyStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </SelectShell>
        <SelectShell value={filters.purpose} onChange={(event) => onFilterChange("purpose", event.target.value)}>
          <option value="">Purpose</option>
          {adminPropertyPurposes.map((purpose) => (
            <option key={purpose} value={purpose}>
              {purpose}
            </option>
          ))}
        </SelectShell>
        <SelectShell value={filters.type} onChange={(event) => onFilterChange("type", event.target.value)}>
          <option value="">Property Type</option>
          {adminPropertyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </SelectShell>
        <SelectShell value={filters.locality} onChange={(event) => onFilterChange("locality", event.target.value)}>
          <option value="">Locality</option>
          {adminLocalities.map((locality) => (
            <option key={locality} value={locality}>
              {locality}
            </option>
          ))}
        </SelectShell>
        <SelectShell
          value={filters.verification}
          onChange={(event) => onFilterChange("verification", event.target.value)}
        >
          <option value="">Verification</option>
          {adminVerificationStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </SelectShell>
        <SelectShell value={filters.featured} onChange={(event) => onFilterChange("featured", event.target.value)}>
          <option value="">Featured</option>
          <option value="featured">Featured only</option>
          <option value="standard">Standard only</option>
        </SelectShell>
        <SelectShell
          value={filters.priceRange}
          onChange={(event) => onFilterChange("priceRange", event.target.value)}
        >
          <option value="">Price Range</option>
          <option value="under-50">Under 50 Lac</option>
          <option value="50-100">50 Lac - 1 Cr</option>
          <option value="100-200">1 Cr - 2 Cr</option>
          <option value="200-plus">Above 2 Cr</option>
        </SelectShell>
      </div>
    </div>
  );
}
