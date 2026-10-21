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
  // short status shown as a pill, e.g. "Live · runs daily"
  status?: string;
  tagline: string;
  description: string;
  // the problem it solves, and why that's valuable to a company or a person
  problem: string;
  value: string[];
  tags: string[];
  liveUrl?: string;
  // overrides labels.live for this project's button
  liveLabel?: string;
  repoUrl?: string;
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
    labels: { problem: string; value: string; live: string; repo: string };
    // shown alone while there are no projects, and as a note below them afterwards
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
