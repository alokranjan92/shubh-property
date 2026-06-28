import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AdminSectionCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
};

export function AdminSectionCard({ title, description, children, action }: AdminSectionCardProps) {
  return (
    <Card className="border-border/80 bg-card shadow-sm">
      <CardHeader className="gap-3 p-4 sm:flex-row sm:items-start sm:justify-between sm:p-5">
        <div>
          <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
          {description ? (
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {action}
      </CardHeader>
      <CardContent className="p-4 pt-0 sm:p-5 sm:pt-0">{children}</CardContent>
    </Card>
  );
}
