import { PropertyCard } from "@/components/property/property-card";
import { SectionShell } from "@/components/home/section-shell";
import { mockProperties } from "@/lib/properties/mock-properties";

export function LatestProperties() {
  const latestProperties = mockProperties.slice(6, 12);

  return (
    <SectionShell
      eyebrow="Fresh inventory"
      title="Latest properties in Dehradun"
      description="Newly curated mock listings keep the marketplace experience usable while PostgreSQL is offline."
      className="bg-secondary/30"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {latestProperties.map((property) => (
          <PropertyCard key={property.id} property={property} view="grid" />
        ))}
      </div>
    </SectionShell>
  );
}
