# Ditto Internal Plugin Marketplace

Our internal marketplace of Claude plugins for the Ditto team.

## Install

### In the Claude desktop app (Cowork)

1. Open **Customize** (top-left of the app).
2. Next to **Personal plugins**, click the **+** button.
3. Choose **Create plugin → Add marketplace**.
4. Paste the marketplace URL and confirm:

   ```
   https://github.com/beavrtech/ditto-internal-plugin-marketplace
   ```

5. Once the marketplace is added, open it and install **ditto-brand**.

### In Claude Code (CLI)

```
/plugin marketplace add https://github.com/beavrtech/ditto-internal-plugin-marketplace
/plugin install ditto-brand@ditto-internal
```

## Plugins

| Plugin | What it does |
|--------|--------------|
| [`ditto-brand`](./plugins/ditto-brand) | The full Ditto design system plus on-brand UI design (`ditto-design`), deck design (`deck-designer`), brand-guideline copywriting (`brand-copywriting`), and long-form resource writing (`resource-writer`). |
| [`ditto-content`](./plugins/ditto-content) | Content skills: LinkedIn posts, the weekly « 10 actus RSE » review, lead magnet launches, the newsletter. Voice comes from `ditto-brand`. |

## Repository layout

```
.claude-plugin/
  marketplace.json          # marketplace manifest, lists every plugin
plugins/
  ditto-brand/
    .claude-plugin/plugin.json
    README.md
    skills/
      ditto-design/        # full design system (tokens, fonts, assets, ui_kits, slides) + SKILL.md
      deck-designer/SKILL.md
      brand-copywriting/SKILL.md
      resource-writer/SKILL.md
```

## Adding a plugin

1. Create `plugins/<name>/` with `.claude-plugin/plugin.json` and a `README.md`.
2. Add skills under `plugins/<name>/skills/<skill-name>/SKILL.md`.
3. Register the plugin in `.claude-plugin/marketplace.json`.
