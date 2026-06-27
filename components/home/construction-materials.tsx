import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/home/section-shell";
import { materials } from "@/lib/homepage/data";

export function ConstructionMaterials() {
  return (
    <SectionShell
      eyebrow="Construction marketplace"
      title="Construction materials from verified suppliers"
      description="Support home builders with cement, steel, tiles, fittings and city-wise supplier discovery."
      className="bg-secondary/40"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {materials.map((item) => (
          <article key={item.name} className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src={item.image}
              alt={item.name}
              width={1000}
              height={720}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              </div>
              <p className="mt-5 text-lg font-semibold">{item.price}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <Button asChild size="lg">
          <Link href="/construction-materials">
            Explore materials <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </SectionShell>
  );
}
