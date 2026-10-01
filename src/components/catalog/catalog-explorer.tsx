"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CATEGORIES, PRODUCTS, USAGES, type CategoryId, type UsageId } from "@/lib/catalog";
import { ProductCard } from "@/components/catalog/product-card";
import { cn } from "@/lib/utils";

export function CatalogExplorer({ compact = false }: { compact?: boolean }) {
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const [usage, setUsage] = useState<UsageId | "all">("all");
  const reduce = useReducedMotion();

  const items = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (usage !== "all" && !p.usages.includes(usage)) return false;
      return true;
    });
  }, [category, usage]);

  return (
    <section id="produkty" className="bg-surface px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Katalog</p>
        <h2 className="mt-4 max-w-lg font-display text-title font-semibold tracking-tight">
          Filtrujte podle kategorie i místa
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Oblouk, stojan, linka nebo řízení. Pak náměstí, park, škola, gastro, zahrada, město.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <ChipRow label="Kategorie">
            <Chip active={category === "all"} onClick={() => setCategory("all")}>
              Vše
            </Chip>
            {CATEGORIES.map((c) => (
              <Chip key={c.id} active={category === c.id} onClick={() => setCategory(c.id)}>
                {c.label}
              </Chip>
            ))}
          </ChipRow>
          <ChipRow label="Využití">
            <Chip active={usage === "all"} onClick={() => setUsage("all")}>
              Vše
            </Chip>
            {USAGES.map((u) => (
              <Chip key={u.id} active={usage === u.id} onClick={() => setUsage(u.id)}>
                {u.label}
              </Chip>
            ))}
          </ChipRow>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${category}-${usage}`}
            initial={reduce ? false : { opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduce ? undefined : { opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.length ? (
              items.slice(0, compact ? 6 : items.length).map((p) => <ProductCard key={p.slug} product={p} />)
            ) : (
              <p className="col-span-full rounded-xl bg-mist px-5 py-8 text-center text-sm text-muted">
                V této kombinaci nic není. Zrušte jeden z filtrů.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ChipRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium tracking-wide text-subtle uppercase">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "h-11 rounded-full px-4 text-sm font-medium transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.96]",
        active ? "bg-primary text-primary-fg" : "bg-mist text-fg hover:bg-border",
      )}
    >
      {children}
    </button>
  );
}
