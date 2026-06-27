import type { Metadata } from "next";
import { BrowseByCategory } from "@/components/home/browse-by-category";
import { BrowseByCity } from "@/components/home/browse-by-city";
import { ConstructionMaterials } from "@/components/home/construction-materials";
import { CtaSection } from "@/components/home/cta-section";
import { CustomerReviews } from "@/components/home/customer-reviews";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { HeroSearchSection } from "@/components/home/hero-search-section";
import { HomeDecor } from "@/components/home/home-decor";
import { LatestYoutubeVideos } from "@/components/home/latest-youtube-videos";
import { LatestProperties } from "@/components/home/latest-properties";
import { PremiumNavbar } from "@/components/home/premium-navbar";
import { ProfessionalFooter } from "@/components/home/professional-footer";
import { TopLocalities } from "@/components/home/top-localities";
import { WhyChoose } from "@/components/home/why-choose";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Shubh Property | Find Property. Build Better. Live Better.",
  description:
    "Shubh Property is Dehradun's premium property, construction materials, home decor and home construction marketplace.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Shubh Property | Find Property. Build Better. Live Better.",
    description:
      "Buy, sell, rent, build and decorate through Shubh Property, starting in Dehradun and built for all India.",
    url: "/",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubh Property",
    description: "Find Property. Build Better. Live Better."
  }
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <PremiumNavbar />
      <main className="min-h-screen bg-background text-foreground">
        <HeroSearchSection />
        <FeaturedProperties />
        <LatestProperties />
        <BrowseByCategory />
        <TopLocalities />
        <BrowseByCity />
        <ConstructionMaterials />
        <HomeDecor />
        <WhyChoose />
        <LatestYoutubeVideos />
        <CustomerReviews />
        <FaqSection />
        <CtaSection />
      </main>
      <ProfessionalFooter />
    </>
  );
}
