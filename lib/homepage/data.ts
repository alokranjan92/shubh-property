import {
  BadgeCheck,
  Bath,
  BedDouble,
  Building2,
  Calculator,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Hammer,
  Home,
  Landmark,
  MapPin,
  Paintbrush,
  PhoneCall,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  Truck,
  UsersRound,
  Warehouse
} from "lucide-react";

export const navItems = [
  { label: "Buy", href: "/buy" },
  { label: "Rent", href: "/rent" },
  { label: "Sell", href: "/sell" },
  { label: "Materials", href: "/construction-materials" },
  { label: "Home Decor", href: "/home-decor" },
  { label: "Agents", href: "/agents" }
];

export const heroStats = [
  { value: "Dehradun", label: "Current operating city" },
  { value: "5+", label: "Expansion regions planned" },
  { value: "360°", label: "Property, build and decor support" }
];

export const featuredProperties = [
  {
    title: "Elegant 3 BHK Apartment near Sahastradhara Road",
    location: "Sahastradhara Road, Dehradun",
    price: "₹92 Lakh",
    purpose: "For Sale",
    type: "Apartment",
    beds: 3,
    baths: 3,
    area: "1,780 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    href: "/properties/elegant-3-bhk-sahastradhara-road"
  },
  {
    title: "Premium Villa with Mussoorie View",
    location: "Jakhan, Dehradun",
    price: "₹2.65 Cr",
    purpose: "For Sale",
    type: "Villa",
    beds: 4,
    baths: 4,
    area: "3,450 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    href: "/properties/premium-villa-jakhan-dehradun"
  },
  {
    title: "Furnished Builder Floor for Family Living",
    location: "GMS Road, Dehradun",
    price: "₹38,000/mo",
    purpose: "For Rent",
    type: "Builder Floor",
    beds: 3,
    baths: 2,
    area: "1,520 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    href: "/properties/furnished-builder-floor-gms-road"
  }
];

export const propertyCategories = [
  { label: "Apartments", count: "Residential homes", icon: Building2, href: "/properties?type=apartment" },
  { label: "Villas", count: "Independent luxury", icon: Home, href: "/properties?type=villa" },
  { label: "Plots", count: "Land investments", icon: Landmark, href: "/properties?type=plot" },
  { label: "Commercial", count: "Office and retail", icon: Store, href: "/properties?type=commercial" },
  { label: "Rentals", count: "Move-in ready", icon: UsersRound, href: "/rent" },
  { label: "Builder Projects", count: "New launches", icon: Warehouse, href: "/properties?category=builder-projects" }
];

export const cities = [
  {
    name: "Dehradun",
    state: "Uttarakhand",
    description: "Prime homes near schools, offices, cafes and mountain corridors.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    href: "/locations/uttarakhand/dehradun"
  },
  {
    name: "Rishikesh",
    state: "Uttarakhand",
    description: "Second-home, wellness and river-facing investment potential.",
    image:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=1000&q=80",
    href: "/locations/uttarakhand/rishikesh"
  },
  {
    name: "Noida",
    state: "Uttar Pradesh",
    description: "Future NCR expansion for apartments and commercial inventory.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    href: "/locations/uttar-pradesh/noida"
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    description: "Planned market for plotted developments and premium villas.",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80",
    href: "/locations/rajasthan/jaipur"
  }
];

export const materials = [
  {
    name: "Premium Cement",
    category: "Structure",
    price: "From ₹390/bag",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "TMT Steel Bars",
    category: "Foundation",
    price: "Daily market rates",
    icon: Warehouse,
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Tiles and Sanitaryware",
    category: "Finishing",
    price: "Verified suppliers",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1000&q=80"
  }
];

export const decorProducts = [
  {
    name: "Designer Sofas",
    detail: "Living room collections from verified decor sellers.",
    icon: Sofa,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Lighting and Fixtures",
    detail: "Warm, modern lighting for apartments, villas and offices.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Wall Finishes",
    detail: "Paint, texture, panels and decor finishes for premium interiors.",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
  }
];

