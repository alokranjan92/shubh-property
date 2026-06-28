export const adminPropertyPurposes = ["Buy", "Rent", "Sell"] as const;
export const adminPropertyTypes = ["Apartment", "Villa", "Plot", "Farm House", "Commercial"] as const;
export const adminPropertyStatuses = ["Draft", "Published", "Pending", "Sold", "Rented"] as const;
export const adminVerificationStatuses = ["Verified", "Unverified", "In Review"] as const;
export const adminFurnishingOptions = ["Unfurnished", "Semi Furnished", "Fully Furnished"] as const;
export const adminAreaUnits = ["sq.ft", "sq.yd", "acre", "bigha"] as const;

export const adminLocalities = [
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

export const adminAmenities = [
  "Lift",
  "Reserved Parking",
  "Power Backup",
  "Security",
  "Garden",
  "Club House",
  "Modular Kitchen",
  "Water Supply",
  "CCTV",
  "Gym",
  "Visitor Parking",
  "Children Play Area"
] as const;

export type AdminPropertyPurpose = (typeof adminPropertyPurposes)[number];
export type AdminPropertyType = (typeof adminPropertyTypes)[number];
export type AdminPropertyStatus = (typeof adminPropertyStatuses)[number];
export type AdminVerificationStatus = (typeof adminVerificationStatuses)[number];

export type AdminProperty = {
  id: string;
  title: string;
  slug: string;
  description: string;
  purpose: AdminPropertyPurpose;
  type: AdminPropertyType;
  status: AdminPropertyStatus;
  verificationStatus: AdminVerificationStatus;
  featured: boolean;
  price: number;
  priceLabel: string;
  area: number;
  areaUnit: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  furnishing: string;
  parking: string;
  state: string;
  city: string;
  locality: string;
  fullAddress: string;
  latitude: number;
  longitude: number;
  nearbyLandmarks: string[];
  amenities: string[];
  seoTitle: string;
  seoDescription: string;
  contactName: string;
  contactPhone: string;
  assignedAgent: string;
  views: number;
  enquiries: number;
  coverImageAlt: string;
  updatedAt: string;
};

export const adminMockProperties: AdminProperty[] = [
  {
    id: "1",
    title: "Premium 3 BHK Apartment on Rajpur Road",
    slug: "premium-3-bhk-apartment-rajpur-road",
    description:
      "A premium apartment in central Dehradun with excellent road connectivity, modern interiors and strong buyer demand.",
    purpose: "Buy",
    type: "Apartment",
    status: "Published",
    verificationStatus: "Verified",
    featured: true,
    price: 12500000,
    priceLabel: "1.25 Cr",
    area: 1850,
    areaUnit: "sq.ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    furnishing: "Semi Furnished",
    parking: "1 covered parking",
    state: "Uttarakhand",
    city: "Dehradun",
    locality: "Rajpur Road",
    fullAddress: "Near Pacific Mall, Rajpur Road, Dehradun",
    latitude: 30.3664,
    longitude: 78.0708,
    nearbyLandmarks: ["Pacific Mall", "Astley Hall", "St. Joseph's Academy"],
    amenities: ["Lift", "Reserved Parking", "Security", "Power Backup", "Modular Kitchen"],
    seoTitle: "Premium 3 BHK Apartment for Sale on Rajpur Road Dehradun",
    seoDescription: "Buy a verified 3 BHK premium apartment on Rajpur Road, Dehradun with parking and modern amenities.",
    contactName: "Amit Rawat",
    contactPhone: "+91 99000 00001",
    assignedAgent: "Neha Sharma",
    views: 3420,
    enquiries: 84,
    coverImageAlt: "Premium apartment living room on Rajpur Road Dehradun",
    updatedAt: "2026-06-24"
  },
  {
    id: "2",
    title: "Luxury Villa near Sahastradhara Road",
    slug: "luxury-villa-sahastradhara-road",
    description:
      "Independent villa with mountain-facing balconies, private garden and quick access to schools and hospitals.",
    purpose: "Buy",
    type: "Villa",
    status: "Pending",
    verificationStatus: "In Review",
    featured: true,
    price: 24500000,
    priceLabel: "2.45 Cr",
    area: 3200,
    areaUnit: "sq.ft",
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    furnishing: "Fully Furnished",
    parking: "2 car parking",
    state: "Uttarakhand",
    city: "Dehradun",
    locality: "Sahastradhara Road",
    fullAddress: "Near IT Park, Sahastradhara Road, Dehradun",
    latitude: 30.3872,
    longitude: 78.1319,
    nearbyLandmarks: ["IT Park", "Touch Wood School", "Max Hospital"],
    amenities: ["Garden", "Security", "CCTV", "Reserved Parking", "Water Supply"],
    seoTitle: "Luxury Villa for Sale near Sahastradhara Road Dehradun",
    seoDescription: "Explore a luxury 4 BHK villa near Sahastradhara Road with garden, parking and verified locality access.",
    contactName: "Rohit Bhandari",
    contactPhone: "+91 99000 00002",
    assignedAgent: "Karan Bisht",
    views: 2810,
    enquiries: 61,
    coverImageAlt: "Luxury villa exterior near Sahastradhara Road",
    updatedAt: "2026-06-23"
  },
  {
    id: "3",
    title: "Verified Plot in Jakhan",
    slug: "verified-plot-jakhan-dehradun",
    description:
      "Clear-title residential plot in Jakhan suitable for a premium family home or long-term investment.",
    purpose: "Sell",
    type: "Plot",
    status: "Published",
    verificationStatus: "Verified",
    featured: false,
    price: 9800000,
    priceLabel: "98 Lac",
    area: 240,
    areaUnit: "sq.yd",
    bedrooms: 0,
    bathrooms: 0,
    balconies: 0,
    furnishing: "Unfurnished",
    parking: "Street access",
    state: "Uttarakhand",
    city: "Dehradun",
    locality: "Jakhan",
    fullAddress: "Jakhan main road, Dehradun",
    latitude: 30.3741,
    longitude: 78.0754,
    nearbyLandmarks: ["Jakhan Market", "Rajpur Road", "Canal Road"],
    amenities: ["Water Supply", "Security"],
    seoTitle: "Verified Residential Plot for Sale in Jakhan Dehradun",
    seoDescription: "Clear-title residential plot available in Jakhan, Dehradun with excellent investment potential.",
    contactName: "Sanjay Thapa",
    contactPhone: "+91 99000 00003",
    assignedAgent: "Neha Sharma",
    views: 1980,
    enquiries: 43,
    coverImageAlt: "Residential plot in Jakhan Dehradun",
    updatedAt: "2026-06-22"
  },
  {
    id: "4",
    title: "2 BHK Rental Apartment on GMS Road",
    slug: "2-bhk-rental-apartment-gms-road",
    description: "Well-connected rental apartment with practical layout for working families and professionals.",
    purpose: "Rent",
    type: "Apartment",
    status: "Published",
    verificationStatus: "Verified",
    featured: false,
    price: 26000,
    priceLabel: "26k/month",
    area: 1250,
    areaUnit: "sq.ft",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    furnishing: "Semi Furnished",
    parking: "1 open parking",
    state: "Uttarakhand",
    city: "Dehradun",
    locality: "GMS Road",
    fullAddress: "Near Balliwala Chowk, GMS Road, Dehradun",
    latitude: 30.3153,
    longitude: 78.0182,
    nearbyLandmarks: ["Balliwala Chowk", "Mahant Indiresh Hospital", "GMS Market"],
    amenities: ["Lift", "Reserved Parking", "Water Supply", "CCTV"],
    seoTitle: "2 BHK Apartment for Rent on GMS Road Dehradun",
    seoDescription: "Rent a verified 2 BHK apartment on GMS Road with parking and family-friendly connectivity.",
    contactName: "Pooja Negi",
    contactPhone: "+91 99000 00004",
    assignedAgent: "Ritu Kandari",
    views: 1565,
    enquiries: 52,
    coverImageAlt: "2 BHK rental apartment on GMS Road",
    updatedAt: "2026-06-21"
  },
  {
    id: "5",
    title: "Commercial Showroom Space near ISBT",
    slug: "commercial-showroom-space-isbt",
    description: "High-visibility commercial space suitable for retail, franchise or service business operations.",
    purpose: "Rent",
    type: "Commercial",
    status: "Draft",
    verificationStatus: "Unverified",
    featured: false,
    price: 115000,
    priceLabel: "1.15 Lac/month",
    area: 2100,
    areaUnit: "sq.ft",
    bedrooms: 0,
    bathrooms: 2,
    balconies: 0,
    furnishing: "Unfurnished",
    parking: "Customer parking",
    state: "Uttarakhand",
    city: "Dehradun",
    locality: "ISBT",
    fullAddress: "Main commercial belt, ISBT, Dehradun",
    latitude: 30.2901,
    longitude: 78.0022,
    nearbyLandmarks: ["ISBT Dehradun", "Turner Road", "Transport Nagar"],
    amenities: ["Visitor Parking", "Security", "Water Supply", "CCTV"],
    seoTitle: "Commercial Showroom for Rent near ISBT Dehradun",
    seoDescription: "Commercial showroom space near ISBT Dehradun for retail and service businesses.",
    contactName: "Vikram Singh",
    contactPhone: "+91 99000 00005",
    assignedAgent: "Karan Bisht",
    views: 945,
    enquiries: 19,
    coverImageAlt: "Commercial showroom near ISBT Dehradun",
    updatedAt: "2026-06-20"
  },
  {
    id: "6",
    title: "Elegant House in Dalanwala",
    slug: "elegant-house-dalanwala",
    description: "Independent house in one of Dehradun's heritage localities with calm surroundings and central access.",
    purpose: "Buy",
    type: "Villa",
    status: "Published",
    verificationStatus: "Verified",
    featured: true,
    price: 18500000,
    priceLabel: "1.85 Cr",
    area: 2600,
    areaUnit: "sq.ft",
    bedrooms: 4,
    bathrooms: 3,
    balconies: 2,
    furnishing: "Semi Furnished",
    parking: "2 car parking",
    state: "Uttarakhand",
    city: "Dehradun",
    locality: "Dalanwala",
    fullAddress: "Old Survey Road, Dalanwala, Dehradun",
    latitude: 30.3299,
    longitude: 78.0561,
    nearbyLandmarks: ["Doon Hospital", "Parade Ground", "Survey Chowk"],
    amenities: ["Garden", "Reserved Parking", "Security", "Water Supply"],
    seoTitle: "Independent House for Sale in Dalanwala Dehradun",
    seoDescription: "Buy a premium independent house in Dalanwala, Dehradun with central access and parking.",
    contactName: "Meera Joshi",
    contactPhone: "+91 99000 00006",
    assignedAgent: "Ritu Kandari",
    views: 2244,
    enquiries: 48,
    coverImageAlt: "Elegant independent house in Dalanwala",
    updatedAt: "2026-06-19"
  }
];

export function getAdminProperties() {
  return adminMockProperties;
}

export function getAdminPropertyById(propertyId: string) {
  return adminMockProperties.find((property) => property.id === propertyId) ?? null;
}

export function getPropertyStats() {
  const properties = getAdminProperties();
  return {
    total: properties.length,
    published: properties.filter((property) => property.status === "Published").length,
    pending: properties.filter((property) => property.status === "Pending").length,
    verified: properties.filter((property) => property.verificationStatus === "Verified").length,
    featured: properties.filter((property) => property.featured).length,
    enquiries: properties.reduce((total, property) => total + property.enquiries, 0)
  };
}
