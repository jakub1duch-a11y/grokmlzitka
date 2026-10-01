"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { USAGES, recommend, type ScaleId, type UsageId } from "@/lib/catalog";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/catalog/product-card";
import { cn } from "@/lib/utils";

const SCALES: { id: ScaleId; label: string; hint: string }[] = [
  { id: "bod", label: "Jeden bod", hint: "Zahrada, terasa, vchod." },
  { id: "areal", label: "Areál", hint: "Škola, park, náměstí." },
  { id: "sit", label: "Síť města", hint: "Více lokalit, reporty, API." },
];

export function RecommendWizard() {
  const [usage, setUsage] = useState<UsageId | null>(null);
  const [scale, setScale] = useState<ScaleId | null>(null);
  const reduce = useReducedMotion();
  const result = usage && scale ? recommend(usage, scale) : null;

  return (
    <section className="relative overflow-hidden bg-hero px-4 py-20 text-hero-fg sm:px-6 sm:py-24">
      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Konfigurátor</p>
        <h2 className="mt-4 max-w-lg font-display text-title font-semibold tracking-tight">
          Kde má mlžit — a v jakém rozsahu
        </h2>
        <p className="mt-4 max-w-xl text-hero-muted">Dva kroky. Doporučíme skladu a tarif, hardware naceníme podle místa.</p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {USAGES.map((u) => (
            <button
              key={u.id}
              type="button"
              onClick={() => setUsage(u.id)}
              className={cn(
                "rounded-lg px-4 py-4 text-left transition-[background-color,box-shadow] duration-150",
                usage === u.id ? "bg-primary text-primary-fg" : "bg-surface/10 hover:bg-surface/16",
              )}
            >
              <p className="text-xs font-semibold tracking-wide uppercase opacity-80">{u.kicker}</p>
              <p className="mt-1 font-semibold">{u.label}</p>
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {SCALES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setScale(s.id)}
              className={cn(
                "rounded-lg px-4 py-4 text-left transition-[background-color] duration-150",
                scale === s.id ? "bg-accent text-fg" : "bg-surface/10 hover:bg-surface/16",
              )}
            >
              <p className="font-semibold">{s.label}</p>
              <p className={scale === s.id ? "mt-1 text-sm text-fg/70" : "mt-1 text-sm text-hero-muted"}>{s.hint}</p>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key={`${usage}-${scale}`}
              initial={reduce ? false : { opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12"
            >
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-hero-muted">Doporučený tarif</p>
                  <p className="text-2xl font-semibold">{result.plan}</p>
                  <p className="mt-1 max-w-lg text-sm text-hero-muted">{result.note}</p>
                </div>
                <Button asChild>
                  <a href="/#poptavka">
                    Nezávazná poptávka
                    <ArrowRight />
                  </a>
                </Button>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {result.products.map((p) => (
                  <div key={p.slug} className="text-fg">
                    <ProductCard product={p} featured />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-hero-muted">
                Chcete celý katalog?{" "}
                <Link to="/produkty" className="font-semibold text-accent underline-offset-2 hover:underline">
                  Otevřít produkty
                </Link>
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
