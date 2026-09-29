import {
  ArrowRight,
  CloudSun,
  Droplets,
  Leaf,
  Shield,
  Smartphone,
  Timer,
  Waves,
  Zap,
  Settings2,
  MapPinned,
  Gauge,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { PhoneMock } from "@/components/landing/phone-mock";
import { SignupForm } from "@/components/landing/signup-form";
import { SiteHeader, NAV } from "@/components/landing/site-header";

const HERO_POINTS = [
  { icon: Smartphone, title: "Ovládání v mobilu", text: "Zapnutí, režimy a spotřeba z jedné obrazovky." },
  { icon: Timer, title: "Automatické režimy", text: "Časovač, čidla i sezónní kalendář bez obchůzek." },
  { icon: Droplets, title: "Úspora vody a energie", text: "Mlží se jen když to má smysl — bez čerpadla." },
  { icon: Shield, title: "Spolehlivý provoz", text: "Venkovní jednotka, vzdálený dohled, servisní režim." },
] as const;

const SMART_POINTS = [
  { icon: CloudSun, title: "Reakce na počasí", text: "Automatické přizpůsobení podle teploty, vlhkosti a větru." },
  { icon: Smartphone, title: "Mobilní aplikace", text: "Přehled a kontrola odkudkoliv — i pro správce města." },
  { icon: Leaf, title: "Úsporný provoz", text: "Jen tolik vody, kolik je potřeba. Měřitelné reporty." },
  { icon: Settings2, title: "Snadná správa", text: "Jednoduché nastavení, zimování a vzdálená údržba." },
] as const;

const PRODUCTS = [
  {
    name: "Oblouk",
    tag: "Veřejný prostor",
    text: "Nerezový mlžící oblouk na náměstí, nábřeží i před školy. Modulární, bez čerpadla, napojení na vodovod.",
    image: "/images/hero-mist.jpg",
    alt: "Nerezový mlžící oblouk ve vegetaci",
  },
  {
    name: "Stojan",
    tag: "Náměstí a parky",
    text: "Volně stojící sloup s prstencem trysek. Diskrétní civic design, který unese provoz i vedro.",
    image: "/images/column.jpg",
    alt: "Detail mlžícího sloupu s tryskami",
  },
  {
    name: "Řídicí jednotka",
    tag: "Smart control",
    text: "Venkovní box s čidly a připojením do aplikace. Spouští síť podle počasí, ne podle odhadu.",
    image: "/images/control-box.jpg",
    alt: "Venkovní řídicí jednotka na nerezovém sloupu",
  },
] as const;

const FEATURES = [
  {
    icon: Gauge,
    title: "Telemetrie v živém čase",
    text: "Teplota, vlhkost, tlak a spotřeba vody z každého mlžidla. Výpadek uvidíte dřív než stížnost.",
  },
  {
    icon: CloudSun,
    title: "Spouštění podle vedra",
    text: "Prahové hodnoty, předpověď a noční útlum. Síť se zapne, až má mlha smysl.",
  },
  {
    icon: MapPinned,
    title: "Mapa ochlazení",
    text: "Kam umístit další bod, která lokalita padá do tepelného ostrova, co hlásí obyvatelé.",
  },
  {
    icon: Droplets,
    title: "Hospodaření s vodou",
    text: "Jemná mlha, limity na den a podklady pro dotační reporty klimatické adaptace.",
  },
  {
    icon: Waves,
    title: "Bez čerpadla",
    text: "Modulární okruh na vodovodním tlaku. Méně poruch, tišší provoz, rychlejší montáž.",
  },
  {
    icon: Zap,
    title: "Integrace se Supla",
    text: "Chytrá domácnost, městský dispečink i existující IoT. Jedna páčka, celá síť.",
  },
] as const;

const PLANS = [
  {
    name: "Zahrada",
    price: "490 Kč",
    period: "/ měsíc",
    blurb: "Pro areály, školy a menší veřejná místa.",
    features: ["Až 4 mlžidla", "Mobilní aplikace", "Časovač a čidlo teploty", "E-mailová podpora"],
    featured: false,
  },
  {
    name: "Náměstí",
    price: "1 990 Kč",
    period: "/ měsíc",
    blurb: "Pro městské části a správce veřejného prostoru.",
    features: [
      "Až 25 mlžidel",
      "Počasí, limity vody, reporty",
      "Více správců a servisní režim",
      "Přednostní podpora",
    ],
    featured: true,
  },
  {
    name: "Metropole",
    price: "Na míru",
    period: "",
    blurb: "Pro síť celého města a klimatické programy.",
    features: ["Neomezený počet bodů", "API, SLA a školení", "Mapa tepelných ostrovů", "Vlastní success manažer"],
    featured: false,
  },
] as const;

const QUOTES = [
  {
    quote:
      "Na nábřeží držíme pocitových šest stupňů dolů, aniž bychom pouštěli vodu naslepo. Dispečeři to mají v telefonu.",
    name: "Ing. Klára Novotná",
    role: "Koordinátorka klimatu, Praha 7",
  },
  {
    quote:
      "Montáž bez čerpadla zkrátila výluku náměstí na dva dny. Aplikace nám ušetřila obchůzky v tropických dnech.",
    name: "Mgr. Tomáš Hrubý",
    role: "Smart City, Brno",
  },
  {
    quote:
      "Lidé si mlžítka mapují sami. My vidíme spotřebu, poruchy i která lokalita má jít do další sezony.",
    name: "Bc. Eva Malá",
    role: "Technické služby, Olomouc",
  },
] as const;

const CITIES = ["Praha", "Brno", "Ostrava", "Plzeň", "Olomouc", "Liberec", "Hradec Králové", "České Budějovice"];

export function LandingPage() {
  return (
    <div id="top" className="bg-bg text-fg">
      <SiteHeader />
      <main>
        <Hero />
        <SmartControl />
        <Products />
        <Cities />
        <Features />
        <Pricing />
        <Testimonials />
        <Demand />
      </main>
      <Footer />

      <a
        href="#poptavka"
        className="fixed right-4 bottom-4 z-40 inline-flex h-12 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-fg shadow-soft md:hidden"
      >
        Nezávazná poptávka
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-hero text-hero-fg">
      <img
        src="/images/hero-mist.jpg"
        alt="Nerezové mlžidlo rozprašuje jemnou mlhu v zeleni"
        className="absolute inset-0 size-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/88 to-hero/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-hero/80 via-transparent to-hero/40" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="max-w-xl">
            <p className="hero-enter text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Smart mlžení | Modulární | Bez čerpadla
            </p>
            <h1
              className="hero-enter mt-5 font-display text-display leading-[1.05] font-semibold tracking-tight"
              style={{ animationDelay: "80ms" }}
            >
              Chytré ovládání
              <span className="mt-1 block text-accent">pro chladnější města</span>
            </h1>
            <p
              className="hero-enter mt-5 max-w-md text-lead text-hero-muted"
              style={{ animationDelay: "140ms" }}
            >
              Naše mlžítka řídíte z mobilu. Automatizace šetří vodu, energii i čas správy a drží obyvatelné klima na
              náměstí, v parku i na nábřeží.
            </p>
            <div className="hero-enter mt-8 flex flex-wrap gap-3" style={{ animationDelay: "200ms" }}>
              <Button asChild size="lg">
                <a href="#funkce">
                  Objevte smart řešení
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#poptavka">Nezávazná poptávka</a>
              </Button>
            </div>
            <div className="hero-enter relative mx-auto mt-10 w-56 lg:hidden" style={{ animationDelay: "220ms" }}>
              <PhoneMock className="w-56" />
            </div>
          </div>

          <div className="hero-enter relative hidden justify-self-end lg:block" style={{ animationDelay: "160ms" }}>
            <PhoneMock />
            <div className="absolute top-16 -right-6 flex size-24 flex-col items-center justify-center rounded-full bg-primary text-center shadow-soft">
              <Droplets className="size-5 text-primary-fg" />
              <p className="mt-1 text-xs leading-tight font-semibold text-primary-fg">
                Integrace
                <br />
                se Supla
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HERO_POINTS.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-surface/10 text-accent">
                <item.icon className="size-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-0.5 text-sm text-hero-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SmartControl() {
  return (
    <section className="relative overflow-hidden bg-surface px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Automatizace & smart control</p>
          <h2 className="mt-4 font-display text-title font-semibold tracking-tight">
            Představujeme chytřejší způsob mlžení
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Díky inteligentnímu řízení máte vše pod kontrolou — bez zbytečných zásahů. Systém reaguje na počasí,
            teplotu i čas a zajišťuje úsporný provoz.
          </p>
          <Button asChild variant="outline" className="mt-8">
            <a href="#cenik">
              Jak to funguje
              <ArrowRight />
            </a>
          </Button>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {SMART_POINTS.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-mist text-primary">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="grid items-center gap-6 sm:grid-cols-[14rem_minmax(0,1fr)]">
            <PhoneMock className="w-56" />
            <div className="flex flex-col gap-3">
              <StatCard title="Teplota" value="> 28 °C" note="Spustit mlžení" />
              <StatCard title="Časovač" value="06:00 – 22:00" note="Automatický režim" />
              <StatCard title="Vlhkost vzduchu" value="> 60 %" note="Vypnout mlžení" />
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl shadow-card">
            <img
              src="/images/control-box.jpg"
              alt="Řídicí jednotka mlzidla.cz v terénu"
              className="h-52 w-full object-cover sm:h-64"
            />
          </div>
          <p className="font-script mt-4 -rotate-2 text-2xl text-primary sm:absolute sm:right-2 sm:-bottom-2 sm:mt-0">
            Smart technologie pro zdravější města
          </p>
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, value, note }: { title: string; value: string; note: string }) {
  return (
    <div className="rounded-lg bg-surface px-4 py-3 shadow-card">
      <p className="text-xs font-medium tracking-wide text-muted uppercase">{title}</p>
      <p className="mt-1 text-lg font-semibold tabular-nums">{value}</p>
      <p className="text-sm text-muted">{note}</p>
    </div>
  );
}

function Products() {
  return (
    <section id="produkty" className="bg-bg px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Katalog</p>
        <h2 className="mt-4 max-w-lg font-display text-title font-semibold tracking-tight">
          Modulární mlžidla, která unesou město
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Stejná řídicí vrstva pro park, školu i historické náměstí. Zařízení bez čerpadla, aplikace jedna.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((item) => (
            <article key={item.name} className="overflow-hidden rounded-xl bg-surface shadow-card">
              <img src={item.image} alt={item.alt} className="h-52 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">{item.tag}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cities() {
  return (
    <section id="mesta" className="bg-hero px-4 py-20 text-hero-fg sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/plaza.jpg"
            alt="Lidé se osvěžují pod mlžidly na historickém náměstí"
            className="h-full max-h-[28rem] w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Městská řešení</p>
          <h2 className="mt-4 font-display text-title font-semibold tracking-tight">Mlžíte to město — měřitelně</h2>
          <p className="mt-4 text-hero-muted">
            Vlny veder už nejsou výjimka. Mlžidla bez řízení jsou drahá sprcha. mlzidla.cz dává samosprávám síť,
            která se spouští podle vedra, hlásí spotřebu a unese dotační report.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-4">
            <div>
              <dt className="text-xs text-hero-muted">Pocitová teplota</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">−4,2 °C</dd>
            </div>
            <div>
              <dt className="text-xs text-hero-muted">Úspora vody</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">31 %</dd>
            </div>
            <div>
              <dt className="text-xs text-hero-muted">Měst v síti</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">48</dd>
            </div>
          </dl>
          <Button asChild className="mt-8">
            <a href="#poptavka">
              Chci studii ochlazení
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
      <ul className="mx-auto mt-14 flex max-w-6xl flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-hero-muted">
        {CITIES.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </section>
  );
}

function Features() {
  return (
    <section id="funkce" className="bg-surface px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Funkce</p>
        <h2 className="mt-4 max-w-lg font-display text-title font-semibold tracking-tight">
          Od trysky po dispečink v jedné vrstvě
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => (
            <article key={item.title} className="rounded-xl bg-bg p-6 shadow-card">
              <span className="grid size-11 place-items-center rounded-lg bg-mist text-primary">
                <item.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-xl">
          <img
            src="/images/square.jpg"
            alt="Náměstí s mlžicími stanicemi v letním horku"
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="cenik" className="bg-bg px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Ceník</p>
        <h2 className="mt-4 font-display text-title font-semibold tracking-tight">Tarify podle rozsahu sítě</h2>
        <p className="mt-4 max-w-xl text-muted">
          Software a dohled. Hardware naceníme podle místa. Roční platba = dva měsíce zdarma.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.featured
                  ? "flex flex-col rounded-xl bg-hero p-6 text-hero-fg shadow-soft lg:-translate-y-2"
                  : "flex flex-col rounded-xl bg-surface p-6 shadow-card"
              }
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className={plan.featured ? "mt-1 text-sm text-hero-muted" : "mt-1 text-sm text-muted"}>{plan.blurb}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight">{plan.price}</span>
                {plan.period ? (
                  <span className={plan.featured ? "text-sm text-hero-muted" : "text-sm text-muted"}>{plan.period}</span>
                ) : null}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className={plan.featured ? "text-accent" : "text-primary"} aria-hidden>
                      –
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={plan.featured ? "default" : "outline"} className="mt-8 w-full">
                <a href="#poptavka">{plan.featured ? "Vybrat Náměstí" : "Nezávazná poptávka"}</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reference" className="bg-surface px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Reference</p>
            <h2 className="mt-4 font-display text-title font-semibold tracking-tight">Správci, kteří už mlží město</h2>
          </div>
          <img
            src="/images/evening.jpg"
            alt="Večerní náměstí s jemnou mlhou pod stromy"
            className="h-48 w-full rounded-xl object-cover lg:h-56"
          />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((item) => (
            <figure key={item.name} className="flex flex-col rounded-xl bg-bg p-6 shadow-card">
              <blockquote className="text-[0.95rem] leading-relaxed text-fg">„{item.quote}“</blockquote>
              <figcaption className="mt-6 text-sm">
                <p className="font-semibold">{item.name}</p>
                <p className="text-muted">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Demand() {
  return (
    <section id="poptavka" className="relative overflow-hidden bg-hero px-4 py-20 text-hero-fg sm:px-6 sm:py-28">
      <img
        src="/images/phone-hand.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-hero/80" />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Nezávazná poptávka</p>
        <h2 className="mt-4 font-display text-title font-semibold tracking-tight">Pošlete e-mail. Vrátíme studii náměstí.</h2>
        <p className="mx-auto mt-4 max-w-lg text-hero-muted">
          Žádný spam. Do druhého dne dostanete briefing k horké sezoně a termín 20minutového dema aplikace.
        </p>
        <div className="mt-8 text-left">
          <SignupForm dark />
        </div>
        <p className="mt-4 text-xs text-hero-muted">
          Odesláním souhlasíte se zpracováním e-mailu za účelem kontaktování. Odhlásit se můžete kdykoli.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted">Smart mlžení pro chladnější města. Modulární. Bez čerpadla.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted" aria-label="Patička">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-fg">
              {item.label}
            </a>
          ))}
          <a href="#poptavka" className="hover:text-fg">
            Kontakt
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 text-xs text-subtle sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} MLŽIDLA s.r.o. Všechna práva vyhrazena.</p>
        <p>Karlín, Praha · hello@mlzidla.cz</p>
      </div>
    </footer>
  );
}
