import Link from "next/link";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PropertyEmptyState() {
  return (
    <div className="rounded-lg border border-dashed border-border bg-secondary/35 p-6 text-center">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
        <Building2 className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-semibold">No matching properties</h3>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
        Clear filters or add a new listing to keep the Dehradun inventory healthy.
      </p>
      <Button asChild className="mt-5 min-h-11">
        <Link href="/dashboard/admin/properties/new">Add New Property</Link>
      </Button>
    </div>
  );
}
