import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/home/section-shell";
import { decorProducts } from "@/lib/homepage/data";

export function HomeDecor() {
  return (
    <SectionShell
      eyebrow="Finish the home"
      title="Home decor for premium Indian living"
      description="Connect new homeowners with furniture, lighting, wall finishes and interior-ready sellers."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {decorProducts.map((item) => (
          <article
            key={item.name}
            className="group overflow-hidden rounded-lg border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt={item.name}
                width={1000}
                height={720}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg bg-background/90 text-primary backdrop-blur">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <Button asChild size="lg" variant="outline">
          <Link href="/home-decor">
            Browse home decor <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </SectionShell>
  );
}
