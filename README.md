# Ditto Internal Plugin Marketplace

Our internal marketplace of Claude plugins for the Ditto team.

## Install

Add this marketplace, then install the plugins you want:

```
/plugin marketplace add <this-repo-url>
/plugin install ditto-brand@ditto-internal
```

## Plugins

| Plugin | What it does |
|--------|--------------|
| [`ditto-brand`](./plugins/ditto-brand) | On-brand deck design (`deck-designer`) and brand-guideline copywriting (`brand-copywriting`, placeholder). |

## Repository layout

```
.claude-plugin/
  marketplace.json          # marketplace manifest, lists every plugin
plugins/
  ditto-brand/
    .claude-plugin/plugin.json
    README.md
    skills/
      deck-designer/SKILL.md
      brand-copywriting/SKILL.md
```

## Adding a plugin

1. Create `plugins/<name>/` with `.claude-plugin/plugin.json` and a `README.md`.
2. Add skills under `plugins/<name>/skills/<skill-name>/SKILL.md`.
3. Register the plugin in `.claude-plugin/marketplace.json`.
