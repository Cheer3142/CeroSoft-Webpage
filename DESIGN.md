---
name: CeroSoft
description: The Drawing Set. A bilingual (Thai-first) studio site drawn as a numbered construction drawing set, where line form carries state.
colors:
  cero-cyan: "#00adb5"
  drafting-film: "#eeeeee"
  sheet-white: "#ffffff"
  charcoal-ink: "#222831"
  graphite: "#393e46"
  pencil-muted: "#575d66"
  rule: "rgba(34, 40, 49, 0.16)"
  rule-strong: "rgba(34, 40, 49, 0.42)"
  grid-minor: "rgba(34, 40, 49, 0.045)"
  grid-major: "rgba(34, 40, 49, 0.075)"
  redline: "#a43232"
  night-print-fg: "#eeeeee"
  night-print-muted: "#a9aeb5"
  night-print-rule: "rgba(238, 238, 238, 0.16)"
  night-print-rule-strong: "rgba(238, 238, 238, 0.4)"
  device-black: "#11161c"
typography:
  display:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7.2vw, 6rem)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  display-th:
    fontFamily: "'Noto Sans Thai', 'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 5.4vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 1.24
    letterSpacing: "-0.012em"
  display-product:
    fontFamily: "'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 9vw, 6rem)"
    fontWeight: 650
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4.3vw, 3.9rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline-th:
    fontFamily: "'Noto Sans Thai', 'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title-large:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.06rem, 1.35vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'cv11', 'ss01'"
  body-th:
    fontFamily: "'Noto Sans Thai', 'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  body-small:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.5
  ui:
    fontFamily: "'Inter Variable', 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  label:
    fontFamily: "'Geist Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
  label-large:
    fontFamily: "'Geist Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.4
  label-small:
    fontFamily: "'Geist Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  screen: "23px"
  thumb: "18px"
  device: "30px"
  node: "50%"
spacing:
  hairline: "1px"
  line: "1.5px"
  cell-x: "18px"
  band-cell: "10px 14px"
  gutter: "clamp(16px, 4vw, 48px)"
  nav-h: "64px"
  sheet: "clamp(72px, 9vw, 136px)"
  frame-max: "1360px"
components:
  button-cell-cta:
    backgroundColor: "{colors.cero-cyan}"
    textColor: "{colors.charcoal-ink}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "52px"
  button-cell-cta-hover:
    backgroundColor: "{colors.charcoal-ink}"
    textColor: "{colors.cero-cyan}"
  button-cell-cta-disabled:
    backgroundColor: "{colors.drafting-film}"
    textColor: "{colors.pencil-muted}"
  button-cell-cta-nav:
    backgroundColor: "{colors.cero-cyan}"
    textColor: "{colors.charcoal-ink}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "40px"
  link-ink:
    textColor: "{colors.charcoal-ink}"
    padding: "0 0 4px"
  toggle-lang:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    width: "42px"
    height: "40px"
  toggle-lang-hover:
    backgroundColor: "{colors.charcoal-ink}"
    textColor: "{colors.drafting-film}"
  sheet-band:
    textColor: "{colors.charcoal-ink}"
    typography: "{typography.label}"
    padding: "{spacing.band-cell}"
  title-block:
    backgroundColor: "rgba(255, 255, 255, 0.5)"
    textColor: "{colors.charcoal-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "{spacing.band-cell}"
  input-cell:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.charcoal-ink}"
    rounded: "{rounded.none}"
    padding: "12px 18px 10px"
  nav-bar:
    backgroundColor: "{colors.drafting-film}"
    textColor: "{colors.graphite}"
    height: "{spacing.nav-h}"
  night-print:
    backgroundColor: "{colors.charcoal-ink}"
    textColor: "{colors.night-print-fg}"
  device-frame:
    backgroundColor: "{colors.device-black}"
    rounded: "{rounded.device}"
    padding: "7px"
---

# Design System: CeroSoft

## Overview

**Creative North Star: "The Drawing Set"**

The site is a construction drawing set. A visitor's workflow is surveyed as-is in dashed line (Excel, LINE, paper), redrawn as-built in solid line, and CondoMate is the built sheet, printed in reverse on a charcoal "night print". Every section is a numbered sheet (A-00 to A-06) opened by a title-block band; the hero closes with a full title block (sheet, title, scale, year); the footer is the master title block. Nothing is a card, nothing glows, nothing floats. Structure comes from ruled lines, cells and dimension marks on a drafting-film ground with a fine 24px/120px grid.

