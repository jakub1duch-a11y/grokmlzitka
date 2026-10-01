import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-bg text-fg">
      <SiteHeader solid />
      <main className="pt-16 sm:pt-18">{children}</main>
      <SiteFooter />
    </div>
  );
}
