import type { Metadata } from "next";
import { SafeSignUpPage } from "@/components/auth/auth-pages";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a Shubh Property account.",
  robots: { index: false, follow: false }
};

export default SafeSignUpPage;
