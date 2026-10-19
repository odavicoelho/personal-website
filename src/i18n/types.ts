export type Lang = 'pt' | 'en';

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
  hero: {
    eyebrow: string;
    greeting: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
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
  skills: {
    title: string;
    kicker: string;
    groups: { name: string; items: string[] }[];
  };
  projects: {
    title: string;
    kicker: string;
    items: Project[];
    linkLabel: string;
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
