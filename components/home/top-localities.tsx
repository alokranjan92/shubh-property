import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";
import { SectionShell } from "@/components/home/section-shell";
import { dehradunLocalities, mockProperties } from "@/lib/properties/mock-properties";

export function TopLocalities() {
  const localities = dehradunLocalities.map((locality) => {
    const count = mockProperties.filter((property) => property.locality === locality).length;

    return {
      locality,
      count
    };
  });

  return (
    <SectionShell
      eyebrow="Local intelligence"
      title="Top localities in Dehradun"
      description="Fast mobile-friendly entry points into Shubh Property's most important launch neighborhoods."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {localities.map((item) => (
          <Link
            key={item.locality}
            href={`/properties?locality=${encodeURIComponent(item.locality)}`}
            className="group rounded-lg border border-border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <MapPinned className="h-6 w-6 text-primary" aria-hidden="true" />
            <h3 className="mt-5 font-semibold">{item.locality}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.count} curated properties</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
              Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
