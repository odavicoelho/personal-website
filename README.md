# Personal website

One-page personal branding site (PT/EN), built with Astro + Tailwind CSS.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build into dist/
npm run preview
```

## Editing content

| What | Where |
| --- | --- |
| Name, email, WhatsApp, LinkedIn, X, GitHub | `src/config/site.ts` |
| Portuguese texts (bio, skills, projects, aulas) | `src/i18n/pt.ts` |
| English texts | `src/i18n/en.ts` (`tutoring: null` hides the tutoring section) |
| Profile photo | `src/assets/photo.jpg` (square, ≥ 800px) |
| Social share images | `public/og-pt.png`, `public/og-en.png` (1200×630) |
| Domain | `site` in `astro.config.mjs` |

Search for `TODO` to find every placeholder.

## Deploy

Import the repository on Vercel or Netlify — Astro is detected automatically (build: `npm run build`, output: `dist`).
