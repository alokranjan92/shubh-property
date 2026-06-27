import {
  CategoryType,
  FurnishingStatus,
  PrismaClient,
  PropertyAmenityCategory,
  PropertyFeatureType,
  PropertyPurpose,
  PropertyStatus,
  PropertyType,
  UserRole,
  UserStatus
} from "@prisma/client";

const prisma = new PrismaClient();

const localities = [
  {
    name: "Rajpur Road",
    slug: "rajpur-road",
    latitude: 30.3612,
    longitude: 78.0668,
    pincode: "248001",
    schools: ["The Doon School", "Welham Girls' School", "Brightlands School"],
    hospitals: ["Max Super Speciality Hospital", "Synergy Institute of Medical Sciences"],
    markets: ["Pacific Mall", "Rajpur Road Market", "Astley Hall"]
  },
  {
    name: "Sahastradhara Road",
    slug: "sahastradhara-road",
    latitude: 30.3875,
    longitude: 78.1006,
    pincode: "248013",
    schools: ["Touch Wood School", "The Aryan School", "Doon International School"],
    hospitals: ["Kailash Hospital", "Max Super Speciality Hospital"],
    markets: ["IT Park Market", "Sahastradhara Local Market", "Pacific Mall"]
  },
  {
    name: "Jakhan",
    slug: "jakhan",
    latitude: 30.3709,
    longitude: 78.0724,
    pincode: "248001",
    schools: ["St. Joseph's Academy", "Brightlands School", "Ann Mary School"],
    hospitals: ["Max Super Speciality Hospital", "City Heart Centre"],
    markets: ["Jakhan Market", "Pacific Mall", "Rajpur Road Market"]
  },
  {
    name: "Mussoorie Road",
    slug: "mussoorie-road",
    latitude: 30.4089,
    longitude: 78.0846,
    pincode: "248009",
    schools: ["Unison World School", "The Aryan School", "Doon International School Riverside"],
    hospitals: ["Max Super Speciality Hospital", "Landour Community Hospital"],
    markets: ["Mussoorie Diversion Market", "Pacific Mall", "Kishanpur Market"]
  },
  {
    name: "Ballupur",
    slug: "ballupur",
    latitude: 30.3348,
    longitude: 78.0107,
    pincode: "248001",
    schools: ["Ann Mary School", "Cambrian Hall", "Doon Presidency School"],
    hospitals: ["Synergy Institute of Medical Sciences", "Shri Mahant Indiresh Hospital"],
    markets: ["Ballupur Chowk Market", "Chakrata Road Market", "Vasant Vihar Market"]
  },
  {
    name: "Clement Town",
    slug: "clement-town",
    latitude: 30.2668,
    longitude: 78.0089,
    pincode: "248002",
    schools: ["St. Mary's School", "Army Public School", "The Asian School"],
    hospitals: ["Graphic Era Hospital", "Shri Mahant Indiresh Hospital"],
    markets: ["Clement Town Market", "Turner Road Market", "ISBT Market"]
  },
  {
    name: "Prem Nagar",
    slug: "prem-nagar",
    latitude: 30.3342,
    longitude: 77.9524,
    pincode: "248007",
    schools: ["Tula's International School", "Doon Global School", "Doon Valley Public School"],
    hospitals: ["Prem Nagar Hospital", "Shri Mahant Indiresh Hospital"],
    markets: ["Prem Nagar Market", "Nanda Ki Chowki Market", "Sudhowala Market"]
  },
  {
    name: "GMS Road",
    slug: "gms-road",
    latitude: 30.3127,
    longitude: 78.0008,
    pincode: "248001",
    schools: ["Doon Cambridge School", "Ann Mary School", "The Asian School"],
    hospitals: ["Synergy Institute of Medical Sciences", "Velmed Hospital"],
    markets: ["GMS Road Market", "Balliwala Chowk", "Vasant Vihar Market"]
  },
  {
    name: "ISBT",
    slug: "isbt",
    latitude: 30.2898,
    longitude: 77.9986,
    pincode: "248002",
    schools: ["The Asian School", "St. Jude's School", "Olympus High"],
    hospitals: ["Shri Mahant Indiresh Hospital", "Graphic Era Hospital"],
    markets: ["ISBT Market", "Transport Nagar Market", "Turner Road Market"]
  },
  {
    name: "Dalanwala",
    slug: "dalanwala",
    latitude: 30.3256,
    longitude: 78.0547,
    pincode: "248001",
    schools: ["St. Joseph's Academy", "Welham Boys' School", "Convent of Jesus and Mary"],
    hospitals: ["Doon Hospital", "CMI Hospital"],
    markets: ["Dalanwala Market", "Paltan Bazaar", "Astley Hall"]
  }
];

