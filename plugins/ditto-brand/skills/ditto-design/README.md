# Ditto Design System

> **Ditto** — *Your CSR and compliance copilot.*
> We enable businesses to build trust and build better, together.

Ditto is a CSR (Corporate Social Responsibility) and compliance platform that helps mid-size companies (250–1,000 employees) **get compliant, stay compliant, and prove it** to partners and stakeholders. It combines software, AI, and embedded human expertise so customers can ace a new assessment, showcase their standards, and level up their CSR performance across frameworks like **EcoVadis, ISO 14001, CSRD, CDP, and UN Global Compact**.

Audience: CSR managers, compliance officers, and company leaders. Ditto positions itself as a *copilot* — a knowledgeable, encouraging partner — not a point solution or a consulting firm.

---

## Sources

This system was reconstructed from a single Figma file:

- **`for Claude_ Ditto.fig`** — two pages:
  - **Design-System** (19 frames) — the canonical brand sheet: Colors, Typography, Buttons, Brand (logo/favicon/OG), Icons-Logos, Form, Navigation, Indicators, Layout-Spacing, Sections, etc.
  - **Web-Design** (7 frames) — the marketing website: Home, About-Us, Customers, Frameworks-Solutions, Resources, Get-Started, plus a Header system.

The Figma also embeds **screenshots of the Ditto product app** (a compliance dashboard) inside the marketing hero — these are reused as marketing imagery. There was no dedicated app page to recreate from, so no app UI kit is included.

Fonts (**Inter** + **Hedvig Letters Serif**) are the brand families, **self-hosted** from user-uploaded files in `fonts/` via `@font-face` in `colors_and_type.css` (a Google Fonts `@import` remains only as an offline fallback).

---

## Surface

**Marketing website** (`ditto.com`) — warm, editorial, confident. Tan/cream backgrounds, big Hedvig serif headlines, vibrant painterly illustrations, pill buttons, yellow CTAs. Built from rich Figma source. → `ui_kits/website/`

---

## CONTENT FUNDAMENTALS

Ditto's voice is built on four characteristics: **Punchy · Positive · Expert · Approachable.**

- **Punchy** — crisp, direct, pragmatic. Language is short and sweet, prioritizing *what to know and what to do*, with a touch of playful rebelliousness. ("Get compliant four times faster." / "Respond to compliance requests in a flash.")
- **Positive** — encouraging and joyful. Ditto meets the moment with the right energy, full of sage advice and words of encouragement, bringing delight to a complex domain.
- **Expert** — knowledgeable, confident, *unpretentious*. Deep CSR knowledge expressed without jargon-flexing.
- **Approachable** — easygoing, down to earth. The opposite of compliance's "alphabet soup of acronyms." Talks like real people.

**Voice mechanics:**
- **Person:** Second person — "you / your." Ditto is the copilot beside you. First-person plural ("we") only when speaking as the company (About, manifesto).
- **Casing:** Sentence case everywhere — headlines, buttons, nav. No Title Case, no ALL-CAPS shouting. (Buttons: "Get Started", "Log in".)
- **Headlines** are short declarative promises set in Hedvig serif: *"Your CSR and compliance copilot"*, *"Get compliant four times faster"*, *"Advanced technology meets human expertise"*, *"When sustainable businesses win, the world wins."*
- **Body** is plain-spoken and specific — names real frameworks (EcoVadis, ISO, CSRD, CDP) rather than vague "compliance."
- **Em dashes** used freely for rhythm and asides — "all in one platform", "because we do".
- **Emoji:** Not used. The brand expresses personality through words, color, and illustration, not emoji.
- **Reframe:** Compliance is consistently framed as an *opportunity*, not an obstacle — a chance to showcase leadership and build trusted partnerships.

**Brand principles (manifesto):**
1. *Great partners make great businesses.*
2. *Compliance is an opportunity.*
3. *When sustainable businesses win, the world wins.*

---

## VISUAL FOUNDATIONS

**Color.** A warm, optimistic system anchored by three brand colors:
- **Navy `#130E30`** — primary text, dark surfaces, and the primary (dark pill) button. Note it is a deep indigo-navy, never pure black.
- **Yellow `#FFE228`** — the signature accent. Header bars on doc sheets, the secondary CTA pill, highlights. High-energy, used in concentrated doses.
- **Tan `#EFF2E5`** — the signature warm cream background that makes the brand feel editorial and human rather than corporate. The marketing site lives on tan; text on navy is tan (`--fg-invert`), not white.

Around this core sits a **vibrant secondary palette** — green `#59E25D` (success/progress), blue `#3A93FF`, purple `#605CE7` (the "Ask AI"/intelligence accent), magenta `#E261E5`, orange `#FFBC63` — each with a full tint/shade ramp. A shadcn-derived **neutral gray** ramp handles product-UI borders and muted text. Reds are reserved for destructive/error only.

**Type.** A two-family system: **Hedvig Letters Serif** (Regular 400 only) for all display/headings — warm, literary, high-contrast — and **Inter** for all body, UI, and product text. Headings track tight (-1%); body tracks tighter (-2%). Big statistics use Hedvig as oversized **numerals** (88px). The product app is Inter-only (headings included) for a cleaner, more utilitarian feel.

