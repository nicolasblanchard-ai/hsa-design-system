# HSG START Accelerator — Design System Specification

Complete, binding definition. Derived from the real 14-slide Partner Deck (August 2026) plus the official brand asset library. Every value here is measured from shipped work.

The brand was renamed from "WhiteList". That name must never appear in any output.

---

## 1. Brand

**Name:** HSG START Accelerator
**Claim:** Acceleration through access
**What it is:** A deep-tech accelerator at the University of St.Gallen. 90 days from lab to raise: scholarship funding, 1:1 expert coaching, investor access, Demo Day.
**Numbers:** ~400 applications/year from 6'000+ targets → ~100 screened → 16-20 companies selected. CHF 15k scholarship + up to CHF 200k follow-on. Companies raise CHF 1-10m.
**Audience:** deep-tech founders, investors, corporate partners, mentors, experts, St.Gallen ecosystem.
**Website:** hsgstartaccelerator.org

---

## 2. Color

### Core — three values carry every surface

| Token | Hex | Role |
|---|---|---|
| `--navy` | #001D35 | Primary text, dark surfaces, dark cards, contrast panels |
| `--mint` | #54F7BE | Top rule, bullets, markers, key figures, card top accent |
| `--white` | #FFFFFF | Page and slide background — the default field |

Maximum one or two background colors per deck or page.

### Green family

| Token | Hex | Role |
|---|---|---|
| `--green-ink` | #12C48E | The // marker; connective words in headlines |
| `--green-label` | #0F9E73 | Small green labels, eyebrow accents, links |
| `--green-deep` | #04412E | Text on mint fills (numbered circles, chips) |
| `--green-tint` | #F3FBF7 | Tinted stat cards, input panels |
| `--green-tint-2` | #EAFBF4 | Chips, value badges |
| `--green-border` | #D6F2E6 | Borders on tinted cards |
| `--green-rule` | #E1F3EA | Timeline connectors, progress tracks |

### Text on light

| Token | Hex | Role |
|---|---|---|
| `--text-primary` | #001D35 | Headlines |
| `--text-body` | #41586A | Body copy |
| `--text-eyebrow` | #33424C | Eyebrow labels, list items |
| `--text-muted` | #6E828E | Captions, secondary labels |
| `--text-faint` | #9AA7AD | Placeholder text |
| `--text-footer` | #AEB8BE | Footer, slide numbers, source notes |

### Text on navy

| Token | Hex | Role |
|---|---|---|
| `--on-navy` | #FFFFFF | Headlines |
| `--on-navy-body` | #AFC7D4 | Body |
| `--on-navy-soft` | #E6EDF1 | Emphasis bands |
| `--on-navy-muted` | #7FA6BC | Labels |
| `--on-navy-rule` | #274157 | Dividers inside navy panels |

### Surfaces & borders

| Token | Hex | Role |
|---|---|---|
| `--surface-card` | #FAFCFB | Default card fill |
| `--surface-inactive` | #F5F7F5 | "Before" / inactive state |
| `--border` | #E7ECEA | Default 1px card border |
| `--border-inactive` | #CBD3CC | Dashed inactive border, input border |
| `--hatch-a` / `--hatch-b` | #F2F5F3 / #E9EEEB | Image-placeholder hatch, 45°, 8px stripes |
| `--numeral-ghost` | #CBD9D3 | Ghost index numerals (01-04) on cards |
| `--track` | #E4E9EC | Chart bar track |

### Yellow — highlight and call to action

Yellow marks motion and decision. It drives arrows and transition markers in decks, and it is the **primary CTA color on the website** — the one place a non-mint fill dominates.

| Token | Hex | Role |
|---|---|---|
| `--yellow` | #FFF70A | Web CTA fill, arrows, motion markers |
| `--yellow-deep` | #EFDF12 | CTA hover / pressed |
| `--yellow-bg` | #FBF3C5 | Draft / to-confirm tiles |
| `--yellow-border` | #EAD98A | Draft tile border |
| `--yellow-ink` | #8A6D00 | Text on draft tiles |
| `--ink-black` | #12130F | Text on yellow fills |

