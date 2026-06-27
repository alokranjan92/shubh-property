import type { Metadata } from "next";
import { PropertyMarketplace } from "@/components/property/property-marketplace";
import { JsonLd } from "@/components/seo/json-ld";
import { mockProperties } from "@/lib/properties/mock-properties";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sell Property in Dehradun",
  description:
    "List and compare sale-ready properties in Dehradun through Shubh Property's trusted marketplace foundation.",
  alternates: {
    canonical: "/sell"
  }
};

export default function SellPage() {
  const properties = mockProperties.filter((property) => property.purpose === "Sell");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sell Property", path: "/sell" }
        ])}
      />
      <JsonLd data={itemListSchema(properties, "/sell")} />
      <PropertyMarketplace
        properties={mockProperties}
        initialPurpose="Sell"
        title="Sell Property in Dehradun"
        description="Review sale-ready homes and owner-style listing flows prepared for verified property marketing."
      />
    </>
  );
}
