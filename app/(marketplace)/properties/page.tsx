import type { Metadata } from "next";
import { PropertyMarketplace } from "@/components/property/property-marketplace";
import { JsonLd } from "@/components/seo/json-ld";
import { mockProperties } from "@/lib/properties/mock-properties";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Property Marketplace in Dehradun",
  description:
    "Browse verified Dehradun properties for buy, rent, plot and commercial needs with Shubh Property.",
  alternates: {
    canonical: "/properties"
  },
  openGraph: {
    title: "Property Marketplace in Dehradun | Shubh Property",
    description:
      "Explore premium verified Dehradun properties with advanced filters, featured listings and local intelligence.",
    url: "/properties",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Marketplace in Dehradun | Shubh Property",
    description: "Browse verified Dehradun properties with premium search filters."
  }
};

type PropertiesPageProps = {
  searchParams: Promise<{
    locality?: string;
  }>;
};

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const { locality } = await searchParams;
  const initialLocality = locality ? decodeURIComponent(locality) : "All";

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Properties", path: "/properties" }
        ])}
      />
      <JsonLd data={itemListSchema(mockProperties, "/properties")} />
      <PropertyMarketplace properties={mockProperties} initialLocality={initialLocality} />
    </>
  );
}