const categorySeeds = [
  { name: "Apartment", slug: "apartment" },
  { name: "Villa", slug: "villa" },
  { name: "House", slug: "house" },
  { name: "Plot", slug: "plot" },
  { name: "Farm House", slug: "farm-house" },
  { name: "Commercial", slug: "commercial" },
  { name: "Office", slug: "office" },
  { name: "Warehouse", slug: "warehouse" },
  { name: "Shop", slug: "shop" },
  { name: "Industrial", slug: "industrial" }
];

const propertyBlueprints = [
  { type: PropertyType.APARTMENT, category: "apartment", noun: "Apartment", bhk: 2, baths: 2, area: 1180 },
  { type: PropertyType.APARTMENT, category: "apartment", noun: "Apartment", bhk: 3, baths: 3, area: 1680 },
  { type: PropertyType.VILLA, category: "villa", noun: "Villa", bhk: 4, baths: 4, area: 3150 },
  { type: PropertyType.INDEPENDENT_HOUSE, category: "house", noun: "Independent House", bhk: 3, baths: 3, area: 2200 },
  { type: PropertyType.BUILDER_FLOOR, category: "house", noun: "Builder Floor", bhk: 3, baths: 2, area: 1520 },
  { type: PropertyType.PLOT, category: "plot", noun: "Residential Plot", bhk: 0, baths: 0, area: 1800 },
  { type: PropertyType.COMMERCIAL_OFFICE, category: "office", noun: "Office Space", bhk: 0, baths: 2, area: 1250 },
  { type: PropertyType.COMMERCIAL_SHOP, category: "shop", noun: "Retail Shop", bhk: 0, baths: 1, area: 620 },
  { type: PropertyType.FARMHOUSE, category: "farm-house", noun: "Farm House", bhk: 4, baths: 4, area: 5200 },
  { type: PropertyType.LAND, category: "industrial", noun: "Development Land", bhk: 0, baths: 0, area: 7200 }
];

const titleStyles = [
  "Premium",
  "Elegant",
  "Verified",
  "Luxury",
  "Modern",
  "Sunlit",
  "Prime",
  "Family Ready",
  "Investment Grade",
  "Move-in Ready"
];

const imageUrls = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function priceFor(index: number, purpose: PropertyPurpose, type: PropertyType) {
  if (purpose === PropertyPurpose.RENT) {
    return 18000 + index * 1750;
  }

  if (type === PropertyType.PLOT || type === PropertyType.LAND) {
    return 4200000 + index * 275000;
  }

  if (type === PropertyType.VILLA || type === PropertyType.FARMHOUSE) {
    return 18500000 + index * 650000;
  }

  if (type === PropertyType.COMMERCIAL_OFFICE || type === PropertyType.COMMERCIAL_SHOP) {
    return 7600000 + index * 360000;
  }

  return 5800000 + index * 315000;
}

function propertyDescription(locality: string, noun: string, purpose: PropertyPurpose) {
  const intent = purpose === PropertyPurpose.RENT ? "rental" : "purchase";

  return `${noun} in ${locality}, Dehradun, curated for ${intent} customers who value verified location data, practical connectivity and long-term neighbourhood quality. This listing includes nearby schools, hospitals, markets, amenities and SEO-ready information for a premium Shubh Property marketplace experience.`;
}

