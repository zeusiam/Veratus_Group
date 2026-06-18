# Veratus Group — corporate site

Static HTML site for **veratusgroup.com**. Sister site to filecura.com. Authored as a self-contained design system: bold editorial-tech, indigo accent ("Voltage"), night-sky theme on the games page, dedicated FileCura wordmark + slideshow component.

## File tree

```
veratusgroup-site/
├── index.html              Home — hero, two division blocks, ticker, CTA
├── subsidiaries.html       Division breakdown — FileCura + Veratus Games overview
├── olympus.html            Veratus Games studio — night-sky theme, 3 game tiles
├── about.html              Who we are, principles, group structure
├── contact.html            Email + brief
├── veratus.css             Single design-system stylesheet
├── fc-slideshow.js         Auto-cycling FileCura screenshot slideshow
└── assets/
    ├── veratus-mark.svg            3-square Veratus logomark
    ├── olympus-mark.svg            Veratus Games mark
    ├── olympus-lockup.svg          Veratus Games full lockup (used on hero + tile)
    ├── olympus-laurel.svg          Decorative laurel motif
    ├── filecura-wordmark.png       FileCura wordmark on white plate
    ├── filecura-logo.png           FileCura square icon
    ├── filecura-app.png            FileCura full-app screenshot
    └── fc/
        ├── fc-1.png … fc-6.png     6 FileCura screenshots for slideshow
```

## Live URLs

| Page | URL on veratusgroup.com |
|---|---|
| `index.html` | `/` |
| `subsidiaries.html` | `/subsidiaries.html` |
| `olympus.html` | `/olympus.html` |
| `about.html` | `/about.html` |
| `contact.html` | `/contact.html` |

External cross-links go to `https://filecura.com` (the FileCura product site).

## Design system

Defined in `veratus.css`:

- **Type** — Archivo (display) · Inter (body) · IBM Plex Mono (mono). Google Fonts loaded via `@import` at the top of the stylesheet.
- **Surfaces** — `--ink` dark surfaces vs `--paper` light surfaces. Pages flip via `class="on-ink"` or `class="on-paper"` on sections.
- **Accent** — "Voltage" indigo (`#4B4DF2` / `#7378FF`). Use `--accent` and `--accent-bright`.
- **Brand buttons** — `.btn--filecura` (purple-blue gradient pill) for FileCura CTAs. `.btn--olympus` (gold gradient) for Veratus Games CTAs.
- **Night-sky theme** — `body class="oly-page"` swaps the whole page to a deep navy night-sky background with SVG stars, mountain silhouette, and laurel.
- **Components** — `.shot` (framed image placeholder), `.fc-slides` (auto-cycling slideshow), `.gtile` (game tile), `.divblock` (large feature row), `.ticker` (auto-scrolling word strip), `.fade-up` (intersection-observer reveal), `.ticks` (corner-tick framing).

## Deployment

Plain static HTML — no build step.

1. Point veratusgroup.com at your host (cPanel, Cloudflare Pages, Netlify, GitHub Pages — any static host).
2. Upload the **contents** of `veratusgroup-site/` (not the wrapper folder) into the document root.

Final layout on the server:

```
public_html/
├── index.html
├── subsidiaries.html
├── olympus.html
├── about.html
├── contact.html
├── veratus.css
├── fc-slideshow.js
└── assets/   (all SVG/PNG inside)
```

No server-side rendering, no fonts hosted locally — Google Fonts is loaded over HTTPS from CDN. If you ever go GDPR-strict you can self-host the three font families.

## Email

Pages link to a contact email on `contact.html`. Check that page for the exact address and make sure the inbox routes before launch. Suggested: `hello@veratusgroup.com` or forward to `hello@filecura.com`.

## Updating game status

Each game tile on `olympus.html` is a `.gtile` with a `--gc` CSS variable for its accent colour:

| Game | Accent | Status flag |
|---|---|---|
| Apex Drift | `#F5C754` (gold) | `In development` |
| Lost in the Woods | `#A78BFA` (lavender) | `In development` |
| Triagles | `#5EE3FF` (cyan) | `In development` |

To promote a game to "Coming soon" or "Out now", edit the `.gtile__flag` text in `olympus.html`. To swap accent colour, change the `style="--gc:#...;"` on the `.gtile` element.

## Adding screenshots

The FileCura slideshow on `index.html` and `subsidiaries.html` lives inside `.fc-slides[data-fc-slides]`. To add a new screenshot:

1. Drop a PNG into `assets/fc/` named `fc-7.png` (etc).
2. Add an `<img src="assets/fc/fc-7.png" alt="…">` inside the `.fc-slides` block in both `index.html` and `subsidiaries.html`.
3. `fc-slideshow.js` will auto-build the dots and cycle.

## Edit notes

- All pages use the same nav and footer — search-and-replace if you change either.
- No analytics, no third-party trackers, no fonts loaded from CDNs other than Google Fonts.
- Companies House details (Veratus Group Limited · 17258282) are not on this site by default — add to the footer or `about.html` if/when you want them public.
