// Single source of truth for identity and contact links.
export const site = {
  name: 'Davi Coelho',
  initials: 'DC',
  email: 'coelhodavi.comercial@gmail.com',
  // WhatsApp number in international format, digits only (55 + DDD + número)
  whatsapp: '5522999985034',
  linkedin: 'https://www.linkedin.com/in/davi-coelho-b92350436', 
  x: 'https://x.com/coeeIIho',
  github: 'https://github.com/odavicoelho',
  location: 'Brasil',
};

export const whatsappUrl = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
