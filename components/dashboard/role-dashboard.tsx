import { BarChart3, Building2, Heart, PackageCheck, ShieldCheck, UsersRound } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardStatCard } from "@/components/dashboard/dashboard-stat-card";
import type { AppRole } from "@/lib/auth/roles";

const roleContent = {
  admin: {
    title: "Admin Command Center",
    description:
      "Manage marketplace health, listings, leads, agents, suppliers, reviews, blogs, SEO and platform settings.",
    stats: [
      ["Properties", "50", "Mock Dehradun inventory ready for review.", Building2],
      ["Leads", "124", "Buyer, seller and supplier interest pipeline.", UsersRound],
      ["Reviews", "18", "Moderation-ready trust workflow.", ShieldCheck]
    ]
  },
  agent: {
    title: "Agent Workspace",
    description:
      "Track assigned properties, customer enquiries, site visits and local marketplace performance.",
    stats: [
      ["Assigned Listings", "12", "Properties ready for customer follow-up.", Building2],
      ["Site Visits", "8", "Upcoming visits for Dehradun customers.", BarChart3],
      ["Qualified Leads", "31", "High-intent buyer and rental enquiries.", UsersRound]
    ]
  },
  customer: {
    title: "Customer Account",
    description:
      "Save properties, compare options, schedule visits and manage Shubh Property enquiries.",
    stats: [
      ["Saved Homes", "6", "Shortlisted homes and plots in Dehradun.", Heart],
      ["Visits", "2", "Scheduled visit requests.", BarChart3],
      ["Recommendations", "10", "Matched properties based on preferences.", Building2]
    ]
  },
  supplier: {
    title: "Supplier Marketplace",
    description:
      "Prepare construction material and home decor seller operations for future marketplace onboarding.",
    stats: [
      ["Products", "36", "Material and decor catalogue foundation.", PackageCheck],
      ["Inquiries", "14", "Customer interest from property journeys.", UsersRound],
      ["Verified Status", "Ready", "Supplier verification workflow prepared.", ShieldCheck]
    ]
  }
} as const;

type RoleDashboardProps = {
  role: AppRole | null;
  view: AppRole;
};

export function RoleDashboard({ role, view }: RoleDashboardProps) {
  const content = roleContent[view];

  return (
    <DashboardShell role={role} title={content.title} description={content.description}>
      <div className="grid gap-5 md:grid-cols-3">
        {content.stats.map(([title, value, description, Icon]) => (
          <DashboardStatCard
            key={title}
            title={title}
            value={value}
            description={description}
            icon={Icon}
          />
        ))}
      </div>
    </DashboardShell>
  );
}
