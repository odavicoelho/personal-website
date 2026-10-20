// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Two separate pages, not translations of each other:
// /       → English, software & data engineering
// /aulas/ → Portuguese, math & physics tutoring
export default defineConfig({
  site: 'https://davicoelho-comercial.vercel.app',
  // old English URL
  redirects: { '/en': '/' },
  integrations: [sitemap({ filter: (page) => !page.includes('/en/') })],
  vite: { plugins: [tailwindcss()] },
});
