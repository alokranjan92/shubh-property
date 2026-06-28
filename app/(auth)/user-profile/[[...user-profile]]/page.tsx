import type { Metadata } from "next";
import { SafeUserProfilePage } from "@/components/auth/auth-pages";

export const metadata: Metadata = {
  title: "User Profile",
  description: "Manage your Shubh Property account profile.",
  robots: { index: false, follow: false }
};

export default SafeUserProfilePage;
