# Veratus Group — site handover

**Domain:** veratusgroup.com
**Repo:** github.com/zeusiam/Veratus_Group  *(note: underscore)* · branch `main`
**Stack:** plain static HTML + CSS. No build step, no framework, no server code.
**Hosting:** shared cPanel (secureserver.net / GoDaddy). Deploy = manual upload of files into `public_html/`. **There is no auto-deploy — pushing to GitHub does not change the live site.**

## Pages
| File | Live URL | What |
|---|---|---|
| `index.html` | `/` | Home — group hero, the two divisions (FileCura + Veratus Games), CTA |
| `subsidiaries.html` | `/subsidiaries.html` | Division detail — FileCura + Veratus Games |
| `olympus.html` | `/olympus.html` | The **Veratus Games** studio page. Filename kept from the "Olympus" era on purpose — don't rename it (inbound links + history). |
| `about.html` | `/about.html` | Who we are, principles |
| `contact.html` | `/contact.html` | Contact + brief |

Shared: `veratus.css` (one stylesheet) · `fc-slideshow.js` (FileCura screenshot slideshow) · `assets/`.

## Design system (two visual languages, on purpose)
- **Corporate pages** (index / subsidiaries / about / contact) — editorial-tech via `veratus.css`: **Archivo** (display) · **Inter** (body) · **IBM Plex Mono** (mono); "Voltage" indigo accent `#4B4DF2` / `#7378FF`; dark `--ink` vs light `--paper` surfaces (sections flip with `class="on-ink"` / `class="on-paper"`).
- **`olympus.html`** (the games studio page) — its own inline styles: night-sky background + laurel gold `#F5C754`, **Space Grotesk** + **JetBrains Mono** (loaded via its own `<link>`). Deliberately matches the veratusgames.com brand.

## Deploy
1. Edit files locally.
2. cPanel → File Manager → `public_html/` → upload the changed files, choosing **Overwrite**.
3. Upload only what changed; whole-folder for `assets/` is fine.

**On the server (`public_html/`):** the 5 `.html` pages, `veratus.css`, `fc-slideshow.js`, `assets/`.
**Source-only — do NOT upload:** `README.md`, `HANDOVER.md`, `.claude/`, `.DS_Store`, `Olympus Games Design/` (old design draft), `Consultation Service/`.

## Common edits
- **Game status / lineup** lives on `olympus.html` (the `.gtile` cards) and is summarised in copy on `index.html` + `subsidiaries.html`. Keep it **consistent with veratusgames.com**. A launched game = green "Out now" flag (`gtile__flag--live`) + the tile is an `<a>` to its App Store URL + a "Download on the App Store →" line.
- **Cross-links:** the Group site links out to **veratusgames.com** (footer "Divisions" column + the `olympus.html` hero CTA). Keep those.
- **FileCura slideshow:** drop `fc-N.png` into `assets/fc/`, add an `<img>` inside the `.fc-slides` block; `fc-slideshow.js` auto-cycles.

## Gotchas
- **git push ≠ live.** Always upload manually to change the live site.
- The host injects a `tccl.min.js` performance script right before `</html>` on every page (GoDaddy/secureserver). It is not in the repo — ignore it when diffing live vs repo.
- Companies House details (Veratus Group Limited · 17258282) sit in the footer.

## Backups
Full dated zips (incl. `.git`) → `/Volumes/Veratus Group/Manual Backups/Veratus Group/`. Commit + back up together. **Never** back up or touch FileCura from this project.
