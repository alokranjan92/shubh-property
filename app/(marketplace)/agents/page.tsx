import type { Metadata } from "next";
import { RouteLandingPage } from "@/components/marketplace/route-landing-page";

export const metadata: Metadata = {
  title: "Property Agents in Dehradun",
  description:
    "Discover the agent directory foundation for verified Dehradun property advisors on Shubh Property.",
  alternates: { canonical: "/agents" }
};

export default function AgentsPage() {
  return (
    <RouteLandingPage
      eyebrow="Agents"
      title="Partner with trusted local property advisors"
      description="Agent profiles are designed for verification, city coverage, reviews and property assignment."
      highlights={[
        "One user can operate with a verified agent profile.",
        "Agents can manage properties, receive leads and build reputation.",
        "Future cities can onboard local specialists without platform changes."
      ]}
    />
  );
}
