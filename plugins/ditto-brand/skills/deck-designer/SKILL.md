---
name: deck-designer
description: >
  Use this skill whenever the user wants to create, design, or restyle a Ditto
  slide deck or presentation — e.g. "make a Ditto deck", "design slides for our
  webinar", "build a pitch deck on-brand", "turn these notes into a Ditto
  presentation", or "fix this slide to match our brand". It encodes Ditto's deck
  design system: slide-type routing, typography (Hedvig Letters Serif + Inter),
  the tan/yellow color rules, corner elements, left-aligned/top-anchored layout,
  image-forward covers and closers, and the requirement that output be native,
  editable Canva objects. Apply it to every slide.
version: 0.1.0
---

# Ditto Deck Designer

Design Ditto decks that look unmistakably like Ditto. These rules are the priorities and prohibitions. They are fixed — everything else is open to creative direction.

## Source of truth

All exact values — type sizes, colors (hex), corner padding, content margins, the spacing scale, and slide dimensions — live in the **Ditto design system template slides**, bundled with this plugin in the sibling `ditto-design` skill:

- **Templates:** `../ditto-design/slides/` — one deck per section (`covers.html`, `chapters.html`, `agendas.html`, `quotes.html`, `closings.html`, `stats.html`, `content.html`), all keyed off `slides/slide-system.css` (the single source of truth for canvas, type, spacing, and every slide layout). See `slides/README.md`.
- **Tokens & fonts:** `../ditto-design/colors_and_type.css` and `../ditto-design/fonts/` (Hedvig Letters Serif + Inter).
- **Assets:** `../ditto-design/assets/` — logo, favicon, illustrations, overlapping-shapes marks, brand icons.

Pull every measurement from `slide-system.css` and the template decks. Do not invent or approximate measurements; match the templates. Copy a `<section>` from the matching deck and swap the copy for fast on-brand slides.

If the user provides their own image assets, use those. If a specific image source can't be accessed, leave a clearly labeled placeholder — never drop in generic stock to fill the gap.

## Build editable, native Canva objects

The deliverable is an editable deck, not a flat picture. Build every slide as discrete, native elements: each text block is its own live text box, each image/icon its own placed element, each color block or divider a native shape. Never merge multiple things into one object or one image. Text is always live text, separate from any image behind it. For any photo you can't place as a discrete image, leave a labeled image placeholder — don't render it into the slide art. Goal: every text box, image, and shape can be clicked and edited on its own in Canva.

## Route each slide to a template section

Every slide must be built from one of the design system's slide sections. Route by content:

- Title / opening slide → **Covers**
- Section or chapter break → **Chapter titles**
- Table of contents / overview → **Agendas**
- A single big number or metric → **Stats**
- A pulled quote or testimonial → **Quotes**
- Everything else (the default) → **Content layouts**
- Closing / "any questions" / thank-you → **Final closing pages**

Match the chosen section's layout, scale, and structure.

## Typography

Two fonts ONLY:

- **Hedvig Letters Serif** for ALL display — titles, hero text, stat numbers.
- **Inter** for everything else — body, labels, captions, stat labels, overlines, corners.

Use the sizes from the design system. **Fallback:** if Hedvig can't be applied, the only substitute is **Georgia** (also a serif). NEVER substitute a sans-serif for a display/header role. Any headline-scale text must be the serif — never Inter at that size.

Body must stay large enough to read on a shared screen during a webinar or Google Meet; use the design-system body size, don't go smaller. Heroes and stat numbers must DOMINATE — treat the system's sizes as floors and scale UP to fill the space, never down. On stat slides the numeral is the hero: units/symbols (%, ×, +) set much smaller than the numeral, with a short Inter label beneath.

Avoid orphans/widows. Hard-break hero lines on purpose for rhythm. **Text is NEVER colorful.**

## Corner elements

Four fixed items, per the design system's corner placement and padding:

- Top-left: Ditto logo
- Top-right: trustditto.com
- Bottom-left: presentation name
- Bottom-right: page number

Corner text uses the corner style from the design system. Color: black on tan for the most part. Hide any corner element if content crowds it (e.g. a full-bleed image running to that edge) — legibility wins.

