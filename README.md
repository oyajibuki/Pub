# フィリピンパブ Design System

## Overview

This design system is for a **フィリピンパブ (Filipino Pub)** — a nightlife entertainment venue in Japan. The brand emphasizes a warm, home-like atmosphere (アットホーム), transparent pricing (明朗会計), a cast showcase, and a dance time schedule.

**Sources provided:**
- GitHub repo: `oyajibuki/Pub` (empty at time of design system creation)
- Company description: written brief (see above)

No photos were provided — the design system uses a no-photo approach, relying on color, typography, illustration placeholders, and layout to convey warmth and energy.

---

## Products / Surfaces

| Surface | Description |
|---|---|
| **Website** | Public-facing website with home, pricing, cast list, dance schedule |

UI kit: `ui_kits/website/`

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Warm and welcoming** — like being greeted by name at the door
- **Clear and honest** — pricing and schedules stated plainly, no hidden fees (明朗会計)
- **Slightly playful** — friendly banter, casual but not crude
- **Mix of Japanese and occasional English/Tagalog** — a multicultural, inclusive vibe

### Copywriting Style
- Uses **です/ます** polite Japanese throughout the web copy
- Headings use **kanji + hiragana** naturally; no excessive katakana for Japanese words
- English words romanized naturally (e.g. "CAST", "DANCE TIME", "SET PRICE")
- Prices written as `¥X,XXX`
- Times written as `XX:XX〜XX:XX`
- No emoji in formal headings; occasional ♪ or ★ in casual/promotional sections
- First-person is avoided; copy addresses the customer directly as お客様 or uses passive/imperative

### Examples
- `ご来店をお待ちしております 🌸` (footer / social warmth)
- `明朗会計でご安心ください` (pricing reassurance)
- `今夜も笑顔でお迎えします` (homepage tagline)
- `キャスト一覧 — 全員があなたの「おねえさん」です`

---

## VISUAL FOUNDATIONS

### Color
- **Background base:** Deep navy/plum `#120a1e` — nightclub depth without being cold
- **Surface:** Slightly lighter `#1e1230` for cards and panels
- **Primary accent:** Warm gold `#d4a030` — luxury, warmth, Filipino sun
- **Secondary accent:** Rose pink `#e8698a` — femininity, energy, fun
- **Tertiary:** Soft coral `#f0a07a` — warmth, approachability
- **Text primary:** Warm cream `#f5ede0`
- **Text muted:** `#b09aaa`
- **Dividers:** `rgba(212,160,48,0.25)`

### Typography
- **Display / headings:** Shippori Mincho (elegant Japanese serif, Google Fonts)
- **Body / UI:** Noto Sans JP (clean, legible, widely supported)
- **Accent numerals / prices:** Playfair Display (for ¥ prices — adds luxury feel)
- See `colors_and_type.css` for full token definitions

### Backgrounds
- Dark base with **subtle radial gradient** (plum center, deeper edges)
- **Gold shimmer dividers** — thin 1px lines with gold opacity
- **No full-bleed photos** (per brief); instead use illustrated silhouette shapes or color panels
- Occasional **soft pattern** (diamond/dot) at very low opacity for texture

### Animation
- **Fade-in on scroll** for cast cards (opacity 0→1, translateY 20px→0, 0.5s ease-out)
- **Hover on cast cards:** subtle gold border glow + slight scale(1.02)
- **Nav hover:** gold underline slide-in from left
- No aggressive bounces; subtle, elegant easing (`cubic-bezier(0.25, 0.46, 0.45, 0.94)`)

### Cards
- Background: `#1e1230` with `1px solid rgba(212,160,48,0.3)` border
- Border radius: `12px`
- Subtle inner glow: `box-shadow: inset 0 1px 0 rgba(212,160,48,0.15), 0 4px 24px rgba(0,0,0,0.4)`
- No harsh drop shadows; prefer inner glow + border

### Hover States
- Links: gold color transition `0.2s`
- Buttons: background lightens or gold outline appears
- Cast cards: border brightens to full gold opacity + scale(1.02)

### Press States
- Buttons: slight scale(0.97) + darken

### Borders & Radius
- Cards: `12px`
- Buttons: `8px`
- Tags/badges: `4px` or `999px` (pill)
- Dividers: `1px solid rgba(212,160,48,0.25)`

### Shadows
- Cards: `0 4px 24px rgba(0,0,0,0.5)`
- Glow accent: `0 0 20px rgba(212,160,48,0.2)`

### Imagery
- No photos provided; placeholders use gradient silhouettes in brand colors
- When photos added: warm toning (slight gold/amber grade), soft vignette edges
- Color vibe: **warm, golden hour, intimate**

### Iconography & Emoji
- Occasional ♪ ★ 🌸 in casual promo copy only
- UI icons: line-style (Lucide CDN)
- No icon font; SVG icons inline where needed

### Layout
- Max content width: `1100px`, centered
- Mobile-first responsive
- Navigation: fixed top with glass blur (`backdrop-filter: blur(12px)`)
- Section padding: `80px 24px` desktop, `48px 16px` mobile

---

## ICONOGRAPHY

- **Source:** No custom icon set provided
- **Substitution:** Lucide Icons via CDN (`https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`)
- **Style:** 1.5px stroke, rounded caps — matches the warm-but-clean aesthetic
- **Usage:** Clock (hours), Yen (pricing), Users (cast), Music (dance time), Phone (contact)
- **Emoji:** ♪ ★ 🌸 used sparingly in promotional copy, never in nav or UI chrome

Assets in `assets/`:
- (No logo provided — placeholder wordmark used in UI kit)

---

## File Index

| Path | Description |
|---|---|
| `README.md` | This file — brand overview and design guidelines |
| `SKILL.md` | Agent skill definition |
| `colors_and_type.css` | CSS custom properties for colors, type, spacing |
| `assets/` | Logos, icons, brand assets |
| `preview/` | Design system card HTML files |
| `ui_kits/website/` | Website UI kit (index.html + JSX components) |
