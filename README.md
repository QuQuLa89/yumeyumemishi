# 夜半 — Yowa Design System

> 大学サークル「夜半」新歓イベント用ランディングページのためのデザインシステム

A dark, nostalgic design system for **Yowa (夜半)** — a fictional university literature & photography circle (文芸・写真サークル). Built for a 新歓 (shinkan, new-member welcome) landing page, where the goal is to draw curious first-years into a quiet, atmospheric corner of campus life rather than shout at them with bright recruitment graphics.

The name **夜半** means "midnight." The system is built around that hour: half-lit corridors, the buzz of a vending machine on an empty walkway, the warm window of a 喫茶店 still open at 1am, the grain of a developed photo not quite dry yet.

## Sources

This system was built from a brief alone — no codebase, no Figma, no screenshots provided.

- **Brief (Japanese):** "大学サークルLP案: 大学サークルの新歓イベント用LPを、ダークでノスタルジックに作って"
- **Translation:** Make a landing page proposal for a university circle's new-member welcome event, dark and nostalgic.
- **Brand & content:** invented for this system. Treat all club details (founding year, member count, event dates, member quotes, blog excerpts) as placeholder copy that the user should replace with real circle content.

## Index

```
夜半-design-system/
├── README.md                    ← you are here
├── SKILL.md                     ← agent skill manifest
├── colors_and_type.css          ← all design tokens (CSS vars)
├── fonts/                       ← (Google Fonts via @import; no local files yet)
├── assets/
│   ├── logos/                   ← 夜半 wordmarks
│   ├── icons/                   ← line-art SVG iconset
│   └── textures/                ← grain, scanline, paper SVGs
├── preview/                     ← design system cards (registered for review)
│   ├── colors-*.html
│   ├── type-*.html
│   ├── spacing-*.html
│   ├── components-*.html
│   └── brand-*.html
└── ui_kits/
    └── lp/                      ← landing page UI kit
        ├── README.md
        ├── index.html
        └── *.jsx
```

---

## CONTENT FUNDAMENTALS

Copy is the most important component of this brand. The voice should feel like a personal blog post written at 2am, not a recruitment flyer.

### Voice & Tone
- **Quiet, confiding, slightly literary.** Like a 文芸誌 zine or a thoughtful 個人サイト of the late-90s/early-00s Japanese web.
- **Avoid hype.** No "今すぐ参加！" exclamation-mark recruitment energy. Replace with statements: "—静かに始めます。"
- **Show, don't sell.** Describe what a Tuesday night at the clubroom actually feels like, not "great community! amazing memories!"

### Person & address
- The narrator uses **第一人称複数** (we / 私たち) sparingly. More often, no subject — the implied "we" of a small group.
- Address the reader as **あなた** in literary moments, **きみ** in warmer ones, never **皆さん** (too institutional).
- English mixed in is OK — band names, film titles, technical terms — but never as decoration.

### Casing & typography conventions
- **Japanese primary**, English secondary. Mincho (明朝) for headings and key statements; Gothic (ゴシック) for body.
- Use **half-width Latin** inside Japanese paragraphs (no full-width Roman letters).
- **Numerals are Western** in body copy (2025年4月12日), but **dates and times in headings can use kanji numerals** (令和七年 四月十二日) for atmospheric effect.
- 句読点 (、。) over Western punctuation.
- **Emoji: never.** ASCII emoticons like `(...)` and `—` and `…` are fine and encouraged.
- **Em-dash「—」、三点リーダ「…」** are core punctuation. They carry the silence.

### Vibe specifics — DO
- "深夜、誰もいない部室で、フィルムを巻き戻す音だけがしている。"
- "新歓と書いて、あたらしいひと、と読みます。"
- "来てもいいし、来なくてもいい。ただ、灯りはつけておきます。"
- Dates as: `04.12 — 04.20 / TUE → SUN`
- Section labels in mono: `01 / 序`, `02 / 部室`, `03 / 新歓`

### Vibe specifics — DON'T
- ❌ "サークル夜半へようこそ！🌙✨" (no emoji, no exclamation)
- ❌ "私たちは最高のサークルです" (no superlatives)
- ❌ "Click here to join!" (no CTA-speak; use 静かに「扉を開ける」)
- ❌ Stock corporate phrases like "活動内容" — prefer "なにをしているか" or just describe.

