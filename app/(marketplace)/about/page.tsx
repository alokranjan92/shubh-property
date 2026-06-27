import type { Metadata } from "next";
import { RouteLandingPage } from "@/components/marketplace/route-landing-page";

export const metadata: Metadata = {
  title: "About Shubh Property",
  description:
    "Learn about Shubh Property, Dehradun's property, construction and home decor marketplace built for India-wide scale.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <RouteLandingPage
      eyebrow="About"
      title="A trusted property and construction marketplace"
      description="Shubh Property starts in Dehradun and is built to become a national marketplace across property, construction materials and home decor."
      highlights={[
        "Real estate discovery with construction and decor depth.",
        "City-first architecture for India-wide expansion.",
        "Trust-led product design for customers, agents and suppliers."
      ]}
    />
  );
}