Density is a working drawing's: generous sheet spacing (72 to 136px between sheets) with tight, ruled detail inside each sheet (schedules, numbered notes, request form cells). Ink is charcoal, secondary line is graphite, and one colour, Cero Cyan, is held back for the things a visitor can act on and the things that are live. The world explicitly refuses the dark SaaS hero, the feature-card grid and the glowing "0" ring of the previous site.

Motion is plotting, not presenting: lines draw, dashes resolve to solid, a process line is ruled in as you read. Every drawing's default state is the finished, visible drawing; motion only animates from blank toward it, so a stalled script or reduced motion still shows the whole set.

**Key Characteristics:**
- Line form carries state: dashed = today's manual workflow, solid = built, double = management/live console.
- Cero Cyan only on actions (primary cells, focus underline in fields, selection) and live state (the live dot).
- Numbered sheets A-00 to A-06, each opened by a mono title-block band; no eyebrows above headings.
- Square, ruled, flat: 0 radius everywhere except real device screenshots and node/live dots.
- Thai first: Thai copy sets in Noto Sans Thai with looser leading; Thai labels are never tracked or uppercased.
- Motion = plot/draw from an already-visible default; one pinned CondoMate stage; reduced motion disables Lenis and the pin.

## Colors

A drafting-office palette: grey film, white sheets, charcoal ink, graphite pencil, and one cyan signal.

### Primary
- **Cero Cyan** (cero-cyan): the only chroma in the system. Fills primary title-block cells (Talk to us, Send), the live dot and its pulse ring, the field focus underline, the "built" node centre in the process line, the success tick, and text selection. Text on cyan is always Charcoal Ink, never white.

### Neutral
- **Drafting Film** (drafting-film): page ground, carrying the 24px minor / 120px major grid in Grid Minor and Grid Major. Also the nav bar fill.
- **Sheet White** (sheet-white): the request-form sheet and the as-built system box; the hero title block and as-is boxes use it at 50 to 55% over film.
- **Charcoal Ink** (charcoal-ink): all primary text, solid line work, 2px sheet-band top rules, 1.5px control borders, focus outline; and the ground of the CondoMate night print.
- **Graphite** (graphite): secondary line and text: dashed as-is boxes and links, revision clouds, lede copy, the light first line of the hero headline.
- **Pencil Muted** (pencil-muted): metadata, mono numbering, survey/process descriptions, placeholders.
- **Rule / Rule Strong** (rule, rule-strong): 1px dividers inside tables and lists / cell dividers in bands and title blocks, and the un-built dashed process line.
- **Night Print Foreground, Muted, Rules** (night-print-fg, night-print-muted, night-print-rule, night-print-rule-strong): the reversed palette inside the charcoal CondoMate sheet and footer.
- **Device Black** (device-black): only behind real phone screenshots and thumbnails.

### Tertiary
- **Redline** (redline): validation errors only (invalid field underline, error status text). It is a correction mark, not a decorative accent.

### Named Rules
**The Signal Rule.** Cero Cyan appears only on something you can press or something that is live. If it is neither, it is ink or graphite.

**The Night Print Rule.** The reversed charcoal ground is reserved for the built product (CondoMate) and the master title block (footer). Other sheets stay on film.

## Typography

**Display Font:** Inter Variable (self-hosted, with system sans fallback)
**Body Font:** Inter Variable for English; Noto Sans Thai 400 to 700 for Thai (self-hosted)
**Label/Mono Font:** Geist Mono 400/500 (self-hosted), for sheet numbers, title blocks, schedule codes, dimensions and legends

**Character:** A light, tightly tracked Inter headline set against a heavy second line reads like a drawing title; Geist Mono does the annotation work a draughtsman's lettering would. Thai is set in its own face with taller leading so vowels and tone marks never clip.

