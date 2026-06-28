import { AdminPageHeader } from "@/components/dashboard/admin/admin-page-header";
import { AdminSectionCard } from "@/components/dashboard/admin/admin-section-card";
import { AdminShell } from "@/components/dashboard/admin/admin-shell";
import { AdminStatCard } from "@/components/dashboard/admin/admin-stat-card";
import {
  adminStats,
  conversionSummary,
  enquirySplit,
  monthlyLeadData,
  propertyViewData,
  recentActivities,
  topLocalities
} from "@/lib/dashboard/admin-data";

function BarList({ items }: { items: { label: string; value: number }[] }) {
  const max = Math.max(...items.map((item) => item.value));

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.label}>
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-medium text-foreground">{item.label}</span>
            <span className="text-muted-foreground">{item.value}</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${Math.max((item.value / max) * 100, 8)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function AdminOverview() {
  return (
    <AdminShell breadcrumb="Overview">
      <AdminPageHeader
        title="Admin Command Center"
        description="Monitor listings, leads, agents, suppliers, content and marketplace health from one premium operations dashboard."
        actionLabel="Add Listing"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((stat) => (
          <AdminStatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
        <AdminSectionCard
          title="Monthly Leads"
          description="Lead growth across property, construction and decor journeys."
        >
          <BarList items={monthlyLeadData} />
        </AdminSectionCard>

        <AdminSectionCard
          title="Buyer vs Rent Enquiries"
          description="Current enquiry intent split for Dehradun demand."
        >
          <div className="space-y-5">
            {enquirySplit.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-muted-foreground">{item.value}%</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-[#b8860b]" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </AdminSectionCard>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <AdminSectionCard title="Property Views" description="Locality-level listing attention.">
          <BarList items={propertyViewData} />
        </AdminSectionCard>

        <AdminSectionCard
          title="Top Localities in Dehradun"
          description="Lead concentration and conversion by marketplace zone."
        >
          <div className="space-y-3">
            {topLocalities.map((locality) => (
              <div
                key={locality.name}
                className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background px-4 py-3"
              >
                <div>
                  <p className="font-medium">{locality.name}</p>
                  <p className="text-sm text-muted-foreground">{locality.leads} leads</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {locality.conversion}
                </span>
              </div>
            ))}
          </div>
        </AdminSectionCard>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <AdminSectionCard title="Conversion Summary">
          <div className="grid gap-3 sm:grid-cols-2">
            {conversionSummary.map((item) => (
              <div key={item.label} className="rounded-lg bg-secondary/60 p-4">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </AdminSectionCard>

        <AdminSectionCard title="Recent Activity">
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity} className="flex gap-3 rounded-lg border border-border bg-background p-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b8860b]" />
                <p className="text-sm leading-6 text-muted-foreground">{activity}</p>
              </div>
            ))}
          </div>
        </AdminSectionCard>
      </div>
    </AdminShell>
  );
}
