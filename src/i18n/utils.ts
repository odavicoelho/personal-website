import type { Lang, SiteContent } from './types';
import { pt } from './pt';
import { en } from './en';

const content: Record<Lang, SiteContent> = { pt, en };

export const getContent = (lang: Lang): SiteContent => content[lang];

export const pathFor = (lang: Lang): string => (lang === 'pt' ? '/' : '/en/');

export const otherLang = (lang: Lang): Lang => (lang === 'pt' ? 'en' : 'pt');

export const htmlLang = (lang: Lang): string => (lang === 'pt' ? 'pt-BR' : 'en');