### Microcopy library
| Generic | Yowa version |
|---|---|
| Sign up | 名簿に名前を書く |
| Learn more | もうすこし読む |
| Join now | 扉を開ける |
| Contact | 手紙を書く |
| Members | 居る人 |
| Activities | していること |
| Events | あつまり |
| About | 夜半について |
| FAQ | よくある問い |

---

## VISUAL FOUNDATIONS

### Mood
Half-lit. Warm-toned darkness. The system is built for a single primary background: deep blue-black ink, never pure `#000`. All warmth comes from cream/paper foreground, vermillion (朱) accents, and dull gold (鈍金) for emphasis.

### Color
- **One background family** (ink) — never switches to light mode. Light mode would betray the brand.
- **One foreground family** (paper) — warm cream, slightly aged.
- **Three accent families:** 朱 (vermillion, primary action), 群青 (deep blue, links/info, used rarely), 鈍金 (dull gold, dates and emphasis).
- Imagery is **warm-monochrome** by default — sepia, faded, with film grain. Color photos are desaturated 30–40% before use. Pure b&w is fine. Cool/blue imagery is forbidden.

### Type
- **Mincho (Shippori Mincho)** for display, headings, key literary statements. This is the brand voice.
- **Gothic (Zen Kaku Gothic New)** for body, UI, navigation.
- **Zen Kurenaido** — handwritten mincho — for marginalia, captions, member quotes. Like a note in a notebook margin.
- **DotGothic16** — pixel font — for tiny accent labels, timestamps, retro touches. Used sparingly.
- **JetBrains Mono** for technical content, eyebrows, section numbers.
- Letter-spacing on Japanese headings is generous (`0.06em`–`0.4em`) — kanji breathe.

### Spacing & Layout
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px. No 5px or 10px.
- Layouts favor **wide outer margins**, ample line height (1.85 body), and asymmetric placement — never centered-everything.
- **Vertical writing (縦書き)** is used for select section dividers and pull quotes — adds atmosphere.
- Grids are loose; alignment lines are visible (1px hairlines in `--border-faint`).

### Backgrounds & Texture
- Base: `--ink-900` (`#0a0d12`).
- **Always grain.** A 6%-opacity SVG noise overlay sits on top of every page (`assets/textures/grain.svg`). Removable but rarely.
- **Optional scanline** (4% opacity) for hero sections — evokes CRT / VHS.
- **Optional washi paper texture** at panel boundaries — barely visible, only as edges.
- No gradients except: a single radial vignette around hero imagery (warm center, dark edges).
- Full-bleed photography is used at section transitions; never as decoration.

### Animation & Motion
- **Slow, deliberate.** Default duration 240ms; "slow" is 480ms. No spring bounces.
- Easing is `cubic-bezier(0.22, 0.61, 0.36, 1)` (ease-out) — things settle, don't snap.
- **Fades dominate** over slides. Letters can fade in one-by-one (`stagger 30ms`) for hero copy.
- **Film flicker** loop on the logo — a 4-frame opacity wobble, 8s cycle. Subtle.
- Reduced-motion: replace flicker with static, keep fades but cut them to 80ms.

### Hover & Press
- **Hover (links/text):** color shifts from cream to `--shu-300` (vermillion highlight). Underline thickens slightly.
- **Hover (cards):** border brightens from `--ink-600` to `--ink-500`; a faint inner top-line appears (`inset 0 1px 0 rgba(cream, 0.06)`).
- **Hover (buttons):** background fills from transparent to `--shu-500`; foreground stays cream.
- **Press:** scale 0.98, no color change.
- **Focus ring:** 1px outline in `--shu-300`, offset 2px. Never the browser default.

### Borders
- 1px hairlines, color `--border` (deep ink) or `--border-faint` (cream-on-ink at 8%).
- Corners are nearly square: `--r-md = 4px` is the maximum default. Pill (`--r-pill`) only for tag-like elements.
- A signature treatment: **a single hairline frame** around hero images — thin cream line offset 8px from the photo edge. Like a mat board.

### Shadows / Elevation
- Avoided. Brand reads better on flat ink than with floating panels.
- When elevation is needed: `--shadow-2` (a soft drop + a 1px inner top-line for "lit edge"). Never colored shadows except `--shadow-glow-shu` for the primary CTA at hover.

