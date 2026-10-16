---
target: cerosoft.net homepage
total_score: 24
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 3
target_identity: "file:D:\\Bussy\\CeroSoft-Webpage\\app\\components\\CeroSoftSite.tsx"
target_fingerprint: "sha256:85617e9541005c70f3bb72be61ad3d8017014949e43cd639db7ca769a7228da8"
target_path: "D:\\Bussy\\CeroSoft-Webpage\\app\\components\\CeroSoftSite.tsx"
timestamp: 2026-10-16T03-50-37Z
slug: app-components-cerosoftsite-tsx
---
# Critique: cerosoft.net homepage (2026-10-16)

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | No active-section nav state; capsule loses solid state at max scroll (motion.ts:42) |
| 2 | Match real world | 3 | Internal terms leak: VIS-REP-1, QA admin 2, API/portal |
| 3 | User control | 3 | Lenis smooth scroll replaces native scrolling (LINE webview) |
| 4 | Consistency | 3 | Founder roles English-only on Thai page |
| 5 | Error prevention | 2 | Form requires company + email; no "not sure" topic |
| 6 | Recognition | 3 | Services in 5 tabs hide 4 offers; console tabs hide 3 of 4 |
| 7 | Flexibility | n/a | One-page marketing surface |
| 8 | Aesthetic/minimalist | 3 | Centred H2+lead x7; Mission/Vision dead space |
| 9 | Error recovery | 2 | English browser bubble on Thai page; failed send is a dead end (no email/phone/LINE) |
| 10 | Help | 2 | FAQ misses price and timeline |
| Total | | 24/36 | Acceptable (67%) |

## Design specificity
Hero digital twin of Punna Residence 5 and the CondoMate panel twin are product-specific; the middle sections (path cards, mission/vision/values, process row, FAQ, footer) are template. Detector: markup 0 findings; 14 CSS advisories (10 off-ramp font sizes, 2 off-palette greys, 2 radii). Overlay: statement low-contrast and heading-rhythm are false positives; cramped two-line English button in calculator is real-minor.

## Priority issues
1. [P1] No human contact channel; 6-field form requires email + company + service category; failed send has no fallback. Fix: LINE OA/phone in contact, footer, mobile menu; email OR phone; company optional; "not sure" topic first; channel in failed message. (harden, clarify)
2. [P1] Founder block lists AirGradient full-time role from Nov 2026 first, undercutting support promise. Fix: remove future role or state capacity/continuity; lead with CondoMate build. (clarify)
3. [P1] CondoMate proof long (~5,400px, 39% of page) and hollow (heavy pixelation, "QA admin 2", "sample data" next to "live"), condo-only. Fix: seeded demo captures labelled demo; 72vh -> 55vh or 4 steps; bridge line to other businesses. (distill, polish)
4. [P2] FAQ lacks price and timeline. Fix: truthful process answers, no invented figures. (clarify)
5. [P2] Template middle: 7 identical centred heads, equal path cards, boilerplate mission/vision. Fix: cut/fold mission+vision, split heads, services as list. (layout, distill)

## Persona red flags
Jordan: slogan H1, forced category select, jargon, no price/time, vague success message. Casey: no CTA below 640px after hero, ~17,000px page, sub-44px targets, unreadable console shots, no tap-to-chat. Riley: nav state at max scroll, dead-end failure, English validation bubble, slider-only calculator capped at 500 THB/h, live vs test-data labels, future-dated job. Khun Somsri (SME owner via LINE): no LINE button, won't type email, sees only condo, no price -> leaves.

## Minor
"ๆ" wraps to line start on mobile (use nbsp); closing CTA after form scrolls up; uppercase mono "TALK TO US"; orphan 9th feature chip; abstract path diagrams; ID-style founder photo; CSS token drift.

## Questions
- Honest capacity/support story given the Nov 2026 full-time role?
- Why must a LINE-native owner write an email to start talking?
- Does the condo-only walkthrough persuade non-condo businesses?
