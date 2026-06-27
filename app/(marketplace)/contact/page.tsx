import type { Metadata } from "next";
import { RouteLandingPage } from "@/components/marketplace/route-landing-page";

export const metadata: Metadata = {
  title: "Contact Shubh Property",
  description:
    "Contact Shubh Property for buying, selling, renting, construction materials, home decor and partnership enquiries.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <RouteLandingPage
      eyebrow="Contact"
      title="Talk to Shubh Property"
      description="Connect for buying, renting, selling, supplier onboarding, home decor partnerships and city expansion."
      highlights={[
        "Property enquiries for Dehradun customers.",
        "Partnership interest from builders, agents and suppliers.",
        "Expansion conversations for upcoming Indian cities."
      ]}
    />
  );
}
