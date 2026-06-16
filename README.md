# Uzay Gökçek — English (Global) Site

The English, internationally-adapted version of **uzaygokcek.com**, rebuilt as a
Next.js 14 (App Router) project. Same structure and design language as the Turkish
original — dark theme, serif display accents, indigo + ember dual accent — with
content translated and adapted for an international audience (USD pricing, GDPR
instead of KVKK, GMT+3 office hours).

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS 3.4**
- **lucide-react** icons
- **next/font** — Inter (body) + Instrument Serif (display)

## Run locally

Node.js 18.18+ is required (it is **not** installed on this machine — install it
from https://nodejs.org first, or just deploy straight to Vercel, which builds in
the cloud).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy (recommended: Vercel)

1. Push this folder to a new GitHub repo.
2. In Vercel: **New Project → Import** the repo. Framework auto-detects as Next.js.
3. Deploy. No env vars needed.

You can point a subdomain (e.g. `en.uzaygokcek.com`) or a separate `.com` at it.

## Edit the content

**All text lives in one file: [`components/content.ts`](components/content.ts).**
Change copy, prices, services, industries, scenarios, FAQ, etc. there — every
section reads from it.

### Before going live — update these in `content.ts`

| What | Where | Note |
|------|-------|------|
| **Calendly link** | `SITE.calendly` | Currently a placeholder `calendly.com/uzaygokcek/30min` — replace with your real link. |
| **WhatsApp / phone** | `SITE.whatsapp`, `SITE.phoneHref` | Already set to +90 531 291 89 75. |
| **Prices** | `SERVICES`, `PRICING`, `WHY`, `FAQS` | Converted to USD ($1,200 website / $1,500–$3,000 automation+AI). Adjust to your real international rates. |
| **Footer legal links** | `FOOTER.links` | Point GDPR Notice / Privacy / Terms to real pages. |
| **Domain** | `app/layout.tsx` → `metadataBase` | Set to your live URL for correct OG/SEO. |

## Contact form

The form (`components/Contact.tsx`) is backend-free: on submit it opens the
visitor's email client pre-filled to `vibeflowai@uzaygokcek.com` (with a honeypot
anti-spam field). To capture submissions server-side instead, wire it to
[Formspree](https://formspree.io), [Resend](https://resend.com), or a Next.js
route handler.

## Structure

```
app/
  layout.tsx      # fonts + SEO metadata
  page.tsx        # section assembly
  globals.css     # theme tokens, surfaces, buttons
components/
  content.ts      # ← ALL copy & config
  Icon.tsx        # lucide icon map
  SectionHeading.tsx
  Header.tsx  Hero.tsx  Services.tsx  Industries.tsx
  Scenarios.tsx  About.tsx  Process.tsx  WhyMe.tsx
  Faq.tsx  Contact.tsx  Footer.tsx
```
