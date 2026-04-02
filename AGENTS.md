# AGENTS.md — Pellar Website (pellar.co.uk)

## Project Overview

Marketing website for Pellar Technologies Ltd, a software studio based in Newcastle-upon-Tyne. Single-page (or minimal multi-page) site positioning Pellar as a technical delivery consultancy that builds web applications, MVPs, and platforms for businesses.

This is a small, static marketing site. No CMS, no database, no authentication, no user-generated content.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Fonts:** Google Fonts (Outfit, Instrument Serif, DM Sans)
- **Package manager:** pnpm

## Project Structure

```
pellar-website/
├── app/
│   ├── layout.tsx          # Root layout, font loading, metadata
│   ├── page.tsx            # Home page (assembles all sections)
│   ├── globals.css         # Tailwind directives, CSS custom properties
│   └── favicon.ico
├── components/
│   ├── Nav.tsx             # Top navigation with wordmark and links
│   ├── Hero.tsx            # Hero section with headline and CTA
│   ├── Services.tsx        # What Pellar builds for clients
│   ├── Work.tsx            # Portfolio of own products (Forma, Noodle)
│   ├── Principles.tsx      # Three working principles
│   ├── About.tsx           # Brief company background
│   ├── Contact.tsx         # CTA with email link
│   └── Footer.tsx          # Company details, legal links
├── public/                 # Static assets if any
├── CLAUDE.md               # Claude Code-specific build guide
├── AGENTS.md               # This file
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

## Key Files

- `app/layout.tsx` — Root layout. Loads all three fonts (Outfit Light for wordmark, Instrument Serif for headings, DM Sans for body). Sets metadata and Open Graph tags.
- `app/page.tsx` — Composes all section components in order: Hero, Services, Work, Principles, About, Contact.
- `app/globals.css` — Tailwind base/components/utilities directives. Defines CSS custom properties for the colour palette.
- `tailwind.config.ts` — Extends Tailwind with custom colours (ink, forest, sage, stone, cream, white) and font families.

## Coding Conventions

- All components are React Server Components by default. Only add `"use client"` when the component genuinely needs client-side interactivity (e.g. mobile nav toggle).
- One component per file. File name matches component name in PascalCase.
- No default exports. Use named exports.
- Use `next/font/google` for font loading, not external stylesheet links.
- Prefer Tailwind utility classes. Avoid inline styles. Avoid CSS Modules unless there is a strong reason.
- Semantic HTML: use `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h3>` properly. One `<h1>` per page.
- Accessibility: all interactive elements must be keyboard-navigable with visible focus states. Colour contrast must meet WCAG 2.1 AA.
- No JavaScript-heavy animation libraries. CSS transitions and animations only.

## Colour Palette

```
ink:    #1a1a1a   — Primary text, dark backgrounds
forest: #2d4a3e   — Accent, headings, CTAs
sage:   #7a9e8e   — Secondary accent, hover states, borders
stone:  #b8b0a8   — Muted text, dividers
cream:  #f5f0eb   — Page background
white:  #ffffff   — Card surfaces, contrast backgrounds
```

## Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Wordmark | Outfit | 300 (Light) | "PELLAR" in nav and footer only |
| Headings | Instrument Serif | 400 | Section headings, hero headline |
| Body | DM Sans | 400, 500 | Body text, nav links, buttons, labels |

## Content

All content is hardcoded. There is no CMS. The site has these sections:

1. **Hero** — Headline positioning Pellar as building software for businesses. Subhead referencing Newcastle. Email CTA.
2. **Services** — Web Applications, MVPs & New Products, Booking & Payment Systems, Websites, Ongoing Development.
3. **Work** — Portfolio showing Forma (useforma.co.uk) and Noodle as products Pellar has built and operates.
4. **Principles** — "Build, don't describe", "Specific over broad", "Own the whole stack".
5. **About** — Small team, Newcastle, building software since 2013.
6. **Contact** — CTA with mailto:hello@pellar.co.uk
7. **Footer** — Company number 16807366, legal links, copyright.

## Deployment

Deployed to Vercel. Push to `main` triggers production deployment. Domain: pellar.co.uk (www.pellar.co.uk canonical).

## Performance Targets

- Lighthouse 95+ across all categories
- Minimal client-side JavaScript
- Optimised font loading with `font-display: swap`
- No unnecessary third-party scripts

## Things to Avoid

- No stock images, illustrations, or decorative icons
- No gradient blobs or generic SaaS visual patterns
- No centre-aligned body text
- No emoji
- No bullet points in user-facing copy
- No words: "solutions", "bespoke", "leverage", "synergy", "cutting-edge", "digital transformation"
- No em dashes in copy
- No exclamation marks