**Logo size:** the Ditto logo runs at the design system's standard corner size on regular slides. On covers, closing slides, and sometimes chapter titles, scale the logo UP — it's a brand moment on these slides, not just a corner marker. Use the larger logo size from the design system for these slide types.

## Layout — alignment

**Horizontal:** all main content is LEFT-ALIGNED on the design system's content grid (left margin). This is the deck's voice. The horizontal left start has NO exception.

**Vertical:** standard content slides are TOP-ANCHORED — the top of the first element (textbox / overline / title, whichever comes first) sits on the top margin from the design system, the same fixed line on every slide, like the left margin.

**Exempt** (vertical only): covers, chapter/section dividers, single-stat heroes, closing pages, and other intentionally creative slides — top, center, or bottom alignment is fine. A centered or drifting STANDARD content slide is a failure; the exemptions above are the only place centering belongs.

## Covers & closing slides

These carry the first and last impression. Push scale, composition, and color hardest here, and run the logo larger.

- **Covers** use an image-forward cover variant from the design system — never the plain text-only cover.
- **Closing / "any questions" / thank-you** slides use the Final closing pages section, matched the same way content slides match theirs.

Place a real image (from the provided assets or the design system) as a discrete element per the section's layout. If none fits, leave a labeled placeholder — never ship a bare text-only slide as a cover or closer, and never drop in generic stock. If the cover or closer could belong to any generic SaaS deck, redo it.

## Colors (exact hex in the design system)

Backgrounds are TAN by default and stay consistent across regular slides — a wall of steady tan is correct, not monotonous. A change in background color must signify a change in meaning or importance; never alternate tone for visual variety alone.

Reserve **YELLOW** for high-impact, meaning-bearing slides — chapter dividers, single-stat heroes — to mark a shift, not decoration. Accent is yellow: highlights, callouts, labels.

### Color — embellishments (overlines, lines, chips, circled numbers)

- **Overlines / eyebrows:** ALWAYS neutral. An overline is metadata above the title; coloring it competes with the hero. (Reinforces "Text is NEVER colorful.")
- **Chips & circled numbers:** neutral by default. If colored at all, the only permitted color is YELLOW. Never navy / red / other.
- **Lines / rules / dividers:** neutral. Treat them as structure, not accent.
- **RED:** reserved. Only for something genuinely critical (warning, hard constraint, breaking change), and rarely. Never decorative, never a default embellishment color.
- Accent works by scarcity: if overlines, lines, chips, and numbers are all colored, yellow stops meaning "look here." Spend color only on the few things that must be seen.

## Spacing

Use the design system's spacing scale between elements. Corners follow their own padding rules.

## Images & icons

Icons from **Lucide** (https://lucide.dev) — consistent line style and stroke weight across the deck. Photography/illustration: use assets the user provides or pull directly from the bundled design system (`../ditto-design/assets/` — illustrations and overlapping-shapes marks). If you can't access an image source, leave a clearly labeled placeholder — do NOT drop in generic stock.

## Creative direction

The rules above are fixed; everything else is open. Play with scale hard — very large type against deliberate empty space. Use the accent boldly or sparingly. Variety keeps the brand fresh, but within the constraints. If a slide could appear in any generic SaaS template, it's wrong — redo it.

## Self-check before finishing each slide

- [ ] Built from the matching slide section (Covers / Chapter titles / Agendas / Stats / Quotes / Content layouts / Final closing pages)
- [ ] All display/headers in the serif (Hedvig, or Georgia fallback) — never sans-serif
- [ ] Heroes and stat numbers scaled UP to fill — never document-sized or tiny
- [ ] Standard content slides left-aligned and top-anchored to the top line — not centered or drifting
- [ ] Four corner items present (unless crowded)
- [ ] Sizes, colors, and spacing pulled from the design system
- [ ] Output is native, editable Canva objects — not a flattened image
- [ ] Cover and closing slides use an image-forward variant with a real image (or labeled placeholder) — not text-only
- [ ] Overlines neutral; chips/circled numbers neutral or yellow only; lines neutral; red only for the rare critical callout
- [ ] Same start on every page: content begins at the left margin (horizontal, no exception) and on the top margin line (vertical, except covers / dividers / single-stat heroes / closing pages)
- [ ] Logo scaled up on covers, closing slides, and (where used) chapter titles
- [ ] Background tan and consistent on regular slides; any color shift signals a real change in meaning or importance
