import { SectionShell } from "@/components/home/section-shell";
import { reasons } from "@/lib/homepage/data";

export function WhyChoose() {
  return (
    <SectionShell
      eyebrow="Trust architecture"
      title="Why choose Shubh Property"
      description="A premium marketplace experience with practical operations underneath: verification, location intelligence, lead routing and category depth."
      className="bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--secondary)/0.45))]"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <article key={reason.title} className="rounded-lg border border-border bg-card p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <reason.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-lg font-semibold">{reason.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{reason.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
