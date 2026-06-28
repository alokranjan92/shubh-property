import { notFound } from "next/navigation";
import { AdminShell } from "@/components/dashboard/admin/admin-shell";
import { PropertyDetailView } from "@/components/dashboard/admin/properties/property-detail-view";
import { getAdminPropertyById } from "@/lib/properties/admin-property-data";

type AdminPropertyDetailPageProps = {
  params: Promise<{
    propertyId: string;
  }>;
};

export default async function AdminPropertyDetailPage({ params }: AdminPropertyDetailPageProps) {
  const { propertyId } = await params;
  const property = getAdminPropertyById(propertyId);

  if (!property) {
    notFound();
  }

  return (
    <AdminShell breadcrumb="Property Details">
      <PropertyDetailView property={property} />
    </AdminShell>
  );
}
