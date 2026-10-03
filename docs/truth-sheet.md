# Truth sheet — godough.co

Every factual claim on the site must trace here. If it is not on this list, it does not ship.

## Allowed facts

| Claim | Source |
|---|---|
| Dough is a shopper app where people compare real grocery products | Product / brands positioning |
| Three offers: standings (how you compete), concept tests, box studies | Portal: concept + IHUT publish; catalog standings |
| Box studies ship to Dough shoppers who’ve already rated / chosen in similar categories | Product positioning for IHUT recruiting |
| Shoppers in New York (first panel) | Product decision for this site |
| Access is reviewed by a person (not self-serve checkout on the marketing site) | Portal application flow; `brands.godough.co/login` |
| 600,000+ products indexed | Existing brands page / catalog |
| 700+ categories | Existing brands page / catalog |
| Confidence 95%, fixed by Dough; brands set bars | `concept_verdict_bars` / report `method.confidence` |
| Cleared / not cleared / too close to call / not enough responses | `concept_bar_result` |
| Under 10 answers → not enough responses | `concept_bar_result` floor |
| Bars frozen at first respondent | `concept_verdict_bars_guard` |
| Price is stated willingness to pay, not a sales forecast | Report `method.price` |
| “Neither” shown, not counted as wins; timing-flagged battles excluded | Report `method.head_to_head` |
| Open text scrubbed of emails, links, handles, phones | `concept_scrub_verbatim` |
| Example report is simulated | `src/data/example-report.json` (`"simulated": true`) |
| Workspace frames embed live portal marketing previews (`/marketing/workspace/*`) with fixture data | Brand portal public preview routes |
| Box studies page embeds `/marketing/workspace/box-preview` (cropped experienced report) with link to full `/box-report` | Portal `ExperiencedReportDeck` preview variant + marketing fixture |
| Concept tests page mirrors box studies layout and embeds `/marketing/workspace/report` | Portal concept report marketing route |
| Compete page uses the same offer layout and embeds `/marketing/workspace/home` | Portal brand-home marketing route |
| Homepage sells already-logged preference (head start), why-brands-switch, decision list, and honest simulated proof | Positioning; box to similar-raters; no invented #N-of-M ranks |
| Method page is a visual rulebook: result-rule diagrams, who-controls-what, Keel one-miss, bar types, freeze, standing vs study | Same words as the report; example report simulated |
| Shoppers page sells NYC panel as people who already scan and rank in-app; hero shows a simulated consumer category ranking (fixture, not live brand standing); concept = same act; box = similar-raters; no national claim; no population Elo | Truth: NYC first panel; box to similar-raters; personal order labeled Simulated |
| Legal URLs unchanged: `/privacy`, `/terms`, `/delete-account` | App deep links |
| `/brands` redirects to `/` | Brand homepage is now `/` |
| `/partners` redirects to `/` | Delivery-partners pitch retired; not a current offer |
| Sunday Company Group LLC, Sheridan WY address | Existing legal pages |

## Must not say

- Public price per response (until explicitly approved)
- National panel / multi-city sample
- Named client logos or case studies
- “Start a test” / self-serve checkout as the primary CTA
- “Predicts,” “will succeed,” or in-market volume forecasts
- That the example report is a real client study
- Delivery / grocery-fulfillment partnership as a live offer

## Open blanks

- Founder name and one-sentence bio on `/about`
- Public pricing page (out of scope this pass)
