import type { PageId, SiteContent } from './types';
import { en } from './en';
import { pt } from './pt';
import { aulas } from './aulas';
import { broker } from './broker';

const content: Record<PageId, SiteContent> = { en, pt, aulas, broker };

export const getContent = (page: PageId): SiteContent => content[page];

// /            → engineering, English
// /engenharia/ → engineering, Portuguese
// /aulas/      → tutoring, Portuguese
// /broker/     → information broker, English
const paths: Record<PageId, string> = { en: '/', pt: '/engenharia/', aulas: '/aulas/', broker: '/broker/' };
export const pathFor = (page: PageId): string => paths[page];

// The two engineering pages are translations of each other.
export const isEngineering = (page: PageId): boolean => page === 'en' || page === 'pt';

// Pages that show the about / skills / projects sections (everything but tutoring).
export const showsWork = (page: PageId): boolean => page !== 'aulas';

// Language switch target. Tutoring is Portuguese only, so it links to the Portuguese engineering page;
// the broker page is English only, so it links to the English engineering page.
export const switchTarget = (page: PageId): PageId =>
  page === 'en' ? 'pt' : page === 'pt' ? 'en' : page === 'broker' ? 'en' : 'pt';

export const htmlLang = (page: PageId): string => (page === 'en' || page === 'broker' ? 'en' : 'pt-BR');
