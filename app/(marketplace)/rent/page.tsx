import type { Metadata } from "next";
import { PropertyMarketplace } from "@/components/property/property-marketplace";
import { JsonLd } from "@/components/seo/json-ld";
import { mockProperties } from "@/lib/properties/mock-properties";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Rent Property in Dehradun",
  description:
    "Find verified rental apartments, builder floors and family-ready homes in Dehradun with Shubh Property.",
  alternates: {
    canonical: "/rent"
  }
};

export default function RentPage() {
  const properties = mockProperties.filter((property) => property.purpose === "Rent");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Rent Property", path: "/rent" }
        ])}
      />
      <JsonLd data={itemListSchema(properties, "/rent")} />
      <PropertyMarketplace
        properties={mockProperties}
        initialPurpose="Rent"
        title="Rent Property in Dehradun"
        description="Shortlist move-in-ready rentals with locality, budget, bedroom and amenity filters."
      />
    </>
  );
}
