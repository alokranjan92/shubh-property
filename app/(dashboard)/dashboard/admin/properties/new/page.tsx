import { AdminPageHeader } from "@/components/dashboard/admin/admin-page-header";
import { AdminShell } from "@/components/dashboard/admin/admin-shell";
import { PropertyForm } from "@/components/dashboard/admin/properties/property-form";

export default function NewAdminPropertyPage() {
  return (
    <AdminShell breadcrumb="New Property">
      <AdminPageHeader
        title="Add New Property"
        description="Create a professional property listing draft with location, SEO, contact, amenities and media foundations."
      />
      <PropertyForm mode="create" />
    </AdminShell>
  );
}
