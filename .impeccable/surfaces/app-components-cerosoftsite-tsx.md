---
version: 1
slug: "app-components-cerosoftsite-tsx"
primary_target: "app/components/CeroSoftSite.tsx"
related_targets: ["index.html"]
---

# Surface: cerosoft.net home (one page)

Mode: Persuade. Audience: Thai SME owners (Thai first). Action: start a conversation via the contact form. Proof: CondoMate at Punna Residence 5 (real screens in public/portfolio). Constraints: bilingual TH/EN toggle, Resend contact endpoint with honeypot, GSAP + Lenis allowed, no invented clients/metrics.

## Direction contract

THESIS: The site is a construction drawing set. The visitor's workflow is drawn as-is (dashed: Excel, LINE, paper) and redrawn as-built (solid), and CondoMate is the built sheet. Refuses the dark SaaS hero + feature-card grid and the incumbent glowing "0" ring.

OWN-WORLD: Drafting film #EEEEEE ground on a fine ruled grid, white sheets, charcoal #222831 line ink, graphite #393E46 secondary. Line form carries state: dashed = manual/today, solid = built, double = live. Cero Cyan #00ADB5 only for actions and live state. Every section is a numbered sheet (A-00…A-07) with a title-block band; callouts are leader lines with tick ends; buttons are title-block cells.

STORY: "They read my work before writing code" → see my mess drawn exactly → see the five-stage method → see CondoMate built and running → talk to them.

FIRST VIEWPORT: Sheet A-00 full-bleed. Left 7/12: sheet label, headline "From Zero to Solution" / "เริ่มจากศูนย์ สู่โซลูชันที่ใช่" at display scale, one-line subcopy, primary "Talk to us" cyan cell + "See CondoMate" ink link. Right 5/12: a live plan drawing — Excel, LINE, Paper boxes linked by dashed lines that resolve on load into one solid system box (the C mark) with a cyan live dot. Title block bottom-right: sheet no., scale, date, TH/EN toggle.

FORM: Construction drawing set, candidate 3 of 7. seed: none (unavailable)

Signature interaction: scroll draws the drawing — SVG strokes animate dashed→solid (GSAP ScrollTrigger), CondoMate screens pin full-viewport with annotation callouts that draw in per screen. Motion grammar: line-draw and plot, never fade-blur. Raises: line-form state (emission rail); cyan reserved for action (paste-up); one screen holds the viewport (fashion flagship); one toggle redraws every sheet (Miura).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