### Cards
- Background: `--bg-elev` (1 step above page).
- Border: 1px `--border-faint`.
- No drop shadow by default; just the inset top-line.
- Padding: 24px–32px. Never tight.
- Corner radius: 4px max, often 0.

### Transparency & Blur
- Modals and overlays use `rgba(10,13,18, 0.72)` + 8px backdrop blur. Header on scroll: same.
- Otherwise, transparency is used **only for the grain texture and the vignette**. Glassmorphism is forbidden — too modern, breaks the period vibe.

### Imagery rules
- **Photography style:** 35mm film, ISO 400+ visible grain, slight vignetting, warm white balance, shadows lifted slightly (no crushed blacks). Subjects: empty stairwells, vending machines at night, hands holding objects, distant figures, café interiors, books on desks. **People's faces obscured** (back of head, blur, motion) — preserves anonymity and atmosphere.
- **No stock photography.** Placeholder rectangles with `--ink-700` fill and a film-frame border (`8 perforations top + bottom`) until real photos exist.
- **No illustrations of people.** Line illustrations of objects (cassette, lamp, key, window) are OK — single-stroke, cream on ink.

### Layout signatures
- **Section number + name:** `01 / 序` left-aligned, mono, in `--fg-faint`. Always at the top of every section.
- **Date stamps:** `2026.04.12  TUE  19:00 —` mono, gold accent, kerned `0.16em`.
- **Tategaki dividers:** a vertical kanji string runs down the right edge of major sections (e.g., `新歓のしらせ`).
- **Hairline + dot:** `————•————` separator between paragraphs in long-form copy.

---

## ICONOGRAPHY

The brand's icon system is **custom 1-stroke line illustrations**, not a generic UI iconset.

- **Style:** 1.25px stroke, cream (`--paper-100`) on ink. No fill. Rounded line caps. 24×24px viewbox by default; 16×16 micro variants for inline.
- **Subjects favored:** physical objects from a clubroom — `lamp`, `cassette`, `key`, `door`, `window`, `book`, `letter`, `match`, `film-canister`, `tape-reel`. Avoid generic UI metaphors (no chevrons-as-arrows, no hamburger menu).
- **UI necessities (arrow, close, menu):** included but drawn in the same hairline style — long, drawn-out, slightly imperfect.
- **Emoji:** never used.
- **Unicode glyphs:** OK as typographic ornaments — `※` `〇` `◯` `●` `〇` `◇` `▷` `—` `…` `「」` `『』` `※`. Used in copy, not as icon replacements.
- **Logos:** the wordmark `夜半` is set in Shippori Mincho ExtraBold with a custom hairline frame. A square-format mark (`夜` alone) exists for avatars/favicons.
- Icons live in `assets/icons/`. Logos in `assets/logos/`. Textures (grain, scanline, paper) in `assets/textures/`.

**Substitution flag:** None. Icons are drawn in-house in this system. If a UI need arises that isn't covered, draw a new one in the same hairline style rather than importing Lucide/Heroicons — those would break the period vibe.

---

## ⚠️ Substitutions & flags

- **Fonts:** No local font files were provided. All typefaces are loaded from **Google Fonts** (Shippori Mincho, Zen Kaku Gothic New, Zen Kurenaido, DotGothic16, JetBrains Mono). If you have licensed weights of e.g. **A1明朝**, **筑紫A丸ゴシック**, or **游明朝体**, those would be more authentic — please provide and we'll swap.
- **Imagery:** All photo placeholders. Real 新歓 photographs (from previous years' events, the clubroom, members in profile) would dramatically improve the LP. Until then we use film-frame placeholder boxes.
- **Brand details invented:** circle name (夜半), founding year, member quotes, event dates, location ("人文学部棟 3F 308号室"). Replace with real circle data.

---

## How to use this system

1. Load `colors_and_type.css` — every token is a CSS variable.
2. Use the UI kit at `ui_kits/lp/` as reference for sections (hero, schedule, members, FAQ, footer).
3. Read the **CONTENT FUNDAMENTALS** above before writing any copy.
4. Read **VISUAL FOUNDATIONS** before adding any new component.
5. When in doubt: less ornament, more silence.

> 「夜半に、ひとり、ふたり、灯りをつけにくる。」
