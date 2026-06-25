# Veratus Group — corporate site

Static HTML/CSS site for **veratusgroup.com** (no build step). Sister site to the games studio at **veratusgames.com** and to FileCura.

> **See [`HANDOVER.md`](HANDOVER.md) for the full runbook** — deploy steps, design system, common edits, gotchas, and backups.

## Pages
- `index.html` — home (hero, divisions, CTA)
- `subsidiaries.html` — FileCura + Veratus Games overview
- `olympus.html` — the **Veratus Games** studio page (filename kept from the "Olympus" era on purpose)
- `about.html` — who we are
- `contact.html` — contact + brief
- `veratus.css` — single stylesheet · `fc-slideshow.js` — FileCura slideshow · `assets/`

## Design
- **Corporate pages:** Archivo / Inter / IBM Plex Mono; "Voltage" indigo `#4B4DF2`; `--ink` (dark) / `--paper` (light) surfaces.
- **`olympus.html`:** night-sky + laurel gold `#F5C754`, Space Grotesk / JetBrains Mono — matches veratusgames.com.

## Deploy
No build. Manually upload changed files into cPanel `public_html/`. **`git push` does not deploy.** Source-only (don't upload): `README.md`, `HANDOVER.md`, `.claude/`, `Olympus Games Design/`.

## Games lineup (keep in sync with veratusgames.com)
Apex Drift, Triagles, Eclipse Run — **out now** on the App Store. Lost in the Woods — in development. iOS. Status lives on `olympus.html` (the `.gtile` cards) and in copy on `index.html` / `subsidiaries.html`.
