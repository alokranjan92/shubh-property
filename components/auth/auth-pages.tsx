import { SignIn, SignUp, UserProfile } from "@clerk/nextjs";
import { hasValidClerkKeys } from "@/lib/auth/clerk";
import { MockAuthCard } from "@/components/auth/mock-auth-card";

export function SafeSignInPage() {
  if (!hasValidClerkKeys()) {
    return <MockAuthCard mode="sign-in" />;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary/30 px-4 py-12">
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        fallbackRedirectUrl="/dashboard"
      />
    </main>
  );
}

export function SafeSignUpPage() {
  if (!hasValidClerkKeys()) {
    return <MockAuthCard mode="sign-up" />;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary/30 px-4 py-12">
      <SignUp
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
        fallbackRedirectUrl="/dashboard"
      />
    </main>
  );
}

export function SafeUserProfilePage() {
  if (!hasValidClerkKeys()) {
    return <MockAuthCard mode="profile" />;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary/30 px-4 py-12">
      <UserProfile routing="path" path="/user-profile" />
    </main>
  );
}
