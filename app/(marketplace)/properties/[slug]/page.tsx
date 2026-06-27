import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyDetailPage } from "@/components/property/property-detail-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getPropertyBySlug,
  getSimilarProperties,
  mockProperties
} from "@/lib/properties/mock-properties";
import { breadcrumbSchema, realEstateListingSchema } from "@/lib/seo/schema";

type PropertyDetailRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return mockProperties.map((property) => ({
    slug: property.slug
  }));
}

export async function generateMetadata({ params }: PropertyDetailRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Property Not Found"
    };
  }

  return {
    title: property.seoTitle,
    description: property.seoDescription,
    alternates: {
      canonical: `/properties/${property.slug}`
    },
    openGraph: {
      title: property.seoTitle,
      description: property.seoDescription,
      url: `/properties/${property.slug}`,
      images: property.images.map((image) => ({
        url: image,
        alt: property.title
      })),
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: property.seoTitle,
      description: property.seoDescription,
      images: [property.images[0]]
    }
  };
}

export default async function PropertyDetailRoute({ params }: PropertyDetailRouteProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const similarProperties = getSimilarProperties(property);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Properties", path: "/properties" },
          { name: property.title, path: `/properties/${property.slug}` }
        ])}
      />
      <JsonLd data={realEstateListingSchema(property)} />
      <PropertyDetailPage property={property} similarProperties={similarProperties} />
    </>
  );
}
