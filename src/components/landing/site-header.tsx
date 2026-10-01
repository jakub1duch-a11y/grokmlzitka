"use client";

import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const NAV = [
  { to: "/produkty", label: "Produkty" },
  { to: "/reseni", label: "Řešení" },
  { href: "/#funkce", label: "Funkce" },
  { href: "/#cenik", label: "Ceník" },
  { href: "/#reference", label: "Reference" },
] as const;

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const filled = solid || scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200 ease-[var(--ease-out)]",
        filled
          ? "bg-hero/95 shadow-[0_1px_0_color-mix(in_oklab,var(--color-hero-fg)_10%,transparent)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6">
        <Logo inverted />

        <nav className="hidden items-center gap-7 text-sm font-medium text-hero-muted lg:flex" aria-label="Hlavní">
          {NAV.map((item) =>
            "to" in item ? (
              <Link key={item.to} to={item.to} className="transition-colors hover:text-hero-fg">
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className="transition-colors hover:text-hero-fg">
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/produkty"
            className="grid size-11 place-items-center rounded-full text-hero-fg transition-colors hover:bg-surface/10"
            aria-label="Hledat v katalogu"
          >
            <Search className="size-4" />
          </Link>
          <Button asChild variant="secondary" size="sm">
            <Link to="/produkty">Katalog</Link>
          </Button>
          <Button asChild size="sm">
            <a href="/#poptavka">Nezávazná poptávka</a>
          </Button>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full text-hero-fg lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-hero-fg/10 bg-hero px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobilní">
            {NAV.map((item) =>
              "to" in item ? (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-hero-fg"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-hero-fg"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button asChild variant="secondary" className="w-full">
              <Link to="/produkty" onClick={() => setOpen(false)}>
                Katalog
              </Link>
            </Button>
            <Button asChild className="w-full">
              <a href="/#poptavka" onClick={() => setOpen(false)}>
                Nezávazná poptávka
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
