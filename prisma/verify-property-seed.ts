import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const [
    propertyCount,
    imageCount,
    locationCount,
    featureCount,
    amenityCount,
    featuredCount,
    verifiedCount
  ] = await Promise.all([
    prisma.property.count({ where: { city: { slug: "dehradun" } } }),
    prisma.propertyImage.count({ where: { property: { city: { slug: "dehradun" } } } }),
    prisma.propertyLocation.count({ where: { property: { city: { slug: "dehradun" } } } }),
    prisma.propertyFeature.count({ where: { property: { city: { slug: "dehradun" } } } }),
    prisma.propertyAmenity.count({ where: { property: { city: { slug: "dehradun" } } } }),
    prisma.property.count({ where: { city: { slug: "dehradun" }, isFeatured: true } }),
    prisma.property.count({ where: { city: { slug: "dehradun" }, isVerified: true } })
  ]);

  const localityRows = await prisma.property.groupBy({
    by: ["locality"],
    where: {
      city: {
        slug: "dehradun"
      }
    },
    _count: {
      _all: true
    },
    orderBy: {
      locality: "asc"
    }
  });

  console.log("Shubh Property database verification");
  console.log("------------------------------------");
  console.log(`Properties: ${propertyCount}`);
  console.log(`Images: ${imageCount}`);
  console.log(`Locations: ${locationCount}`);
  console.log(`Features: ${featureCount}`);
  console.log(`Amenities: ${amenityCount}`);
  console.log(`Featured properties: ${featuredCount}`);
  console.log(`Verified properties: ${verifiedCount}`);
  console.log("Localities:");

  for (const row of localityRows) {
    console.log(`- ${row.locality}: ${row._count._all}`);
  }

  if (propertyCount < 50) {
    throw new Error(`Expected at least 50 Dehradun properties, found ${propertyCount}.`);
  }

  if (locationCount !== propertyCount) {
    throw new Error("Every seeded property must have exactly one location profile.");
  }

  if (imageCount < propertyCount * 3) {
    throw new Error("Every seeded property must have at least three images.");
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
