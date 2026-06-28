import { redirect } from "next/navigation";
import { hasValidClerkKeys } from "@/lib/auth/clerk";
import type { AppRole } from "@/lib/auth/roles";
import { getCurrentUserRole, getDashboardPathForRole } from "@/lib/auth/roles";

export async function requireRole(requiredRole: AppRole) {
  const role = await getCurrentUserRole();

  if (hasValidClerkKeys() && role !== requiredRole) {
    redirect(getDashboardPathForRole(role));
  }

  return role;
}
