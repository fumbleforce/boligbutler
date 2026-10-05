---
name: BoligButler
description: Utstyr med rådgiver for hjemmeprosjekter fra Holmestrand til Tønsberg-området
colors:
  spruce: "#00652f"
  spruce-deep: "#004a22"
  spruce-tint: "#e4efe7"
  on-spruce: "#f4f8f5"
  on-spruce-muted: "#d2e7da"
  ink: "#15201a"
  ink-secondary: "#44524a"
  ink-tertiary: "#5f6d65"
  surface: "#ffffff"
  band: "#f3f5f4"
  line: "#dde3e0"
  line-strong: "#c5cfca"
  safety-ink: "#8a4300"
  safety-bg: "#fff5e8"
  safety-line: "#efc896"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 1.7rem + 2.3vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.45rem + 1.3vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.08rem + 0.35vw, 1.3rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(0.85rem, 0.83rem + 0.1vw, 0.9rem)"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  control: "8px"
  card: "12px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 0.6rem + 2vw, 2.5rem)"
  section: "clamp(3.5rem, 2.5rem + 4.5vw, 6.5rem)"
  section-tight: "clamp(2.5rem, 2rem + 3vw, 4.5rem)"
  container: "74rem"
  measure: "46rem"
components:
  button-primary:
    backgroundColor: "{colors.spruce}"
    textColor: "{colors.on-spruce}"
    rounded: "{rounded.control}"
    padding: "0.75em 1.35em"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.spruce-deep}"
    textColor: "{colors.surface}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.spruce}"
    rounded: "{rounded.control}"
  button-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.spruce}"
    rounded: "{rounded.control}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "3rem"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "1.4rem"
  card-hover:
    backgroundColor: "{colors.spruce-tint}"
  callout-safety:
    backgroundColor: "{colors.safety-bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
  callout-advice:
    backgroundColor: "{colors.spruce-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
---

# Design System: BoligButler

## Overview

**Creative North Star: "Den lokale fagmannen, gjort ordentlig"**

The category standard for a trusted Norwegian tradesperson site, played straight and finished with care. White pages, one spruce green that carries every action, real photographs of real people and equipment, and a visible phone number. Trust comes from plainness, specificity and local proof (the Vestfold map with the municipalities BoligButler serves, a named person), never from decoration.

Chosen by the owner on 2026-10-03 over two more expressive directions. Rejected: the warm-cream editorial look with a serif display and a clay accent (the first draft), and the high-vis yellow rental-counter look.

**Key Characteristics:**
- One brand colour (spruce) for actions, the top strip, the Vestfold section and the footer.
- Amber appears only for safety instruction.
- One typeface, Schibsted Grotesk, at two weights in practice (400 body, 650–700 headings and labels).
- Photo-led sections; every photo slot is a named file in `public/bilder/`.
- A working project starter (project + kommune) wherever a visitor might be ready to act.

## Colors

A restrained palette: neutrals tinted toward green, one committed brand colour, one functional warning colour.

