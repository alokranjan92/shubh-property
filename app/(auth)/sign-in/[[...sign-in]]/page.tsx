import type { Metadata } from "next";
import { SafeSignInPage } from "@/components/auth/auth-pages";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Shubh Property account.",
  robots: { index: false, follow: false }
};

export default SafeSignInPage;
