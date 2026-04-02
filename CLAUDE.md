# CLAUDE.md — Pellar Website (pellar.co.uk)

## What This Is

This is the build guide for Pellar's website. Pellar is repositioning from a software product company to a technical delivery consultancy. The website needs to reflect this shift: Pellar builds software for clients, and its own products serve as proof of capability.

Read this entire document before writing any code.

---

## Company Context

**Pellar Technologies Ltd** (Company No. 16807366) is a UK-based software company founded and run by Alex, based in Newcastle-upon-Tyne. Pellar has been building its own SaaS products (Forma, Noodle) but is now pivoting to client-facing technical delivery — building web apps, MVPs, platforms, and internal tools for businesses.

The existing products are not being killed. They become portfolio proof: "We don't just talk about building software — here's what we've shipped."

**Contact:** hello@pellar.co.uk

---

## Positioning

### Old positioning (do NOT use)
"Pellar Technologies designs, builds, and operates focused software products."

### New positioning
Pellar is a software studio that builds, ships, and maintains software for businesses. From MVPs to production platforms. Based in Newcastle.

**Key message:** We build software that works. We know because we build our own too.

**Tone keywords:** Direct. Competent. No-nonsense. Warm but not performative. Confident without being arrogant. Never salesy. Never buzzwordy.

**Things Pellar never says:**
- "Digital transformation"
- "Leverage"
- "Synergy"
- "End-to-end solutions"
- "Bespoke" (use "built for you" or "custom" instead)
- "Cutting-edge" / "state-of-the-art"
- Any sentence with an em dash

---

## Site Structure

### Navigation
```
Pellar [logo/wordmark]     Services    Work    About    Get in touch
```

### Pages / Sections (single-page is fine, multi-page is fine — use judgement)

#### 1. Hero
- Headline that communicates: we build software for your business.
- One-liner subhead reinforcing Newcastle roots and hands-on delivery.
- Primary CTA: Get in touch (mailto:hello@pellar.co.uk)
- No hero image necessary. Typography-led is preferred.

#### 2. Services
What Pellar builds for clients. Present as a clean, scannable section — not a wall of text. Categories:

- **Web Applications** — full-stack web apps, dashboards, portals, admin tools.
- **MVPs & New Products** — idea to working product, fast. For founders and businesses testing new concepts.
- **Booking & Payment Systems** — scheduling, Stripe integration, customer management. Proven with Forma.
- **Websites** — marketing sites, company sites, landing pages. Fast, performant, well-designed.
- **Ongoing Development** — retainer-based feature work, maintenance, and support for existing products.

Do NOT list specific technologies in the services section. Keep it outcome-focused.

#### 3. Work / Portfolio
Showcase Pellar's own products as proof of delivery capability. Each entry should include:
- Product name
- One-line description
- What it demonstrates (e.g. "Full-stack platform with payments, scheduling, and automated email")
- Link to the live product

**Products to feature:**

| Product | URL | Description | Demonstrates |
|---------|-----|-------------|--------------|
| Forma | useforma.co.uk | Studio management platform for fitness and Pilates studios. Website, booking, payments, email, analytics. | Full platform build: Stripe, scheduling, automated comms, multi-tenant |
| Noodle | — | Thought-capture app for iOS and Android. AI-assisted clustering and resurfacing. | Mobile (React Native/Expo), AI integration, consumer product design |

Frame this section as: "Products we've built and operate ourselves." Not a product catalogue — a portfolio.

#### 4. How We Work
Keep the three principles from the existing site. They work for consultancy too. Refine the copy slightly:

1. **Build, don't describe** — We ship working software, not slide decks or wireframe PDFs.
2. **Specific over broad** — Every project solves a real problem. No feature bloat, no scope creep for its own sake.
3. **Own the whole stack** — Design, development, and operations. One team, one standard, no handoff gaps.

#### 5. About (brief)
- Small, focused team based in Newcastle-upon-Tyne.
- "Built in Newcastle" is a point of pride, not a disclaimer.
- Building software since 2013.
- Do NOT include a team photo or headshot. Keep it textual.

#### 6. Contact / CTA
- "Got a project? Let's talk." or similar.
- hello@pellar.co.uk (mailto link)
- Keep it simple. No contact form unless trivial to implement.

#### 7. Footer
- Pellar Technologies Ltd
- Company No. 16807366
- Newcastle-upon-Tyne
- hello@pellar.co.uk
- Links: Privacy Policy, Terms of Service, Cookie Policy
- © 2026 Pellar Technologies Ltd. All rights reserved.

