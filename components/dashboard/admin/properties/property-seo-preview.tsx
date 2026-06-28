type PropertySeoPreviewProps = {
  title: string;
  description: string;
  slug: string;
};

export function PropertySeoPreview({ title, description, slug }: PropertySeoPreviewProps) {
  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Google Preview</p>
      <p className="mt-4 text-sm text-emerald-700">https://shubhproperty.in/properties/{slug || "property-slug"}</p>
      <h3 className="mt-1 text-lg font-semibold text-blue-700">
        {title || "SEO title will appear here"}
      </h3>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">
        {description || "SEO description will appear here and help customers understand the listing."}
      </p>
    </div>
  );
}