### Secondary — "syntax highlighting"

Accents that punctuate the way a code editor highlights tokens. Sparse highlights and the categorical chart ramp only — never large fields. This is the designated palette for extending the system beyond the green-and-navy core.

#FFF70A yellow · #FB9800 orange · #CC4278 pink · #00A1D2 blue · #DA291C red (negative data only)

Chart ramp order: mint → blue → orange → pink → yellow. Never more than five categories on one slide.

---

## 3. Typography

**Barlow** (400/500/600/700/800) for everything readable. **Barlow Semi Condensed** (600) for display — condensation buys words per line at 80px. Both Google Fonts, SIL OFL. **Verdana** Regular/Bold is the fallback in email and system contexts.

Scale at 1920×1080:

Roles are named independently of where they are used. Pick by hierarchy, not by medium.

| Role | Used for | Font | Size | Weight | Detail |
|---|---|---|---|---|---|
| Display XL | Cover, poster, hero | Semi Condensed | 122-150px | 600 | line-height .94 |
| Display L | Slide and page headline | Semi Condensed | 80px | 600 | line-height 1.0, tracking −.005em |
| Figure | Key numbers, stats, KPIs | Semi Condensed | 150 / 56 / 52 / 40 / 34px | 600 | line-height 1 |
| Lead | Subtitle, intro paragraph | Barlow | 28px | 400 | line-height 1.45, max-width 1180px |
| Title | Card, panel and block heading | Barlow | 32 / 27px | 600 | |
| Body L | List item, emphasised paragraph | Barlow | 26 / 25px | 500 | line-height 1.35 |
| Body | Running text | Barlow | 21 / 20px | 400 | line-height 1.38 |
| Overline | Above every headline, with // | Barlow | 22px | 600 | tracking .2em, uppercase |
| Label | Category, column and field labels | Barlow | 16-20px | 700-800 | tracking .04-.12em, uppercase |
| Caption | Footer, source note, page number | Barlow | 16px | 400 | color #AEB8BE |

**Floor:** never below 20px in a 1920×1080 slide, except footer metadata at 16px. 12pt minimum in print.
**Emphasis:** bold inside body copy is Barlow 600 in #001D35, never mint. Mint is reserved for the connective word in a headline.

---

## 4. Spacing, radii, elevation

**Binding 4px spine — nine steps, no intermediates:**

| Token | px | Use |
|---|---|---|
| space-1 | 4 | Hairline gaps inside chips |
| space-2 | 8 | Icon-to-label |
| space-3 | 12 | Bullet rows, chip gaps |
| space-4 | 16 | Label to value |
| space-5 | 24 | Title to subtitle |
| space-6 | 28 | Card inner padding, footer gap |
| space-7 | 32 | Column gap, small block break |
| space-8 | 44 | Padding on large slide cards |
| space-9 | 72 | Slide margin — never varies |

**Radii:** 16 large cards · 14 bands · 12 tiles · 10 chips · 8 buttons and inputs. Top-accent cards use `border-radius: 0 0 14px 14px` — the mint edge stays square.

**Elevation: no shadows anywhere.** Depth comes from fill and border only: white → #FAFCFB → tint → navy.

---

## 5. Logo

Six official lockups, all in the attached assets folder. **Use unchanged — never recolor, stretch, outline or add effects.**

- **One-line** (≈16.4:1) — footers, headers, narrow bands, email signatures. Minimum 22px tall. Black / green / white.
- **Stacked** (≈3.1:1) — covers, title slides, posters, social. Minimum 40px tall. Black / green / white.
- **Figurative mark** (the slashes) — social profile pictures only, on black or green.

**Color choice:** green on white and light neutral · black on light or green backgrounds and one-color output · white on navy, black, photography and solid color fields.
**Clear space:** at least the height of one slash on every side.

Files are PNG at 4× only. No SVG/EPS lockups exist yet.

---

## 6. The // device

One shape, five jobs:

