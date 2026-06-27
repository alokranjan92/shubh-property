import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/home/section-shell";
import { propertyCategories } from "@/lib/homepage/data";

export function BrowseByCategory() {
  return (
    <SectionShell
      eyebrow="Browse smarter"
      title="Browse by category"
      description="Give customers fast paths into residential, commercial, rental and builder-led inventory."
      className="bg-secondary/40"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {propertyCategories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="group rounded-lg border border-border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <category.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <ArrowRight
                className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary"
                aria-hidden="true"
              />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{category.label}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{category.count}</p>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
