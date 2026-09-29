export type CategoryId = "oblouk" | "stojan" | "linka" | "ridici";
export type UsageId = "namesti" | "park" | "skola" | "gastro" | "zahrada" | "mesto";
export type ScaleId = "bod" | "areal" | "sit";

export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  model: string;
  category: CategoryId;
  usages: UsageId[];
  tagline: string;
  summary: string;
  story: string;
  image: string;
  alt: string;
  priceFrom: string;
  badges: string[];
  specs: Spec[];
  highlights: string[];
};

export type Category = {
  id: CategoryId;
  label: string;
  blurb: string;
};

export type Usage = {
  id: UsageId;
  label: string;
  kicker: string;
  headline: string;
  problem: string;
  promise: string;
  image: string;
  alt: string;
  stats: { label: string; value: string }[];
  recommended: string[];
};

export const CATEGORIES: Category[] = [
  { id: "oblouk", label: "Oblouky", blurb: "Průchozí mlha pro náměstí, školy i vstupy." },
  { id: "stojan", label: "Stojany", blurb: "Volně stojící sloup, který unese provoz i vedro." },
  { id: "linka", label: "Linky", blurb: "Lineární mlžení podél pergol, nábřeží a promenád." },
  { id: "ridici", label: "Řízení", blurb: "Mozek sítě — čidla, aplikace, limity vody." },
];

