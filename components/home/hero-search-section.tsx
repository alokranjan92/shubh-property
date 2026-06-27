import Image from "next/image";
import { ArrowRight, MapPin, Search, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectShell } from "@/components/ui/select-shell";
import { heroStats, popularSearches, quickTrust, searchTypes } from "@/lib/homepage/data";

export function HeroSearchSection() {
  return (
    <section className="relative overflow-hidden px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.12),transparent_34%),linear-gradient(180deg,hsl(var(--secondary)/0.55),transparent_46%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="animate-rise">
          <Badge variant="luxury" className="mb-5">
            Dehradun today. India-scale tomorrow.
          </Badge>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-foreground sm:text-5xl lg:text-6xl">
            Find property, build confidently, finish beautifully.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Shubh Property brings verified real estate, construction materials and home
            decor into one trusted marketplace for Dehradun and future Indian city expansion.
          </p>

          <div className="mt-8 rounded-lg border border-border bg-card p-3 shadow-xl shadow-primary/5">
            <div className="grid gap-3 md:grid-cols-[150px_1fr_150px_auto]">
              <SelectShell aria-label="Search type" defaultValue="Buy">
                {searchTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </SelectShell>
              <div className="relative">
                <MapPin
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  aria-label="Search location"
                  className="pl-10"
                  defaultValue="Dehradun"
                  placeholder="Search city, locality or project"
                />
              </div>
              <SelectShell aria-label="Budget" defaultValue="50L-1Cr">
                <option value="25L-50L">₹25L - ₹50L</option>
                <option value="50L-1Cr">₹50L - ₹1Cr</option>
                <option value="1Cr-3Cr">₹1Cr - ₹3Cr</option>
                <option value="3Cr+">₹3Cr+</option>
              </SelectShell>
              <Button size="lg" className="h-11">
                <Search className="h-4 w-4" aria-hidden="true" />
                Search
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 px-1">
              {popularSearches.map((search) => (
                <Button key={search} variant="secondary" size="sm" className="rounded-full">
                  {search}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-border bg-background/70 p-4">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-rise-delayed">
          <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-2xl shadow-primary/10">
            <Image
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"
              alt="Premium modern home interior represented for Shubh Property marketplace"
              width={1400}
              height={1100}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/20 bg-background/90 p-4 shadow-lg backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">Marketplace readiness</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Properties, agents, materials and decor under one scalable platform.
                  </p>
                </div>
                <ShieldCheck className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-5">
            {quickTrust.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-card p-3 text-center text-xs text-muted-foreground"
              >
                <item.icon className="mx-auto mb-2 h-4 w-4 text-primary" aria-hidden="true" />
                {item.label}
              </div>
            ))}
          </div>

          <Button asChild variant="link" className="mt-4 px-0">
            <a href="#featured-properties">
              Explore featured homes <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
