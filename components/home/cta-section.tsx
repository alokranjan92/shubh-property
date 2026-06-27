import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-border bg-primary px-6 py-12 text-primary-foreground sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-80">
              Start with Dehradun
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-normal sm:text-4xl">
              Ready to buy, rent, sell or partner with Shubh Property?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 opacity-85">
              Connect with the team for verified property discovery, seller onboarding,
              supplier partnerships and future city expansion.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Talk to Shubh Property
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              <Link href="/sell">
                List your property <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
