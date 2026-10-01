import { createFileRoute } from "@tanstack/react-router";
import { UseCaseGrid } from "@/components/catalog/use-case-grid";
import { RecommendWizard } from "@/components/catalog/recommend-wizard";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/reseni/")({
  component: ReseniIndex,
  head: () => ({
    meta: [{ title: "Řešení podle využití — mlzidla.cz" }],
  }),
});

function ReseniIndex() {
  return (
    <PageShell>
      <div className="border-b border-border bg-mist px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Řešení</p>
          <h1 className="mt-3 font-display text-title font-semibold tracking-tight">Mlžítka podle toho, kde mají sloužit</h1>
          <p className="mt-3 max-w-xl text-muted">
            Od zahrady po metropoli. Každé využití má sadu produktů, limity vody a režim spínání.
          </p>
        </div>
      </div>
      <UseCaseGrid />
      <RecommendWizard />
    </PageShell>
  );
}
