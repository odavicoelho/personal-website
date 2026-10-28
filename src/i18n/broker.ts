import type { SiteContent } from './types';
import { en, urnaPorUrna } from './en';

// The information broker page. English only: international clients come first.
// Voice: full confidence about what Davi can do; never invented clients, jobs, reviews or numbers.
const [enem, watchtower] = en.projects!.items.filter((p) => p !== urnaPorUrna);

export const broker: SiteContent = {
  meta: {
    title: 'Davi Coelho · Information Broker',
    description:
      'You ask, I find it. Market and company research, public records, clean datasets and monitoring, with a source for every claim. Specialist in Brazilian and Latin American data, working worldwide.',
  },
  nav: [
    { label: 'How I work', id: 'about' },
    { label: 'What I find', id: 'skills' },
    { label: 'Proof', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ],
  langSwitch: { label: 'Engineering', aria: 'Software and data engineering' },
  hero: {
    eyebrow: 'Information Broker · Taking requests',
    greeting: "I'm",
    headline: 'Tell me what you need to know. I’ll find it.',
    subheadline:
      'Market and company research, public records, clean datasets and monitoring. I find the information, check every claim against its source and deliver it ready to use. Specialist in Brazilian and Latin American data, working with clients worldwide.',
    ctaPrimary: 'Request information',
    ctaHref: '#contact',
    ctaWhatsapp: 'WhatsApp',
  },
  pillars: [
    {
      icon: 'search',
      title: 'Research on demand',
      description:
        'A question about a market, a company, a sector or a public record. I dig through official sources, registries and the open web and deliver a clear answer with a source for every claim.',
    },
    {
      icon: 'data',
      title: 'Clean datasets',
      description:
        'Data that is public but painful to use, cleaned, checked and ready: a spreadsheet, a CSV or an API instead of gigabytes of raw files. Brazilian government data is my home turf.',
    },
    {
      icon: 'bell',
      title: 'Monitoring & alerts',
      description:
        'Prices, listings, regulations, a competitor’s website. I watch them every day, keep the history and tell you the moment something changes.',
    },
  ],
  about: {
    title: 'How I work',
    kicker: '01 · Process',
    paragraphs: [
      'You tell me what you need to know and what you’ll use it for. I come back with the scope, the format and the price before any work starts. Then I research, and every finding goes through a second, separate check against its source before it reaches you.',
      'You get exactly what you asked for: a short report, a dataset or a running alert, with the sources listed so you can verify anything yourself. If the information doesn’t exist in public sources, I tell you upfront instead of guessing.',
      'I only use legal, public and open sources, respect each site’s terms, and never collect private personal data. What you ask me and what I find for you stays between us.',
    ],
    photoAlt: 'Profile photo',
    facts: [
      { label: 'Sources', value: 'Official & public' },
      { label: 'Delivery', value: 'Report · Dataset · Alert' },
      { label: 'Languages', value: 'English, Portuguese' },
    ],
  },
  skills: {
    title: 'What I find',
    kicker: '02 · Capabilities',
    groups: [
      { name: 'Markets & companies', items: ['Market sizing', 'Competitor maps', 'Company profiles', 'Supplier lists'] },
      {
        name: 'Brazil & LatAm public data',
        items: ['Company registries (CNPJ)', 'Census & demographics', 'Elections', 'Education', 'Public tenders'],
      },
      { name: 'Web intelligence', items: ['Prices & stock', 'Listings', 'Product catalogs', 'Change tracking'] },
      { name: 'Delivery', items: ['Excel / CSV', 'Written report', 'Dashboard', 'API', 'Daily alerts'] },
    ],
  },
  projects: {
    title: 'Proof of work',
    kicker: '03 · Public projects',
    labels: { problem: 'The problem', value: 'Why it’s valuable', live: 'Open it', repo: 'Source code' },
    items: [urnaPorUrna, enem, watchtower],
    building: {
      title: 'Got a question nobody answers?',
      text: 'Send it. If the answer is in public sources, I’ll find it. If it isn’t, I’ll tell you before you spend anything.',
      cta: 'See the code on GitHub',
    },
    experienceTitle: '',
    experience: [],
  },
  tutoring: null,
  plans: null,
  testimonials: null,
  engineering: null,
  contact: {
    title: 'Request information',
    kicker: '04 · Contact',
    intro: 'Describe what you need to know and what it’s for. I’ll reply with the scope, the format and the price.',
    whatsappMessage: "Hi Davi! I'd like to request some information: ",
    copyEmail: 'Copy email',
    copied: 'Copied!',
  },
  footer: en.footer,
  menu: en.menu,
};
