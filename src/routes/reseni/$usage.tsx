import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getUsage, productsForUsage } from "@/lib/catalog";
import { ProductCard } from "@/components/catalog/product-card";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { AnimBlock, AnimItem, AnimStagger } from "@/components/motion/anim-block";
import { MistField } from "@/components/motion/mist-field";
import { RecommendWizard } from "@/components/catalog/recommend-wizard";

export const Route = createFileRoute("/reseni/$usage")({
  component: UsagePage,
});

function UsagePage() {
  const { usage: id } = Route.useParams();
  const usage = getUsage(id);

  if (!usage) {
    return (
      <PageShell>
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h1 className="font-display text-title font-semibold">Řešení nenalezeno</h1>
          <Button asChild className="mt-6">
            <Link to="/reseni">Všechna řešení</Link>
          </Button>
        </div>
      </PageShell>
    );
  }

  const products = productsForUsage(usage.id);

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-hero text-hero-fg">
        <img src={usage.image} alt={usage.alt} className="absolute inset-0 size-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/80 to-hero/30" />
        <MistField />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <AnimBlock theme="mist">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">{usage.kicker}</p>
            <h1 className="mt-4 max-w-xl font-display text-title font-semibold tracking-tight">{usage.headline}</h1>
            <p className="mt-4 max-w-lg text-hero-muted">{usage.promise}</p>
            <dl className="mt-8 flex flex-wrap gap-8">
              {usage.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs text-hero-muted">{s.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold tabular-nums">{s.value}</dd>
                </div>
              ))}
            </dl>
            <Button asChild className="mt-8">
              <a href="/#poptavka">
                Poptat toto řešení
                <ArrowRight />
              </a>
            </Button>
          </AnimBlock>
        </div>
      </section>

      <section className="bg-surface px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <AnimBlock theme="heat">
            <h2 className="text-xl font-semibold">Problém</h2>
            <p className="mt-3 leading-relaxed text-muted">{usage.problem}</p>
          </AnimBlock>
          <AnimBlock theme="civic" delay={0.06}>
            <h2 className="text-xl font-semibold">Co dodáme</h2>
            <p className="mt-3 leading-relaxed text-muted">{usage.promise}</p>
          </AnimBlock>
        </div>
      </section>

      <section className="bg-bg px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-title font-semibold tracking-tight">Doporučené produkty</h2>
          <AnimStagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <AnimItem key={p.slug}>
                <ProductCard product={p} featured={usage.recommended.includes(p.slug)} />
              </AnimItem>
            ))}
          </AnimStagger>
        </div>
      </section>
      <RecommendWizard />
    </PageShell>
  );
}