export const reasons = [
  {
    title: "Verified local intelligence",
    description: "Listings, agents and suppliers are structured around real city and locality data.",
    icon: BadgeCheck
  },
  {
    title: "Built for expansion",
    description: "The platform architecture supports unlimited Indian states, cities, builders and sellers.",
    icon: TrendingUp
  },
  {
    title: "One marketplace journey",
    description: "Buy land, build the home, source materials and finish interiors from one trusted place.",
    icon: CheckCircle2
  },
  {
    title: "Lead quality and trust",
    description: "Clerk authentication, review workflows and admin controls prepare the product for scale.",
    icon: ShieldCheck
  }
];

export const youtubeVideos = [
  {
    title: "How to evaluate a property in Dehradun before buying",
    category: "Buying Guide",
    duration: "08:42",
    href: "https://www.youtube.com/results?search_query=dehradun+property+buying+guide",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Construction material checklist for new home owners",
    category: "Construction",
    duration: "11:20",
    href: "https://www.youtube.com/results?search_query=home+construction+material+checklist+india",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Interior planning ideas for compact city apartments",
    category: "Home Decor",
    duration: "06:55",
    href: "https://www.youtube.com/results?search_query=small+apartment+interior+design+india",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
  }
];

export const reviews = [
  {
    name: "Ritika Sharma",
    role: "Home buyer, Dehradun",
    quote:
      "The team helped us compare localities clearly and shortlisted homes that matched our budget and commute.",
    rating: 5
  },
  {
    name: "Amit Rawat",
    role: "Property owner",
    quote:
      "The listing process felt premium and organized. Leads were better qualified than what I usually receive.",
    rating: 5
  },
  {
    name: "Neha Bhandari",
    role: "Interior customer",
    quote:
      "I liked that property, material and decor thinking was connected. It made planning the home easier.",
    rating: 5
  }
];

export const faqs = [
  {
    question: "Is Shubh Property only for Dehradun right now?",
    answer:
      "Yes. The business currently operates in Dehradun, Uttarakhand. The platform is designed to expand into more cities and states without changing the core architecture."
  },
  {
    question: "Can builders, agents and suppliers join later?",
    answer:
      "Yes. The database and product structure support agents, builders, construction material suppliers and home decor sellers as the marketplace grows."
  },
  {
    question: "Does the website support property buying and renting?",
    answer:
      "Yes. Properties are structured by sale, rent and lease purpose, with category, city, budget and property-type filters."
  },
  {
    question: "How will reviews be controlled?",
    answer:
      "Reviews are designed with moderation states so the admin team can approve, reject and manage trust signals before publishing."
  }
];

export const footerLinks = [
  {
    title: "Marketplace",
    links: [
      { label: "Buy Property", href: "/buy" },
      { label: "Rent Property", href: "/rent" },
      { label: "Sell Property", href: "/sell" },
      { label: "Featured Listings", href: "/properties" }
    ]
  },
  {
    title: "Expansion",
    links: [
      { label: "Uttarakhand", href: "/locations/uttarakhand" },
      { label: "Uttar Pradesh", href: "/locations/uttar-pradesh" },
      { label: "Rajasthan", href: "/locations/rajasthan" },
      { label: "Delhi NCR", href: "/locations/delhi-ncr" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Agents", href: "/agents" },
      { label: "Partner With Us", href: "/contact" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "/#faq" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
      { label: "Help Center", href: "/contact" }
    ]
  }
];

export const searchTypes = ["Buy", "Rent", "Commercial", "Plot"];
export const popularSearches = ["Rajpur Road", "Sahastradhara Road", "GMS Road", "Jakhan"];

export const quickTrust = [
  { label: "Verified listings", icon: ClipboardCheck },
  { label: "Local advisors", icon: PhoneCall },
  { label: "Site visit support", icon: Camera },
  { label: "Material sourcing", icon: Truck },
  { label: "Budget planning", icon: Calculator }
];

export const propertyMetaIcons = {
  beds: BedDouble,
  baths: Bath,
  area: MapPin,
  rating: Star
};