async function main() {
  const uttarakhand = await prisma.state.upsert({
    where: { slug: "uttarakhand" },
    update: { name: "Uttarakhand", code: "UK", isActive: true },
    create: { name: "Uttarakhand", slug: "uttarakhand", code: "UK" }
  });

  const dehradun = await prisma.city.upsert({
    where: {
      stateId_slug: {
        stateId: uttarakhand.id,
        slug: "dehradun"
      }
    },
    update: {
      name: "Dehradun",
      latitude: 30.3165,
      longitude: 78.0322,
      isActive: true
    },
    create: {
      stateId: uttarakhand.id,
      name: "Dehradun",
      slug: "dehradun",
      latitude: 30.3165,
      longitude: 78.0322
    }
  });

  const admin = await prisma.user.upsert({
    where: { email: "admin@shubhproperty.in" },
    update: {
      firstName: "Shubh",
      lastName: "Admin",
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
      stateId: uttarakhand.id,
      cityId: dehradun.id
    },
    create: {
      clerkUserId: "seed_admin_shubh_property",
      email: "admin@shubhproperty.in",
      phone: "+919900000001",
      firstName: "Shubh",
      lastName: "Admin",
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
      stateId: uttarakhand.id,
      cityId: dehradun.id
    }
  });

  await Promise.all(
    categorySeeds.map((category) =>
      prisma.category.upsert({
        where: {
          type_slug: {
            type: CategoryType.PROPERTY,
            slug: category.slug
          }
        },
        update: {
          name: category.name,
          isActive: true,
          metaTitle: `${category.name} Properties in Dehradun | Shubh Property`,
          metaDescription: `Browse verified ${category.name.toLowerCase()} properties in Dehradun with Shubh Property.`
        },
        create: {
          name: category.name,
          slug: category.slug,
          type: CategoryType.PROPERTY,
          isActive: true,
          metaTitle: `${category.name} Properties in Dehradun | Shubh Property`,
          metaDescription: `Browse verified ${category.name.toLowerCase()} properties in Dehradun with Shubh Property.`
        }
      })
    )
  );

  await prisma.property.deleteMany({
    where: {
      cityId: dehradun.id
    }
  });

  const amenities = [
    { name: "Gated Security", slug: "gated-security", category: PropertyAmenityCategory.SECURITY, icon: "shield" },
    { name: "Reserved Parking", slug: "reserved-parking", category: PropertyAmenityCategory.PARKING, icon: "car" },
    { name: "Power Backup", slug: "power-backup", category: PropertyAmenityCategory.CONVENIENCE, icon: "zap" },
    { name: "Lift Access", slug: "lift-access", category: PropertyAmenityCategory.CONVENIENCE, icon: "arrow-up" },
    { name: "Modular Kitchen", slug: "modular-kitchen", category: PropertyAmenityCategory.LIFESTYLE, icon: "chef-hat" },
    { name: "Water Supply", slug: "water-supply", category: PropertyAmenityCategory.CONVENIENCE, icon: "droplets" },
    { name: "Green View", slug: "green-view", category: PropertyAmenityCategory.LIFESTYLE, icon: "trees" },
    { name: "Broadband Ready", slug: "broadband-ready", category: PropertyAmenityCategory.CONNECTIVITY, icon: "wifi" },
    { name: "Rainwater Harvesting", slug: "rainwater-harvesting", category: PropertyAmenityCategory.SUSTAINABILITY, icon: "cloud-rain" },
    { name: "Visitor Parking", slug: "visitor-parking", category: PropertyAmenityCategory.PARKING, icon: "parking-circle" }
  ];

  const generatedProperties = [];

  for (let index = 0; index < 50; index += 1) {
    const locality = localities[index % localities.length];
    const blueprint = propertyBlueprints[(index + Math.floor(index / localities.length)) % propertyBlueprints.length];
    const purpose = index % 4 === 1 ? PropertyPurpose.RENT : PropertyPurpose.SALE;
    const style = titleStyles[index % titleStyles.length];
    const title = `${style} ${blueprint.bhk > 0 ? `${blueprint.bhk} BHK ` : ""}${blueprint.noun} in ${locality.name}`;
    const slug = slugify(`${title}-${purpose === PropertyPurpose.RENT ? "rent" : "buy"}-${index + 1}`);
    const price = priceFor(index + 1, purpose, blueprint.type);
    const latitude = locality.latitude + (index % 5) * 0.0011;
    const longitude = locality.longitude + (index % 5) * 0.0013;
    const isFeatured = index % 6 === 0;
    const isVerified = index % 5 !== 0;
    const categorySlug = blueprint.category;

    const property = await prisma.property.create({
      data: {
        listedById: admin.id,
        stateId: uttarakhand.id,
        cityId: dehradun.id,
        title,
        slug,
        description: propertyDescription(locality.name, blueprint.noun, purpose),
        purpose,
        type: blueprint.type,
        status: PropertyStatus.ACTIVE,
        furnishing:
          blueprint.type === PropertyType.PLOT || blueprint.type === PropertyType.LAND
            ? null
            : index % 3 === 0
              ? FurnishingStatus.FULLY_FURNISHED
              : index % 3 === 1
                ? FurnishingStatus.SEMI_FURNISHED
                : FurnishingStatus.UNFURNISHED,
        price,
        maintenanceCharge: purpose === PropertyPurpose.RENT ? 2500 + index * 80 : null,
        securityDeposit: purpose === PropertyPurpose.RENT ? price * 2 : null,
        bedrooms: blueprint.bhk || null,
        bathrooms: blueprint.baths || null,
        balconies: blueprint.bhk > 0 ? 1 + (index % 3) : null,
        carpetAreaSqFt: Math.round(blueprint.area * 0.82),
        builtUpAreaSqFt: blueprint.area,
        plotAreaSqFt:
          blueprint.type === PropertyType.PLOT || blueprint.type === PropertyType.LAND || blueprint.type === PropertyType.FARMHOUSE
            ? blueprint.area
            : null,
        floorNumber: blueprint.bhk > 0 ? 1 + (index % 8) : null,
        totalFloors: blueprint.bhk > 0 ? 4 + (index % 10) : null,
        addressLine1: `${101 + index}, ${locality.name}`,
        addressLine2: "Dehradun, Uttarakhand",
        locality: locality.name,
        pincode: locality.pincode,
        latitude,
        longitude,
        googlePlaceId: `seed_google_place_${locality.slug}_${index + 1}`,
        isFeatured,
        isVerified,
        seoTitle: `${title} | Shubh Property Dehradun`,
        seoDescription: `${title} with ${blueprint.area} sq.ft area, verified locality data, nearby schools, hospitals and markets in ${locality.name}, Dehradun.`,
        publishedAt: new Date(),
        location: {
          create: {
            locality: locality.name,
            addressLine1: `${101 + index}, ${locality.name}`,
            addressLine2: "Dehradun, Uttarakhand",
            landmark: `${locality.name} main road`,
            pincode: locality.pincode,
            latitude,
            longitude,
            nearbySchools: locality.schools,
            nearbyHospitals: locality.hospitals,
            nearbyMarkets: locality.markets
          }
        },
        images: {
          create: [0, 1, 2].map((imageIndex) => ({
            cloudinaryAssetId: `seed_${slug}_${imageIndex + 1}`,
            publicId: `shubh-property/properties/${slug}/${imageIndex + 1}`,
            secureUrl: imageUrls[(index + imageIndex) % imageUrls.length],
            altText: `${title} image ${imageIndex + 1}`,
            sortOrder: imageIndex,
            isPrimary: imageIndex === 0
          }))
        },
        amenities: {
          create: amenities.slice(index % 3, index % 3 + 6).map((amenity, amenityIndex) => ({
            ...amenity,
            sortOrder: amenityIndex
          }))
        },
        features: {
          create: [
            {
              type: PropertyFeatureType.INTERIOR,
              title: blueprint.bhk > 0 ? `${blueprint.bhk} BHK Layout` : "Open Development Layout",
              value: blueprint.bhk > 0 ? `${blueprint.bhk} bedrooms` : `${blueprint.area} sq.ft usable area`,
              icon: "layout",
              sortOrder: 0
            },
            {
              type: PropertyFeatureType.LOCATION,
              title: "Locality Advantage",
              value: locality.name,
              icon: "map-pin",
              sortOrder: 1
            },
            {
              type: PropertyFeatureType.INVESTMENT,
              title: purpose === PropertyPurpose.RENT ? "Rental Ready" : "Appreciation Potential",
              value: purpose === PropertyPurpose.RENT ? "Suitable for immediate occupancy" : "High-demand Dehradun corridor",
              icon: "trending-up",
              sortOrder: 2
            },
            {
              type: PropertyFeatureType.LEGAL,
              title: isVerified ? "Verified Listing" : "Verification Pending",
              value: isVerified ? "Documents and location reviewed" : "Under marketplace review",
              icon: "badge-check",
              sortOrder: 3
            }
          ]
        },
        categories: {
          create: {
            category: {
              connect: {
                type_slug: {
                  type: CategoryType.PROPERTY,
                  slug: categorySlug
                }
              }
            }
          }
        }
      }
    });

    generatedProperties.push(property);
  }

  console.log(`Seeded ${generatedProperties.length} Dehradun properties for Shubh Property.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