### Hierarchy
- **Display** (300, clamp 3 to 6rem, 0.98): the A-00 headline. First line light graphite, second line 700 ink. Thai version (display-th) 400/700 at clamp 2.2 to 4.75rem, line-height 1.24.
- **Display Product** (650, clamp 3.4 to 6rem, 0.95, -0.04em): the product name "CondoMate" only; a Latin wordmark, set in Inter in both languages.
- **Headline** (600, clamp 2.2 to 3.9rem, 1.04, -0.03em): one per sheet. Thai version (headline-th) at clamp 1.9 to 3.25rem, line-height 1.3.
- **Title** (600, clamp 1.35 to 1.75rem, 1.3): legacy footnote heading and sub-sheet titles.
- **Title Large** (600, clamp 1.6 to 2.25rem, 1.15, -0.02em): CondoMate screen captions and the console heading on the night print.
- **Lede** (400, clamp 1.06 to 1.22rem, 1.65; Thai 1.8): one paragraph under a headline, max 60ch, graphite.
- **Body** (400, 1rem, 1.6; Thai 1.75): running copy, max 52 to 60ch.
- **Body Small** (400, 0.92rem): callout labels, contact-sheet captions, form status, schedule item lists.
- **UI** (500, 0.875rem): nav sheet index and nav CTA.
- **Label** (Geist Mono, three steps: 0.7rem small, 0.75rem base, 0.8rem large; 0.02 to 0.12em tracking, tabular numerals): sheet numbers, band metadata, schedule headers and codes, title blocks, dimensions, legends. Uppercase only for small title-block captions and column heads in English.

### Named Rules
**The Thai Face Rule.** Any label set in mono for English switches to Noto Sans Thai in Thai, with letter-spacing 0 and no text-transform. Geist Mono has no Thai glyphs; tracked or uppercased Thai is never acceptable.

**The No Eyebrow Rule.** Headings are introduced by the sheet's title-block band, not by a kicker line above them. A heading stands alone with its lede beside or below it.

## Layout

A single centred frame, `min(1360px, 100% - 2 × gutter)`, with a fluid gutter (16 to 48px). The fixed nav is 64px tall with a 1.5px ink bottom rule. Each sheet opens with a full-frame title-block band (84px number cell, title, metadata cell) and is separated from the next by the sheet space (72 to 136px).

Inside sheets, the common grammar is a two-column split (heading left, lede right, bottom-aligned) above full-width ruled content: survey list, services schedule table, five-node process line, numbered notes, request form. The hero is a 7/5 split: copy left, the live plan drawing right, title block below. CondoMate pins a full-viewport stage on desktop: caption column (260 to 320px), phone at up to 700px tall, leader-line callouts to the right.

Breakpoints: 1180px (sheet index collapses to a menu), 1000px (splits stack; process line turns vertical; pinned stage disabled), 760px (schedule rows restack; contact-sheet becomes a horizontal snap strip; title block reflows to 2 columns), 640px (nav CTA hides; form cells single column; band metadata hides; hero CTA full width).

## Elevation & Depth

Flat. Depth comes from line weight and the film/sheet/night-print tonal shift, not shadow. Hierarchy reads by rule weight: 2px ink top rule opens a band or table, 1.5px ink outlines a control or sheet, 1px rule divides rows.

### Shadow Vocabulary
- **Device drop** (`box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.55)`): only under real phone screenshots on the night print, to seat the photographed object.
- **Field underline** (`box-shadow: inset 0 -2px 0 <cyan | redline>`): an inset rule, not an elevation; focus is cyan, invalid is redline.
- **Callout halo** (`box-shadow: 0 0 0 3px <charcoal ink>`): knocks a leader-line dot out of the screenshot behind it.

### Named Rules
**The Line Weight Rule.** If something needs to stand out, give it a heavier or different line, not a shadow, glow or tint.

## Shapes

Square drafting geometry. Every control, cell, sheet, table and plate has 0 radius and a ruled border. Curves are reserved for what is curved in the world: real phone glass (device 30px outer, screen 23px inner) and thumbnails (18px), the round process nodes, callout number circles and the live dot. Line form is semantic:

- **Dashed** (stroke-dasharray 7 5 in drawings; CSS dashed borders): the as-is manual workflow, proposed links, un-built process line, the hero's dashed lettering of "Excel / LINE / paper".
- **Solid**: the as-built system, built process line, resident app legend key.
- **Double** (5px double border): the management console plates and the management legend key.

Drafting marks recur: dimension lines with 45-degree tick ends, revision clouds around the friction step, leader-line callouts with numbered circles.

## Components

### Buttons
Title-block cells, not pills.
- **Shape:** square (0), 1.5px ink border.
- **Primary (cell CTA):** Cero Cyan fill, Charcoal Ink 600 text, 52px tall, 20px side padding, trailing arrow pushed to the far edge.
- **Hover / Focus:** inverts to ink fill with cyan text; arrow slides 4px right; 2px ink focus outline at 3px offset. On the night print the border is cyan and hover inverts to film.
- **Disabled / Sending:** film fill, muted text, rule-strong border, progress cursor.
- **Nav variant:** 40px tall, 14px padding, 0.875rem.

