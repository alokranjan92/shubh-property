import { notFound } from "next/navigation";
import { AdminPageHeader } from "@/components/dashboard/admin/admin-page-header";
import { AdminShell } from "@/components/dashboard/admin/admin-shell";
import { PropertyForm } from "@/components/dashboard/admin/properties/property-form";
import { getAdminPropertyById } from "@/lib/properties/admin-property-data";

type EditAdminPropertyPageProps = {
  params: Promise<{
    propertyId: string;
  }>;
};

export default async function EditAdminPropertyPage({ params }: EditAdminPropertyPageProps) {
  const { propertyId } = await params;
  const property = getAdminPropertyById(propertyId);

  if (!property) {
    notFound();
  }

  return (
    <AdminShell breadcrumb="Edit Property">
      <AdminPageHeader
        title={`Edit ${property.title}`}
        description="Update listing details, verification, media placeholders, SEO and agent assignment."
      />
      <PropertyForm mode="edit" property={property} />
    </AdminShell>
  );
}
