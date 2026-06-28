import Link from "next/link";
import { KeyRound, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

type MockAuthCardProps = {
  mode: "sign-in" | "sign-up" | "profile";
};

const content = {
  "sign-in": {
    title: "Sign in setup pending",
    description:
      "Clerk environment variables are not configured yet. Public pages and the app build remain safe while authentication is in mock mode."
  },
  "sign-up": {
    title: "Sign up setup pending",
    description:
      "Add Clerk keys to enable account creation for customers, agents, suppliers and admins."
  },
  profile: {
    title: "User profile setup pending",
    description:
      "The profile page will show Clerk account controls once real Clerk keys are configured."
  }
};

export function MockAuthCard({ mode }: MockAuthCardProps) {
  const item = content[mode];

  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary/30 px-4 py-12">
      <section className="w-full max-w-xl rounded-lg border border-border bg-card p-6 text-card-foreground shadow-xl sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <KeyRound className="h-6 w-6" aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-3xl font-semibold tracking-normal">{item.title}</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
        <div className="mt-6 rounded-lg border border-border bg-background p-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="font-medium">Required Clerk variables</p>
              <p className="mt-1 text-sm text-muted-foreground">
                `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/">Back Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">Open Mock Dashboard</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
