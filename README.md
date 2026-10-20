<div align="center">

# Davi Coelho — Personal Website

**Software & Data Engineer · Math & Physics Tutor**

Three fast one-page sites in one project, with a clean, futuristic look: an engineering portfolio (English and Portuguese) and a Portuguese tutoring page.

[**davicoelho-comercial.vercel.app**](https://davicoelho-comercial.vercel.app)

![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel&logoColor=white)

<img src="docs/desktop.jpg" alt="Desktop view of the website" width="100%" />

</div>

## ✨ Features

- **Two audiences, three pages** — engineering portfolio in English at `/` and in Portuguese at `/engenharia/` (EN/PT switch between them), and the tutoring page (with plans and prices) at `/aulas/`. Every engineering link on the tutoring page goes to `/engenharia/`, so Brazilian visitors stay in Portuguese. The old `/en/` URL redirects to `/`.
- **Mobile-first** — designed for phones first: full-screen menu, large tap targets and a floating WhatsApp button.
- **Direct contact, no forms** — one-tap WhatsApp (with a pre-filled message in the visitor's language), email (with copy-to-clipboard), LinkedIn and X.
- **Futuristic, clean design** — dark theme, violet neon accent, subtle grid and glow, glassmorphism cards.
- **Subtle motion** — scroll reveal and hover effects, fully disabled for users who prefer reduced motion.
- **Fast & static** — zero client-side framework, a few lines of vanilla TypeScript, self-hosted fonts and responsive WebP images.
- **SEO-ready** — per-language titles, descriptions and Open Graph images, JSON-LD `Person` schema and an auto-generated sitemap.

<div align="center">
<img src="docs/mobile.jpg" alt="Mobile view of the website" width="520" />
</div>

## 🧭 Sections

**`/` (English) and `/engenharia/` (Portuguese) — engineering**

| Section | Content |
| --- | --- |
| **Hero** | Introduction, pillars and quick contact buttons |
| **About** | Photo, bio and quick facts |
| **Skills** | Languages, back-end, data & AI, tooling |
| **Projects** | Project cards (or a "currently building" panel while empty) and a background timeline |
| **Contact** | WhatsApp, email, LinkedIn and X |

**`/aulas/` — Portuguese, tutoring**

| Section | Content |
| --- | --- |
| **Hero** | Tutoring pitch and quick contact buttons |
| **Aulas** | Subjects, levels and format |
| **Planos** | Three monthly plans with prices, plus the small print |
| **Sobre** | Photo, bio and quick facts |
| **Engenharia** | Short note linking to `/engenharia/` |
| **Contato** | WhatsApp, email, LinkedIn and X |

## 🛠️ Tech stack

- [Astro](https://astro.build) — static site generation and built-in i18n routing
- [Tailwind CSS v4](https://tailwindcss.com) — styling via the Vite plugin
- TypeScript (strict) — all content is typed, so both languages always have the same shape
- [Fontsource](https://fontsource.org) — self-hosted Space Grotesk, Inter and JetBrains Mono
- [Vercel](https://vercel.com) — hosting with automatic deploys on every push to `main`

## 🚀 Getting started

Requires Node.js 22.22+.

```sh
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # type-check (astro check) + static build into dist/
npm run preview   # serve the production build locally
```

## 📁 Project structure

```
src/
├── config/site.ts        # name, email, WhatsApp and social links
├── i18n/
│   ├── en.ts             # engineering page, English
│   ├── pt.ts             # engineering page, Portuguese
│   ├── aulas.ts          # tutoring page, Portuguese
│   ├── types.ts          # SiteContent type shared by both languages
│   └── utils.ts          # language helpers
├── components/           # one component per section + Nav, Footer, Icon
├── layouts/Base.astro    # <head>, SEO meta tags, JSON-LD
├── pages/
│   ├── index.astro            # engineering EN  →  /
│   ├── engenharia/index.astro # engineering PT  →  /engenharia/
│   └── aulas/index.astro      # tutoring PT     →  /aulas/
├── scripts/main.ts       # scroll reveal, mobile menu, copy email
├── styles/global.css     # theme tokens and shared styles
└── assets/photo.jpg      # profile photo
public/                   # favicon and Open Graph images
```

## ✏️ Editing content

All text lives in data files — components never contain hard-coded copy.

| What | Where |
| --- | --- |
| Name, email, WhatsApp, LinkedIn, X, GitHub | `src/config/site.ts` |
| Engineering texts | `src/i18n/en.ts` and `src/i18n/pt.ts` — keep both in sync |
| Tutoring texts (aulas, planos, bio) | `src/i18n/aulas.ts` |
| Hide a section | set it to `null` (`skills`, `projects`, `tutoring`, `plans`, `engineering`) |
| Profile photo | `src/assets/photo.jpg` (portrait, shown in a 4:5 frame) |
| Link preview images | `public/og-en.png`, `public/og-pt.png`, `public/og-aulas.png` (1200×630) |
| Site URL | `site` in `astro.config.mjs` |

Projects: while `items` is empty the "currently building" panel is shown. Optional fields: add `url` to a project to show a link on its card, and `company` to an experience entry to show it next to the role.

## 🌐 Deployment

The site is deployed on Vercel, connected to this repository — every push to `main` triggers a new production deploy. Astro is detected automatically (build command `npm run build`, output directory `dist`).

## 📬 Contact

- **Email:** [coelhodavi.comercial@gmail.com](mailto:coelhodavi.comercial@gmail.com)
- **LinkedIn:** [davi-coelho-b92350436](https://www.linkedin.com/in/davi-coelho-b92350436)
- **X:** [@coeeIIho](https://x.com/coeeIIho)
- **Website:** [davicoelho-comercial.vercel.app](https://davicoelho-comercial.vercel.app)
