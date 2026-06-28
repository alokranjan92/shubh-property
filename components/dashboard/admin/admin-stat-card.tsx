import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type AdminStatCardProps = {
  title: string;
  value: string;
  trend: string;
  description: string;
  icon: LucideIcon;
};

export function AdminStatCard({
  title,
  value,
  trend,
  description,
  icon: Icon
}: AdminStatCardProps) {
  return (
    <Card className="overflow-hidden border-border/80 bg-card shadow-sm">
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="mt-2 text-2xl font-semibold tracking-normal text-foreground sm:text-3xl">
              {value}
            </p>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#b8860b]">
          {trend}
        </p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
