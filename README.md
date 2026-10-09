# godough-website

Dough marketing website — [www.itsarunoff.com](https://www.itsarunoff.com) · brand portal [brands.itsarunoff.com](https://brands.itsarunoff.com)

Astro static site. Design system from the former `brands.html`. Brand homepage is `/`. Shopper story lives at `/app`.

## Pages

| Path | Audience |
|---|---|
| `/` | Brands — home |
| `/product/compete` | Standings / catalog |
| `/product/concept-tests` | Concept tests |
| `/product/box-studies` | Box / IHUT studies |
| `/product/workspace` | Brand portal overview |
| `/report/example` | Simulated concept report |
| `/report/reading-a-verdict` | Verdict vocabulary |
| `/method` | Method (report words) |
| `/shoppers` | Who answers (NYC) |
| `/app` | Shopper product story |
| `/access` | Request access → portal |
| `/about` | Company |
| `/privacy` `/terms` `/delete-account` | Legal (stable URLs) |

`/brands` and `/partners` redirect to `/`. Delivery partners is retired until fulfillment is a real offer.

## Develop

```bash
nvm use 22   # engines.node >= 22.12
npm install
npm run dev
npm run build
```

## Deploy

Vercel. Output is static (`dist/`). No DNS change.

## Truth

See [docs/truth-sheet.md](docs/truth-sheet.md). Every claim on the site must trace there.

## Brand mark

`public/dough-mark.png` (and SVG / inverse) — same asset as the brand portal.