1. **Logo mark** — the figurative mark alone, on black or green only.
2. **Section marker** — precedes every eyebrow label, in #12C48E, `letter-spacing: -.18em`, `margin-right: .32em`.
3. **Rule / divider** — long runs (`//////////////`) separate sections in long-form documents.
4. **Text device** — in social copy, `//` opens a comment or a P.S.
5. **Standalone graphic** — five SVG variants supplied: green, green gradient, green outline, black, black outline.

---

## 7. Illustration — the cubes

Isometric clusters of fine parallel hatching: structure being assembled, the metaphor for building companies. Fifteen vectors in three colorways; the black set is the recolorable master.

**Correct:** oversized watermark, clipped at the frame edge, .14-.18 opacity inside navy cards; large and bleeding off the edge on light layouts.
**Avoid:** small, centered, floating in whitespace like a spot icon.

---

## 8. Gradients & imagery

- Green→white and white→green gradients, supplied in 16:9 and A4.
- **Image overlay rule:** 30% #54F7BE overlay — a flat field or composited over the photo.
- **Photography:** authentic over staged (bootcamp, cohort trip, Demo Day). Bright, high-contrast, energetic; people in focus; green sparingly. One striking header image, never a collage. Startup photos only with permission.
- **Canonical social composition:** gradient field, oversized cube bleeding off the left, claim flush right in uppercase black Barlow Bold, three lines, tight leading.

---

## 9. Slide system

**1920 × 1080. 72px margins.** Every slide, cover included, carries:

- 7px mint top rule, full bleed, at y 0
- Eyebrow at y 60 / x 72, left; optional status pill flush right
- Title block at y 150; subtitle 24px below it
- Content zone starting y ≈ 430
- Footer at bottom 40: one-line logo 22px tall, gap 28px, optional source note, slide number flush right in #AEB8BE

### The eight archetypes

