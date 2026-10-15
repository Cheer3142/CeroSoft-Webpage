---
name: CeroSoft
description: Cinematic B2B product site where the real operation becomes a live digital twin. From Zero to Solution.
colors:
  cero-cyan: "#00adb5"
  cero-cyan-hover: "#22c4cc"
  charcoal: "#222831"
  charcoal-raised: "#2a3039"
  charcoal-deep: "#1d2229"
  hero-glow: "#2e3641"
  device-black: "#10141a"
  graphite: "#393e46"
  fog-light: "#f4f5f5"
  paper: "#ffffff"
  diagram-well: "#eef0f1"
  muted: "#5b616b"
  step-idle: "#7d838b"
  reveal-start: "#a2a8ae"
  line: "#e1e4e6"
  line-strong: "#c9cdd1"
  on-dark: "#eceef0"
  on-dark-heading: "#f3f4f5"
  on-dark-muted: "#a9afb6"
  on-dark-line: "rgba(236, 238, 240, 0.14)"
  danger: "#a43232"
  danger-on-dark: "#ff9d9d"
typography:
  display:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.1rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  display-th:
    fontFamily: "'Noto Sans Thai', 'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 5.2rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  display-phone:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 13vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  display-th-phone:
    fontFamily: "'Noto Sans Thai', 'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 10.5vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.2vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline-th:
    fontFamily: "'Noto Sans Thai', 'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 3.6vw, 3.2rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  figure:
    fontFamily: "'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 4.6vw, 3.8rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.035em"
    fontFeature: "'tnum'"
  title-lg:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 2.8vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  statement:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 2.1vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body-lead:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-th:
    fontFamily: "'Noto Sans Thai', 'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  control:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.2
  caption:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Geist Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.06em"
    fontFeature: "'tnum'"
  label-th:
    fontFamily: "'Noto Sans Thai', 'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
  marker:
    fontFamily: "'Geist Mono', ui-monospace, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  hairline: "2px"
  focus: "4px"
  chip: "6px"
  button: "8px"
  well: "10px"
  capsule: "12px"
  card: "14px"
  device-screen: "23px"
  device: "30px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  section: "clamp(96px, 11vw, 168px)"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  column-gap: "clamp(32px, 6vw, 96px)"
components:
  button-primary:
    backgroundColor: "{colors.cero-cyan}"
    textColor: "{colors.charcoal}"
    typography: "{typography.control}"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.cero-cyan-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.control}"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    typography: "{typography.control}"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.paper}"
  nav-capsule:
    backgroundColor: "rgba(58, 64, 72, 0.5)"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.capsule}"
    padding: "0 8px 0 14px"
    height: "52px"
  nav-capsule-solid:
    backgroundColor: "rgba(28, 33, 40, 0.92)"
  chip-cta:
    backgroundColor: "{colors.cero-cyan}"
    textColor: "{colors.charcoal}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "0 12px"
    height: "32px"
  chip-lang:
    backgroundColor: "rgba(255, 255, 255, 0.9)"
    textColor: "{colors.charcoal}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    height: "32px"
  tab-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.chip}"
    padding: "0 12px"
    height: "36px"
  tab-light-selected:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.paper}"
  tab-dark:
    backgroundColor: "rgba(255, 255, 255, 0.06)"
    textColor: "#cfd4d9"
    rounded: "{rounded.chip}"
    padding: "0 12px"
    height: "36px"
  tab-dark-selected:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.charcoal}"
  card-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.card}"
    padding: "clamp(24px, 3vw, 32px)"
  card-dark-notched:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.card}"
    padding: "clamp(28px, 3.5vw, 44px)"
  tag:
    backgroundColor: "{colors.diagram-well}"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "5px 9px"
  live-marker-label:
    backgroundColor: "rgba(21, 25, 32, 0.82)"
    textColor: "{colors.on-dark}"
    typography: "{typography.marker}"
    rounded: "{rounded.chip}"
    padding: "5px 9px"
  feature-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  input-line:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "0"
    padding: "8px 0"
---

# Design System: CeroSoft

