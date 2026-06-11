# Ditto Brand

Ditto's brand toolkit for Claude. Keeps decks, copy, and resource content on-brand.

## Skills

| Skill | Triggers on | Status |
|-------|-------------|--------|
| `deck-designer` | "make a Ditto deck", "design slides", "build a pitch deck on-brand", "fix this slide to match our brand" | ✅ Ready |
| `brand-copywriting` | "make this sound like Ditto", "write a LinkedIn post", "draft a hero or headline", "review this against our brand voice" | ✅ Ready |
| `resource-writer` | "write a Ditto blog post", "draft a CSR news digest", "turn this title into a publish-ready article", "write our guide teaser" | ✅ Ready |

## Setup

- **deck-designer** is used in Claude Design with the correct **Ditto design system selected**. Exact type sizes, colors, spacing, and components come from that design system, not from attached files. The design system is set up once for the organization in Claude Design and applied automatically; without it active, output will not be on-brand. Provide image assets when relevant. Decks export as native, editable Canva objects.
- **brand-copywriting** is self-contained: the brand voice, vocabulary, mechanics, and LinkedIn playbook live in the skill. Real top-performing posts can be used later to sharpen the social register.
- **resource-writer** works from an article title (plus optional bucket, author, and key points). Give it real stats and internal links where you have them; it flags anything unverified with placeholders rather than inventing.

## Contributing

Add a new skill under `skills/<skill-name>/SKILL.md`. Keep the SKILL.md body under
~3,000 words and put long reference material in a `references/` subfolder. Then list
it in the table above.
