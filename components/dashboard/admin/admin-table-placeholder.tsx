type AdminTablePlaceholderProps = {
  columns: string[];
};

export function AdminTablePlaceholder({ columns }: AdminTablePlaceholderProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="hidden grid-cols-6 border-b border-border bg-secondary/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground md:grid">
        {columns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>
      <div className="divide-y divide-border">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="grid gap-3 px-4 py-4 md:grid-cols-6 md:items-center"
            aria-hidden="true"
          >
            {columns.map((column, columnIndex) => (
              <div key={column} className="space-y-2">
                <span className="text-xs font-medium text-muted-foreground md:hidden">{column}</span>
                <div
                  className={
                    columnIndex === 0
                      ? "h-3.5 w-36 rounded-full bg-secondary"
                      : "h-3.5 w-24 rounded-full bg-secondary"
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
