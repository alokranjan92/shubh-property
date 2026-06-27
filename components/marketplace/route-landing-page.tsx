import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type RouteLandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
};

export function RouteLandingPage({
  eyebrow,
  title,
  description,
  highlights
}: RouteLandingPageProps) {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="inline-flex items-center gap-3 text-sm font-semibold">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
          Shubh Property
        </Link>
        <section className="mt-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{description}</p>
        </section>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((highlight) => (
            <div key={highlight} className="rounded-lg border border-border bg-card p-5">
              <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{highlight}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Shubh Property <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Back to homepage</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
