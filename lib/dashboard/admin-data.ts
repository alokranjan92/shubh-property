import {
  BarChart3,
  BookOpenText,
  Building2,
  ClipboardList,
  Gem,
  Home,
  Image,
  Inbox,
  LucideIcon,
  PackageCheck,
  Settings,
  ShieldCheck,
  Sofa,
  Star,
  UsersRound
} from "lucide-react";

export type AdminNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type AdminModuleKey =
  | "properties"
  | "leads"
  | "users"
  | "agents"
  | "materials"
  | "home-decor"
  | "images"
  | "reviews"
  | "blogs"
  | "settings";

export const adminNavItems: AdminNavItem[] = [
  { label: "Overview", href: "/dashboard/admin", icon: BarChart3 },
  { label: "Properties", href: "/dashboard/admin/properties", icon: Building2 },
  { label: "Leads", href: "/dashboard/admin/leads", icon: ClipboardList },
  { label: "Users", href: "/dashboard/admin/users", icon: UsersRound },
  { label: "Agents", href: "/dashboard/admin/agents", icon: ShieldCheck },
  { label: "Materials", href: "/dashboard/admin/materials", icon: PackageCheck },
  { label: "Home Decor", href: "/dashboard/admin/home-decor", icon: Sofa },
  { label: "Images", href: "/dashboard/admin/images", icon: Image },
  { label: "Reviews", href: "/dashboard/admin/reviews", icon: Star },
  { label: "Blogs", href: "/dashboard/admin/blogs", icon: BookOpenText },
  { label: "Settings", href: "/dashboard/admin/settings", icon: Settings }
];

export const adminStats = [
  {
    title: "Total Properties",
    value: "1,248",
    trend: "+18 this month",
    description: "Homes, plots and commercial inventory.",
    icon: Building2
  },
  {
    title: "Active Listings",
    value: "936",
    trend: "75% live",
    description: "Verified listings visible to customers.",
    icon: Home
  },
  {
    title: "Pending Approvals",
    value: "42",
    trend: "12 urgent",
    description: "New listings awaiting admin review.",
    icon: ShieldCheck
  },
  {
    title: "New Leads",
    value: "318",
    trend: "+27% weekly",
    description: "Buyer, seller, rent and service enquiries.",
    icon: Inbox
  },
  {
    title: "Site Visits",
    value: "86",
    trend: "24 scheduled",
    description: "Confirmed and pending property visits.",
    icon: ClipboardList
  },
  {
    title: "Agents",
    value: "34",
    trend: "9 top performers",
    description: "Field and partner agent network.",
    icon: UsersRound
  },
  {
    title: "Materials Orders",
    value: "126",
    trend: "18 open quotes",
    description: "Construction supplier demand pipeline.",
    icon: PackageCheck
  },
  {
    title: "Home Decor Products",
    value: "580",
    trend: "64 featured",
    description: "Furniture, lighting and interiors catalogue.",
    icon: Sofa
  }
];

export const monthlyLeadData = [
  { label: "Jan", value: 142 },
  { label: "Feb", value: 168 },
  { label: "Mar", value: 214 },
  { label: "Apr", value: 236 },
  { label: "May", value: 289 },
  { label: "Jun", value: 318 }
];

export const propertyViewData = [
  { label: "Rajpur Road", value: 92 },
  { label: "Sahastradhara", value: 86 },
  { label: "Mussoorie Road", value: 78 },
  { label: "GMS Road", value: 71 },
  { label: "Dalanwala", value: 64 }
];

export const enquirySplit = [
  { label: "Buyer", value: 62 },
  { label: "Rent", value: 38 }
];

export const topLocalities = [
  { name: "Rajpur Road", leads: 84, conversion: "18.4%" },
  { name: "Sahastradhara Road", leads: 71, conversion: "16.1%" },
  { name: "Jakhan", leads: 63, conversion: "15.7%" },
  { name: "GMS Road", leads: 58, conversion: "13.9%" },
  { name: "Dalanwala", leads: 44, conversion: "11.8%" }
];

export const recentActivities = [
  "New verified villa submitted near Mussoorie Road.",
  "Rajpur Road apartment lead assigned to senior agent.",
  "Construction material quote requested for Clement Town project.",
  "Home decor seller profile moved to review queue.",
  "Dalanwala rental listing received customer visit request."
];

export const conversionSummary = [
  { label: "Lead to site visit", value: "31%" },
  { label: "Visit to negotiation", value: "18%" },
  { label: "Negotiation to closure", value: "9%" },
  { label: "Average response time", value: "12 min" }
];

export const adminModulePages: Record<
  AdminModuleKey,
  {
    title: string;
    description: string;
    addLabel: string;
    emptyTitle: string;
    emptyDescription: string;
    cards: string[];
    columns: string[];
    icon: LucideIcon;
  }
