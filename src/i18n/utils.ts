import type { PageId, SiteContent } from './types';
import { en } from './en';
import { pt } from './pt';
import { aulas } from './aulas';
import { broker } from './broker';
import { brokerPt } from './brokerPt';

const content: Record<PageId, SiteContent> = { en, pt, aulas, broker, brokerPt };

export const getContent = (page: PageId): SiteContent => content[page];

// /            → engineering, English
// /engenharia/ → engineering, Portuguese
// /aulas/      → tutoring, Portuguese
// /broker/     → information broker, English
// /broker/pt/  → information broker, Portuguese
const paths: Record<PageId, string> = {
  en: '/',
  pt: '/engenharia/',
  aulas: '/aulas/',
  broker: '/broker/',
  brokerPt: '/broker/pt/',
};
export const pathFor = (page: PageId): string => paths[page];

// Pages that show the about / skills / projects sections (everything but tutoring).
export const showsWork = (page: PageId): boolean => page !== 'aulas';

// Pages that exist in English and Portuguese, and the translation of each.
const translations: Partial<Record<PageId, PageId>> = { en: 'pt', pt: 'en', broker: 'brokerPt', brokerPt: 'broker' };
export const hasTranslation = (page: PageId): boolean => page in translations;

// Language switch target. Tutoring is Portuguese only, so it links to the Portuguese engineering page.
export const switchTarget = (page: PageId): PageId => translations[page] ?? 'pt';

export const htmlLang = (page: PageId): string => (page === 'en' || page === 'broker' ? 'en' : 'pt-BR');

// "EN" or "PT", for the language switch.
export const langCode = (page: PageId): string => (htmlLang(page) === 'en' ? 'EN' : 'PT');

// The broker page and the engineering page in the same language as `page`.
export const brokerFor = (page: PageId): PageId => (htmlLang(page) === 'en' ? 'broker' : 'brokerPt');
export const engineeringFor = (page: PageId): PageId => (htmlLang(page) === 'en' ? 'en' : 'pt');