## Overview

**Creative North Star: "The Live Twin"**

CeroSoft presents itself the way an operations product would, not the way a studio would: as a cinematic B2B product site in the grammar of Terminal Industries (user-pinned reference), translated into CeroSoft's own brand. The real operation becomes a digital twin. The hero is a full-bleed charcoal stage where a three.js wireframe of Punna Residence 5 draws itself from the ground up, slowly orbits, and lights cyan live markers at the rooms where CondoMate events happen. Everything that follows is product proof, not adjectives.

The page breathes in long alternating takes: charcoal cinematic grounds for the twin, services and the closing, and light fog-grey (#F4F5F5) sections for statements, calculators and the CondoMate walkthrough. The two grounds meet at a trapezoid notch, a shallow tab of the light ground that bites into the dark edge, so a section change reads as a cut rather than a stripe. Statements are set big, light and tight in Inter 400; Thai carries the same scale in Noto Sans Thai 500 so vowels and tone marks stay clear. Geist Mono appears only as small uppercase Latin data labels, the instrument readout of the world.

One accent does all the signalling. Cero Cyan marks the primary action, every live event, and the last letter of the typed hero headline. Nowhere else. Density is low; the light sections are mostly air with a few 14px cards; the dark panels carry one clipped corner as their signature. The previous drafting-sheet world ("The Drawing Set") and the generic dark-SaaS-cards template are both rejected.

**Key Characteristics:**
- Charcoal cinematic grounds alternating with fog-light statement sections, joined by trapezoid notches.
- A single accent, Cero Cyan, reserved for action, live events and the typed headline's last letter.
- Large, tight Inter 400 statements; Noto Sans Thai 500 for Thai; Geist Mono uppercase micro-labels for Latin data only.
- Floating capsule nav with a cyan call-to-action cell.
- 14px card radii; dark cards cut with one 26px clipped corner.
- A lazy-loaded wireframe digital twin with cyan live markers; reduced motion shows the finished frame.

## Colors

A near-monochrome charcoal-and-fog system with one cool cyan voice.

### Primary
- **Cero Cyan** (#00ADB5): the brand accent. Primary buttons and the nav "talk to us" cell, live-dot pulses and twin markers, filled range tracks, focus rings on dark grounds, text selection, the leading edge of the twin's draw-in, and the last letter of the hero headline. Text on cyan is always Charcoal, never white.
- **Cero Cyan Lift** (#22C4CC): hover state of cyan fills only.

### Neutral
- **Charcoal** (#222831): the cinematic ground (hero, services, footer, dark cards) and the ink colour on light grounds. One value, two roles.
- **Charcoal Raised** (#2A3039): top of the service panel gradient; a lifted dark surface.
- **Charcoal Deep** (#1D2229) and **Hero Glow** (#2E3641): the hero's radial vignette ends, darker at the edges and slightly lifted behind the twin.
- **Device Black** (#10141A): phone bezels around real CondoMate screens.
- **Graphite** (#393E46): secondary text on light, diagram strokes, scrollbar thumb.
- **Fog Light** (#F4F5F5): the light section ground and page background.
- **Paper** (#FFFFFF): light cards, tabs and pills that sit on Fog Light.
- **Diagram Well** (#EEF0F1): the inset well behind path diagrams and the tag fill.
- **Muted** (#5B616B): body copy and descriptions on light grounds.
- **Step Idle** (#7D838B): CondoMate step headings before they come into focus (large text only).
- **Reveal Start** (#A2A8AE): the transient start tint of the scroll-scrubbed statement reveal; never a resting text colour.
- **Line** (#E1E4E6) and **Line Strong** (#C9CDD1): card borders and dividers; Line Strong for list rules (process, FAQ).
- **On-Dark** (#ECEEF0), **On-Dark Heading** (#F3F4F5), **On-Dark Muted** (#A9AFB6), **On-Dark Line** (rgba(236,238,240,0.14)): text, headings, secondary text and hairlines on charcoal.
- **Danger** (#A43232) / **Danger on Dark** (#FF9D9D): form validation and send failure only.

### Named Rules
**The One Voice Rule.** Cero Cyan means "act here" or "this is live." It never fills a section, a card background or decorative ornament; if a cyan element is neither an action nor a live event (or the headline's last letter), it is wrong.

**The Charcoal Is Ink Rule.** The dark ground and the light-ground text are the same Charcoal. Do not introduce a second near-black.

## Typography

**Display Font:** Inter Variable (with Noto Sans Thai, system-ui fallback)
**Body Font:** Inter Variable for Latin; Noto Sans Thai for Thai (the site switches the whole stack under `lang="th"`)
**Label/Mono Font:** Geist Mono (with ui-monospace)

**Character:** Inter at large size, regular weight and tight negative tracking gives calm, expensive product statements; Noto Sans Thai takes over at weight 500 with almost no tracking and generous leading so Thai reads cleanly; Geist Mono is the quiet instrument voice for data.

### Hierarchy
- **Display** (400, clamp(3.1rem, 7vw, 6rem), 1.02, -0.04em): the typed hero headline only. Thai: 500, clamp(2.6rem, 6vw, 5.2rem), 1.25. On phones the hero drops to clamp(2.7rem, 13vw, 3.6rem) Latin and clamp(2.2rem, 10.5vw, 3rem) Thai.
- **Headline** (400, clamp(2.1rem, 4.2vw, 3.75rem), 1.08, -0.035em, balanced wrap): section titles. Thai: 500, clamp(1.85rem, 3.6vw, 3.2rem), 1.3.
- **Figure** (400, clamp(2.4rem, 4.6vw, 3.8rem), 1.1, tabular numerals): calculated results on dark cards.
- **Title Large** (400, clamp(1.7rem, 2.8vw, 2.5rem), 1.15, -0.03em): CondoMate step heads, service and console heads. Thai switches to 500 with 0 tracking.
- **Statement** (400, clamp(1.2rem, 2.1vw, 1.75rem), 1.5): the word-by-word reveal paragraph, max 34em. Thai: line-height 1.7, 0 tracking.
- **Title** (500, ~1.2 to 1.4rem, 1.3, -0.015em): card and stage headings.
- **Body** (400, 1rem, 1.6; Thai 1.75) and **Body Lead** (1.05rem): copy, held to 40 to 64ch.
- **Label** (Geist Mono 400, 0.72rem, 0.06em, uppercase, tabular): tags, stage numbers, panel counts, footer heads. In Thai, labels switch to Noto Sans Thai 0.8rem, no tracking, no case transform.

### Named Rules
**The Mono Is Latin Data Rule.** Geist Mono is used only for Latin data and UI chips: counts, numbers, short codes. Thai text is never set in mono and never uppercased or tracked.

**The Light Statement Rule.** Big Latin statements are weight 400 with negative tracking. Do not set Latin display or headline text bold.

**The Typed Last Letter Rule.** The hero headline types in grapheme by grapheme (Thai vowels and tone marks stay attached) and its last letter grapheme is Cero Cyan. No other headline carries a coloured letter.

## Layout

Single column of full-bleed sections. Content sits in a centred wrap of min(1240px, 100% - 2 × gutter) (narrow variant 980px), with a fluid gutter of clamp(16px, 4vw, 48px). Sections are separated by a section rhythm of clamp(96px, 11vw, 168px); consecutive light sections drop their top padding so the light ground runs continuously. Section heads are centred (max 860 to 980px) with a 60ch lead underneath.

Grids are simple: three path cards, a two-column calculator (form left, dark result right), a two-column CondoMate scroller (text blocks left, sticky dark product panel right), five process stages, a three-column about grid, and two-column FAQ and contact splits. Card gaps are 16px; column gaps in split layouts are clamp(32px, 6vw, 96px). The internal spacing rhythm steps 8 / 12 / 16 / 24 / 32 / 48px.

Responsive: at 1080px the nav links collapse into a menu toggle; at 1000px every split goes to one column, the sticky CondoMate panel is replaced by an inline phone under each step, and the hero scrim turns bottom-up; at 640px the nav CTA cell hides, hero buttons go full width, the notch shortens to 18px and the footer stacks. The hero twin moves from right-of-centre (wide) to the upper band (phone), where only the first marker shows its label.

## Elevation & Depth

Depth comes from ground changes and cinematic light, not from shadow stacks. Cards are flat with a 1px border on light ground; dark surfaces separate by tone (charcoal, charcoal raised) and hairlines. The hero gets depth from a radial glow behind the twin, a left-and-bottom scrim that protects the headline, and depth fog in the wireframe shader. The nav capsule floats with a translucent blur.

### Shadow Vocabulary
- **Device drop** (`box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.7)`): the phone bezel inside the dark CondoMate panel.
- **Console lift** (`box-shadow: 0 30px 60px -36px rgba(34, 40, 49, 0.45)`): the management-console screenshot frame on light ground.
- **Marker halo** (`box-shadow: 0 0 0 3px rgba(0, 173, 181, 0.25)`): ring around a live twin marker dot.
- **Thumb** (`box-shadow: 0 2px 6px rgba(34, 40, 49, 0.18)`): range slider thumb.

### Named Rules
**The Product Floats, Cards Don't Rule.** Only real product imagery (phone, console screenshot) casts a shadow. Text cards are flat.

## Shapes

Gently rounded and engineered. Cards are 14px; buttons 8px; chips, tabs, tags and marker labels 6px; the nav capsule and mobile menu 12px; diagram wells 10px; feature pills fully round. Dark cards (calculator result, CondoMate panel, contact form) keep their 14px radius on three corners and cut the top-right corner with a 26px diagonal clip, the system's signature silhouette. Section joins use a trapezoid notch: a centred tab min(520px, 64%) wide and 26px tall (18px on phones) with 5% sloped shoulders, coloured as the light ground, sitting on the dark section's top or bottom edge. Live dots and markers are circles with an expanding pulse ring.

## Components

### Buttons
Confident and quiet: solid, square-ish, with a trailing arrow that nudges 3px on hover.
- **Shape:** gently rounded (8px), 48px tall, 20px side padding, 600 weight at 0.95rem.
- **Primary:** Cero Cyan fill, Charcoal text; hover lifts to Cero Cyan Lift.
- **Ghost (on dark):** transparent, 1px rgba(255,255,255,0.32) border, white text; hover solid white border and a 6% white wash.
- **Outline (on light):** 1px Charcoal border and text; hover inverts to Charcoal fill, white text.
- **Focus:** 2px outline offset 3px, Charcoal on light, Cero Cyan on dark. Disabled drops to 60% opacity.

### Chips
- **Style:** 32px (36px as tabs), 6px radius, label type. The language chip is near-white on the capsule; the CTA chip is cyan.
- **Tabs:** on light, Paper with a Line border, selected inverts to Charcoal. On dark, a 6% white wash, selected becomes On-Dark with Charcoal text. Arrow keys move between tabs.
- **Tag:** Diagram Well fill, Graphite mono label, 5px 9px padding.
- **Feature pill:** fully round Paper pill with a Line border and a check icon.

### Cards / Containers
- **Corner Style:** 14px.
- **Light card:** Paper on Fog Light, 1px Line border, padding clamp(24px, 3vw, 32px). Path cards hold a diagram in a 10px Diagram Well.
- **Dark notched card:** Charcoal, On-Dark text, one 26px clipped top-right corner. Used for results, the product panel and the contact form.
- **Service panel:** Charcoal Raised to Charcoal gradient with an On-Dark Line border, two columns of statement and checklist.
- **Shadow Strategy:** flat; see Elevation.

### Inputs / Fields
- **Style:** underline-only on the dark contact card: transparent field, 1px rgba(236,238,240,0.28) bottom rule, no radius, white text, cyan caret. Labels sit above in 0.82rem On-Dark Muted.
- **Focus:** the bottom rule turns Cero Cyan.
- **Error:** invalid fields after interaction get a Danger on Dark rule; the status line carries an icon plus message.
- **Range:** 4px track filled cyan up to the value, Line beyond; white 20px thumb with a 2px Charcoal ring.

### Navigation
A floating capsule fixed 14px from the top, max 1080px wide, 52px tall, 12px radius, translucent graphite (rgba(58,64,72,0.5)) with a 16px backdrop blur and a 10% white hairline. It turns solid (rgba(28,33,40,0.92)) once the hero has scrolled away. Brand mark left; centred 0.875rem links with a 6px hover wash; a language chip and the cyan talk cell right. Below 1080px a menu toggle opens a solid dark sheet of full-width rows, the last row in cyan.

### Digital Twin (signature)
A lazy-loaded three.js wireframe of Punna Residence 5 (lobby plus six floors) fills the hero right of centre. Lines are light grey (#E6E8EA) with depth fog; the building draws upward over about 2.8s with a cyan leading edge, then orbits slowly, dollies with scroll and leans slightly with the pointer. After draw-in, cyan live markers (dot, pulse ring, mono label in a dark 6px chip with a cyan hairline) appear one by one at the rooms where events happen. Labels flip left near the right edge; on phones only the top-band markers show, and only the first keeps its label. With reduced motion the twin renders a single finished frame with markers on. Without WebGL a soft cyan radial glow stands in.

On desktop (1000px and up) a second, smaller twin returns inside the sticky CondoMate panel, left of the phone and above the cyan labels, under a mono "Punna Residence 5" label. Its markers are dots only: the one where the current screen happens is cyan with its pulse (repairs and my room: room 715; booking: the pool deck; finance: the east-wing office), the rest are neutral grey, and the view leans a third of the way towards it. On the resident home screen every marker is lit and the wireframe tints towards cyan. It draws in the first time the panel comes on screen, renders only while visible, and follows the same reduced-motion and no-WebGL rules. Below 1000px it is not mounted.

### CondoMate Scroller (signature)
Left: tall text blocks whose headings sit in Step Idle grey and turn Charcoal as each block crosses the viewport centre. Right: a sticky dark notched panel holding a phone bezel whose real screen wipes in top-down per block, with cyan callout chips bottom-left and a mono "01 / 05" count top-right.

### Motion
Lenis smooth scroll; ease cubic-bezier(0.16, 1, 0.3, 1) (expo out) for every transition. Hero headline types in per grapheme (45ms stagger), copy rises 24px after it. The statement paragraph scrubs word by word from Reveal Start to Charcoal. Cards settle 36px upward on entry and are never hidden. Reduced motion disables smooth scroll, typing, reveals and pulses.

## Do's and Don'ts

### Do:
- **Do** alternate charcoal (#222831) and fog-light (#F4F5F5) grounds and join them with the trapezoid notch.
- **Do** keep Cero Cyan (#00ADB5) to primary actions, live events and the hero headline's last letter, with Charcoal text on it.
- **Do** set Latin statements in Inter 400 with negative tracking, and Thai headings in Noto Sans Thai 500 with near-zero tracking and at least 1.25 line height.
- **Do** use Geist Mono uppercase (0.72rem, 0.06em) only for Latin data labels; switch to Noto Sans Thai, no case, no tracking, in Thai.
- **Do** give light cards a 14px radius and a 1px Line border; give dark cards the single 26px clipped corner.
- **Do** show real CondoMate screens and the wireframe twin as proof; give every animation a reduced-motion state that shows the finished result.

### Don't:
- **Don't** use cyan as a section fill, card background, gradient or decoration.
- **Don't** set Thai in mono, uppercase or tracked type.
- **Don't** bold Latin display or headline text.
- **Don't** add shadows to text cards; only product imagery floats.
- **Don't** return to the drafting-sheet look of the rejected "Drawing Set" world (title blocks, sheet borders, dimension lines) or to a generic grid of glowing dark SaaS cards.
- **Don't** use stock photography; illustrate with real UI, the twin, or simple system diagrams.
- **Don't** leave Reveal Start grey (#A2A8AE) as resting text; it is a scroll transition start only.