export const USAGES: Usage[] = [
  {
    id: "namesti",
    label: "Náměstí a nábřeží",
    kicker: "Veřejný prostor",
    headline: "Pocitový stín, který nekazí dlažbu",
    problem: "Dlažba sálá, stín stromů nestačí a kropení hadicí plýtvá vodou i důvěrou obyvatel.",
    promise: "Stojany a oblouky spouští jemnou mlhu podle teploty. Dispečink vidí spotřebu, výpadky i která lokalita má jít do další sezony.",
    image: "/images/plaza.jpg",
    alt: "Lidé se osvěžují pod mlžidly na historickém náměstí",
    stats: [
      { label: "Pocitová teplota", value: "−4,2 °C" },
      { label: "Úspora vody", value: "31 %" },
    ],
    recommended: ["oblouk-volavka", "stojan-nabrezi", "pulse-box"],
  },
  {
    id: "park",
    label: "Parky a promenády",
    kicker: "Zeleň",
    headline: "Chladná stezka mezi stromy",
    problem: "Alej ve dvě odpoledne zeje prázdnotou. Kropení trávníku klima na cestě neudělá.",
    promise: "Linka podél pěšiny tvoří stříbrný tunel. Zapíná se s vedrem, v noci spí, v reportu je metr po metru.",
    image: "/images/evening.jpg",
    alt: "Večerní park s jemnou mlhou pod stromy",
    stats: [
      { label: "Dosah linky", value: "až 40 m" },
      { label: "Hlučnost", value: "< 25 dB" },
    ],
    recommended: ["linka-promenada", "stojan-nabrezi", "pulse-box"],
  },
  {
    id: "skola",
    label: "Školy a hřiště",
    kicker: "Děti a sport",
    headline: "Přestávka, která se dá vydržet",
    problem: "Utečené hřiště v tropickém dni. Sprcha je zbytečně mokrá, stín jen u zdi.",
    promise: "Oblouk u vstupu na hřiště, časovač na velké přestávky, dálkový zámek mimo provoz. Bez čerpadla, bez strojovny.",
    image: "/images/square.jpg",
    alt: "Otevřené prostranství s mlžicími body v letním horku",
    stats: [
      { label: "Montáž", value: "1–2 dny" },
      { label: "Režim", value: "přestávky" },
    ],
    recommended: ["oblouk-volavka", "zahrada-relax", "pulse-box"],
  },
  {
    id: "gastro",
    label: "Terasy a gastro",
    kicker: "Pohostinství",
    headline: "Stoly, které v červenci zůstanou obsazené",
    problem: "Hosté utíkají dovnitř. Mobilní ventilátor hučí a fouká popel do sklenic.",
    promise: "Diskrétní linka v pergole, spínání od 26 °C, vypnutí při větru. Tichý provoz, žádná louže na terase.",
    image: "/images/evening.jpg",
    alt: "Večerní terasa s jemnou osvěžující mlhou",
    stats: [
      { label: "Hluk", value: "tichý" },
      { label: "Návratnost", value: "1 sezona" },
    ],
    recommended: ["terasa-gastro", "linka-promenada", "pulse-box"],
  },
  {
    id: "zahrada",
    label: "Zahrady a areály",
    kicker: "Soukromé i firemní",
    headline: "Relax, který nespotřebuje studnu",
    problem: "Zavlažování trávníku neochladí posezení. Mlha z hobby sady teče a rezaví.",
    promise: "Malý oblouk nebo stojan na vodovodním tlaku, aplikace v telefonu, zimování na dva klepy.",
    image: "/images/hero-mist.jpg",
    alt: "Nerezové mlžidlo v zeleni zahrady",
    stats: [
      { label: "Od", value: "18 900 Kč" },
      { label: "Ovládání", value: "mobil" },
    ],
    recommended: ["zahrada-relax", "pulse-box"],
  },
  {
    id: "mesto",
    label: "Celoměstská síť",
    kicker: "Samospráva",
    headline: "Jedna vrstva pro všechny městské části",
    problem: "Každá část má jiného dodavatele, žádná data, dotační report se skládá v Excelu.",
    promise: "Katalog bodů, mapa tepelných ostrovů, limity vody a SLA. Hardware mixujete, řízení je jedno.",
    image: "/images/square.jpg",
    alt: "Městské náměstí s mlžicími stanicemi",
    stats: [
      { label: "Bodů v síti", value: "neomezeně" },
      { label: "Reporty", value: "dotační" },
    ],
    recommended: ["oblouk-volavka", "stojan-nabrezi", "linka-promenada", "pulse-box"],
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "oblouk-volavka",
    name: "Oblouk Volavka",
    model: "ML-A4",
    category: "oblouk",
    usages: ["namesti", "skola", "park", "mesto"],
    tagline: "Průchozí chlad pro vstup, hřiště i nábřeží.",
    summary:
      "Nerezový oblouk s prstencem trysek. Modulární, bez čerpadla, napojení na vodovod. Lidé jím projdou — a zůstanou.",
    story:
      "Volavka je navržená tam, kde se proud lidí zastavuje: brána parku, předprostor školy, lávka, nástup na náměstí. Oblouk tvoří stříbrnou bránu, která nesbírá kaluže a v zimě se odvodní jedním ventilem.",
    image: "/images/hero-mist.jpg",
    alt: "Nerezový mlžící oblouk ve vegetaci",
    priceFrom: "64 900 Kč",
    badges: ["Bez čerpadla", "Smart", "Modulární"],
    specs: [
      { label: "Šířka průchodu", value: "2,4–4,0 m" },
      { label: "Materiál", value: "nerez AISI 316" },
      { label: "Spotřeba", value: "18–28 l/h" },
      { label: "Napojení", value: "vodovod 3–6 bar" },
      { label: "Řízení", value: "Pulse Box + aplikace" },
    ],
    highlights: ["Průchozí brána bez zúžení chodníku", "Rychlospojky pro servis trysek", "Zimování bez vypouštění celé větve"],
  },
  {
    slug: "stojan-nabrezi",
    name: "Stojan Nábřeží",
    model: "ML-S2",
    category: "stojan",
    usages: ["namesti", "park", "mesto", "zahrada"],
    tagline: "Diskrétní sloup, který unese dav i vedro.",
    summary:
      "Volně stojící sloup s prstencem trysek ve výšce obličeje. Civic design, kotvení do dlažby, servis bez výkopu.",
    story:
      "Nábřeží je nejčastější městský bod: úzký pruh mezi zdí a zábradlím, kde oblouk nevejde. Stojan zabere talíř 280 mm a chladí okruh čtyř metrů. Večer zhasne s režimem města.",
    image: "/images/column.jpg",
    alt: "Detail mlžícího sloupu s tryskami",
    priceFrom: "38 900 Kč",
    badges: ["Bez čerpadla", "Smart"],
    specs: [
      { label: "Výška", value: "2,1 m" },
      { label: "Dosah", value: "ø 4 m" },
      { label: "Spotřeba", value: "12–18 l/h" },
      { label: "Kotvení", value: "příruba / pouzdro" },
      { label: "Krytí", value: "IP65" },
    ],
    highlights: ["Nezasahuje do průchodu", "Prstenec trysek vyměnitelný z úrovně země", "Stejný Pulse Box jako oblouk"],
  },
  {
    slug: "linka-promenada",
    name: "Linka Promenáda",
    model: "ML-L40",
    category: "linka",
    usages: ["park", "namesti", "gastro", "mesto"],
    tagline: "Metr po metru chladná cesta.",
    summary:
      "Lineární nerezová rampa podél pergol, zábradlí a stromořadí. Skládá se z 1,2m modulů, bez čerpadla.",
    story:
      "Promenáda řeší dlouhé úseky, kde bodová mlžidla nechávají horké mezery. Moduly se spojuí na místě, trysky míří šikmo do cesty, ne do očí cyklistů.",
    image: "/images/plaza.jpg",
    alt: "Otevřené prostranství vhodné pro lineární mlžení",
    priceFrom: "1 490 Kč/m",
    badges: ["Bez čerpadla", "Modulární"],
    specs: [
      { label: "Modul", value: "1,2 m" },
      { label: "Max. větev", value: "40 m" },
      { label: "Spotřeba", value: "8 l/h na modul" },
      { label: "Montáž", value: "na zábradlí / pergolu" },
      { label: "Sklon trysek", value: "nastavitelný" },
    ],
    highlights: ["Bez strojovny i u 40 m větve", "Vypínání po úsecích", "Vhodné i pro gastro pergoly"],
  },
  {
    slug: "terasa-gastro",
    name: "Terasa Gastro",
    model: "ML-G1",
    category: "linka",
    usages: ["gastro", "zahrada"],
    tagline: "Tichá mlha nad stoly, ne nad talířem.",
    summary:
      "Kompaktní sada pro restaurace a kavárny: 6–12 m linky, čidlo větru, režim hostů. Zapnete z telefonu před špičkou.",
    story:
      "Gastro potřebuje jemnou mlhu, která nekapá do sklenic. Trysky jsou dál od stolů, spínání má hysterezi a při poryvu větru se větev sama zavře.",
    image: "/images/evening.jpg",
    alt: "Večerní posezení s jemnou mlhou",
    priceFrom: "29 900 Kč",
    badges: ["Smart", "Tichý provoz"],
    specs: [
      { label: "Sada", value: "6 / 9 / 12 m" },
      { label: "Hluk", value: "< 25 dB" },
      { label: "Čidla", value: "teplota, vlhkost, vítr" },
      { label: "Ovládání", value: "aplikace + ruční" },
      { label: "Montáž", value: "půlden" },
    ],
    highlights: ["Režim oběd / večeře", "Ochrana proti větru", "Design skrytý v pergole"],
  },
  {
    slug: "zahrada-relax",
    name: "Zahrada Relax",
    model: "ML-H1",
    category: "oblouk",
    usages: ["zahrada", "skola"],
    tagline: "Domácí a firemní posezení bez hobby sady.",
    summary:
      "Menší oblouk nebo rohová větev pro zahrady, school backyard a firemní atria. Stejná aplikace jako město.",
    story:
      "Relax je vstupní bod do ekosystému mlzidla.cz. Když areál poroste, přidáte stojan a zůstanete v jednom Pulse Boxu.",
    image: "/images/hero-mist.jpg",
    alt: "Mlžící oblouk v zahradě",
    priceFrom: "18 900 Kč",
    badges: ["Bez čerpadla", "Smart"],
    specs: [
      { label: "Šířka", value: "1,6–2,2 m" },
      { label: "Spotřeba", value: "8–14 l/h" },
      { label: "Napájení řízení", value: "230 V / 8 W" },
      { label: "Zimování", value: "1 ventil" },
      { label: "Aplikace", value: "iOS / Android / Supla" },
    ],
    highlights: ["Start bez projektu", "Stejné trysky jako městská řada", "Rozšiřitelné na areál"],
  },
  {
    slug: "pulse-box",
    name: "Pulse Box",
    model: "ML-P1",
    category: "ridici",
    usages: ["namesti", "park", "skola", "gastro", "zahrada", "mesto"],
    tagline: "Mozek každého mlžítka.",
    summary:
      "Venkovní jednotka s čidly, limity vody a připojením do aplikace. Jedna krabice řídí oblouk, stojan i 40m linku.",
    story:
      "Bez Pulse Boxu je mlžidlo sprcha. S ním reaguje na vedro, vítr a kalendář. Data jdou do dispečinku města i do telefonu správce terasy.",
    image: "/images/control-box.jpg",
    alt: "Venkovní řídicí jednotka na nerezovém sloupu",
    priceFrom: "12 900 Kč",
    badges: ["Smart", "Supla", "IP65"],
    specs: [
      { label: "Krytí", value: "IP65" },
      { label: "Čidla", value: "T, RH, vítr, tlak" },
      { label: "Výstupy", value: "až 4 větve" },
      { label: "Konektivita", value: "Wi-Fi / LTE" },
      { label: "Integrace", value: "Supla, API" },
    ],
    highlights: ["Prahové spínání a noční útlum", "Denní limit vody pro dotační report", "Servisní režim pro zimování"],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getUsage(id: string) {
  return USAGES.find((u) => u.id === id);
}

export function getCategory(id: CategoryId) {
  return CATEGORIES.find((c) => c.id === id);
}

export function productsForUsage(id: UsageId) {
  return PRODUCTS.filter((p) => p.usages.includes(id));
}

export function productsForCategory(id: CategoryId) {
  return PRODUCTS.filter((p) => p.category === id);
}

export function relatedProducts(product: Product, limit = 3) {
  return PRODUCTS.filter((p) => p.slug !== product.slug)
    .map((p) => ({
      p,
      score:
        (p.category === product.category ? 2 : 0) +
        p.usages.filter((u) => product.usages.includes(u)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
}

export function recommend(usage: UsageId, scale: ScaleId) {
  const usageRec = getUsage(usage)?.recommended ?? [];
  let slugs = [...usageRec];
  if (scale === "bod") {
    slugs = slugs.filter((s) => s !== "linka-promenada").slice(0, 2);
    if (!slugs.includes("pulse-box")) slugs.push("pulse-box");
  }
  if (scale === "areal" && !slugs.includes("pulse-box")) slugs.push("pulse-box");
  if (scale === "sit") {
    slugs = ["oblouk-volavka", "stojan-nabrezi", "linka-promenada", "pulse-box"];
  }
  const products = slugs.map(getProduct).filter((p): p is Product => Boolean(p));
  const plan = scale === "sit" ? "Metropole" : scale === "areal" ? "Náměstí" : "Zahrada";
  const note =
    scale === "sit"
      ? "Síť bodů, API a dotační reporty. Hardware mixujete, řízení je jedno."
      : scale === "areal"
        ? "Typicky 5–25 bodů, počasí a limity vody, více správců."
        : "Jeden až čtyři body, aplikace a časovač. Hardware naceníme podle místa.";
  return { products, plan, note };
}
