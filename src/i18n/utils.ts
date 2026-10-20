import type { PageId, SiteContent } from './types';
import { en } from './en';
import { pt } from './pt';
import { aulas } from './aulas';

const content: Record<PageId, SiteContent> = { en, pt, aulas };

export const getContent = (page: PageId): SiteContent => content[page];

// /            → engineering, English
// /engenharia/ → engineering, Portuguese
// /aulas/      → tutoring, Portuguese
const paths: Record<PageId, string> = { en: '/', pt: '/engenharia/', aulas: '/aulas/' };
export const pathFor = (page: PageId): string => paths[page];

export const isEngineering = (page: PageId): boolean => page !== 'aulas';

// Language switch target. Tutoring is Portuguese only, so it links to the Portuguese engineering page.
export const switchTarget = (page: PageId): PageId => (page === 'en' ? 'pt' : page === 'pt' ? 'en' : 'pt');

export const htmlLang = (page: PageId): string => (page === 'en' ? 'en' : 'pt-BR');
