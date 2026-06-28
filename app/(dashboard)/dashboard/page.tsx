import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardStatCard } from "@/components/dashboard/dashboard-stat-card";
import { hasValidClerkKeys } from "@/lib/auth/clerk";
import { getCurrentUserRole, getDashboardPathForRole } from "@/lib/auth/roles";
import { Building2, ShieldCheck, Store, UserRound } from "lucide-react";

export default async function DashboardPage() {
  const role = await getCurrentUserRole();

  if (hasValidClerkKeys()) {
    redirect(getDashboardPathForRole(role));
  }

  return (
    <DashboardShell
      role={role}
      title="Authentication Setup Dashboard"
      description="Clerk keys are not configured, so Shubh Property is running in safe mock mode. Public routes remain accessible and private dashboard UI can still be reviewed."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <DashboardStatCard
          title="Admin"
          value="Ready"
          description="Platform operations, SEO, leads and settings."
          icon={ShieldCheck}
        />
        <DashboardStatCard
          title="Agent"
          value="Ready"
          description="Assigned properties, leads and visits."
          icon={Building2}
        />
        <DashboardStatCard
          title="Customer"
          value="Ready"
          description="Saved properties, enquiries and visits."
          icon={UserRound}
        />
        <DashboardStatCard
          title="Supplier"
          value="Ready"
          description="Construction material and decor seller foundation."
          icon={Store}
        />
      </div>
    </DashboardShell>
  );
}
