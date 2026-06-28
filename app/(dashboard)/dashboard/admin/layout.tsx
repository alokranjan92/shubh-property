import type { Metadata } from "next";
import { requireRole } from "@/lib/auth/require-role";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Private Shubh Property admin dashboard.",
  robots: {
    index: false,
    follow: false
  }
};

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  await requireRole("admin");

  return children;
}
