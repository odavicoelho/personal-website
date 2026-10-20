// en and pt are the engineering page in each language; aulas is the tutoring page (Portuguese only)
export type PageId = 'en' | 'pt' | 'aulas';

export type PillarIcon = 'code' | 'data' | 'teach';

export interface Pillar {
  icon: PillarIcon;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface Plan {
  name: string;
  tagline: string;
  price: string;
  perHour: string;
  features: string[];
  badge?: string;
  highlight?: boolean;
}

export interface Job {
  period: string;
  role: string;
  company?: string;
  description: string;
}

export interface SiteContent {
  meta: { title: string; description: string };
  nav: { label: string; id: string }[];
  langSwitch: { label: string; aria: string };
  // nav button linking to the tutoring page; omit to hide it
  tutoringLink?: { label: string; aria: string };
  hero: {
    eyebrow: string;
    greeting: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    // in-page anchor the primary button jumps to, e.g. '#contact'
    ctaHref: string;
    ctaWhatsapp: string;
  };
  pillars: Pillar[];
  about: {
    title: string;
    kicker: string;
    paragraphs: string[];
    photoAlt: string;
    facts: { label: string; value: string }[];
  };
  // null hides the section
  skills: null | {
    title: string;
    kicker: string;
    groups: { name: string; items: string[] }[];
  };
  // null hides the section; empty items shows the "currently building" panel
  projects: null | {
    title: string;
    kicker: string;
    items: Project[];
    linkLabel: string;
    building: { title: string; text: string; cta: string };
    experienceTitle: string;
    experience: Job[];
  };
  // null hides the tutoring section and its nav item
  tutoring: null | {
    title: string;
    kicker: string;
    intro: string;
    subjects: { name: string; topics: string[] }[];
    levelsTitle: string;
    levels: string[];
    formatTitle: string;
    formats: string[];
    cta: string;
    whatsappMessage: string;
  };
  // null hides the section
  plans: null | {
    title: string;
    kicker: string;
    intro: string;
    items: Plan[];
    perMonth: string;
    cta: string;
    // {plan} is replaced with the plan name
    whatsappMessage: string;
    extrasTitle: string;
    extras: string[];
  };
  // short note linking to the engineering page; null hides it
  engineering: null | {
    title: string;
    kicker: string;
    text: string;
    cta: string;
  };
  contact: {
    title: string;
    kicker: string;
    intro: string;
    whatsappMessage: string;
    copyEmail: string;
    copied: string;
  };
  footer: { rights: string; built: string };
  menu: { open: string; close: string };
}
