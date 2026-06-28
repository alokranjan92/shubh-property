import { AdminShell } from "@/components/dashboard/admin/admin-shell";
import { PropertyManagementPage } from "@/components/dashboard/admin/properties/property-management-page";
import { getAdminProperties, getPropertyStats } from "@/lib/properties/admin-property-data";

export default function AdminPropertiesPage() {
  return (
    <AdminShell breadcrumb="Properties">
      <PropertyManagementPage properties={getAdminProperties()} stats={getPropertyStats()} />
    </AdminShell>
  );
}
