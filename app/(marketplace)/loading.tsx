import { Skeleton } from "@/components/ui/skeleton";

export default function MarketplaceLoading() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Skeleton className="h-5 w-48" />
        <Skeleton className="mt-4 h-12 w-full max-w-3xl" />
        <Skeleton className="mt-4 h-6 w-full max-w-2xl" />
        <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
          <Skeleton className="hidden h-[620px] lg:block" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="rounded-lg border border-border p-4">
                <Skeleton className="aspect-[4/3] w-full" />
                <Skeleton className="mt-5 h-6 w-4/5" />
                <Skeleton className="mt-3 h-4 w-3/5" />
                <Skeleton className="mt-5 h-10 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
