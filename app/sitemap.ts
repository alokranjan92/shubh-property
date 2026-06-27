import type { MetadataRoute } from "next";
import { mockProperties } from "@/lib/properties/mock-properties";

const baseUrl = "https://shubhproperty.in";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/properties",
    "/buy",
    "/rent",
    "/sell",
    "/construction-materials",
    "/home-decor",
    "/agents",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
      priority: route === "" ? 1 : 0.8
    })),
    ...mockProperties.map((property) => ({
      url: `${baseUrl}/properties/${property.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: property.isFeatured ? 0.9 : 0.7
    }))
  ];
}
