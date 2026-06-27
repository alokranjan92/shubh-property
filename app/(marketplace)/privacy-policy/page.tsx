import type { Metadata } from "next";
import { RouteLandingPage } from "@/components/marketplace/route-landing-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy foundation for Shubh Property customers, leads, partners and marketplace users.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <RouteLandingPage
      eyebrow="Privacy"
      title="Privacy policy"
      description="Shubh Property is structured to handle customer, lead, listing and partner data with clear ownership and controlled access."
      highlights={[
        "Authentication is configured through Clerk.",
        "Database access is handled through Prisma and PostgreSQL.",
        "Customer trust remains a first-class product requirement."
      ]}
    />
  );
}