### Ink Link (secondary action)
A "proposed" link: 600 text with a 1.5px dashed underline that turns solid on hover while the arrow gap widens. Used for "See CondoMate" and the legacy sheet's prompt to talk.

### Sheet Band
The opener of every sheet A-01 to A-06: Geist Mono 0.75rem with tabular numerals, 2px ink top rule, 1px rule-strong bottom, number cell / title / "CeroSoft · year" cell divided by rule-strong. On the night print the rules reverse. Decorative (aria-hidden); the section heading carries semantics.

### Title Block
The hero's closing block and the footer master block: a bordered grid of cells, each with a tiny mono uppercase caption (Sheet, Title, Scale, Year) over its value; 50% white over film in the hero, night-print rules in the footer.

### Inputs / Fields
- **Style:** the request form is a white sheet with a 1.5px ink border and a mono title strip; fields are borderless cells in a 2-column grid divided by 1px rules, with a mono caption label above the input.
- **Focus:** an inset 2px cyan underline across the cell.
- **Error:** an inset 2px redline underline (`:user-invalid`); error status in redline with an alert icon. Success shows a cyan tick.
- **Submit:** a full-width cell CTA, 60px, separated by an ink rule.

### Navigation
Film bar, 1.5px ink bottom rule, brand mark left. Desktop shows a sheet index: mono sheet number + title, graphite at rest, ink with a 1.5px underline at 8px offset on hover. Square TH/EN toggle (mono, inverts on hover) and the nav CTA. Below 1180px a square menu toggle opens a full-width sheet list with ruled rows.

### Schedule (services)
A table drawn like a door/finish schedule: 2px ink rules top and bottom, mono uppercase column heads, mono code column (S-01...), 600 service name, graphite description, muted item list. Restacks into a two-column grid on small screens.

### Process Line
Five nodes on a horizontal line (vertical under 1000px). The dashed rule-strong line is the plan; a 2px ink line is ruled over it by scroll progress; each node fills ink with a cyan centre once built.

### CondoMate Stage (signature)
The night-print product sheet. Real phone screenshots in a device frame, with mono dimension lines (390 × 844) and numbered leader-line callouts. On desktop with motion, the stage pins for one viewport and scroll cuts between screens; an index of screens on the left marks the current one with a solid rule (others dashed). Below it, a contact-sheet strip of further screens and the management console in double-ruled plates under a 1366px dimension.

### Live Dot
A 10px cyan dot with a pulsing 1px ring: the only animated loop in the system, and the only meaning of "live".

## Do's and Don'ts

### Do:
- **Do** encode state in line form: dashed for today's manual workflow, solid for what is built, double for the management/live console.
- **Do** keep Cero Cyan to actions and live state, with Charcoal Ink text on cyan fills.
- **Do** open every sheet with its numbered title-block band (A-00 to A-06) and let the heading stand without a kicker.
- **Do** set Thai in Noto Sans Thai with leading of 1.75 for body and 1.24 to 1.3 for headings, and switch mono labels to the Thai face with zero tracking and no uppercase.
- **Do** keep every control and container square (0 radius) with a ruled border; reserve curves for devices, nodes and dots.
- **Do** animate by plotting: stroke-dashoffset draws, dashed-to-solid rules, leader lines extending, always from a default state that already shows the finished drawing.
- **Do** keep a single pinned stage (CondoMate) and drop Lenis and the pin entirely under prefers-reduced-motion.
- **Do** use real CondoMate screens with dimension marks as proof; label them, never mock them up.

### Don't:
- **Don't** use cyan for decoration, headings, icons, borders of non-actions or background washes.
- **Don't** put an eyebrow or kicker line above a heading.
- **Don't** track or uppercase Thai, or set Thai in Geist Mono.
- **Don't** build feature-card grids, rounded cards, pills, glows or gradient heroes; use schedules, ruled lists and title-block cells.
- **Don't** add a second pinned or scroll-jacked section.
- **Don't** hide content behind animation: nothing may depend on a script running to become visible.
- **Don't** use shadows for hierarchy; the device drop under real phone screenshots is the only shadow.
