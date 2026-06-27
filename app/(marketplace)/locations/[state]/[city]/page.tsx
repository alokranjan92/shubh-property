import type { Metadata } from "next";
import { RouteLandingPage } from "@/components/marketplace/route-landing-page";

type CityPageProps = {
  params: Promise<{
    state: string;
    city: string;
  }>;
};

function titleCase(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city, state } = await params;
  const cityName = titleCase(city);
  const stateName = titleCase(state);

  return {
    title: `${cityName} Property Marketplace`,
    description: `Explore Shubh Property listings, local agents, construction materials and home decor in ${cityName}, ${stateName}.`,
    alternates: {
      canonical: `/locations/${state}/${city}`
    }
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city, state } = await params;
  const cityName = titleCase(city);
  const stateName = titleCase(state);

  return (
    <RouteLandingPage
      eyebrow="City marketplace"
      title={`${cityName} property, materials and decor`}
      description={`A city-ready marketplace page for ${cityName}, ${stateName}, covering property listings, local agents, suppliers and decor sellers.`}
      highlights={[
        "City pages can power location SEO and focused lead capture.",
        "Inventory can be filtered by category, budget, property purpose and locality.",
        "The same model can scale from Dehradun to every future operating city."
      ]}
    />
  );
}