1. **Cover** — two-tone display title (navy line + mint line), claim, qualifier chips, cube bleeding bottom-right.
2. **Data / chart** — treemap, ratio bars or funnel. Mint = subject, navy = mass, grey = context, red = negative. Source note in the footer, always.
3. **Compare, light vs. navy** — navy panel holds the given, a 2×2 of top-accent cards holds the gap. Column labels above both.
4. **Three-column cards** — ghost numeral (01-04 in #CBD9D3), title, description, mint value badge pinned to the bottom edge.
5. **Timeline** — mint numbered circles on an #E1F3EA connector; the payoff step turns navy with a yellow arrow marker.
6. **Funnel / before→after** — dashed grey start, mint-tinted middle stages, solid mint payoff. Yellow circular arrows carry the transitions.
7. **Stat row + logo wall** — mint-tint stat cards; unconfirmed figures in a dashed yellow draft tile; hatched slots for logos until real ones arrive.
8. **Closing / CTA** — split layout: the ask on white, next steps and contact on a full-height navy panel with a clipped cube.

---

## 10. Components

**Buttons** — 8px radius, Barlow 600-700 at 18-19px, padding 14-15px / 26-30px. One primary per view.
- Yellow CTA: #FFF70A fill, #12130F text, hover #EFDF12 — the website primary.
- Mint: #54F7BE fill, #04412E text, hover #12C48E with white text — primary in decks and documents.
- Navy: #001D35 fill, white text, hover #274157.
- Tertiary: transparent, 1.5px #CBD3CC border, hover border #001D35.
- On navy: yellow CTA, or transparent with #274157 border → hover mint.
- Disabled: #F5F7F5 fill, #9AA7AD text, #E7ECEA border.

**Cards**
- Top-accent: 4px mint top, 1px #E7ECEA on the other three sides, `radius 0 0 14px 14px`, #FAFCFB fill. Often with a ghost numeral.
- Default: #FAFCFB fill, 1px #E7ECEA border, 16px radius.
- Stat: #F3FBF7 fill, #D6F2E6 border, big Semi Condensed figure.
- Dark: #001D35 fill, #274157 inner rules, clipped cube watermark.
- Inactive / "before": dashed #CBD3CC on #F5F7F5.
- Draft: dashed #EAD98A on #FBF3C5, #8A6D00 text — never ship one to a client.
- Image placeholder: 45° hatch, #F2F5F3 / #E9EEEB.
- Audience card: navy header block + light body.

**Chips, pills, markers**
- Value badge: #EAFBF4 fill, #04412E text, 700, 8px radius.
- Tag chip: #EAFBF4 fill, #D6F2E6 border, 10px radius.
- Outline chip: 1.5px #26414F border, uppercase 600, with a small mint block.
- Draft pill: #FBF3C5 fill, #EAD98A border, pill radius, uppercase 800.
- Numbered circle: 44px, mint fill, #04412E Semi Condensed numeral.
- Arrow marker: 44px, #FFF70A fill, #12130F arrow.
- **Bullets are 13px mint squares with 3px radius — never discs.**

**Forms** — inputs 8px radius, 1px #CBD3CC, focus ring #12C48E. Labels uppercase 14px/700 in #6E828E. Minimum 44px hit target.

**Navigation** — header carries the 7px mint rule like every other surface. Active item Barlow 600 in navy, inactive #41586A. Yellow CTA flush right. Navy footer closes every page.

**Tables** — header row #FAFCFB, uppercase 13px/800 #6E828E labels, 1px #F1F4F3 row rules, 19px body. Positive/highlight values in #0F9E73 600.

---

## 11. Surfaces beyond slides

**Documents & reports** — A4 portrait, 25mm margins, single column at 65-75 characters, Barlow 11pt / 1.5 minimum, headings Semi Condensed. Running header with the one-line logo, page number bottom right. Long `//////` rules separate chapters.

**Website** — yellow is the CTA color; mint stays structural (top rule, card accents, bullets); navy footer closes every page. One primary CTA per screen.

**Social** — profile picture is the mark alone on black or green. Headers follow the canonical gradient-plus-cropped-cube composition. Max three emoji, max four hashtags: #Acceleratorthroughaccess #DeepTech #InvestorReady #StGallen.

**One-pager** — A4, one claim, three bullets, two stat tiles, one cropped cube. A one-pager that needs a second page is a deck.

**Newsletter** — logo header → short subject line → thematic greeting → labelled sections with bullets → one or two mint CTA buttons → Partner Spotlight → footer with social and unsubscribe. One newsletter, one core message. No hashtags.

---

## 12. Voice & content

**Voice:** clear, direct, practical, connecting. We are the connectors.
**Tonality:** casual, clear, entertaining, positive, youthful, professional.
**Language:** American English. CHF before the amount. En dash for ranges. 24-hour time. Numerals except at sentence start; four digits and up take a Swiss apostrophe — 6'000.

**Headline pattern — short declaratives that argue.** Sentence case, ending in a period. Consecutive slides chain with connectives set in mint:

> Europe innovates a lot.
> **But** Europe has stopped building winners.
> **Because** the pipeline breaks at the lab door.

**Do:** short sentences, one to two per line, each ending in a period · one clear CTA · max three emoji per social post or newsletter, never in decks or documents · max four hashtags on social.

**Don't:** long paragraphs · links buried mid-block · emoji stacks · hyphens for ranges · hashtags in newsletters · mint as body emphasis · shadows · recolored lockups · small centered cubes · unverified numbers outside a dashed yellow draft tile · the name "WhiteList", anywhere.

---

## 13. Assets in this package

```
logo/
  oneline-black.png, oneline-green.png, oneline-white.png
  stacked-black.png, stacked-green.png, stacked-white.png
  mark-black-on-white.svg, mark-green-on-black.svg
  slashes-claim-black.svg
slashes/
  black.svg, black-outline.svg, green.svg, green-outline.svg, green-gradient.svg
cubes/
  01-05 green.svg, 01/03/05 black.svg
gradients/
  green-to-white-16x9.png, white-to-green-16x9.png
examples/
  linkedin-header-01.png   (canonical social composition)
```

**Fonts:** no binaries available. Load Barlow and Barlow Semi Condensed from Google Fonts.

---

## 14. Known gaps

- Lockups are PNG at 4× only — request SVG/EPS from the designer if large-format print is planned.
- No font binaries; Google Fonts is the source.
- No icon set is defined. If one is needed, pick a CDN set matching the brand's thin-stroke geometric feel and flag the choice.
