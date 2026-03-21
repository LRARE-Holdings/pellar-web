# CLAUDE.md — Pellar Technologies Website Build

## What Pellar Is

Pellar Technologies is a software development company built in Newcastle-upon-Tyne. It designs, builds, and operates focused software products across compliance, document infrastructure, studio management, and consumer tools.

It is not a holding company. It is not a venture studio. It builds things. From Newcastle.

---

## Brand

### Positioning Line
"Software your business can rely on."

### Principles
1. **Build, don't describe** — The product is the pitch.
2. **Specific over broad** — Each product solves one problem well.
3. **Own the whole stack** — Design, development, and operations in the same team.

### Typography
- **Wordmark & Headlines:** Outfit (Light 300 for wordmark, Regular/Medium for headlines)
- **Editorial & Display:** Instrument Serif (Regular, Italic)
- **Body & Interface:** DM Sans (Light 300 through SemiBold 600)

### Colour System
| Name | Hex | Usage |
|------|-----|-------|
| Ink | `#080F09` | Primary dark background, text on light |
| Forest | `#2D4A35` | Accent — links, emphasis, interactive states. Use sparingly. |
| Sage | `#7A9A7E` | Softer secondary accent |
| Stone | `#C8C0B4` | Warm neutral — dividers, secondary text |
| Cream | `#F2F0EB` | Background variation |
| White | `#FAFAF8` | Primary light background |

### Logo
- Wordmark: "PELLAR" in Outfit Light, uppercase, generous letter-spacing
- "Technologies" beneath in DM Sans, small, only where needed
- Monogram "P" for compact use
- No icons. No symbols. No abstract shapes.

### Voice
- Conversational, direct, zero fluff
- Plain English, short sentences
- No em dashes — ever
- Banned words: "innovative," "disruptive," "synergy," "leverage," "cutting-edge," "empower"
- Understated confidence. Says less, means more.

### Newcastle Identity
Pellar is proud to be from Newcastle-upon-Tyne. This is not a throwaway footer line. It is a core part of the brand. Newcastle should appear prominently on the website, in the hero or near it, and feel like a statement of identity rather than a logistics detail. The tone is pride without parochialism. "Built in Newcastle" is a badge, not a disclaimer. Think of how Basecamp owns Chicago or how Figma owns San Francisco. Pellar owns Newcastle.

---

## Products

### Tiers
- **Flagship (prominent on site):** Receipt, Vara, Forma, Noodle
- **Portfolio (listed, less prominent):** SQEz, Untie

All six products sit under Pellar Technologies.

---

### Flagship Products

#### Receipt
**URL:** getreceipt.co
**One-liner:** Proof of document acknowledgement.
**Expanded:** Receipt gives teams clear proof of delivery, review activity, and acknowledgement for policies, procedures, and client documents. No e-signature overhead. Upload a PDF, send a link, get a verifiable record.
**Core concept:** Sent ≠ Seen. Sending an email is not evidence that someone read it.

**How it works:**
1. Upload your PDF
2. Send one share link
3. Recipient reviews and confirms
4. Export a clean audit trail

**What it records:** delivery time, first open, scroll depth, time on page, acknowledgement status, document hash/version. Optionally: IP and user agent.

**What it is not:** Not e-signature. Not consent capture. Not AI analysis. It records observable events and nothing more.

**Who it's for:** Legal teams, HR/People Ops, compliance officers, regulated firms. Anyone who needs to prove a document was actually reviewed, not just sent.

#### Vara
**URL:** getvara.co.uk
**Status:** Coming soon
**One-liner:** AI-native regulatory compliance monitoring for UK firms.
**Expanded:** Vara monitors UK regulatory bodies (FCA, ICO, HMRC, SRA, CQC), interprets policy changes, maps them to a firm's specific obligations, and generates actionable outputs: draft policy updates, procedure amendments, training briefs, board-ready summaries.

**Core concept:** Regulated firms get hundreds of regulatory updates per year. Most miss things. Vara makes sure they don't.

**How it works:**
1. Monitors regulatory sources continuously
2. Interprets what changed and who it affects
3. Maps changes to the firm's existing obligations
4. Generates plain-English briefs with specific next steps

**What it is not:** Not a news feed. Not a consultancy. An always-on compliance operating system.

**Who it's for:** FCA-regulated financial advisers, accountancy practices, law firms, recruitment agencies, healthcare providers. Any regulated SME that can't afford a full-time compliance team.

