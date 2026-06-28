import { AdminEmptyState } from "@/components/dashboard/admin/admin-empty-state";
import { AdminPageHeader } from "@/components/dashboard/admin/admin-page-header";
import { AdminSectionCard } from "@/components/dashboard/admin/admin-section-card";
import { AdminShell } from "@/components/dashboard/admin/admin-shell";
import { AdminTablePlaceholder } from "@/components/dashboard/admin/admin-table-placeholder";
import type { AdminModuleKey } from "@/lib/dashboard/admin-data";
import { adminModulePages } from "@/lib/dashboard/admin-data";

type AdminModulePageProps = {
  moduleKey: AdminModuleKey;
};

export function AdminModulePage({ moduleKey }: AdminModulePageProps) {
  const page = adminModulePages[moduleKey];

  return (
    <AdminShell breadcrumb={page.title}>
      <AdminPageHeader title={page.title} description={page.description} actionLabel={page.addLabel} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {page.cards.map((card) => (
          <div key={card} className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <p className="text-sm font-semibold text-foreground">{card}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Prepared for database-backed workflows and team operations.
            </p>
          </div>
        ))}
      </div>

      <AdminSectionCard
        title={`${page.title} Table`}
        description="Responsive placeholder for future list, search, filtering, bulk actions and moderation."
      >
        <AdminTablePlaceholder columns={page.columns} />
      </AdminSectionCard>

      <AdminEmptyState
        title={page.emptyTitle}
        description={page.emptyDescription}
        actionLabel={page.addLabel}
        icon={page.icon}
      />
    </AdminShell>
  );
}