### Primary
- **Spruce** (#00652f, matched to the logo's green): buttons, links, focus rings, the top strip, the Vestfold band, step numerals, check icons.
- **Spruce Deep** (#004a22): hover on primary actions; footer ground.
- **Spruce Tint** (#e4efe7): "Kort svar" boxes, advice callouts, the project-kit panel, card hover.

### Functional
- **Safety Amber** (#8a4300 on #fff5e8, line #efc896): only for "Instruksjon" callouts, the "Når du bør overlate det til fagfolk" box and the Instruksjon row. Never decorative.

### Neutral
- **Ink** (#15201a): body and headings.
- **Ink Secondary** (#44524a): lead paragraphs, descriptions.
- **Ink Tertiary** (#5f6d65): meta text, captions (≥4.5:1 on white).
- **Band** (#f3f5f4): alternating section ground and hero gradient start.
- **Line** (#dde3e0) / **Line Strong** (#c5cfca): card borders, table rules, input borders.

### Named Rules
**The One Green Rule.** Spruce is the only colour that means "do something". Do not introduce a second accent for CTAs.
**The Amber Means Danger Rule.** Amber is reserved for safety instruction. If it is not about injury, damage or misuse of equipment, it is not amber.

## Typography

**Font:** Schibsted Grotesk Variable (self-hosted via @fontsource), fallback system-ui.

**Character:** A Norwegian newspaper grotesk, familiar to local readers, sturdy and plain. No serif, no mono.

### Hierarchy
- **Display** (700, clamp 2.2–3.4rem, 1.12, -0.028em): page h1.
- **Headline** (700, clamp 1.75–2.4rem, 1.12): section h2. The Vestfold band uses the display size for its h2.
- **Title** (700, 1.15–1.3rem, 1.3): h3, card titles, starter heading.
- **Body** (400, 1–1.0625rem, 1.65; article prose 1.72): measure capped by `.narrow` (46rem).
- **Label** (600, 0.85–0.9rem): form labels, meta lines. Sentence case, never tracked uppercase.

### Named Rules
**The No Eyebrow Rule.** Headings stand alone. No small labels above headings.

## Layout

Centred container (`.wrap`, max 74rem, fluid gutter) and a reading column (`.narrow`, 46rem). Sections alternate white and band, with one green band (Vestfold) and a green CTA band before the footer. Section padding is fluid (`--section`, `--section-tight`). Two-column splits (copy + photo, content + sticky starter) collapse to one column under 900px; card grids step 4 → 2 → 1. Numbers are used only for real sequences (how-it-works steps).

## Elevation & Depth

Mostly flat with borders. Two soft shadows exist:
- **Raised** (`0 1px 2px rgb(21 32 26 / .06), 0 8px 24px -6px rgb(21 32 26 / .14)`): reserved; photos sit flat.
- **Floating** (`0 2px 4px rgb(21 32 26 / .08), 0 16px 32px -10px rgb(21 32 26 / .26)`): the project starter overlapping the hero photo, and the mobile menu.

### Named Rules
**The Border Or Shadow Rule.** A surface gets a 1px border or a shadow, not both. Hover on cards changes border colour and tint, not shadow.

## Shapes

8px radius on controls, photos and the starter panel; 12px on cards and panels; pills for chips. Icons are authored 24px line icons (1.75 stroke, round caps) in `src/components/Icon.astro`.

## Components

- **Logo**: the owner's logo (`public/logo.png`, hand holding a house with plants, green #006a34 and brown #925a42). The header uses the cropped emblem (`public/logo-emblem.webp`) beside the name set in Schibsted Grotesk; the full logo appears on the About page and as og:image. Favicons are generated from the emblem.

- **Project starter** (`ProjectStarter.astro`): GET form to `/kontakt/` with `prosjekt` and `kommune`; works without JavaScript. Floating shadow, no border.
- **Photo slot** (`Photo.astro`): uses `public/bilder/<name>.(webp|jpg|png)` when present, otherwise a clearly labelled placeholder naming the file to add.
- **Vestfold map** (`VestfoldMap.astro`): Kartverket municipality outlines (CC BY 4.0) with town markers; themable through `--map-*` custom properties (light on white, inverted on the green band).
- **Callouts** in guides: `> **Instruksjon:**` renders amber with a warning icon; `> **Råd:**` renders spruce tint with an info icon.
- **Cards** (guides, offer columns): white, 1px line, 12px radius; the "Alltid med" column gets a 2px spruce border.

## Do's and Don'ts

- Do show real people, equipment and places in Vestfold; add photos to `public/bilder/` with the names the placeholders give.
- Do keep the phone number visible in the top strip and next to every starter.
- Don't invent prices, reviews, customer counts or certifications.
- Don't add eyebrows, gradient text, offset block shadows or emoji icons.
- Don't use amber for anything but safety.
