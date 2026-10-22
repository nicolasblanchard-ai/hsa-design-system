# HSG START Accelerator — Design System

**Acceleration through access.** The design system for decks, documents, website, social and one-pagers.

**Live documentation:** `https://<your-org>.github.io/<repo-name>/` (after enabling GitHub Pages, see below)

---

## Contents

| Path | What it is |
|---|---|
| `index.html` | Full browsable design system documentation (needs `support.js` beside it) |
| `BRAND-SPEC.md` | The complete written specification: color, type, spacing, logo, slides, components, voice |
| `styles.css` | Global CSS entry point (`@import`s only). Link this one file. |
| `tokens/` | CSS custom properties: `colors`, `typography`, `spacing`, `radii`, `elevation`, `fonts`, `base` |
| `components/` | React UI primitives (`.jsx` + `.d.ts` + `.prompt.md`), grouped as core, cards, data, forms, brand |
| `guidelines/` | Foundation specimen cards (colors, type, spacing, brand) as standalone HTML |
| `slides/` | 1920×1080 slide templates: cover, three-column, closing |
| `ui_kits/website/` | Website home screen built from the components |
| `assets/` | Official logos, // slashes, cube illustrations, gradients, examples |
| `SKILL.md` | Agent Skill manifest for using this system with Claude Code |

## Quick start

```html
<link rel="stylesheet" href="styles.css">
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=Barlow+Semi+Condensed:wght@600&display=swap" rel="stylesheet">
```

```css
.headline { font-family: var(--font-display); color: var(--navy); }
.cta      { background: var(--yellow); color: var(--ink-black); border-radius: var(--radius-8); }
```

## Core rules

- **Colors:** mint `#54F7BE`, navy `#001D35`, white. Yellow `#FFF70A` is the web CTA.
- **Type:** Barlow (body) + Barlow Semi Condensed 600 (display).
- **Slides:** 1920×1080, 72px margins, 7px mint top rule, `//` before every eyebrow.
- **No shadows.** Elevation through fills and borders only.
- **Spacing:** 4px spine, nine steps: 4 / 8 / 12 / 16 / 24 / 28 / 32 / 44 / 72.
- **Logos:** official files in `assets/logo/`. Use them unchanged.

Full detail: [`BRAND-SPEC.md`](BRAND-SPEC.md).

## Publish the docs with GitHub Pages

1. Repo → **Settings → Pages**
2. Source: **Deploy from a branch** → `main` / `/ (root)` → Save
3. After about a minute the docs are live at `https://<your-org>.github.io/<repo-name>/`

The `.nojekyll` file makes sure all files are served unchanged.

## Known gaps

- Lockups are PNG at 4× only. SVG/EPS still needed for large-format print.
- No font binaries. Barlow loads from Google Fonts.

---

© HSG START Accelerator. Brand assets and logos are not licensed for third-party use.
