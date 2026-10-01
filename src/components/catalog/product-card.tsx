import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { CATEGORIES } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  const category = CATEGORIES.find((c) => c.id === product.category)?.label;

  return (
    <Link
      to="/produkty/$slug"
      params={{ slug: product.slug }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl bg-surface shadow-card transition-[transform,box-shadow] duration-200 ease-[var(--ease-out)] hover:-translate-y-1",
        featured && "ring-1 ring-primary/30",
      )}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          className="h-48 w-full object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-105"
        />
        <p className="absolute top-3 left-3 rounded-full bg-hero/80 px-3 py-1 text-xs font-semibold text-hero-fg">
          {category}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-1.5">
          {product.badges.map((b) => (
            <span key={b} className="rounded-full bg-mist px-2.5 py-0.5 text-xs font-medium text-primary">
              {b}
            </span>
          ))}
        </div>
        <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{product.tagline}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <p className="text-sm font-semibold">
            od {product.priceFrom}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Detail
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
