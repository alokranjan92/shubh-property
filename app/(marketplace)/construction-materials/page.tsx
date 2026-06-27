import type { Metadata } from "next";
import { RouteLandingPage } from "@/components/marketplace/route-landing-page";

export const metadata: Metadata = {
  title: "Construction Materials in Dehradun",
  description:
    "Source cement, steel, tiles, paint, electrical and plumbing materials from Shubh Property's construction marketplace.",
  alternates: { canonical: "/construction-materials" }
};

export default function ConstructionMaterialsPage() {
  return (
    <RouteLandingPage
      eyebrow="Construction materials"
      title="Source materials from verified suppliers"
      description="A supplier-ready marketplace area for cement, steel, tiles, sanitaryware, fixtures and building essentials."
      highlights={[
        "Support for unlimited suppliers and material categories.",
        "City-wise availability and pricing workflows.",
        "Useful for customers building after land or home purchase."
      ]}
    />
  );
}
