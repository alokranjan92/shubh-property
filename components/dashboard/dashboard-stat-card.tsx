import type { LucideIcon } from "lucide-react";

type DashboardStatCardProps = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

export function DashboardStatCard({
  title,
  value,
  description,
  icon: Icon
}: DashboardStatCardProps) {
  return (
    <article className="rounded-lg border border-border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="mt-2 text-3xl font-semibold">{value}</p>
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
    </article>
  );
}
