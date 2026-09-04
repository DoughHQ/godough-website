# godough-website

Dough marketing website — [godough.co](https://godough.co)

## Pages

| Path | File | Audience |
|---|---|---|
| `/` | `index.html` | Consumers |
| `/brands` | `brands.html` | CPG / brand partners → CTA to `brands.godough.co/login` |
| `/partners` | `partners.html` | Delivery partners |
| `/privacy` | `privacy.html` | Legal |
| `/terms` | `terms.html` | Legal |

## Forms

- Consumer waitlist on `/` (Netlify Forms — `waitlist-inline`, `waitlist-bottom`). Brand interest is **not** a waitlist field anymore; “I represent a brand” links to `/brands`.
- Brand applications submit in the portal (`brands.godough.co`), not on this site.

## Deploy

Vercel static. Rewrites in `vercel.json` map clean paths to HTML files.
