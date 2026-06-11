# Ditto — Slide Templates

The brand's Canva deck system, recreated as on-brand, directly-editable HTML and **split into themed template decks** so each slide family lives in its own Design System section. Open any file below and use ←/→ (or the thumbnail rail) to move through it.

Built on the `deck-stage.js` shell (1920×1080, auto-scaling, print-to-PDF). Each slide is a static `<section>` so headings and body copy can be edited directly in the preview. Shared chrome (the Ditto wordmark, `trustditto.com`, the title footer, and page numbers) is injected by a small script so the editable markup stays focused on content.

## Files — one deck per Design System section
| File | DS section | Layouts |
|------|------------|---------|
| `covers.html` | **Slides · Covers** | Cover / title-slide variations |
| `chapters.html` | **Slides · Chapter titles** | Section dividers — light serif number, yellow number box, giant ghost numeral |
| `agendas.html` | **Slides · Agendas** | Numbered big list, split yellow-panel timeline, time-pill agenda |
| `quotes.html` | **Slides · Quotes** | Large pull-quote, quote + image |
| `closings.html` | **Slides · Closings** | Sign-off bookends — thank-you split + image, CTA over shapes band, solid-yellow type-only, CTA on full-bleed image |
| `stats.html` | **Slides · Stats** | Big number, three-stat row, circle stat, full-yellow multiplier, split-stat problem |
| `content.html` | **Slides · Content** | Bullets, goal cards, audience cards, speakers, speaker bio, webinar detail, three cards, copilot checklist, enjeux, CSRD matrix, timeline |
All decks share **`slide-system.css`** — the single source of truth for canvas, type, spacing and every slide-specific layout. Edit it once and every deck inherits the change.

## The system
- **Canvas:** 1920×1080 on pale cream `#F5F7EF`; alternate panels in sage `#E9EBD9`; one yellow `#FFE228` accent panel.
- **Type:** headlines & numerals in **Hedvig Letters Serif** (never bolded); eyebrows, body, labels in **Inter** (tracking −2%). Eyebrows are uppercase, letter-spaced, gray, optionally prefixed with a yellow dot.
- **Spacing:** chrome inset ~30px; content inset 116px; safe zone roughly 150–930px vertical. Generous vertical rhythm, hairline dividers.
- **Accents:** yellow for the eyebrow dot, section number box, highlight marker, timeline nodes, and goal-card icon tiles. Lucide icons throughout. The overlapping-shapes band (`assets/shapes/shape-band.png`) is used as a footer divider.

## Notes & caveats
- **Image slots** — cover, quote, speaker, and bio images are `<image-slot>` drop targets: drag a photo onto one (or click to browse) and it fills. Drops persist via a sidecar file when the deck is opened from the project root.
- **Deck title** — edit the `DECK_TITLE` constant near the bottom of each deck once and it auto-fills the footer of every slide. Page numbers (`01`, `02`…) auto-fill per deck.
- Copy is sample content (a fictional "Qalico × TraceX" webinar / GGB CSR review) to exercise every layout — swap for your own.
