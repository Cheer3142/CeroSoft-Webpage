---
target: cerosoft.net homepage (polish/critique-fixes)
total_score: 29
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:D:\\Bussy\\CeroSoft-Webpage\\app\\components\\CeroSoftSite.tsx"
target_fingerprint: "sha256:0f8c8f69de0a5d69275ea6651a055adb5fe00f558f81d33babda4882d025f0e3"
target_path: "D:\\Bussy\\CeroSoft-Webpage\\app\\components\\CeroSoftSite.tsx"
timestamp: 2026-10-16T09-14-03Z
slug: app-components-cerosoftsite-tsx
---
# Critique re-run: cerosoft.net homepage, branch polish/critique-fixes (2026-10-16)

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | System status | 3 | No current-section nav state; no reply timeframe on success |
| 2 | Real world | 3 | Jargon in Services/chips (API, database, portal, audit logs) |
| 3 | User control | 3 | Mobile menu: no scrim, no tap-outside close |
| 4 | Consistency | 3 | Seven different CTA labels to #contact |
| 5 | Error prevention | 3 | Client/server phone rules disagree (text after number -> 400) |
| 6 | Recognition | 3 | Labelled nav; calculator result beside inputs |
| 7 | Flexibility | 3 | Call or form; persistent call chip; no LINE path |
| 8 | Aesthetic/minimalist | 2 | Template bottom half; mobile ~22 screens |
| 9 | Error recovery | 3 | Focused field hides under fixed nav; 400 reads as network failure |
| 10 | Help | 3 | FAQ covers price/time/support; no price range |
| Total | | 29/40 | Good (73%) |

## Specificity
Top half authored (twin hero, statement, calculator, CondoMate panel with lit twin); Services -> Values -> footer is template. Detector: markup 0; CSS 23 advisories (DESIGN.md drift incl. new amber Demo badge). Overlay real finding: EN CondoMate description ~105 chars/line (globals.css:198 max-width only on last p). False positives: statement contrast pre-reveal; heading rhythm.

## Priority issues
1. [P1] Template bottom half buries the form (Services, Process, Mission/Vision/Values, footer service list). Fix: delete/condense; fold Services into Paths tags. (distill)
2. [P1] Founder timeline (AirGradient full-time from Nov 2026) contradicts "taking new projects + support". Fix: keep role on personal site or answer support/response time in FAQ. (clarify)
3. [P2] First screen reads as condo-only; slogan H1. Fix: hero note framing real example for all SMEs; subhead names deliverable. (clarify)
4. [P2] Mobile form recovery: focus under nav, duplicate email/phone error, client/server phone mismatch, faint fields. (harden)
5. [P2] Console screenshots unreadable on phones (~3px text). Fix: mobile crops via picture. (adapt)

## Persona red flags
Jordan: slogan H1, jargon, "live" above repeated "Demo", no post-send timeframe. Riley: phone+name fails server forever, calculator to ฿43.2M, blank phone flash at step 5, no draft persistence. Casey: ~18,300px, call chip top-right, sliders fight scroll, 36px tabs, no menu scrim. Thai SME owner via LINE: condo-first, no LINE, price "depends on scope", founder timeline doubt.

## Minor
Cyan splits "ใช่"; ~9 demo labels; own name unblurred vs other blurred; mono uppercase EN CTA; success timeframe; Statement/Paths separation; token drift.

## Questions
- Should the hero say plainly "this is what we built for a condo; show us yours"?
- Why no one-tap LINE door for a LINE-native audience?
- What would an owner miss if Services->Values were deleted?
