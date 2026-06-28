import { AdminMobileNav } from "@/components/dashboard/admin/admin-mobile-nav";
import { AdminSidebar } from "@/components/dashboard/admin/admin-sidebar";
import { AdminTopbar } from "@/components/dashboard/admin/admin-topbar";

type AdminShellProps = {
  breadcrumb: string;
  children: React.ReactNode;
};

export function AdminShell({ breadcrumb, children }: AdminShellProps) {
  return (
    <main className="min-h-screen bg-secondary/30 text-foreground">
      <AdminSidebar />
      <div className="lg:pl-72">
        <AdminTopbar breadcrumb={breadcrumb} />
        <section className="px-4 pb-24 pt-5 sm:px-6 sm:pt-7 lg:px-8 lg:pb-10">
          <div className="mx-auto max-w-7xl space-y-5 sm:space-y-6">{children}</div>
        </section>
      </div>
      <AdminMobileNav />
    </main>
  );
}
