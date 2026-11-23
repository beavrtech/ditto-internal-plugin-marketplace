---
name: ditto-design
description: >
  Use this skill to generate well-branded interfaces and assets for Ditto (the
  sustainability compliance platform with a coach), for production code or
  throwaway prototypes/mocks. It
  bundles the full Ditto design system: brand guidelines, color and type tokens,
  self-hosted fonts, brand assets (logo, illustrations, shapes, icons), a
  marketing-site UI kit, and a slide-template system. Reach for it on requests
  like "build a Ditto landing page", "mock an on-brand dashboard", "make a
  branded prototype", or "design something that looks like Ditto".
version: 0.1.0
---

# Ditto Design System

The full Ditto design system is bundled **inside this skill**. Read
`README.md` (the complete brand guide) first, then explore the other files below
before designing anything.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy the
assets you need out and create static HTML files for the user to view. If working
on production code, copy assets and read the rules here to become an expert in
designing with this brand.

If the user invokes this skill without further guidance, ask them what they want
to build, ask a couple of scoping questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.

## What's in this skill

- **`README.md`** — the complete brand guide: voice, color, type, imagery (the
  three pillars), shape/elevation, buttons, motion, layout, iconography.
- **`colors_and_type.css`** — import this; everything keys off its CSS variables
  (`--navy`, `--yellow`, `--tan`, the accent/neutral ramps, type classes
  `.h1`–`.h4`, `.text-*`, radii, warm shadows, spacing). `styles.css` is a thin
  starter on top.
- **`fonts/`** — Hedvig Letters Serif (display/headings) + Inter (body/UI),
  self-hosted and wired up via `@font-face` in `colors_and_type.css`.
- **`assets/`** — `ditto-logo.svg` (currentColor wordmark), `favicon.svg`,
  `illustrations/` (pillar 1: risograph brand illustrations), `shapes/` (pillar 2:
  overlapping geometric marks, multiply-blend), `brand-icons/`, `cert-ecovadis.png`,
  and product-app screenshots (`hero-bg.png`, `hero-fg.png`).
- **`ui_kits/website/`** — the marketing site (ditto.com) as reusable JSX: logo,
  pill buttons, header w/ mega-menu, hero, feature rows, testimonials, footer.
  Open `index.html` for the interactive prototype.
- **`slides/`** — the on-brand deck-template system (1920×1080, auto-scaling,
  print-to-PDF) split into themed decks (covers, chapters, agendas, quotes,
  closings, stats, content). See `slides/README.md`. The companion
  **`deck-designer`** skill encodes the rules for routing and building slides.
- **`preview/`** — Design-System preview cards (foundations + components).

## Non-negotiable brand rules

- **Voice:** punchy, positive, expert, approachable. Second person ("you").
  Sentence case. No emoji. (Full spec in `README.md`; the **`brand-copywriting`**
  skill encodes it for copy work.)
- Marketing lives on **tan** (`#EFF2E5`); the app lives on **near-white**
  (`#FAFAFA`). Text on navy is **tan**, not white.
- Every button is a **pill** (`999px`). Primary = navy/tan, Secondary = yellow/navy,
  Tertiary = transparent.
- Headlines in **Hedvig Letters Serif**; body/UI in **Inter**.
- **Imagery = three pillars:** (1) risograph illustration in rounded navy-bordered
  frames *(hero voice)*, (2) overlapping geometric marks in the secondary palette
  with multiply-blend overlaps *(accents/dividers — `assets/shapes/`)*, (3)
  photography *(reserved, direction TBD)*. Don't mix shapes over photography or
  illustration.
- Shadows are **warm-tinted** (brown/olive cast), never neutral gray.
- Icons: **Lucide** (`https://unpkg.com/lucide@latest`).
