export type PropertyPurpose = "Buy" | "Rent" | "Sell" | "Commercial" | "Plot";

export type PropertyType =
  | "Apartment"
  | "Villa"
  | "House"
  | "Plot"
  | "Farm House"
  | "Commercial"
  | "Office"
  | "Warehouse"
  | "Shop"
  | "Industrial";

export type MockProperty = {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  priceLabel: string;
  bhk: number;
  bathrooms: number;
  areaSqFt: number;
  propertyType: PropertyType;
  purpose: PropertyPurpose;
  state: string;
  city: string;
  locality: string;
  address: string;
  latitude: number;
  longitude: number;
  images: string[];
  amenities: string[];
  nearbySchools: string[];
  nearbyHospitals: string[];
  nearbyMarkets: string[];
  isFeatured: boolean;
  isVerified: boolean;
  seoTitle: string;
  seoDescription: string;
};

export const dehradunLocalities = [
  "Rajpur Road",
  "Sahastradhara Road",
  "Jakhan",
  "Mussoorie Road",
  "Ballupur",
  "Clement Town",
  "Prem Nagar",
  "GMS Road",
  "ISBT",
  "Dalanwala"
] as const;

export type DehradunLocality = (typeof dehradunLocalities)[number];

const localityMeta = {
  "Rajpur Road": {
    latitude: 30.3612,
    longitude: 78.0668,
    schools: ["The Doon School", "Welham Girls' School", "Brightlands School"],
    hospitals: ["Max Super Speciality Hospital", "Synergy Institute of Medical Sciences"],
    markets: ["Pacific Mall", "Rajpur Road Market", "Astley Hall"]
  },
  "Sahastradhara Road": {
    latitude: 30.3875,
    longitude: 78.1006,
    schools: ["Touch Wood School", "The Aryan School", "Doon International School"],
    hospitals: ["Kailash Hospital", "Max Super Speciality Hospital"],
    markets: ["IT Park Market", "Sahastradhara Local Market", "Pacific Mall"]
  },
  Jakhan: {
    latitude: 30.3709,
    longitude: 78.0724,
    schools: ["St. Joseph's Academy", "Brightlands School", "Ann Mary School"],
    hospitals: ["Max Super Speciality Hospital", "City Heart Centre"],
    markets: ["Jakhan Market", "Pacific Mall", "Rajpur Road Market"]
  },
  "Mussoorie Road": {
    latitude: 30.4089,
    longitude: 78.0846,
    schools: ["Unison World School", "The Aryan School", "Doon International School Riverside"],
    hospitals: ["Max Super Speciality Hospital", "Landour Community Hospital"],
    markets: ["Mussoorie Diversion Market", "Pacific Mall", "Kishanpur Market"]
  },
  Ballupur: {
    latitude: 30.3348,
    longitude: 78.0107,
    schools: ["Ann Mary School", "Cambrian Hall", "Doon Presidency School"],
    hospitals: ["Synergy Institute of Medical Sciences", "Shri Mahant Indiresh Hospital"],
    markets: ["Ballupur Chowk Market", "Chakrata Road Market", "Vasant Vihar Market"]
  },
  "Clement Town": {
    latitude: 30.2668,
    longitude: 78.0089,
    schools: ["St. Mary's School", "Army Public School", "The Asian School"],
    hospitals: ["Graphic Era Hospital", "Shri Mahant Indiresh Hospital"],
    markets: ["Clement Town Market", "Turner Road Market", "ISBT Market"]
  },
  "Prem Nagar": {
    latitude: 30.3342,
    longitude: 77.9524,
    schools: ["Tula's International School", "Doon Global School", "Doon Valley Public School"],
    hospitals: ["Prem Nagar Hospital", "Shri Mahant Indiresh Hospital"],
    markets: ["Prem Nagar Market", "Nanda Ki Chowki Market", "Sudhowala Market"]
  },
  "GMS Road": {
    latitude: 30.3127,
    longitude: 78.0008,
    schools: ["Doon Cambridge School", "Ann Mary School", "The Asian School"],
    hospitals: ["Synergy Institute of Medical Sciences", "Velmed Hospital"],
    markets: ["GMS Road Market", "Balliwala Chowk", "Vasant Vihar Market"]
  },
  ISBT: {
    latitude: 30.2898,
    longitude: 77.9986,
    schools: ["The Asian School", "St. Jude's School", "Olympus High"],
    hospitals: ["Shri Mahant Indiresh Hospital", "Graphic Era Hospital"],
    markets: ["ISBT Market", "Transport Nagar Market", "Turner Road Market"]
  },
  Dalanwala: {
    latitude: 30.3256,
    longitude: 78.0547,
    schools: ["St. Joseph's Academy", "Welham Boys' School", "Convent of Jesus and Mary"],
    hospitals: ["Doon Hospital", "CMI Hospital"],
    markets: ["Dalanwala Market", "Paltan Bazaar", "Astley Hall"]
  }
} satisfies Record<
  DehradunLocality,
  {
    latitude: number;
    longitude: number;
    schools: string[];
    hospitals: string[];
    markets: string[];
  }
>;

