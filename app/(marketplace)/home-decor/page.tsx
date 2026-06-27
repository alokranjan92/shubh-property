import type { Metadata } from "next";
import { RouteLandingPage } from "@/components/marketplace/route-landing-page";

export const metadata: Metadata = {
  title: "Home Decor in Dehradun",
  description:
    "Explore the Shubh Property home decor marketplace foundation for furniture, lighting, kitchens, bathrooms and interiors.",
  alternates: { canonical: "/home-decor" }
};

export default function HomeDecorPage() {
  return (
    <RouteLandingPage
      eyebrow="Home decor"
      title="Finish homes with curated decor sellers"
      description="A home decor marketplace area for furniture, lighting, finishes and premium interior products."
      highlights={[
        "Designed for decor sellers and product catalogues.",
        "Works alongside property purchase and renovation journeys.",
        "Ready for reviews, categories, images and seller growth."
      ]}
    />
  );
}
