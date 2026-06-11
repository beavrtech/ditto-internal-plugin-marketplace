# Ditto — Marketing Website UI Kit

A high-fidelity recreation of the Ditto marketing site (`ditto.com`), reconstructed from the **Web-Design** page of the Figma file.

Open **`index.html`** for the interactive prototype: hover the nav to reveal mega-menus, submit the hero/footer email captures (toast confirmation), and page through testimonials.

## Components
| File | Exports | Notes |
|------|---------|-------|
| `Primitives.jsx` | `DittoLogo`, `Icon`, `Button` | Inline wordmark (currentColor), Lucide wrapper, pill buttons (primary/secondary/tertiary) |
| `Header.jsx` | `Header` | Sticky tan header, logo, nav with cream mega-menu popovers, Log in + Get Started |
| `Hero.jsx` | `Hero`, `EmailCapture` | Serif headline, subcopy, email-capture pill, app screenshot in a bordered frame |
| `Features.jsx` | `Features`, `StatBand`, `SectionIntro`, `FeatureRow` | Serif-numeral stat band, full-bleed illustration, alternating feature rows |
| `Testimonials.jsx` | `Testimonials`, `CTABand` | Cream quote card + dot carousel; yellow CTA band |
| `Footer.jsx` | `Footer` | Substack newsletter, 5 link columns, social glyphs, bottom bar |

## Visual rules in play
- Page background is **tan `#EFF2E5`**; sections share it for a continuous warm canvas.
- Display headlines in **Hedvig Letters Serif**; everything else **Inter** (tracking −2%).
- Every button is a **pill**; primary = navy/tan, secondary = yellow/navy, nav = tertiary.
- Imagery is full-bleed **painterly illustration** inside 24–32px rounded frames with a 1px navy border.
- Floating surfaces (mega-menus, quote card) use **warm shadows** and 24–30px radii.
- The big yellow CTA band ("Ready to get compliant? Ditto.") closes the page before the footer.

## Caveats
- Brand/social icons are inline SVG (Lucide deprecated brand glyphs). Lucide line icons come from CDN.
- Resource/blog cards and the Customers/Resources mega-menus are summarized rather than fully built out.
