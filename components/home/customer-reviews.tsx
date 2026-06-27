import { Star } from "lucide-react";
import { SectionShell } from "@/components/home/section-shell";
import { reviews } from "@/lib/homepage/data";

export function CustomerReviews() {
  return (
    <SectionShell
      eyebrow="Customer confidence"
      title="Customer reviews"
      description="Trust grows from clear advice, responsive operations and verified marketplace experiences."
      className="bg-secondary/40"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-lg border border-border bg-card p-6">
            <div className="flex gap-1 text-amber-500" aria-label={`${review.rating} star review`}>
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-5 text-base leading-7 text-foreground">
              “{review.quote}”
            </blockquote>
            <div className="mt-6 border-t border-border pt-5">
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-muted-foreground">{review.role}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