const blueprints: Array<{
  type: PropertyType;
  noun: string;
  bhk: number;
  bathrooms: number;
  area: number;
  purpose: PropertyPurpose;
}> = [
  { type: "Apartment", noun: "Apartment", bhk: 2, bathrooms: 2, area: 1180, purpose: "Buy" },
  { type: "Apartment", noun: "Apartment", bhk: 3, bathrooms: 3, area: 1680, purpose: "Rent" },
  { type: "Villa", noun: "Villa", bhk: 4, bathrooms: 4, area: 3150, purpose: "Buy" },
  { type: "House", noun: "Independent House", bhk: 3, bathrooms: 3, area: 2200, purpose: "Sell" },
  { type: "House", noun: "Builder Floor", bhk: 3, bathrooms: 2, area: 1520, purpose: "Rent" },
  { type: "Plot", noun: "Residential Plot", bhk: 0, bathrooms: 0, area: 1800, purpose: "Plot" },
  { type: "Office", noun: "Office Space", bhk: 0, bathrooms: 2, area: 1250, purpose: "Commercial" },
  { type: "Shop", noun: "Retail Shop", bhk: 0, bathrooms: 1, area: 620, purpose: "Commercial" },
  { type: "Farm House", noun: "Farm House", bhk: 4, bathrooms: 4, area: 5200, purpose: "Buy" },
  { type: "Industrial", noun: "Development Land", bhk: 0, bathrooms: 0, area: 7200, purpose: "Plot" }
];

const styles = [
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

const propertyImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
];

const amenities = [
  "Gated Security",
  "Reserved Parking",
  "Power Backup",
  "Lift Access",
  "Modular Kitchen",
  "Water Supply",
  "Green View",
  "Broadband Ready",
  "Rainwater Harvesting",
  "Visitor Parking",
  "CCTV",
  "Club Lounge"
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function getPrice(index: number, purpose: PropertyPurpose, type: PropertyType) {
  if (purpose === "Rent") {
    return 18000 + index * 1750;
  }

  if (type === "Plot" || type === "Industrial") {
    return 4200000 + index * 275000;
  }

  if (type === "Villa" || type === "Farm House") {
    return 18500000 + index * 650000;
  }

  if (purpose === "Commercial" || type === "Office" || type === "Shop") {
    return 7600000 + index * 360000;
  }

  return 5800000 + index * 315000;
}

export function formatIndianPrice(price: number, purpose?: PropertyPurpose) {
  if (purpose === "Rent") {
    return `₹${price.toLocaleString("en-IN")}/mo`;
  }

  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(price % 10000000 === 0 ? 0 : 2)} Cr`;
  }

  return `₹${(price / 100000).toFixed(price % 100000 === 0 ? 0 : 1)} Lakh`;
}

export const mockProperties: MockProperty[] = Array.from({ length: 50 }, (_, index) => {
  const locality: DehradunLocality = dehradunLocalities[index % dehradunLocalities.length];
  const meta = localityMeta[locality];
  const blueprint = blueprints[(index + Math.floor(index / dehradunLocalities.length)) % blueprints.length];
  const style = styles[index % styles.length];
  const title = `${style} ${blueprint.bhk ? `${blueprint.bhk} BHK ` : ""}${blueprint.noun} in ${locality}`;
  const price = getPrice(index + 1, blueprint.purpose, blueprint.type);
  const slug = slugify(`${title}-${blueprint.purpose}-${index + 1}`);
  const area = blueprint.area + (index % 5) * 45;
  const latitude = Number((meta.latitude + (index % 5) * 0.0011).toFixed(7));
  const longitude = Number((meta.longitude + (index % 5) * 0.0013).toFixed(7));

  return {
    id: `sp-property-${index + 1}`,
    title,
    slug,
    description: `${blueprint.noun} in ${locality}, Dehradun, curated for customers who value verified location data, practical connectivity, premium neighbourhood quality and long-term livability. This listing includes nearby schools, hospitals, markets, amenities and image-backed property context for the Shubh Property marketplace.`,
    price,
    priceLabel: formatIndianPrice(price, blueprint.purpose),
    bhk: blueprint.bhk,
    bathrooms: blueprint.bathrooms,
    areaSqFt: area,
    propertyType: blueprint.type,
    purpose: blueprint.purpose,
    state: "Uttarakhand",
    city: "Dehradun",
    locality,
    address: `${101 + index}, ${locality}, Dehradun, Uttarakhand`,
    latitude,
    longitude,
    images: [0, 1, 2, 3].map((imageIndex) => propertyImages[(index + imageIndex) % propertyImages.length]),
    amenities: amenities.slice(index % 4, index % 4 + 7),
    nearbySchools: meta.schools,
    nearbyHospitals: meta.hospitals,
    nearbyMarkets: meta.markets,
    isFeatured: index % 6 === 0,
    isVerified: index % 5 !== 0,
    seoTitle: `${title} | Shubh Property Dehradun`,
    seoDescription: `${title} with ${area} sq.ft area, verified locality data, nearby schools, hospitals and markets in ${locality}, Dehradun.`
  };
});

export function getPropertyBySlug(slug: string) {
  return mockProperties.find((property) => property.slug === slug);
}

export function getSimilarProperties(property: MockProperty, limit = 3) {
  return mockProperties
    .filter(
      (candidate) =>
        candidate.slug !== property.slug &&
        (candidate.locality === property.locality ||
          candidate.propertyType === property.propertyType ||
          candidate.purpose === property.purpose)
    )
    .slice(0, limit);
}

export function getPropertiesByPurpose(purpose?: PropertyPurpose) {
  if (!purpose) {
    return mockProperties;
  }

  return mockProperties.filter((property) => property.purpose === purpose);
}
