---
name: mlzitka-sections
description: >
  Compose premium, conversion-focused product and solution sections for mlzidla.cz
  (urban misting hardware + smart control). Use when adding or restyling catalog
  pages, usage landings, product detail, filters, or recommend wizards — and when
  the user mentions mlžítka, kategorie, využití, katalog, nebo řešení.
metadata:
  short-description: "Premium mlžítka sections by usage, category, and scale"
user-invocable: false
---

# Mlžítka — smart sections

Never dump a generic 3-card grid. Every product surface is assembled from
taxonomy in `src/lib/catalog.ts` (single source of truth). Do not duplicate
copy in components.

## Taxonomy (always both axes)

| Axis | IDs |
| --- | --- |
| **Kategorie** | `oblouk`, `stojan`, `linka`, `ridici` |
| **Využití** | `namesti`, `park`, `skola`, `gastro`, `zahrada`, `mesto` |
| **Měřítko** | `bod`, `areal`, `sit` |

A product **must** declare `category` + `usages[]` + `badges` (Bez čerpadla / Smart / Modulární). Pulse Box is compatible with every usage.

## Section catalog (pick, don't invent)

| Surface | Section | Rules |
| --- | --- | --- |
| Home, `/produkty` | **Use-case grid** | 6 usage tiles. Image + kicker + label. Links to `/reseni/$usage`. |
| Home, `/produkty` | **Catalog explorer** | Dual filters (kategorie AND využití), live grid, empty state. Cards link to `/produkty/$slug`. |
| Home, `/produkty`, `/reseni/*` | **Recommend wizard** | 2 steps: využití → měřítko. Output = products + tariff name + CTA to `#poptavka` / form. |
| `/produkty/$slug` | **Product hero** | Image, badges, price from, 1 primary CTA. |
| `/produkty/$slug` | **Fit + specs** | "Hodí se" usage chips (links) + spec list from data, not lorem. |
| `/produkty/$slug` | **Related** | `relatedProducts()` only. |
| `/reseni/$usage` | **Solution hero** | Usage headline, problem, promise, stats, recommended SKUs. |
| All inner pages | **Page shell** | Solid dark header, footer, `pt` under sticky nav. |

## Copy & design

- Czech, specific, civic. No emoji. No purple. Tokens from `src/styles.css`.
- Reuse `public/images/*` (plaza, column, hero-mist, evening, square, control-box). Generate new photos only when a usage has no fitting asset.
- Primary CTA is always poptávka; secondary is catalog / other usage.
- Interactive filters and wizard are `"use client"`; data stays in `catalog.ts`.
- Mobile: chips wrap, tap targets ≥ 44px, no horizontal overflow.

## Do not

- Hard-code product names outside `catalog.ts`.
- Add a seventh usage or fifth category without updating this skill + `USAGES`/`CATEGORIES`.
- Ship placeholder gray boxes or stock lorem on product pages.
