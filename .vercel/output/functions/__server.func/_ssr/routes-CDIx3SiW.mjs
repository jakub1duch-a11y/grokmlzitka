import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Check, a as Timer, c as Settings2, d as Menu, f as MapPinned, g as CloudSun, h as Droplets, l as Search, m as Gauge, n as X, o as Smartphone, p as Leaf, r as Waves, s as Shield, t as Zap, u as Power, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CDIx3SiW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Logo({ className, inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#top",
		className: cn("inline-flex items-center gap-2 font-semibold tracking-tight", inverted ? "text-hero-fg" : "text-fg", className),
		"aria-label": "mlzidla.cz — úvod",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid size-8 place-items-center rounded-full", inverted ? "bg-accent text-fg" : "bg-primary text-primary-fg"),
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				className: "size-4",
				fill: "currentColor",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.4C12 2.4 5.2 11.1 5.2 16.05a6.8 6.8 0 1 0 13.6 0C18.8 11.1 12 2.4 12 2.4Z" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-lg",
			children: "mlzidla.cz"
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:enabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-card hover:bg-primary-hover",
			accent: "bg-accent text-fg hover:opacity-90",
			secondary: "bg-surface/15 text-hero-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-hero-fg)_28%,transparent)] hover:bg-surface/25",
			outline: "bg-surface text-fg ring-1 ring-border hover:bg-mist",
			ghost: "text-hero-fg hover:bg-surface/10",
			ink: "bg-fg text-hero-fg hover:opacity-90"
		},
		size: {
			default: "h-11 rounded-full px-5 text-sm",
			sm: "h-9 rounded-full px-3.5 text-sm",
			lg: "h-12 rounded-full px-6 text-base",
			xl: "h-14 rounded-full px-7 text-base",
			icon: "size-11 rounded-full"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function PhoneMock({ className }) {
	const [on, setOn] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative mx-auto w-64 select-none", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-phone bg-fg p-2 shadow-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-xl bg-hero text-hero-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-5 pt-4 text-xs text-hero-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: "20:16"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-2 w-4 rounded-sm bg-hero-muted/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block size-2 rounded-full bg-hero-muted/70" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-5 pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-5 place-items-center rounded-full bg-accent text-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "size-3" })
							}), "mlzidla"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4 text-hero-muted" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-5 pt-6 text-center text-sm text-hero-muted",
						children: "Mlžítko Nábřeží"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center px-5 pt-4 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOn((v) => !v),
							"aria-pressed": on,
							"aria-label": on ? "Vypnout mlžení" : "Zapnout mlžení",
							className: cn("grid size-28 place-items-center rounded-full border-4 transition-[border-color,box-shadow,color,transform] duration-200 ease-[var(--ease-out)]", on ? "border-accent text-accent shadow-soft" : "border-hero-muted/40 text-hero-muted"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Power, {
								className: "size-10",
								strokeWidth: 1.75
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-medium text-accent",
							children: on ? "Aktivní" : "Vypnuto"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 px-4 pb-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-hero-fg/10 px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-hero-muted",
									children: "Režim"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 font-medium",
									children: on ? "Automatický" : "Ruční"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-hero-fg/10 px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-hero-muted",
									children: "Teplota"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 font-medium tabular-nums",
									children: "28,4 °C"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-hero-fg/10 px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-hero-muted",
									children: "Vlhkost"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 font-medium tabular-nums",
									children: "46 %"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-hero-fg/10 px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-hero-muted",
									children: "Voda dnes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 font-medium tabular-nums",
									children: "18 l"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-4 pt-1 pb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 items-end gap-0.5",
							children: (on ? [
								28,
								36,
								32,
								48,
								40,
								62,
								54,
								70,
								58,
								76,
								64,
								80
							] : [
								18,
								16,
								20,
								14,
								18,
								12,
								16,
								14,
								18,
								10,
								14,
								12
							]).map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("flex-1 rounded-t-sm transition-[height,background-color] duration-200", on ? "bg-accent/80" : "bg-hero-muted/35"),
								style: { height: `${h}%` }
							}, i))
						})
					})
				]
			})
		})
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-12 w-full rounded-full border-0 bg-surface px-5 text-base text-fg shadow-card outline-none transition-[box-shadow] duration-[length:var(--motion-quick)] placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var STORAGE_KEY = "mlzidla-poptavka";
function SignupForm({ dark = false }) {
	const [email, setEmail] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [done, setDone] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const trimmed = email.trim();
		if (!EMAIL_RE.test(trimmed)) {
			setError("Zadejte platný e-mail.");
			return;
		}
		setError(null);
		const payload = {
			email: trimmed,
			city: city.trim(),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
			localStorage.setItem(STORAGE_KEY, JSON.stringify([payload, ...prev].slice(0, 20)));
		} catch {}
		setDone(true);
		toast.success("Poptávka je u nás. Ozveme se do jednoho pracovního dne.");
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: dark ? "flex items-start gap-3 rounded-xl bg-surface/10 px-5 py-4 text-hero-fg" : "flex items-start gap-3 rounded-xl bg-mist px-5 py-4 text-fg",
		role: "status",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-fg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-semibold",
			children: ["Děkujeme, ", email]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: dark ? "mt-1 text-sm text-hero-muted" : "mt-1 text-sm text-muted",
			children: [
				"Pošleme vám briefing k ochlazení ",
				city.trim() || "vašeho města",
				" a termín krátkého dema."
			]
		})] })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "flex w-full flex-col gap-3 sm:flex-row sm:items-start",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "signup-email",
						className: "sr-only",
						children: "E-mail"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "signup-email",
						type: "email",
						name: "email",
						autoComplete: "email",
						placeholder: "váš@město.cz",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						"aria-invalid": Boolean(error),
						required: true
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 px-2 text-sm text-danger",
						role: "alert",
						children: error
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "signup-city",
					className: "sr-only",
					children: "Město"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "signup-city",
					type: "text",
					name: "city",
					autoComplete: "address-level2",
					placeholder: "Město nebo obec",
					value: city,
					onChange: (e) => setCity(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				size: "lg",
				className: "sm:mt-0",
				children: ["Chci briefing", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
			})
		]
	});
}
var NAV = [
	{
		href: "#produkty",
		label: "Produkty"
	},
	{
		href: "#mesta",
		label: "Městská řešení"
	},
	{
		href: "#funkce",
		label: "Funkce"
	},
	{
		href: "#cenik",
		label: "Ceník"
	},
	{
		href: "#reference",
		label: "Reference"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200 ease-[var(--ease-out)]", scrolled || open ? "bg-hero/95 shadow-[0_1px_0_color-mix(in_oklab,var(--color-hero-fg)_10%,transparent)]" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 text-sm font-medium text-hero-muted lg:flex",
					"aria-label": "Hlavní",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "transition-colors hover:text-hero-fg",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 lg:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#funkce",
							className: "grid size-11 place-items-center rounded-full text-hero-fg transition-colors hover:bg-surface/10",
							"aria-label": "Přejít na funkce",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#produkty",
								children: "Katalog"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#poptavka",
								children: "Nezávazná poptávka"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-11 place-items-center rounded-full text-hero-fg lg:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Zavřít menu" : "Otevřít menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-hero-fg/10 bg-hero px-4 py-6 lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-1",
				"aria-label": "Mobilní",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-3 text-base font-medium text-hero-fg",
					children: item.label
				}, item.href))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "secondary",
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#produkty",
						onClick: () => setOpen(false),
						children: "Katalog"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#poptavka",
						onClick: () => setOpen(false),
						children: "Nezávazná poptávka"
					})
				})]
			})]
		}) : null]
	});
}
var HERO_POINTS = [
	{
		icon: Smartphone,
		title: "Ovládání v mobilu",
		text: "Zapnutí, režimy a spotřeba z jedné obrazovky."
	},
	{
		icon: Timer,
		title: "Automatické režimy",
		text: "Časovač, čidla i sezónní kalendář bez obchůzek."
	},
	{
		icon: Droplets,
		title: "Úspora vody a energie",
		text: "Mlží se jen když to má smysl — bez čerpadla."
	},
	{
		icon: Shield,
		title: "Spolehlivý provoz",
		text: "Venkovní jednotka, vzdálený dohled, servisní režim."
	}
];
var SMART_POINTS = [
	{
		icon: CloudSun,
		title: "Reakce na počasí",
		text: "Automatické přizpůsobení podle teploty, vlhkosti a větru."
	},
	{
		icon: Smartphone,
		title: "Mobilní aplikace",
		text: "Přehled a kontrola odkudkoliv — i pro správce města."
	},
	{
		icon: Leaf,
		title: "Úsporný provoz",
		text: "Jen tolik vody, kolik je potřeba. Měřitelné reporty."
	},
	{
		icon: Settings2,
		title: "Snadná správa",
		text: "Jednoduché nastavení, zimování a vzdálená údržba."
	}
];
var PRODUCTS = [
	{
		name: "Oblouk",
		tag: "Veřejný prostor",
		text: "Nerezový mlžící oblouk na náměstí, nábřeží i před školy. Modulární, bez čerpadla, napojení na vodovod.",
		image: "/images/hero-mist.jpg",
		alt: "Nerezový mlžící oblouk ve vegetaci"
	},
	{
		name: "Stojan",
		tag: "Náměstí a parky",
		text: "Volně stojící sloup s prstencem trysek. Diskrétní civic design, který unese provoz i vedro.",
		image: "/images/column.jpg",
		alt: "Detail mlžícího sloupu s tryskami"
	},
	{
		name: "Řídicí jednotka",
		tag: "Smart control",
		text: "Venkovní box s čidly a připojením do aplikace. Spouští síť podle počasí, ne podle odhadu.",
		image: "/images/control-box.jpg",
		alt: "Venkovní řídicí jednotka na nerezovém sloupu"
	}
];
var FEATURES = [
	{
		icon: Gauge,
		title: "Telemetrie v živém čase",
		text: "Teplota, vlhkost, tlak a spotřeba vody z každého mlžidla. Výpadek uvidíte dřív než stížnost."
	},
	{
		icon: CloudSun,
		title: "Spouštění podle vedra",
		text: "Prahové hodnoty, předpověď a noční útlum. Síť se zapne, až má mlha smysl."
	},
	{
		icon: MapPinned,
		title: "Mapa ochlazení",
		text: "Kam umístit další bod, která lokalita padá do tepelného ostrova, co hlásí obyvatelé."
	},
	{
		icon: Droplets,
		title: "Hospodaření s vodou",
		text: "Jemná mlha, limity na den a podklady pro dotační reporty klimatické adaptace."
	},
	{
		icon: Waves,
		title: "Bez čerpadla",
		text: "Modulární okruh na vodovodním tlaku. Méně poruch, tišší provoz, rychlejší montáž."
	},
	{
		icon: Zap,
		title: "Integrace se Supla",
		text: "Chytrá domácnost, městský dispečink i existující IoT. Jedna páčka, celá síť."
	}
];
var PLANS = [
	{
		name: "Zahrada",
		price: "490 Kč",
		period: "/ měsíc",
		blurb: "Pro areály, školy a menší veřejná místa.",
		features: [
			"Až 4 mlžidla",
			"Mobilní aplikace",
			"Časovač a čidlo teploty",
			"E-mailová podpora"
		],
		featured: false
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
			"Přednostní podpora"
		],
		featured: true
	},
	{
		name: "Metropole",
		price: "Na míru",
		period: "",
		blurb: "Pro síť celého města a klimatické programy.",
		features: [
			"Neomezený počet bodů",
			"API, SLA a školení",
			"Mapa tepelných ostrovů",
			"Vlastní success manažer"
		],
		featured: false
	}
];
var QUOTES = [
	{
		quote: "Na nábřeží držíme pocitových šest stupňů dolů, aniž bychom pouštěli vodu naslepo. Dispečeři to mají v telefonu.",
		name: "Ing. Klára Novotná",
		role: "Koordinátorka klimatu, Praha 7"
	},
	{
		quote: "Montáž bez čerpadla zkrátila výluku náměstí na dva dny. Aplikace nám ušetřila obchůzky v tropických dnech.",
		name: "Mgr. Tomáš Hrubý",
		role: "Smart City, Brno"
	},
	{
		quote: "Lidé si mlžítka mapují sami. My vidíme spotřebu, poruchy i která lokalita má jít do další sezony.",
		name: "Bc. Eva Malá",
		role: "Technické služby, Olomouc"
	}
];
var CITIES = [
	"Praha",
	"Brno",
	"Ostrava",
	"Plzeň",
	"Olomouc",
	"Liberec",
	"Hradec Králové",
	"České Budějovice"
];
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartControl, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Products, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cities, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demand, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#poptavka",
				className: "fixed right-4 bottom-4 z-40 inline-flex h-12 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-fg shadow-soft md:hidden",
				children: "Nezávazná poptávka"
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-svh overflow-hidden bg-hero text-hero-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero-mist.jpg",
				alt: "Nerezové mlžidlo rozprašuje jemnou mlhu v zeleni",
				className: "absolute inset-0 size-full object-cover object-right"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-hero via-hero/88 to-hero/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-hero/80 via-transparent to-hero/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:pb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-enter text-xs font-semibold tracking-[0.22em] text-accent uppercase",
								children: "Smart mlžení | Modulární | Bez čerpadla"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "hero-enter mt-5 font-display text-display leading-[1.05] font-semibold tracking-tight",
								style: { animationDelay: "80ms" },
								children: ["Chytré ovládání", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-accent",
									children: "pro chladnější města"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-enter mt-5 max-w-md text-lead text-hero-muted",
								style: { animationDelay: "140ms" },
								children: "Naše mlžítka řídíte z mobilu. Automatizace šetří vodu, energii i čas správy a drží obyvatelné klima na náměstí, v parku i na nábřeží."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-enter mt-8 flex flex-wrap gap-3",
								style: { animationDelay: "200ms" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#funkce",
										children: ["Objevte smart řešení", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "secondary",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#poptavka",
										children: "Nezávazná poptávka"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-enter relative mx-auto mt-10 w-56 lg:hidden",
								style: { animationDelay: "220ms" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMock, { className: "w-56" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-enter relative hidden justify-self-end lg:block",
						style: { animationDelay: "160ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMock, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-16 -right-6 flex size-24 flex-col items-center justify-center rounded-full bg-primary text-center shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "size-5 text-primary-fg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs leading-tight font-semibold text-primary-fg",
								children: [
									"Integrace",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"se Supla"
								]
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: HERO_POINTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 shrink-0 place-items-center rounded-full bg-surface/10 text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-sm text-hero-muted",
							children: item.text
						})] })]
					}, item.title))
				})]
			})
		]
	});
}
function SmartControl() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-surface px-4 py-20 sm:px-6 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
					children: "Automatizace & smart control"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-title font-semibold tracking-tight",
					children: "Představujeme chytřejší způsob mlžení"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-muted",
					children: "Díky inteligentnímu řízení máte vše pod kontrolou — bez zbytečných zásahů. Systém reaguje na počasí, teplotu i čas a zajišťuje úsporný provoz."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#cenik",
						children: ["Jak to funguje", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-6 sm:grid-cols-2",
					children: SMART_POINTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 shrink-0 place-items-center rounded-full bg-mist text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: item.text
						})] })]
					}, item.title))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-6 sm:grid-cols-[14rem_minmax(0,1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMock, { className: "w-56" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: "Teplota",
									value: "> 28 °C",
									note: "Spustit mlžení"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: "Časovač",
									value: "06:00 – 22:00",
									note: "Automatický režim"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									title: "Vlhkost vzduchu",
									value: "> 60 %",
									note: "Vypnout mlžení"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-hidden rounded-xl shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/control-box.jpg",
							alt: "Řídicí jednotka mlzidla.cz v terénu",
							className: "h-52 w-full object-cover sm:h-64"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script mt-4 -rotate-2 text-2xl text-primary sm:absolute sm:right-2 sm:-bottom-2 sm:mt-0",
						children: "Smart technologie pro zdravější města"
					})
				]
			})]
		})
	});
}
function StatCard({ title, value, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-surface px-4 py-3 shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-lg font-semibold tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: note
			})
		]
	});
}
function Products() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "produkty",
		className: "bg-bg px-4 py-20 sm:px-6 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
					children: "Katalog"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-lg font-display text-title font-semibold tracking-tight",
					children: "Modulární mlžidla, která unesou město"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-muted",
					children: "Stejná řídicí vrstva pro park, školu i historické náměstí. Zařízení bez čerpadla, aplikace jedna."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: PRODUCTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-xl bg-surface shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.alt,
							className: "h-52 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-wide text-primary uppercase",
									children: item.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-xl font-semibold",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: item.text
								})
							]
						})]
					}, item.name))
				})
			]
		})
	});
}
function Cities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "mesta",
		className: "bg-hero px-4 py-20 text-hero-fg sm:px-6 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/plaza.jpg",
					alt: "Lidé se osvěžují pod mlžidly na historickém náměstí",
					className: "h-full max-h-[28rem] w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] text-accent uppercase",
					children: "Městská řešení"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-title font-semibold tracking-tight",
					children: "Mlžíte to město — měřitelně"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-hero-muted",
					children: "Vlny veder už nejsou výjimka. Mlžidla bez řízení jsou drahá sprcha. mlzidla.cz dává samosprávám síť, která se spouští podle vedra, hlásí spotřebu a unese dotační report."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 grid grid-cols-3 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-hero-muted",
							children: "Pocitová teplota"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-2xl font-semibold tabular-nums",
							children: "−4,2 °C"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-hero-muted",
							children: "Úspora vody"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-2xl font-semibold tabular-nums",
							children: "31 %"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-hero-muted",
							children: "Měst v síti"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-2xl font-semibold tabular-nums",
							children: "48"
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#poptavka",
						children: ["Chci studii ochlazení", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})
			] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto mt-14 flex max-w-6xl flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-hero-muted",
			children: CITIES.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: city }, city))
		})]
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "funkce",
		className: "bg-surface px-4 py-20 sm:px-6 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
					children: "Funkce"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-lg font-display text-title font-semibold tracking-tight",
					children: "Od trysky po dispečink v jedné vrstvě"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: FEATURES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-bg p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 place-items-center rounded-lg bg-mist text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-semibold",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: item.text
							})
						]
					}, item.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-hidden rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/square.jpg",
						alt: "Náměstí s mlžicími stanicemi v letním horku",
						className: "h-64 w-full object-cover sm:h-80"
					})
				})
			]
		})
	});
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cenik",
		className: "bg-bg px-4 py-20 sm:px-6 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
					children: "Ceník"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-title font-semibold tracking-tight",
					children: "Tarify podle rozsahu sítě"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-muted",
					children: "Software a dohled. Hardware naceníme podle místa. Roční platba = dva měsíce zdarma."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-3",
					children: PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: plan.featured ? "flex flex-col rounded-xl bg-hero p-6 text-hero-fg shadow-soft lg:-translate-y-2" : "flex flex-col rounded-xl bg-surface p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: plan.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: plan.featured ? "mt-1 text-sm text-hero-muted" : "mt-1 text-sm text-muted",
								children: plan.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 flex items-baseline gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-3xl font-semibold tracking-tight",
									children: plan.price
								}), plan.period ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: plan.featured ? "text-sm text-hero-muted" : "text-sm text-muted",
									children: plan.period
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex flex-1 flex-col gap-2.5 text-sm",
								children: plan.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: plan.featured ? "text-accent" : "text-primary",
										"aria-hidden": true,
										children: "–"
									}), f]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: plan.featured ? "default" : "outline",
								className: "mt-8 w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#poptavka",
									children: plan.featured ? "Vybrat Náměstí" : "Nezávazná poptávka"
								})
							})
						]
					}, plan.name))
				})
			]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reference",
		className: "bg-surface px-4 py-20 sm:px-6 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-6 lg:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
					children: "Reference"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-title font-semibold tracking-tight",
					children: "Správci, kteří už mlží město"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/evening.jpg",
					alt: "Večerní náměstí s jemnou mlhou pod stromy",
					className: "h-48 w-full rounded-xl object-cover lg:h-56"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-3",
				children: QUOTES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "flex flex-col rounded-xl bg-bg p-6 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "text-[0.95rem] leading-relaxed text-fg",
						children: [
							"„",
							item.quote,
							"“"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-6 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: item.role
						})]
					})]
				}, item.name))
			})]
		})
	});
}
function Demand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "poptavka",
		className: "relative overflow-hidden bg-hero px-4 py-20 text-hero-fg sm:px-6 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/phone-hand.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.2em] text-accent uppercase",
						children: "Nezávazná poptávka"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-title font-semibold tracking-tight",
						children: "Pošlete e-mail. Vrátíme studii náměstí."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-lg text-hero-muted",
						children: "Žádný spam. Do druhého dne dostanete briefing k horké sezoně a termín 20minutového dema aplikace."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignupForm, { dark: true })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-hero-muted",
						children: "Odesláním souhlasíte se zpracováním e-mailu za účelem kontaktování. Odhlásit se můžete kdykoli."
					})
				]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-surface px-4 py-12 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xs text-sm text-muted",
				children: "Smart mlžení pro chladnější města. Modulární. Bez čerpadla."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted",
				"aria-label": "Patička",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "hover:text-fg",
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#poptavka",
					className: "hover:text-fg",
					children: "Kontakt"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-10 flex max-w-6xl flex-col gap-2 text-xs text-subtle sm:flex-row sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" MLŽIDLA s.r.o. Všechna práva vyhrazena."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Karlín, Praha · hello@mlzidla.cz" })]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingPage, {});
}
//#endregion
export { Home as component };
