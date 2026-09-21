# The Loving Life Foundation of Zach Matla — Design System

> *"Life is what you make it."* — Zach Matla

A design system for the Loving Life Foundation, a 501(c)(3) nonprofit in Elma, NY, honoring Zach Matla and rooted in the Iroquois Central community. The foundation carries forward Zach's legacy through the **Zach Matla Memorial Scholarship**, an annual **Golf Tournament**, and community gatherings.

This is a **branding + reusable-primitives system** — colors, type, logos, a handful of UI components, and one proposed website UI kit. It deliberately does **not** contain the foundation's operational materials (finance trackers, board minutes, year-specific event flyers, merch orders, legal filings). Those live in the foundation's own Drive folder and should stay there; pull assets *into* new projects that link this system, rather than growing this system to hold them.

Two emotional registers run through everything:
1. **Memorial / formal** — scholarship, memorials, annual reports. Navy, serif, white space, library imagery.
2. **Community / celebratory** — golf tournament, group events, fundraising. Orange + neon green, condensed uppercase, warm snapshot photography.

## Sources

- Local folder `06_Zach-Matla-LovingLife-Foundation/05_Marketing & Brand/` — Brand Guidelines.html, Brand Reference Guide.docx, an existing `Design System/` folder (colors_and_type.css, preview cards, a website UI kit) built in a prior session, `Logos/` (14 colorway PNGs), `Photos/` (community events, golf tournament, EMW field dedication), `Social Media Graphics/`.
- No Figma file, GitHub repo, or live website was provided. The website UI kit here is a **proposed direction**, not a copy of an existing product.
- Font files were not provided; type uses Google Fonts substitutes (see Caveats).

## Index

| Path | What's in it |
|---|---|
| `readme.md` | This document |
| `styles.css` | Root stylesheet — `@import`s only; link this one file from any consumer |
| `tokens/` | Custom-property token files: colors, typography, spacing, effects (radii/shadows/motion), layout |
| `src/styles/elements.css` | Semantic element styles (h1–h4, p, blockquote, links, code) built on the tokens |
| `public/assets/logos/` | 14 logo colorway PNGs |
| `public/assets/photos/` | Curated generic photography (community events, golf tournament, EMW field, scholarship hero) |
| `components/core/` | Button, Badge, Card, PhotoCard |
| `components/forms/` | Field (input/textarea) |
| `guidelines/` | Foundation specimen cards (colors, type, spacing, radii, shadows, logo, imagery, tagline, iconography) |
| `index.html` + `src/` | Click-through public website (Home, Scholarship, Tournament, Story, Donate) |
| `SKILL.md` | Agent-skill definition, portable to Claude Code |

## Components

- **Button** — `primary`, `accent`, `donate`, `ghost`, `link` variants; disabled state.
- **Badge** — condensed-uppercase pill tag, brand colorways, optional live-dot.
- **Card** / **PhotoCard** — text content card and a "framed print" photo card.
- **Field** — labeled input/textarea with focus ring and error/help state.

### Intentional additions
No component library (Figma or code) was provided, so this is a from-scratch, brand-sized set — not a copy of an existing inventory. Kept deliberately small: the foundation's real surface area is graphics and a handful of forms (donate, register, contact), not a product UI. Add primitives only as new consuming projects actually need them.

## CONTENT FUNDAMENTALS

**Voice.** Warm, personal, sincere — like a family friend. Familiar but not casual; celebratory but never flip. Memorials are grounded and specific; event promotion is energetic and plainspoken.

**Tone spectrum**
- *Tender* (scholarship, memorial, anniversaries): "Honoring Zach's life and legacy.", "Carrying his light forward."
- *Rallying* (golf tournament, fundraising, volunteering): "Grab your clubs. Grab your friends. Let's do this for Zach."
- *Grateful* (thank-yous, donor recognition): "Thank you for showing up. Again. Every year."

**Person.** "We" (the foundation/family/community) + "you" (the reader/donor/volunteer). Never corporate "the organization." First names welcome — "Zach," not "Mr. Matla."

**Casing.**
- Event headlines & posters → `ALL CAPS CONDENSED` (Oswald) — e.g. `THE LOVING LIFE FOUNDATION GOLF TOURNAMENT`
- Section/page titles → `Title Case` in display serif — e.g. `Zach Matla Memorial Scholarship`
- Body → sentence case
- The tagline → `LIFE IS WHAT YOU MAKE IT` (all caps, tracked wide — lives on the logo ring)
- The foundation name → `The Loving Life Foundation` (article always included; "of Zach Matla" in formal/legal contexts)

**Emoji.** Avoid in formal contexts (scholarship, memorial). Sparingly OK in social captions (a single 💚 or ⛳️ at the end). Never in headers or branded graphics.

**Copy examples.**
- ✅ "The Zach Matla Memorial Scholarship — Empowering Future Leaders."
- ✅ "Every swing supports a kid headed to college."
- ❌ "Unlock your philanthropic potential today!" — too corporate
- ❌ "OMG golf szn!! 🏌️‍♂️🔥" — too flip for a memorial org

