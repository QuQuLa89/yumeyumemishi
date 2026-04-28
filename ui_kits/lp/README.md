# 夜半 — Landing Page UI Kit

A high-fidelity recreation of the new-member welcome (新歓) landing page for circle 夜半.

## Sections covered
1. **Header** — sticky, blurred, with `夜半` wordmark + nav
2. **Hero** — full-bleed dark section with mincho display title, date stamp, and a primary CTA
3. **Schedule** — `04.12 — 04.20` event list with date stamps
4. **About / 部室** — what the circle does, vertical-text divider, member quotes
5. **FAQ** — quiet accordion with hairline dividers
6. **Footer** — minimal, mono, with the 夜半 mark

## Components
- `Header.jsx` — sticky nav, `夜半` mark + section list
- `Hero.jsx` — display-mincho title, date, CTA
- `Schedule.jsx` — event list with `EventRow.jsx`
- `About.jsx` — copy + tategaki divider
- `Members.jsx` — quote cards
- `FAQ.jsx` — accordion
- `Footer.jsx`
- `Button.jsx`, `Icon.jsx` (utility)

`index.html` wires them all together as a single scrollable page.

## Notes
- All copy is placeholder. Replace with real circle details before launch.
- Photos are film-frame placeholder boxes. Replace with real 35mm scans for full effect.
