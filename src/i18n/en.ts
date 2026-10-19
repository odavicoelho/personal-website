import type { SiteContent } from './types';

// TODO: all content below is placeholder — replace with your own.
export const en: SiteContent = {
  meta: {
    title: 'Davi Coelho · Software & Data Engineer',
    description:
      'Software and Data Engineer building scalable systems and reliable data pipelines. Based in Brazil, working remotely worldwide.',
  },
  nav: [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ],
  langSwitch: { label: 'PT', aria: 'Ver em português' },
  hero: {
    eyebrow: 'Open to new opportunities',
    greeting: "Hi, I'm",
    headline: 'I build software and data systems that scale.',
    subheadline:
      'Software and Data Engineer turning complex problems into simple, reliable systems. Based in Brazil, working remotely with teams worldwide.',
    ctaPrimary: 'Get in touch',
    ctaWhatsapp: 'WhatsApp',
  },
  pillars: [
    {
      icon: 'code',
      title: 'Software Engineering',
      description: 'Robust, well-tested APIs, back-ends and web applications built to scale.',
    },
    {
      icon: 'data',
      title: 'Data Engineering',
      description: 'Pipelines, data warehouses and modeling that turn data into decisions.',
    },
  ],
  about: {
    title: 'About me',
    kicker: '01 · About',
    paragraphs: [
      "I'm a software and data engineer with experience building digital products end to end — from data modeling to applications running in production.",
      'I enjoy hard problems, clean code and explaining complex ideas simply. I work remotely and communicate fluently in English and Portuguese.',
    ],
    photoAlt: 'Profile photo',
    facts: [
      { label: 'Experience', value: '5+ years' },
      { label: 'Location', value: 'Brazil · Remote' },
      { label: 'Languages', value: 'Portuguese, English' },
    ],
  },
  skills: {
    title: 'Stack & tools',
    kicker: '02 · Skills',
    groups: [
      { name: 'Languages', items: ['Python', 'TypeScript', 'SQL', 'Go', 'Java'] },
      { name: 'Back-end & Web', items: ['Node.js', 'FastAPI', 'React', 'PostgreSQL', 'REST', 'GraphQL'] },
      { name: 'Data', items: ['Apache Spark', 'Airflow', 'dbt', 'Kafka', 'BigQuery', 'Snowflake'] },
      { name: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
    ],
  },
  projects: {
    title: 'Projects & experience',
    kicker: '03 · Work',
    linkLabel: 'View project',
    items: [
      {
        title: 'Real-time data platform',
        description: 'Streaming pipeline processing millions of events per day with Kafka and Spark.',
        tags: ['Kafka', 'Spark', 'AWS'],
      },
      {
        title: 'Payments API',
        description: 'High-availability service with full observability and automated testing.',
        tags: ['Node.js', 'PostgreSQL', 'Docker'],
      },
      {
        title: 'Analytics data warehouse',
        description: 'Dimensional modeling with dbt that cut reporting time from hours to minutes.',
        tags: ['dbt', 'BigQuery', 'Airflow'],
      },
    ],
    experienceTitle: 'Experience',
    experience: [
      {
        period: '2023 — now',
        role: 'Data Engineer',
        description: 'Leading the data platform and ingestion pipelines.',
      },
      {
        period: '2020 — 2023',
        role: 'Software Engineer',
        description: 'Built APIs and back-end services running in production.',
      },
    ],
  },
  tutoring: null,
  contact: {
    title: "Let's talk",
    kicker: '04 · Contact',
    intro: 'Projects, roles or collaborations — the fastest way is to reach me directly.',
    whatsappMessage: "Hi! I found your website and I'd like to get in touch.",
    copyEmail: 'Copy email',
    copied: 'Copied!',
  },
  footer: { rights: 'All rights reserved.', built: 'Built with Astro.' },
  menu: { open: 'Open menu', close: 'Close menu' },
};
