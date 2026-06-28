import { currentUser } from "@clerk/nextjs/server";
import { hasValidClerkKeys } from "@/lib/auth/clerk";

export const appRoles = ["admin", "agent", "customer", "supplier"] as const;

export type AppRole = (typeof appRoles)[number];

export const roleDashboardPath: Record<AppRole, string> = {
  admin: "/dashboard/admin",
  agent: "/dashboard/agent",
  customer: "/dashboard/customer",
  supplier: "/dashboard/supplier"
};

export function isAppRole(value: unknown): value is AppRole {
  return typeof value === "string" && appRoles.includes(value as AppRole);
}

export async function getCurrentUserRole(): Promise<AppRole | null> {
  if (!hasValidClerkKeys()) {
    return null;
  }

  const user = await currentUser();
  const role = user?.publicMetadata?.role;

  if (isAppRole(role)) {
    return role;
  }

  return "customer";
}

export function getDashboardPathForRole(role: AppRole | null) {
  return role ? roleDashboardPath[role] : "/dashboard/customer";
}
