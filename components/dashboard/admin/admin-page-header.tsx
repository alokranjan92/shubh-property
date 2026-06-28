import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

type AdminPageHeaderProps = {
  title: string;
  description: string;
  actionLabel?: string;
};

export function AdminPageHeader({ title, description, actionLabel }: AdminPageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 shadow-sm sm:p-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Admin Dashboard
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-normal text-foreground sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
      {actionLabel ? (
        <Button className="min-h-11 w-full lg:w-auto" type="button">
          <Plus className="h-4 w-4" aria-hidden="true" />
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