## VISUAL FOUNDATIONS

**Color.** Two palettes, one brand. Memorial: deep navy `#1A2A49`, black `#111`, cream paper `#FBF8F1`, warm stone neutrals — for scholarship, formal letters, anniversaries. Community: orange `#F26B1F` (jersey), neon green `#5DD90A` (tutu), sky blue `#2FA7E0` (tourney flag), grass green `#3E8E41` — for tournament, events, social. Navy + orange anchor both palettes and can appear together (orange as accent on navy). Neon green stays reserved for community moments — a reward, not a default.

**Typography.** Display serif Playfair Display (memorial, scholarship, sincere headlines) · condensed sans Oswald, uppercase (event posters, tournament art, photo overlays) · body sans Inter (running text, UI, captions).

**Spacing.** 8px base grid (`--sp-2`=8px) scaling through 12/16/24/32/48/64/96/128. Posters use generous negative space around the logo.

**Backgrounds.** Cream/paper for memorial pages — matte, warm, photo-print feel. Full-bleed photography for event pages/tournament comms, with text set directly over it in white with a black stroke. Solid navy for inverse sections (footer, donation CTAs). No gradients, no patterns, no hand-drawn illustrations anywhere in the source material.

**Animation.** Minimal — the brand is about people and memory, not motion. Fades at 220ms ease-out; a subtle 1.0→1.03 photo zoom on gallery-tile hover. Never bounces, spring overshoots, parallax, or gradient shimmer.

**Hover states.** Links: navy → orange. Buttons: darken the fill one notch (navy → navy-deep; orange → orange-warm). Photos: 1.03x zoom + subtle caption fade-in. Logo: no hover — it's a memorial mark, left alone.

**Press states.** Buttons scale to 97% + slightly darker fill. No color flash, no ripple.

**Borders.** 1px `--border` for cards/dividers. A 3px orange left-border is reserved for quotes/blockquotes only — never as a general card motif (it would cheapen the memorial tone).

**Shadows.** Warm-tinted (navy hue, low opacity), not neutral gray. `--shadow-photo` mimics a printed photo resting on paper.

**Cards.** White surface on cream background, 1px border + `--shadow-sm` at rest, `--radius-lg` (14px) — soft but not playful. Photo cards: `--radius-md` + `--shadow-photo` + an 8px white inner matte, like a framed print.

**Corner radii.** Mid-round everything: `--radius-md` (8px) buttons, `--radius-lg` (14px) cards, `--radius-pill` tags/badges. Never square, never highly rounded.

**Transparency/blur.** Used in exactly one place in the source material: the scholarship hero overlays the logo at ~85% opacity over a blurred library photo. No glass/blur chrome on UI surfaces — too modern-tech for a memorial org.

**Imagery color vibe.** Memorial imagery: warm, slightly desaturated, golden-hour library/academic interiors. Event imagery: high-contrast outdoor photography, golden-hour fairways, sunset skies. Community snapshots: candid, slightly imperfect phone photos — do not over-retouch; the joy of orange jerseys + neon tutus is the point.

**Fixed layout rules.** Logo top-left in nav; stamped in a photo corner (usually top-right) on event art. Tagline lives on the logo ring — don't set it separately except as an explicit pull-quote. Never place the logo over a busy photo area.

## ICONOGRAPHY

The foundation's visual language is photography + typography + the Z mark — not a UI icon system.
- No built-in icon font in the source material.
- One bespoke symbolic mark exists: a grad cap with a sapling on the scholarship graphic (education + growth). Preserve it as a unique mark; don't generalize it into an icon set.
- Emoji: avoid in brand graphics; sparingly OK in social captions (💚 ⛳️ 🎓).
- **Flagged substitution:** [Lucide](https://lucide.dev) (CDN, stroke-based, 1.5px) stands in for UI iconography needs (calendar, map-pin, users, etc. in the website kit). This is a stand-in, not a native system — flag it if a different icon flavor is wanted.

## Caveats

- **Font substitution flagged.** No original type files were provided. Playfair Display, Oswald, and Inter (all Google Fonts) stand in for the foundation's actual poster/scholarship type. Please share TTFs if the foundation has them, and we'll swap.
- Color hexes are sampled from uploaded logo/photo files, not official print specs — the foundation may have CMYK/Pantone specs that differ slightly.
- No website, app, or Figma was provided — the site is a proposed direction grounded in real brand artifacts, not a copy of a live product.
- `--font-mono` (JetBrains Mono, used sparingly for captions/dates) has no bundled font file — it falls back to the system mono stack until a file is supplied.
- The scholarship hero's cap-and-sapling icon is preserved referentially in one image; if a vector original exists, share it and we'll use it directly instead.

**Ask:** does the foundation have official brand fonts (TTF/OTF), CMYK/Pantone color specs, or a vector version of the cap-and-sapling mark? Sharing any of those would let this system move from "inferred from photos" to "true to spec." Also flag if the website UI kit's direction feels off — it's a proposal, not a fait accompli.
