import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { USAGES } from "@/lib/catalog";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted">
            Smart mlžení pro chladnější města. Modulární. Bez čerpadla.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-subtle uppercase">Katalog</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-muted" aria-label="Katalog v patičce">
            <Link to="/produkty" className="hover:text-fg">
              Všechny produkty
            </Link>
            <Link to="/reseni" className="hover:text-fg">
              Řešení podle využití
            </Link>
            <a href="/#cenik" className="hover:text-fg">
              Ceník
            </a>
            <a href="/#poptavka" className="hover:text-fg">
              Poptávka
            </a>
          </nav>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-subtle uppercase">Využití</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-muted" aria-label="Využití">
            {USAGES.map((u) => (
              <Link key={u.id} to="/reseni/$usage" params={{ usage: u.id }} className="hover:text-fg">
                {u.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 text-xs text-subtle sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} MLŽIDLA s.r.o. Všechna práva vyhrazena.</p>
        <p>Karlín, Praha · hello@mlzidla.cz</p>
      </div>
    </footer>
  );
}
