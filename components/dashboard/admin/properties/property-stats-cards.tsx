import { Building2, CheckCircle2, Clock3, Eye, MessageSquareText, Star } from "lucide-react";
import { AdminStatCard } from "@/components/dashboard/admin/admin-stat-card";
import type { getPropertyStats } from "@/lib/properties/admin-property-data";

type PropertyStatsCardsProps = {
  stats: ReturnType<typeof getPropertyStats>;
};

export function PropertyStatsCards({ stats }: PropertyStatsCardsProps) {
  const items = [
    {
      title: "Total Properties",
      value: String(stats.total),
      trend: "Admin inventory",
      description: "All mock listings ready for management.",
      icon: Building2
    },
    {
      title: "Published",
      value: String(stats.published),
      trend: "Live listings",
      description: "Visible marketplace inventory.",
      icon: Eye
    },
    {
      title: "Pending",
      value: String(stats.pending),
      trend: "Needs review",
      description: "Listings waiting for admin approval.",
      icon: Clock3
    },
    {
      title: "Verified",
      value: String(stats.verified),
      trend: "Trust ready",
      description: "Listings with verification status.",
      icon: CheckCircle2
    },
    {
      title: "Featured",
      value: String(stats.featured),
      trend: "Premium slots",
      description: "Listings promoted for discovery.",
      icon: Star
    },
    {
      title: "Enquiries",
      value: String(stats.enquiries),
      trend: "Mock demand",
      description: "Total enquiries across properties.",
      icon: MessageSquareText
    }
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <AdminStatCard key={item.title} {...item} />
      ))}
    </div>
  );
}
