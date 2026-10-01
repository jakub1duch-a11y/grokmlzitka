import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, USAGES, getProduct, relatedProducts } from "@/lib/catalog";
import { ProductCard } from "@/components/catalog/product-card";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { AnimBlock, AnimItem, AnimStagger } from "@/components/motion/anim-block";
import { MistField } from "@/components/motion/mist-field";

export const Route = createFileRoute("/produkty/$slug")({
  component: ProductDetail,
});

function ProductDetail() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);

  if (!product) {
    return (
      <PageShell>
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h1 className="font-display text-title font-semibold">Produkt nenalezen</h1>
          <Button asChild className="mt-6">
            <Link to="/produkty">Zpět do katalogu</Link>
          </Button>
        </div>
      </PageShell>
    );
  }

  const category = CATEGORIES.find((c) => c.id === product.category);
  const related = relatedProducts(product);
  const fits = USAGES.filter((u) => product.usages.includes(u.id));

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-hero px-4 py-16 text-hero-fg sm:px-6 sm:py-20">
        <MistField />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <AnimBlock theme="mist">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              {category?.label} · {product.model}
            </p>
            <h1 className="mt-4 font-display text-title font-semibold tracking-tight">{product.name}</h1>
            <p className="mt-4 text-lead text-hero-muted">{product.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {product.badges.map((b) => (
                <span key={b} className="rounded-full bg-surface/15 px-3 py-1 text-xs font-medium">
                  {b}
                </span>
              ))}
            </div>
            <p className="mt-6 text-2xl font-semibold">od {product.priceFrom}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="/#poptavka">
                  Nezávazná poptávka
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/produkty">Celý katalog</Link>
              </Button>
            </div>
          </AnimBlock>
          <AnimBlock theme="product" delay={0.08}>
            <img src={product.image} alt={product.alt} className="h-80 w-full rounded-xl object-cover shadow-soft sm:h-96" />
          </AnimBlock>
        </div>
      </section>

      <section className="bg-surface px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <AnimBlock theme="civic">
            <h2 className="text-xl font-semibold">Proč právě tento kus</h2>
            <p className="mt-4 leading-relaxed text-muted">{product.story}</p>
            <ul className="mt-6 flex flex-col gap-2 text-sm">
              {product.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-primary">–</span>
                  {h}
                </li>
              ))}
            </ul>
          </AnimBlock>
          <AnimBlock theme="civic" delay={0.06}>
            <h2 className="text-xl font-semibold">Technická data</h2>
            <dl className="mt-4 divide-y divide-border rounded-xl bg-bg shadow-card">
              {product.specs.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between gap-4 px-5 py-3">
                  <dt className="text-sm text-muted">{s.label}</dt>
                  <dd className="text-sm font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </AnimBlock>
        </div>
      </section>

      <section className="bg-bg px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-xl font-semibold">Hodí se</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {fits.map((u) => (
              <Link
                key={u.id}
                to="/reseni/$usage"
                params={{ usage: u.id }}
                className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-fg hover:bg-border"
              >
                {u.label}
              </Link>
            ))}
          </div>
          <h2 className="mt-14 text-xl font-semibold">Související</h2>
          <AnimStagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <AnimItem key={p.slug}>
                <ProductCard product={p} />
              </AnimItem>
            ))}
          </AnimStagger>
        </div>
      </section>
    </PageShell>
  );
}