**Backgrounds.** Tan (`#EFF2E5`) for marketing, near-white (`#FAFAFA`) for the app, navy for footers/dark sections. No gradients as decoration.

**Imagery — three pillars.** Ditto's imagery is a system of three distinct, complementary voices:
1. **Illustration** *(primary / hero voice)* — **vibrant risograph-style illustration**: sunny scenes of people, glass buildings, gardens, coastlines and landscapes rendered in a CMYK-halftone / fine line-art technique with a limited bright palette (cyan sky, magenta-pink foliage, golden-yellow light, lime green) on cream. Warm, hopeful, optimistic — see `assets/illustrations/`.
2. **Overlapping shapes** *(accent / structural)* — simple geometric primitives (the play / fast-forward triangle, circle, semicircle, pill) drawn in the pure secondary palette and **overlapped with a multiply blend**, so intersections mix into richer secondaries (blue + yellow → green, yellow + magenta → orange-red). Same DNA as the logo's forward marks. Used for dividers, section openers and energetic accents — never layered over photography or illustration. Assets in `assets/shapes/`.
3. **Photography** *(reserved — direction TBD)* — the third pillar; no assets in-system yet. Working direction: documentary, natural-light, real people and workplaces, warmly graded to sit on tan. Confirm crops/grade before going live. Default to illustration for hero moments until then.

**Shape & elevation.** Everything is **soft and rounded**: cards 16px, popovers 24–30px, mega-menu panels up to 48px, and **every button is a full pill** (`999px`). Shadows are **warm-tinted** — they carry a brown/olive cast (`rgba(64,58,45,…)` / `rgba(27,36,44,…)`), never neutral gray — and get dramatic on floating menus (`0 48px 96px`). Borders are hairline neutral (`#E5E5E5`) on the app, soft tan (`#D9DDBC`) on cream surfaces.

**Buttons.** Three types, all pills, all Inter 16 / tracking -2%, 14×24 padding, 48px tall:
- **Primary** — navy fill, tan text.
- **Secondary** — yellow fill, navy text.
- **Tertiary** — transparent, navy text (nav links). Plus a tiny pill variant for inline "Case study →" tags.

**Motion.** Restrained and friendly: gentle fades and ease transitions, hover states that lift cards (shadow) or fill backgrounds (cream/yellow). No bounces, no infinite decorative loops. Press states are subtle. Hover on nav items reveals rich mega-menu popovers.

**Layout.** Marketing: centered 1440 content with generous 48px gutters and large vertical rhythm (80–120px sections). Carousels with dot indicators for testimonials/features. App: fixed left sidebar + scrolling content canvas inside a large rounded container.

---

## ICONOGRAPHY

Ditto uses **[Lucide](https://lucide.dev)** as its icon system — confirmed throughout the Figma (`lucide/chevron-down`, `chevron-right`, `check`, `x`, `scale`, `file-text`, `sparkles`, `bell`, `message-square-quote`, `arrow-download`). Lucide's clean 1.5–2px stroke, rounded line style matches the friendly-but-precise brand.

- **In this system:** Lucide is loaded from CDN (`lucide@latest`) in the UI kits. Use stroke icons at navy `#130E30` or the relevant accent; the "Ask AI" sparkles render in purple `#605CE7`.
- **Brand mark:** the Ditto logo is a custom wordmark with a distinctive "D" glyph — `assets/ditto-logo.svg` (uses `fill: currentColor`, so set `color` to navy). The favicon/app mark is `assets/favicon.svg` (the "D" on a tan rounded square).
- **Partner / certification logos** (EcoVadis, Schneider, etc.) appear as PNG badges — `assets/cert-ecovadis.png`.
- **Emoji / unicode:** not used as icons. The only "icon-like" decoration beyond Lucide is the brand illustration imagery.

---

## Index / manifest

Root files:
- **`README.md`** — this file.
- **`colors_and_type.css`** — all color tokens (CSS vars), the type scale, radii, warm shadow system, spacing. Import this into every artifact.
- **`SKILL.md`** — Agent-Skill manifest for using this system in Claude Code.
- **`assets/`** — brand assets:
  - `ditto-logo.svg` (wordmark, currentColor), `favicon.svg` (D mark on tan)
  - `hero-bg.png`, `hero-fg.png` — product app screenshots (compliance dashboard)
  - `illustrations/` — imagery pillar 1: vibrant risograph brand illustrations (businesses / partners / world series)
  - `shapes/` — imagery pillar 2: overlapping geometric brand marks (multiply-blend) — `shape-fastforward.png`, `shape-circle-mark.png`, `shape-band.png`
  - *(photography — imagery pillar 3 — reserved; no assets yet)*
  - `cert-ecovadis.png` — EcoVadis certification badge
- **`preview/`** — Design-System tab cards (foundations + components).

UI kits:
- **`ui_kits/website/`** — marketing site (ditto.com): header w/ mega-menu, hero, feature sections, testimonials, footer.

Slides:
- **`slides/`** — a 17-layout presentation template (cover, sections, quotes, stats, cards, speakers) on `deck-stage.js`. See `slides/README.md`.

---

## Caveats
- No dedicated product-app page existed in the Figma (only marketing-hero screenshots), so no app UI kit is included. If the real app (Figma or codebase) becomes available, an app kit can be added.
- Per-character styles, some deep nested instance overrides, and exact illustration assets beyond those copied are approximated.
