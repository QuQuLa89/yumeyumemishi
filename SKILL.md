---
name: yowa-design
description: Use this skill to generate well-branded interfaces and assets for 夜半 (Yowa) — a dark, nostalgic university circle (大学サークル) brand for new-member welcome (新歓) landing pages and related artifacts. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files. Pay particular attention to **CONTENT FUNDAMENTALS** (the voice is the brand) and **VISUAL FOUNDATIONS** in README.md before producing anything.

Key tokens live in `colors_and_type.css`. Logos and icons live in `assets/`. A full landing-page recreation lives in `ui_kits/lp/`.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always:
- Use `--ink-900` background, `--paper-50` foreground.
- Use Shippori Mincho for headlines, Zen Kaku Gothic New for body.
- Apply the SVG grain texture (`assets/textures/grain.svg`) at 6–8% opacity over every page.
- Use vermillion (`--shu-500`) sparingly for primary action only.
- Keep copy quiet, literary, no emoji, no exclamation marks.

If working on production code, copy assets into the project and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design (LP section, poster, social card, slide deck), ask a few questions about audience and tone, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
