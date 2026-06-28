import { Archive, CheckCircle2, Star, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PropertyBulkActions() {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-dashed border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold">Bulk actions placeholder</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Select listings later to approve, feature, archive or delete in bulk.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:flex">
        <Button type="button" variant="outline" size="sm">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Approve
        </Button>
        <Button type="button" variant="outline" size="sm">
          <Star className="h-4 w-4" aria-hidden="true" />
          Feature
        </Button>
        <Button type="button" variant="outline" size="sm">
          <Archive className="h-4 w-4" aria-hidden="true" />
          Archive
        </Button>
        <Button type="button" variant="outline" size="sm">
          <Trash2 className="h-4 w-4" aria-hidden="true" />
          Delete
        </Button>
      </div>
    </div>
  );
}
