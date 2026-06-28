import { Badge } from "@/components/ui/badge";
import type { AdminPropertyStatus, AdminVerificationStatus } from "@/lib/properties/admin-property-data";
import { cn } from "@/lib/utils/cn";

type PropertyStatusBadgeProps = {
  status: AdminPropertyStatus | AdminVerificationStatus | "Featured" | "Standard";
};

export function PropertyStatusBadge({ status }: PropertyStatusBadgeProps) {
  const tone =
    status === "Published" || status === "Verified" || status === "Featured"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-100"
      : status === "Pending" || status === "In Review"
        ? "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/15 dark:text-amber-100"
        : status === "Sold" || status === "Rented"
          ? "border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          : "border-border bg-background text-muted-foreground";

  return (
    <Badge variant="outline" className={cn("whitespace-nowrap", tone)}>
      {status}
    </Badge>
  );
}
