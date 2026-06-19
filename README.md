# Los Angeles — Onlineshop

A clean, minimal, product-first streetwear storefront built from the Claude Design
handoffs. A 16-piece "Los Angeles / KRAASEN" collection with a full, interactive shop
flow in German.

Implemented as a **React + Vite + TypeScript** single-page app, recreating the design
pixel-for-pixel from the original prototypes.

## Features

- **Animated intro splash** — graffiti "Los Angeles" wordmark, fireworks bursts and a
  "made in germany" flag; auto-dismisses after 5s or on tap.
- **Hero + product grid** — all 16 pieces with quick-add buttons.
- **Product page** — image gallery (back / front / lifestyle), colour & size selection
  (clothing sizes, One Size, or shoe sizes per product), quantity stepper, and a
  details accordion with per-product copy.
- **Cart drawer** — line items, quantity controls, free-shipping progress message
  (free over €80), live subtotal / shipping / total.
- **Checkout** — contact, delivery and payment forms with an order summary.
- **Confirmation** — order number, item count and total.

## Catalog

16 products: 5 garment-dyed tees, plus baggy pants, a tracksuit, cap, beanie, puffer
jacket, swim shorts, slides, and 4 sneakers. Real product photography is bundled under
`public/assets/` (extracted from the design export).

> ⚠️ **Trademark note (sneakers).** The four sneaker images (`snk_*`) are AI-generated
> mockups that depict Nike trademarks (the Swoosh and "AIR" wordmark) under the KRAASEN
> brand name. They are included at the project owner's explicit request. Advertising or
> selling third-party-trademarked goods under a different brand carries real trademark /
> counterfeiting risk — replace these images with original, logo-free designs before any
> commercial use.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

## Structure

```
index.html              # entry, loads Google Fonts (Archivo / Archivo Expanded / Space Mono / Permanent Marker)
public/assets/          # 42 product images (back / front / lifestyle per product)
src/
  main.tsx              # React entry
  index.css             # reset, fonts, ::selection, hover/focus + intro keyframes
  data.ts               # products, sizes, CONFIG, euro(), size helpers
  App.tsx               # all state + shop flow logic; renders the active view
  components/
    IntroSplash.tsx     # animated intro overlay
    Header.tsx          # sticky header + cart button
    ShopView.tsx        # hero + product grid
    Footer.tsx          # shop footer
    ProductView.tsx     # product detail page
    CartDrawer.tsx      # slide-in cart
    CheckoutView.tsx    # checkout form + order summary
    ConfirmView.tsx     # order confirmation
```

## Configuration

Editor-prop knobs from the original design live in `CONFIG` in `src/data.ts`:

- `freeShipThreshold` — free-shipping threshold in € (default `80`)
- `defaultSize` — size pre-selected on the product page when available (default `'M'`)

Per-product overrides in `src/data.ts`: `price`, `sizes` (e.g. `['One Size']` or shoe
sizes), and `desc` / `fit` copy for the product accordion.

---

The original design bundles are preserved under `project/` and the design conversation
under `chats/`.
