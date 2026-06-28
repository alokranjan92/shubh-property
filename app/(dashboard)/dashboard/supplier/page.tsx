import { redirect } from "next/navigation";
import { RoleDashboard } from "@/components/dashboard/role-dashboard";
import { hasValidClerkKeys } from "@/lib/auth/clerk";
import { getCurrentUserRole, getDashboardPathForRole } from "@/lib/auth/roles";

export default async function SupplierDashboardPage() {
  const role = await getCurrentUserRole();

  if (hasValidClerkKeys() && role !== "supplier") {
    redirect(getDashboardPathForRole(role));
  }

  return <RoleDashboard role={role} view="supplier" />;
}
