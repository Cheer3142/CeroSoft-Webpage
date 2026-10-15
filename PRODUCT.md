# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: Thai SME owners and managers (also condominium/apartment offices, local and service businesses, small organisations) whose daily work still runs on Excel + LINE/chat + paper + repeated manual data entry. They are not technical buyers; they arrive knowing something is broken in how work moves, not which software they need. Thai is the main reading language; English is secondary.

## Product Purpose

cerosoft.net is CeroSoft's corporate site. It must make an SME owner believe CeroSoft understands their workflow before it writes code, show real proof that CeroSoft ships working systems, and get them to start a conversation through the contact form (POST /api/contact → Resend email).

## Positioning

A technology partner / software solutions studio, not a web-design shop: it starts from the business problem and workflow, then chooses technology. "From Zero to Solution." — the name comes from Zero → Cero → Software (0 → C → Solution). Positioning statement: Practical Software Solutions for Real Businesses. Communication rule: business first, technology support.

## Operating Context

Visitors read on phones (LINE links) and office desktops, often in Thai. The flagship proof is CondoMate, a condominium management system running at Punna Residence 5 (resident app + juristic management console: maintenance, parcels, shared-space booking, announcements, finance, reports).

## Capabilities and Constraints

- Services: Custom Software; Business Automation; Web Solutions; System Integration; Support & Maintenance. AI only once a real product supports it.
- Process: Understand → Define → Design → Build → Support.
- Stack: React 19 + TypeScript + Vite, lucide-react, deployed on Vercel; serverless `api/contact.js` with honeypot field `website`. GSAP + Lenis approved for motion (2026-10-15).
- Bilingual TH/EN with a language toggle, Thai default, saved in localStorage `cerosoft-lang`.

## Brand Commitments

- Name and tagline: CeroSoft — FROM ZERO TO SOLUTION. Secondary: "Simple Software. Real Solutions." and "Every solution starts from zero."
- Logo: circular C mark (cyan C, building, pixel blocks, outer arc). Never stretch, rotate, recolour or add effects to it; keep clear space.
- Colours from the brand doc: Cero Cyan #00ADB5 (accent/CTA/highlight — an accent, not a fill everywhere), Charcoal #222831, Graphite #393E46, Soft Gray #EEEEEE, White.
- Type in the brand doc: Inter for English/UI, Noto Sans Thai for Thai; headings with clear weight and generous space.
- Voice: smart but not showing off, modern but not flashy, professional but easy to talk to; short, clear, polite; business outcome before jargon; no buzzwords or unprovable promises.
- Visuals: product-first — real UI, system diagrams, business workflows; no stock photos.
- Values: Simple (Complex behind. Simple in front.), Practical, Reliable, Adaptable, Transparent.

## Evidence on Hand

- CondoMate screens: `public/portfolio/` (resident app ×10, access screen, management finance/report desktop + mobile). Raw captures in `web img/` and `mobile img/`.
- Brand profile: `documents/CeroSoft_Brand_Identity_Company_Profile.docx`.
- No testimonials, client logos, metrics, team photos or pricing exist. Do not invent them.

## Product Principles

1. Read the work before writing code — show understanding of the visitor's workflow first.
2. Prove with the real product, never claim with adjectives.
3. Complex behind, simple in front — the site itself must feel effortless.
4. Thai first, readable, with no clipped vowels or tone marks.

## Accessibility & Inclusion

WCAG AA contrast, keyboard access, skip link, reduced-motion support for every animation, Thai line-height that keeps vowel and tone marks clear.
