"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Save, Send, Trash2 } from "lucide-react";
import { AdminSectionCard } from "@/components/dashboard/admin/admin-section-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectShell } from "@/components/ui/select-shell";
import {
  adminAmenities,
  adminAreaUnits,
  adminFurnishingOptions,
  adminLocalities,
  adminPropertyPurposes,
  adminPropertyStatuses,
  adminPropertyTypes,
  type AdminProperty
} from "@/lib/properties/admin-property-data";
import { PropertyImageManager } from "./property-image-manager";
import { PropertySeoPreview } from "./property-seo-preview";

type PropertyFormProps = {
  mode: "create" | "edit";
  property?: AdminProperty;
};

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label className="text-sm font-medium text-foreground" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export function PropertyForm({ mode, property }: PropertyFormProps) {
  const [saved, setSaved] = useState(false);
  const [seoTitle, setSeoTitle] = useState(property?.seoTitle ?? "");
  const [seoDescription, setSeoDescription] = useState(property?.seoDescription ?? "");
  const [slug, setSlug] = useState(property?.slug ?? "");

  const selectedAmenities = useMemo(() => new Set(property?.amenities ?? []), [property]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {saved ? (
        <div className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-100">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">
              {mode === "create" ? "Property draft saved" : "Property changes saved"}
            </p>
            <p className="mt-1 text-sm">This is a mock handler. Database saving will connect in Sprint 4.</p>
          </div>
        </div>
      ) : null}

      <AdminSectionCard title="Listing Basics" description="Core marketplace information for search and approvals.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input id="title" name="title" defaultValue={property?.title} className="mt-2" required />
          </div>
          <div>
            <FieldLabel htmlFor="slug">Slug</FieldLabel>
            <Input
              id="slug"
              name="slug"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
              className="mt-2"
              required
            />
          </div>
          <div>
            <FieldLabel htmlFor="status">Status</FieldLabel>
            <SelectShell id="status" name="status" defaultValue={property?.status ?? "Draft"} className="mt-2">
              {adminPropertyStatuses.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </SelectShell>
          </div>
          <div className="md:col-span-2">
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <textarea
              id="description"
              name="description"
              defaultValue={property?.description}
              rows={5}
              className="mt-2 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              required
            />
          </div>
          <div>
            <FieldLabel htmlFor="purpose">Purpose</FieldLabel>
            <SelectShell id="purpose" name="purpose" defaultValue={property?.purpose ?? "Buy"} className="mt-2">
              {adminPropertyPurposes.map((purpose) => (
                <option key={purpose} value={purpose}>{purpose}</option>
              ))}
            </SelectShell>
          </div>
          <div>
            <FieldLabel htmlFor="type">Property type</FieldLabel>
            <SelectShell id="type" name="type" defaultValue={property?.type ?? "Apartment"} className="mt-2">
              {adminPropertyTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </SelectShell>
          </div>
          <label className="flex min-h-11 items-center gap-3 rounded-md border border-border bg-background px-3 text-sm">
            <input type="checkbox" name="verified" defaultChecked={property?.verificationStatus === "Verified"} />
            Mark as verified
          </label>
          <label className="flex min-h-11 items-center gap-3 rounded-md border border-border bg-background px-3 text-sm">
            <input type="checkbox" name="featured" defaultChecked={property?.featured} />
            Feature this property
          </label>
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="Price and Configuration">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <FieldLabel htmlFor="price">Price</FieldLabel>
            <Input id="price" name="price" type="number" defaultValue={property?.price} className="mt-2" />
          </div>
          <div>
            <FieldLabel htmlFor="priceLabel">Price label</FieldLabel>
            <Input id="priceLabel" name="priceLabel" defaultValue={property?.priceLabel} className="mt-2" />
          </div>
          <div>
            <FieldLabel htmlFor="area">Area</FieldLabel>
            <Input id="area" name="area" type="number" defaultValue={property?.area} className="mt-2" />
          </div>
          <div>
            <FieldLabel htmlFor="areaUnit">Area unit</FieldLabel>
            <SelectShell id="areaUnit" name="areaUnit" defaultValue={property?.areaUnit ?? "sq.ft"} className="mt-2">
              {adminAreaUnits.map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </SelectShell>
          </div>
          <div>
            <FieldLabel htmlFor="bedrooms">Bedrooms</FieldLabel>
            <Input id="bedrooms" name="bedrooms" type="number" defaultValue={property?.bedrooms ?? 0} className="mt-2" />
          </div>
          <div>
            <FieldLabel htmlFor="bathrooms">Bathrooms</FieldLabel>
            <Input id="bathrooms" name="bathrooms" type="number" defaultValue={property?.bathrooms ?? 0} className="mt-2" />
          </div>
          <div>
            <FieldLabel htmlFor="balconies">Balconies</FieldLabel>
            <Input id="balconies" name="balconies" type="number" defaultValue={property?.balconies ?? 0} className="mt-2" />
          </div>
          <div>
            <FieldLabel htmlFor="furnishing">Furnishing</FieldLabel>
            <SelectShell id="furnishing" name="furnishing" defaultValue={property?.furnishing ?? "Semi Furnished"} className="mt-2">
              {adminFurnishingOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </SelectShell>
          </div>
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="parking">Parking</FieldLabel>
            <Input id="parking" name="parking" defaultValue={property?.parking} className="mt-2" />
          </div>
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="Location" description="Prepared for future Google Maps validation and geocoding.">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <FieldLabel htmlFor="state">State</FieldLabel>
            <Input id="state" name="state" defaultValue={property?.state ?? "Uttarakhand"} className="mt-2" />
          </div>
          <div>
            <FieldLabel htmlFor="city">City</FieldLabel>
            <Input id="city" name="city" defaultValue={property?.city ?? "Dehradun"} className="mt-2" />
          </div>
          <div>
            <FieldLabel htmlFor="locality">Locality</FieldLabel>
            <SelectShell id="locality" name="locality" defaultValue={property?.locality ?? "Rajpur Road"} className="mt-2">
              {adminLocalities.map((locality) => (
                <option key={locality} value={locality}>{locality}</option>
              ))}
            </SelectShell>
          </div>
          <div>
            <FieldLabel htmlFor="nearbyLandmarks">Nearby landmarks</FieldLabel>
            <Input
              id="nearbyLandmarks"
              name="nearbyLandmarks"
              defaultValue={property?.nearbyLandmarks.join(", ")}
              className="mt-2"
              placeholder="School, hospital, market"
            />
          </div>
          <div className="md:col-span-2">
            <FieldLabel htmlFor="fullAddress">Full address</FieldLabel>
            <Input id="fullAddress" name="fullAddress" defaultValue={property?.fullAddress} className="mt-2" />
          </div>
          <div>
            <FieldLabel htmlFor="latitude">Latitude</FieldLabel>
            <Input id="latitude" name="latitude" type="number" step="0.0001" defaultValue={property?.latitude} className="mt-2" />
          </div>
          <div>
            <FieldLabel htmlFor="longitude">Longitude</FieldLabel>
            <Input id="longitude" name="longitude" type="number" step="0.0001" defaultValue={property?.longitude} className="mt-2" />
          </div>
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="Amenities">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {adminAmenities.map((amenity) => (
            <label key={amenity} className="flex min-h-11 items-center gap-3 rounded-md border border-border bg-background px-3 text-sm">
              <input type="checkbox" name="amenities" value={amenity} defaultChecked={selectedAmenities.has(amenity)} />
              {amenity}
            </label>
          ))}
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="Images" description="Cloudinary-ready image management foundation.">
        <PropertyImageManager />
      </AdminSectionCard>

      <AdminSectionCard title="SEO">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <FieldLabel htmlFor="seoTitle">SEO title</FieldLabel>
              <Input id="seoTitle" name="seoTitle" value={seoTitle} onChange={(event) => setSeoTitle(event.target.value)} className="mt-2" />
            </div>
            <div>
              <FieldLabel htmlFor="seoDescription">SEO description</FieldLabel>
              <textarea
                id="seoDescription"
                name="seoDescription"
                value={seoDescription}
                onChange={(event) => setSeoDescription(event.target.value)}
                rows={4}
                className="mt-2 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>
          <PropertySeoPreview title={seoTitle} description={seoDescription} slug={slug} />
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="Contact and Assignment">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <FieldLabel htmlFor="contactName">Contact name</FieldLabel>
            <Input id="contactName" name="contactName" defaultValue={property?.contactName} className="mt-2" />
          </div>
          <div>
            <FieldLabel htmlFor="contactPhone">Contact phone</FieldLabel>
            <Input id="contactPhone" name="contactPhone" defaultValue={property?.contactPhone} className="mt-2" />
          </div>
          <div>
            <FieldLabel htmlFor="assignedAgent">Agent assignment</FieldLabel>
            <SelectShell id="assignedAgent" name="assignedAgent" defaultValue={property?.assignedAgent ?? ""} className="mt-2">
              <option value="">Assign later</option>
              <option value="Neha Sharma">Neha Sharma</option>
              <option value="Karan Bisht">Karan Bisht</option>
              <option value="Ritu Kandari">Ritu Kandari</option>
            </SelectShell>
          </div>
        </div>
      </AdminSectionCard>

      <div className="sticky bottom-0 z-20 -mx-4 border-t border-border bg-background/95 p-4 backdrop-blur-xl sm:mx-0 sm:rounded-lg sm:border">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button asChild variant="outline" className="min-h-11">
            <Link href="/dashboard/admin/properties">Cancel</Link>
          </Button>
          <div className="grid gap-2 sm:flex">
            {mode === "edit" ? (
              <Button type="button" variant="outline" className="min-h-11">
                <Trash2 className="h-4 w-4" aria-hidden="true" />
                Delete Placeholder
              </Button>
            ) : null}
            <Button type="submit" variant="outline" className="min-h-11">
              <Save className="h-4 w-4" aria-hidden="true" />
              {mode === "create" ? "Save as Draft" : "Save Changes"}
            </Button>
            <Button type="button" className="min-h-11">
              <Send className="h-4 w-4" aria-hidden="true" />
              {mode === "create" ? "Publish Placeholder" : "Publish / Unpublish"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
