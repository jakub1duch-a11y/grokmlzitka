import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { USAGES } from "@/lib/catalog";
import { AnimItem, AnimStagger } from "@/components/motion/anim-block";

export function UseCaseGrid() {
  return (
    <section id="reseni" className="bg-bg px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Využití</p>
        <h2 className="mt-4 max-w-lg font-display text-title font-semibold tracking-tight">
          Stejná mlha. Jiný prostor.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Náměstí, škola, terasa i celoměstská síť — katalog se skládá podle toho, kde má chladit.
        </p>
        <AnimStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {USAGES.map((usage) => (
            <AnimItem key={usage.id}>
              <Link
                to="/reseni/$usage"
                params={{ usage: usage.id }}
                className="group relative block overflow-hidden rounded-xl bg-hero text-hero-fg shadow-card"
              >
                <img
                  src={usage.image}
                  alt={usage.alt}
                  className="h-56 w-full object-cover opacity-70 transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-semibold tracking-wide text-accent uppercase">{usage.kicker}</p>
                  <p className="mt-1 flex items-center justify-between text-lg font-semibold">
                    {usage.label}
                    <ArrowUpRight className="size-4 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                </div>
              </Link>
            </AnimItem>
          ))}
        </AnimStagger>
      </div>
    </section>
  );
}
