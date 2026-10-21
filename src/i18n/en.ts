import type { SiteContent } from './types';

export const en: SiteContent = {
  meta: {
    title: 'Davi Coelho · Software & Data Engineer',
    description:
      'Self-employed Software and Data Engineer. Python back-ends, automation, data pipelines and AI integrations. Based in Brazil, working remotely worldwide.',
  },
  nav: [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ],
  langSwitch: { label: 'PT', aria: 'Ver em português' },
  hero: {
    eyebrow: 'Self-employed · Available for projects',
    greeting: "Hi, I'm",
    headline: 'I engineer software and data systems that just work.',
    subheadline:
      'Software and Data Engineer. I design and build back-ends, automations, data pipelines and AI integrations — clean architecture, reliable in production. Based in Brazil, working remotely with clients worldwide.',
    ctaPrimary: 'Get in touch',
    ctaHref: '#contact',
    ctaWhatsapp: 'WhatsApp',
  },
  pillars: [
    {
      icon: 'code',
      title: 'Software Engineering',
      description: 'APIs, back-ends, automations and the web applications around them — tested, documented, built to last.',
    },
    {
      icon: 'data',
      title: 'Data Engineering',
      description: 'Pipelines, databases and AI integrations that turn scattered data into reliable decisions.',
    },
  ],
  about: {
    title: 'About me',
    kicker: '01 · About',
    paragraphs: [
      "I'm a self-employed software and data engineer. I design systems end to end — from the data model to the service running in production — with a focus on clean architecture and on things that keep working after handoff.",
      "My background is in mathematics and physics, which I've taught since 2018. It shapes how I work: break hard problems down, reason from first principles, and explain the result clearly to the people who rely on it.",
    ],
    photoAlt: 'Profile photo',
    facts: [
      { label: 'Focus', value: 'Python · Data · AI' },
      { label: 'Location', value: 'Brazil · Remote' },
      { label: 'Languages', value: 'English, Portuguese' },
    ],
  },
  skills: {
    title: 'Stack & tools',
    kicker: '02 · Skills',
    groups: [
      { name: 'Languages', items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'C'] },
      { name: 'Back-end & Web', items: ['FastAPI', 'Node.js', 'REST', 'React', 'Astro'] },
      { name: 'Data & AI', items: ['PostgreSQL', 'pandas', 'DuckDB', 'ETL pipelines', 'LLM APIs', 'RAG'] },
      { name: 'Tooling', items: ['Git', 'Docker', 'Linux', 'CI/CD', 'Vercel'] },
    ],
  },
  projects: {
    title: 'Projects',
    kicker: '03 · Work',
    labels: { problem: 'The problem', value: 'Why it’s valuable', live: 'Live dashboard', repo: 'Source code' },
    items: [
      {
        title: 'Watchtower',
        status: 'Live · runs every day',
        tagline: 'A monitoring pipeline that watches websites and APIs, keeps their history and alerts on changes.',
        description:
          'Every day it collects exchange rates from Banco Central, crypto prices from Kraken and a 200-book store catalogue. It keeps the full history in SQLite, compares today with yesterday and opens an alert when a rule fires. It runs itself on GitHub Actions and publishes a live dashboard, at zero cost.',
        problem:
          'Important information like competitor prices, supplier stock and exchange rates lives on websites nobody has time to check every day. Checking by hand is slow and things get missed. Not checking means finding out too late. And since nobody writes it down, there’s no history to spot a trend.',
        value: [
          'No more checking by hand: it runs every day and never forgets. 30 minutes a day of manual checks is about 11 hours a month back.',
          'You hear about a change the day it happens: a price drop, an item back in stock, the dollar crossing your rate.',
          'It builds a history most sites never show, so you can see trends and patterns later.',
          'Practically free to run: no server, no subscription.',
        ],
        tags: ['Python', 'Web scraping', 'httpx', 'pydantic', 'SQLite', 'GitHub Actions'],
        liveUrl: 'https://odavicoelho.github.io/watchtower/',
        repoUrl: 'https://github.com/odavicoelho/watchtower',
      },
    ],
    building: {
      title: 'More in progress',
      text: 'Next up: a data pipeline on Brazilian public data and an AI document assistant. Each one ships with its source code and an architecture write-up.',
      cta: 'Follow on GitHub',
    },
    experienceTitle: 'Background',
    experience: [
      {
        period: 'Now',
        role: 'Software & Data Engineer',
        company: 'Self-employed',
        description: 'Back-ends, automation, data pipelines and AI integrations for clients, delivered remotely.',
      },
      {
        period: '2018 — now',
        role: 'Math & Physics Tutor',
        company: 'Self-employed',
        description: 'Private tutoring for middle and high school students — explaining complex ideas simply, every week.',
      },
      {
        period: 'Certification',
        role: 'Full-Stack Web Developer',
        company: 'SENAI',
        description: 'Full-stack web development: back-end, databases and front-end.',
      },
    ],
  },
  tutoring: null,
  plans: null,
  engineering: null,
  contact: {
    title: "Let's talk",
    kicker: '04 · Contact',
    intro: 'Projects, contracts or collaborations — the fastest way is to reach me directly.',
    whatsappMessage: "Hi! I found your website and I'd like to get in touch.",
    copyEmail: 'Copy email',
    copied: 'Copied!',
  },
  footer: { rights: 'All rights reserved.', built: 'Built with Astro.' },
  menu: { open: 'Open menu', close: 'Close menu' },
};