> = {
  properties: {
    title: "Properties",
    description: "Manage residential, commercial, plot and rental inventory across Dehradun.",
    addLabel: "Add Property",
    emptyTitle: "No property records connected yet",
    emptyDescription: "The admin UI is ready for Prisma-backed listing approvals and updates.",
    cards: ["Approval queue", "Featured listings", "SEO health", "Locality coverage"],
    columns: ["Property", "Locality", "Purpose", "Status", "Owner", "Updated"],
    icon: Building2
  },
  leads: {
    title: "Leads",
    description: "Track buyer, seller, rental, materials and home decor enquiries.",
    addLabel: "Add Lead",
    emptyTitle: "No lead pipeline connected yet",
    emptyDescription: "Future workflows will include assignments, follow-ups and visit tracking.",
    cards: ["New enquiries", "Assigned leads", "Site visits", "Closure forecast"],
    columns: ["Customer", "Interest", "Source", "Priority", "Assigned To", "Status"],
    icon: ClipboardList
  },
  users: {
    title: "Users",
    description: "Manage customers, suppliers, agents and admin access for the platform.",
    addLabel: "Invite User",
    emptyTitle: "No user table connected yet",
    emptyDescription: "Clerk roles are ready for secure user administration and audit trails.",
    cards: ["Role management", "Verification", "Account health", "Security review"],
    columns: ["Name", "Email", "Role", "Status", "Last Active", "Created"],
    icon: UsersRound
  },
  agents: {
    title: "Agents",
    description: "Organize agent onboarding, territories, assignments and performance.",
    addLabel: "Add Agent",
    emptyTitle: "No agent records connected yet",
    emptyDescription: "Future tools will track coverage, lead response time and closures.",
    cards: ["Territories", "Performance", "Assigned inventory", "Verification"],
    columns: ["Agent", "Locality", "Leads", "Listings", "Rating", "Status"],
    icon: ShieldCheck
  },
  materials: {
    title: "Materials",
    description: "Prepare construction supplier catalogue, quote requests and order workflows.",
    addLabel: "Add Material",
    emptyTitle: "No materials catalogue connected yet",
    emptyDescription: "Supplier inventory can later connect cement, steel, bricks, sand and more.",
    cards: ["Supplier quotes", "Category coverage", "Pending approvals", "Demand insights"],
    columns: ["Product", "Category", "Supplier", "Price", "Inventory", "Status"],
    icon: PackageCheck
  },
  "home-decor": {
    title: "Home Decor",
    description: "Manage future furniture, lighting, kitchen, bathroom and decor seller products.",
    addLabel: "Add Product",
    emptyTitle: "No decor catalogue connected yet",
    emptyDescription: "This page is ready for seller products, moderation and featured placements.",
    cards: ["Featured products", "Seller onboarding", "Category health", "Review queue"],
    columns: ["Product", "Category", "Seller", "Price", "Featured", "Status"],
    icon: Sofa
  },
  images: {
    title: "Images",
    description: "Moderate property, materials, decor and blog media for Cloudinary storage.",
    addLabel: "Upload Image",
    emptyTitle: "No media library connected yet",
    emptyDescription: "Cloudinary workflows can connect here for optimization and review.",
    cards: ["Upload queue", "Optimization", "Alt text", "Storage usage"],
    columns: ["Asset", "Type", "Linked Module", "Size", "Alt Text", "Status"],
    icon: Image
  },
  reviews: {
    title: "Reviews",
    description: "Moderate customer trust signals for properties, agents, suppliers and services.",
    addLabel: "Add Review",
    emptyTitle: "No review moderation connected yet",
    emptyDescription: "Future tools will support ratings, approvals, flags and response workflows.",
    cards: ["Pending reviews", "Trust score", "Flagged content", "Agent ratings"],
    columns: ["Reviewer", "Module", "Rating", "Comment", "Flag", "Status"],
    icon: Star
  },
  blogs: {
    title: "Blogs",
    description: "Manage SEO articles for property, construction and home improvement topics.",
    addLabel: "Add Blog",
    emptyTitle: "No blog CMS connected yet",
    emptyDescription: "The structure is ready for categories, authors, schema and sitemap updates.",
    cards: ["Drafts", "SEO checks", "Categories", "Publishing calendar"],
    columns: ["Title", "Category", "Author", "SEO", "Status", "Published"],
    icon: BookOpenText
  },
  settings: {
    title: "Settings",
    description: "Control business profile, SEO defaults, roles, integrations and marketplace rules.",
    addLabel: "Add Setting",
    emptyTitle: "No settings records connected yet",
    emptyDescription: "Future settings will manage state expansion, integrations and permissions.",
    cards: ["Business profile", "SEO defaults", "Role policies", "Integrations"],
    columns: ["Setting", "Scope", "Value", "Owner", "Last Updated", "Status"],
    icon: Gem
  }
};
