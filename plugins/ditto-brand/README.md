# Ditto Brand

Ditto's brand toolkit for Claude. Keeps decks and copy on-brand.

## Skills

| Skill | Triggers on | Status |
|-------|-------------|--------|
| `deck-designer` | "make a Ditto deck", "design slides", "build a pitch deck on-brand", "fix this slide to match our brand" | ✅ Ready |
| `brand-copywriting` | "write this in our brand voice", "draft on-brand copy", "review this against our brand guidelines" | 🚧 Placeholder — guidelines not yet added |

## Setup

Both skills treat external documents as the source of truth:

- **deck-designer** needs the Ditto **design system template slides** (exact type sizes, hex colors, margins, spacing) and any image assets. Attach or link them when you start a deck. Decks are built as native, editable Canva objects.
- **brand-copywriting** needs Ditto's **brand guidelines**. Fill the skill in before relying on it.

## Contributing

Add a new skill under `skills/<skill-name>/SKILL.md`. Keep the SKILL.md body under
~3,000 words and put long reference material in a `references/` subfolder. Then list
it in the table above.
