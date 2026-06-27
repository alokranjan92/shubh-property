import type { MockProperty } from "@/lib/properties/mock-properties";

const baseUrl = "https://shubhproperty.in";

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`
    }))
  };
}

export function realEstateListingSchema(property: MockProperty) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.seoDescription,
    url: `${baseUrl}/properties/${property.slug}`,
    image: property.images,
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.state,
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: property.latitude,
      longitude: property.longitude
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.areaSqFt,
      unitCode: "FTK"
    },
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock"
    }
  };
}

export function itemListSchema(properties: MockProperty[], route: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    url: `${baseUrl}${route}`,
    numberOfItems: properties.length,
    itemListElement: properties.slice(0, 20).map((property, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${baseUrl}/properties/${property.slug}`,
      name: property.title
    }))
  };
}
