# Los Angeles — Onlineshop

A clean, minimal, product-first streetwear storefront built from the Claude Design
handoff (`project/Kraasen Shop.dc.html`). Five garment-dyed oversized drops with a full,
interactive shop flow in German.

Implemented as a **React + Vite + TypeScript** single-page app, recreating the design
pixel-for-pixel from the original prototype.

## Features

- **Hero + product grid** — all 5 drops, lifestyle-image swap on hover, quick-add button.
- **Product page** — image gallery (back / front / lifestyle), colour & size selection,
  quantity stepper, and a details accordion.
- **Cart drawer** — line items, quantity controls, free-shipping progress message
  (free over €80), live subtotal / shipping / total.
- **Checkout** — contact, delivery and payment forms with an order summary.
- **Confirmation** — order number, item count and total.

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
public/assets/          # the 15 product images (back / front / lifestyle × 5 drops)
src/
  main.tsx              # React entry
  index.css             # reset, fonts, ::selection, hover/focus helpers
  data.ts               # products, sizes, CONFIG (shipping threshold, hover swap, default size), euro()
  App.tsx               # all state + shop flow logic; renders the active view
  components/
    Header.tsx          # sticky header + cart button
    ShopView.tsx        # hero + product grid
    Footer.tsx          # shop footer
    ProductView.tsx     # product detail page
    CartDrawer.tsx      # slide-in cart
    CheckoutView.tsx    # checkout form + order summary
    ConfirmView.tsx     # order confirmation
```

## Configuration

The three knobs that were editor props in the original design live in `CONFIG` in
`src/data.ts`:

- `freeShipThreshold` — free-shipping threshold in € (default `80`)
- `enableHoverSwap` — swap grid image to the lifestyle shot on hover (default `true`)
- `defaultSize` — size pre-selected on the product page (default `'M'`)

---

The original design bundle is preserved under `project/` and the design conversation
under `chats/`.
