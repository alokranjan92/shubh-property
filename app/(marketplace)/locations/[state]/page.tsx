import type { Metadata } from "next";
import { RouteLandingPage } from "@/components/marketplace/route-landing-page";

type StatePageProps = {
  params: Promise<{
    state: string;
  }>;
};

function titleCase(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { state } = await params;
  const stateName = titleCase(state);

  return {
    title: `${stateName} Property Marketplace`,
    description: `Explore Shubh Property's scalable marketplace foundation for properties, agents, materials and decor across ${stateName}.`,
    alternates: {
      canonical: `/locations/${state}`
    }
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const { state } = await params;
  const stateName = titleCase(state);

  return (
    <RouteLandingPage
      eyebrow="State expansion"
      title={`${stateName} property marketplace`}
      description={`Shubh Property is structured to support city-wise property, construction material and home decor discovery across ${stateName}.`}
      highlights={[
        "Unlimited cities can be added under each Indian state.",
        "Local agents, builders and suppliers can operate in assigned regions.",
        "SEO-friendly state and city routes support organic growth."
      ]}
    />
  );
}