#### Forma
**URL:** useforma.co.uk
**One-liner:** Your studio, online.
**Expanded:** Forma is a unified platform for fitness and leisure studios. Website, class booking, payments, and email in one place. No more stitching together five different tools. Studios get a branded site, native scheduling, Stripe-powered payments, and automated client communications. Live in under a week.
**Core concept:** Studios deserve better than enterprise software priced for chains or a patchwork of disconnected widgets.

**What it includes:**
- Purpose-built studio website with custom domain
- Native class booking (not an embedded widget)
- Stripe-powered payments for classes, packs, and memberships
- Automated email confirmations and reminders
- Live schedule management with capacity controls
- Analytics dashboard

**What it is not:** Not enterprise software. Not a booking widget bolted onto a template. Not another tool that costs more than it should.

**Who it's for:** Pilates studios, yoga studios, fitness facilities, and leisure businesses. Studios that want a professional digital presence without the complexity or cost of platforms like Mindbody.

#### Noodle
**One-liner:** Thought capture for people who think faster than they can organise.
**Tagline:** "Think it. Catch it. Keep it."
**Expanded:** Noodle is a consumer app for capturing ideas, thoughts, and fleeting notes before they disappear. AI-powered features help cluster related thoughts, nudge forgotten ideas back to the surface, and expand rough notes into something useful.
**Who it's for:** Anyone who has ideas faster than they can write them down. Students, creatives, founders, overthinkers.

---

### Portfolio Products

#### SQEz
**URL:** sqez.lrare.co.uk (will move to Pellar domain)
**One-liner:** Precision SQE exam preparation.
**Expanded:** SQEz helps aspiring solicitors prepare for the Solicitors Qualifying Examination with exam-grade MCQs, structured post-answer review (Autopsy Mode), confidence tracking, and short daily sessions built around spaced repetition.
**Who it's for:** Law students and career changers preparing for SQE1 and SQE2.

#### Untie
**URL:** untietheknot.xyz
**One-liner:** Financial clarity for separation and divorce.
**Expanded:** Untie helps people navigate the financial side of separation with structured planning tools and access to a marketplace of specialist advisors.
**Who it's for:** Individuals going through separation or divorce who need to understand their financial position.

---

## Website Architecture

### Pages
- **Home** — Hero, positioning statement, flagship product cards, portfolio section, principles, contact CTA
- **Receipt** — Product page (or link to getreceipt.co)
- **Vara** — Product page (or link to getvara.co.uk)
- **Forma** — Product page (or link to useforma.co.uk)
- **Noodle** — Product page (or link to relevant domain)

SQEz and Untie appear in a portfolio section on the homepage but do not need dedicated pages on pellar.co.uk.

### Design Direction
- **Dark-first.** Pellar's default is Ink background, white text. The brand has weight.
- **Large typography.** Headlines should command the viewport. Outfit Light at display sizes.
- **Generous space.** Let things breathe. White space is confidence.
- **Subtle motion.** Scroll-triggered reveals, smooth hover states. Nothing bouncy or playful. One well-orchestrated load animation.
- **Grain texture.** Fine film grain overlay across the page for atmosphere.
- **No stock photography.** No team photos. No illustrations. Typography and space do the work.
- **Responsive.** Mobile must feel as intentional as desktop.

### What the site should feel like
Berkshire Hathaway meets Linear, built on the Tyne. A software company that doesn't need to prove anything. You land on it, you understand what they do, you see the products, you clock that it's from Newcastle, and you leave knowing they're serious. Nothing extra.

### What it should NOT feel like
- A startup landing page with gradients and "Schedule a demo" buttons everywhere
- A VC-backed company trying to look bigger than it is
- Anything with purple gradients, floating illustrations, or "Trusted by" logos
- A template

---

## Technical Notes for Build

- **Framework:** Next.js (preferred stack)
- Use Google Fonts: Outfit, Instrument Serif, DM Sans
- CSS variables for all colours
- Semantic HTML, clean structure
- Smooth scroll, intersection observer for reveals
- Nav should compress on scroll with backdrop blur
- Contact CTA: mailto link to hello@pellar.co.uk (no form needed)
- Footer: "Pellar Technologies Ltd" · "Newcastle-upon-Tyne" · "pellar.co.uk"

---

## Writing Examples

### Good
- "Software your business can rely on."
- "Built in Newcastle."
- "Sent is not seen."
- "Six products. One standard."
- "Got a problem that needs a better answer?"

### Bad
- "Pellar Technologies is an innovative software development company leveraging cutting-edge AI..."
- "Our mission is to empower businesses through digital transformation..."
- "We're passionate about building the future of compliance..."
- Anything with em dashes