import { SafeUserButton } from "@/components/auth/safe-user-button";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <h1 className="text-lg font-semibold">Shubh Property Dashboard</h1>
          <SafeUserButton />
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold">Welcome</h2>
        <p className="mt-3 text-muted-foreground">
          Manage properties, leads, agents, locations, media, products, blogs, and reviews.
        </p>
      </section>
    </main>
  );
}
