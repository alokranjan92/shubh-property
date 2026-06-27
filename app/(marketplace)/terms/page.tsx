import type { Metadata } from "next";
import { RouteLandingPage } from "@/components/marketplace/route-landing-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use foundation for Shubh Property listings, leads, reviews and marketplace partners.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <RouteLandingPage
      eyebrow="Terms"
      title="Terms of use"
      description="The marketplace is prepared for listing rules, partner policies, review moderation and responsible property discovery."
      highlights={[
        "Listings, reviews and leads can be governed by moderation workflows.",
        "Suppliers and sellers can be onboarded under clear marketplace policies.",
        "City expansion can follow a consistent operating model."
      ]}
    />
  );
}
