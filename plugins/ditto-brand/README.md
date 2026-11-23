# Ditto Brand

Ditto's brand toolkit for Claude. Bundles the full Ditto design system and keeps
interfaces, decks, and copy on-brand. Long-form website articles follow the
`ditto-blog-optimisation` skill in the ditto-landing-page repo.

## Skills

| Skill | Triggers on | Status |
|-------|-------------|--------|
| `ditto-design` | "build a Ditto landing page", "mock an on-brand dashboard", "design something that looks like Ditto" | ✅ Ready |
| `deck-designer` | "make a Ditto deck", "design slides", "build a pitch deck on-brand", "fix this slide to match our brand" | ✅ Ready |
| `brand-copywriting` | "make this sound like Ditto", "write a LinkedIn post", "draft a hero or headline", "review this against our brand voice" | ✅ Ready |

## Setup

- **ditto-design** bundles the complete design system inside the skill — brand guide, color/type tokens, self-hosted fonts (Hedvig Letters Serif + Inter), assets (logo, illustrations, shapes, brand icons), the marketing-site UI kit, and the HTML slide templates. Use it for building on-brand web UI, prototypes, or production code. Nothing to attach.
- **deck-designer** reads exact type sizes, colors, spacing, and slide layouts directly from the bundled templates in `ditto-design/slides/` (`slide-system.css` is the source of truth) — nothing to attach. Provide your own image assets where relevant, or pull from `ditto-design/assets/`. Decks are built as native, editable Canva objects.
- **brand-copywriting** is self-contained: the brand voice, vocabulary, mechanics, and LinkedIn playbook live in the skill. Real top-performing posts can be used later to sharpen the social register.

## Contributing

Add a new skill under `skills/<skill-name>/SKILL.md`. Keep the SKILL.md body under
~3,000 words and put long reference material in a `references/` subfolder. Then list
it in the table above.