---

## Brand & Design Tokens

### Typography
- **Wordmark / Logo:** Outfit Light — used only for the "PELLAR" wordmark in the nav and footer.
- **Display / Headings:** Instrument Serif — used for section headings and the hero headline.
- **Body / UI:** DM Sans — used for all body text, navigation links, buttons, and labels.

All three fonts are available on Google Fonts. Load only the weights you use.

### Colour Palette

| Token   | Hex       | Usage |
|---------|-----------|-------|
| Ink     | `#1a1a1a` | Primary text, dark backgrounds |
| Forest  | `#2d4a3e` | Accent, headings, CTAs |
| Sage    | `#7a9e8e` | Secondary accent, hover states, borders |
| Stone   | `#b8b0a8` | Muted text, dividers, subtle UI |
| Cream   | `#f5f0eb` | Page background, cards |
| White   | `#ffffff` | Contrast backgrounds, card surfaces |

Use CSS custom properties:
```css
:root {
  --ink: #1a1a1a;
  --forest: #2d4a3e;
  --sage: #7a9e8e;
  --stone: #b8b0a8;
  --cream: #f5f0eb;
  --white: #ffffff;
}
```

### Design Direction
- **Aesthetic:** Refined minimal. Editorial restraint. Not brutalist, not startup-trendy. Think: a well-set book page, not a SaaS landing page.
- **Layout:** Generous whitespace. Left-aligned text. Avoid centred paragraph blocks. Asymmetry is fine.
- **Typography should do the heavy lifting.** Instrument Serif at large sizes for headings. DM Sans at comfortable reading sizes for body.
- **No stock imagery.** No illustrations. No icons unless genuinely useful (e.g. a small arrow on a link). The site should feel typographic and spatial, not decorated.
- **No gradient blobs, no purple, no generic SaaS aesthetic.**
- **Animations:** Subtle and purposeful only. Gentle fade-ins on scroll are fine. No bounce, no parallax, no hero animations. The site should feel calm and confident.
- **Mobile-first.** Must work well on mobile. Navigation should collapse to a clean hamburger or similar.

### Dos and Don'ts

**Do:**
- Use plenty of vertical space between sections
- Let headings breathe
- Use Forest as the primary accent colour
- Keep the overall feel quiet and assured
- Make the CTA (email link) easy to find on every viewport

**Don't:**
- Use more than two colours in any single section
- Add decorative elements for their own sake
- Use card shadows heavier than a very subtle box-shadow
- Centre-align body copy
- Use emoji anywhere on the site
- Use bullet points in visible copy (rewrite as prose or short statements)

---

## Technical Requirements

### Stack
- **Framework:** Next.js (App Router preferred, Pages Router acceptable)
- **Styling:** Tailwind CSS or CSS Modules — either is fine, be consistent
- **Deployment target:** Vercel
- **No CMS.** Content is hardcoded. This is a small, rarely-updated site.
- **No database.** No backend beyond Next.js defaults.

### Performance
- Target 95+ Lighthouse score across all categories
- Optimise font loading (use `next/font` or `font-display: swap`)
- No JavaScript-heavy animations. CSS transitions and animations preferred.
- Minimal client-side JS. Server components by default if using App Router.

### SEO
- Proper semantic HTML (h1, h2, h3 hierarchy, nav, main, footer, section)
- Meta title: "Pellar | Software built for your business"
- Meta description: "Pellar builds web applications, MVPs, and platforms for businesses. Based in Newcastle-upon-Tyne."
- Open Graph tags with the above
- Canonical URL: https://www.pellar.co.uk

### Accessibility
- WCAG 2.1 AA compliance
- Sufficient colour contrast on all text
- Keyboard navigable
- Proper focus states
- Skip-to-content link

---

## File Structure (suggested)

```
pellar-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Work.tsx
│   ├── Principles.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── (static assets if any)
├── CLAUDE.md (this file)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Copy Guidelines

- Write in short, clear sentences. No compound sentences joined by commas where two sentences would be better.
- First person plural ("we") for Pellar. Never "I".
- Never use the word "solutions" as a noun on its own.
- Avoid adjective stacking. One adjective per noun maximum.
- No exclamation marks.
- "Built in Newcastle" not "Based in the North East of England."
- When describing products, lead with what they do for the user, not what technology they use.

---

## What Good Looks Like

The finished site should feel like a confident, quiet introduction. Someone landing on it should think: "These people clearly know what they're doing, and they're not trying too hard to convince me." Every section should earn its place. If a section doesn't add to that impression, cut it.