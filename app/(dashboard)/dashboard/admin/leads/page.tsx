import { Badge } from "@/components/ui/badge";
import { AdminEmptyState } from "@/components/dashboard/admin/admin-empty-state";
import { AdminPageHeader } from "@/components/dashboard/admin/admin-page-header";
import { AdminSectionCard } from "@/components/dashboard/admin/admin-section-card";
import { AdminShell } from "@/components/dashboard/admin/admin-shell";
import { prisma } from "@/lib/prisma/client";
import { ClipboardList } from "lucide-react";

export const dynamic = "force-dynamic";

async function getLeadData() {
  try {
    const [leads, newCount, visitCount, convertedCount] = await Promise.all([
      prisma.lead.findMany({
        take: 100,
        orderBy: { createdAt: "desc" },
        include: { property: { select: { title: true, slug: true } }, assignedTo: { select: { firstName: true, lastName: true } } }
      }),
      prisma.lead.count({ where: { status: "NEW" } }),
      prisma.lead.count({ where: { status: "SITE_VISIT_SCHEDULED" } }),
      prisma.lead.count({ where: { status: "CONVERTED" } })
    ]);
    return { leads, stats: [leads.length, newCount, visitCount, convertedCount], available: true };
  } catch (error) {
    console.error("Lead dashboard unavailable", error);
    return { leads: [], stats: [0, 0, 0, 0], available: false };
  }
}

export default async function AdminLeadsPage() {
  const { leads, stats, available } = await getLeadData();
  const cards = ["Recent leads", "New enquiries", "Site visits", "Converted"];

  return (
    <AdminShell breadcrumb="Leads">
      <AdminPageHeader title="Leads" description="Track website enquiries and scheduled property visits." actionLabel="Add Lead" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((label, index) => (
          <div key={label} className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="mt-2 text-3xl font-semibold">{stats[index]}</p>
          </div>
        ))}
      </div>

      {leads.length ? (
        <AdminSectionCard title="Latest enquiries" description="Newest 100 leads, ordered by received time.">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] text-left text-sm">
              <thead className="border-b border-border text-muted-foreground">
                <tr>{["Customer", "Property / message", "Source", "Received", "Status"].map((heading) => <th key={heading} className="px-4 py-3 font-medium">{heading}</th>)}</tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-4"><p className="font-medium">{lead.name}</p><a className="text-primary hover:underline" href={`tel:${lead.phone}`}>{lead.phone}</a>{lead.email ? <p className="text-muted-foreground">{lead.email}</p> : null}</td>
                    <td className="max-w-sm px-4 py-4"><p className="font-medium">{lead.property?.title || "General enquiry"}</p>{lead.message ? <p className="mt-1 line-clamp-2 text-muted-foreground">{lead.message}</p> : null}</td>
                    <td className="px-4 py-4">{lead.source.replaceAll("_", " ")}</td>
                    <td className="px-4 py-4">{new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }).format(lead.createdAt)}</td>
                    <td className="px-4 py-4"><Badge variant="outline">{lead.status.replaceAll("_", " ")}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminSectionCard>
      ) : (
        <AdminEmptyState
          title={available ? "No leads yet" : "Lead database is not connected"}
          description={available ? "New website enquiries and site visits will appear here." : "Add a production DATABASE_URL to start receiving and tracking enquiries."}
          actionLabel="View Properties"
          icon={ClipboardList}
        />
      )}
    </AdminShell>
  );
}
