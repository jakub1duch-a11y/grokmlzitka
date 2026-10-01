import { createFileRoute } from "@tanstack/react-router";
import { CatalogExplorer } from "@/components/catalog/catalog-explorer";
import { RecommendWizard } from "@/components/catalog/recommend-wizard";
import { UseCaseGrid } from "@/components/catalog/use-case-grid";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/produkty/")({
  component: ProduktyPage,
  head: () => ({
    meta: [{ title: "Katalog mlžidel — mlzidla.cz" }],
  }),
});

function ProduktyPage() {
  return (
    <PageShell>
      <div className="border-b border-border bg-mist px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Produkty</p>
          <h1 className="mt-3 font-display text-title font-semibold tracking-tight">Katalog podle kategorie a využití</h1>
          <p className="mt-3 max-w-xl text-muted">
            Oblouky, stojany, linky a Pulse Box. Filtrujte, porovnejte, nebo nechte konfigurátor vybrat sadu.
          </p>
        </div>
      </div>
      <CatalogExplorer />
      <UseCaseGrid />
      <RecommendWizard />
    </PageShell>
  );
}
