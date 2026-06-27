import type { Metadata } from "next";
import { PropertyMarketplace } from "@/components/property/property-marketplace";
import { JsonLd } from "@/components/seo/json-ld";
import { mockProperties } from "@/lib/properties/mock-properties";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Buy Property in Dehradun",
  description:
    "Buy verified apartments, villas, houses, plots and premium properties in Dehradun with Shubh Property.",
  alternates: {
    canonical: "/buy"
  }
};

export default function BuyPage() {
  const properties = mockProperties.filter((property) => property.purpose === "Buy");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Buy Property", path: "/buy" }
        ])}
      />
      <JsonLd data={itemListSchema(properties, "/buy")} />
      <PropertyMarketplace
        properties={mockProperties}
        initialPurpose="Buy"
        title="Buy Property in Dehradun"
        description="Explore verified homes, villas, farm houses and investment-ready properties across Dehradun."
      />
    </>
  );
}
