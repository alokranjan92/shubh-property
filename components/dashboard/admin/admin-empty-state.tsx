import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type AdminEmptyStateProps = {
  title: string;
  description: string;
  actionLabel: string;
  icon: LucideIcon;
};

export function AdminEmptyState({
  title,
  description,
  actionLabel,
  icon: Icon
}: AdminEmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-secondary/35 p-5 text-center sm:p-8">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{description}</p>
      <Button className="mt-5 min-h-11" type="button">
        {actionLabel}
      </Button>
    </div>
  );
}
