// Single source of truth for identity and contact links.
// TODO: replace every placeholder below with your real data.
export const site = {
  name: 'Seu Nome', // TODO
  initials: 'SN', // TODO
  email: 'voce@exemplo.com', // TODO
  // WhatsApp number in international format, digits only (55 + DDD + número)
  whatsapp: '5500000000000', // TODO
  linkedin: 'https://www.linkedin.com/in/seu-usuario', // TODO
  x: 'https://x.com/seu-usuario', // TODO
  github: 'https://github.com/seu-usuario', // TODO (set to '' to hide)
  location: 'Brasil', // TODO
};

export const whatsappUrl = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
