import type { SiteContent } from './types';
import { pt } from './pt';

// The information broker page in Portuguese (/broker/pt/), a translation of broker.ts.
// Voice: full confidence about what Davi can do; never invented clients, jobs, reviews or numbers.
export const brokerPt: SiteContent = {
  meta: {
    title: 'Davi Coelho · Information Broker',
    description:
      'Você pergunta, eu encontro. Pesquisa de mercado e de empresas, registros públicos, bases de dados limpas e monitoramento, com a fonte de cada informação. Especialista em dados do Brasil e da América Latina.',
  },
  nav: [
    { label: 'Como trabalho', id: 'about' },
    { label: 'O que encontro', id: 'skills' },
    { label: 'Provas', id: 'projects' },
    { label: 'Contato', id: 'contact' },
  ],
  langSwitch: { label: 'EN', aria: 'View in English' },
  engineeringLink: { label: 'Engenharia', aria: 'Engenharia de Software e Dados' },
  hero: {
    eyebrow: 'Information Broker · Aceitando pedidos',
    greeting: 'Eu sou',
    headline: 'Me diga o que você precisa saber. Eu encontro.',
    subheadline:
      'Pesquisa de mercado e de empresas, registros públicos, bases de dados limpas e monitoramento. Eu encontro a informação, confiro cada dado com a fonte e entrego pronto para usar. Especialista em dados do Brasil e da América Latina, atendendo clientes de qualquer lugar.',
    ctaPrimary: 'Pedir uma informação',
    ctaHref: '#contact',
    ctaWhatsapp: 'WhatsApp',
  },
  pillars: [
    {
      icon: 'search',
      title: 'Pesquisa sob demanda',
      description:
        'Uma pergunta sobre um mercado, uma empresa, um setor ou um registro público. Eu vasculho fontes oficiais, cadastros e a internet aberta e entrego uma resposta clara, com a fonte de cada informação.',
    },
    {
      icon: 'data',
      title: 'Bases de dados limpas',
      description:
        'Dados públicos, mas difíceis de usar, limpos, conferidos e prontos: uma planilha, um CSV ou uma API no lugar de gigabytes de arquivos brutos. Dados do governo brasileiro são a minha especialidade.',
    },
    {
      icon: 'bell',
      title: 'Monitoramento e alertas',
      description:
        'Preços, anúncios, normas, o site de um concorrente. Eu acompanho todos os dias, guardo o histórico e aviso no momento em que algo muda.',
    },
  ],
  about: {
    title: 'Como eu trabalho',
    kicker: '01 · Processo',
    paragraphs: [
      'Você me conta o que precisa saber e para que vai usar. Eu volto com o escopo, o formato e o preço antes de começar. Depois eu pesquiso, e cada achado passa por uma segunda conferência, separada, com a fonte antes de chegar até você.',
      'Você recebe exatamente o que pediu: um relatório curto, uma base de dados ou um alerta funcionando, com as fontes listadas para conferir o que quiser. Se a informação não existe em fontes públicas, eu aviso logo, em vez de chutar.',
      'Eu só uso fontes legais, públicas e abertas, respeito os termos de cada site e nunca coleto dados pessoais privados. O que você me pergunta e o que eu encontro para você fica entre nós.',
    ],
    photoAlt: 'Foto de perfil',
    facts: [
      { label: 'Fontes', value: 'Oficiais e públicas' },
      { label: 'Entrega', value: 'Relatório · Base · Alerta' },
      { label: 'Idiomas', value: 'Português, inglês' },
    ],
  },
  skills: {
    title: 'O que eu encontro',
    kicker: '02 · Capacidades',
    groups: [
      { name: 'Mercados e empresas', items: ['Tamanho de mercado', 'Mapa de concorrentes', 'Perfil de empresas', 'Lista de fornecedores'] },
      {
        name: 'Dados públicos do Brasil e da América Latina',
        items: ['Cadastro de empresas (CNPJ)', 'Censo e demografia', 'Eleições', 'Educação', 'Licitações'],
      },
      { name: 'Inteligência na internet', items: ['Preços e estoque', 'Anúncios', 'Catálogos', 'Acompanhamento de mudanças'] },
      { name: 'Entrega', items: ['Excel / CSV', 'Relatório escrito', 'Dashboard', 'API', 'Alertas diários'] },
    ],
  },
  projects: {
    title: 'Provas do trabalho',
    kicker: '03 · Projetos públicos',
    labels: { problem: 'O problema', value: 'Por que tem valor', live: 'Abrir', repo: 'Código-fonte' },
    items: pt.projects!.items,
    building: {
      title: 'Tem uma pergunta que ninguém responde?',
      text: 'Manda. Se a resposta está em fontes públicas, eu encontro. Se não está, eu aviso antes de você gastar qualquer coisa.',
      cta: 'Ver o código no GitHub',
    },
    experienceTitle: '',
    experience: [],
  },
  tutoring: null,
  plans: null,
  testimonials: null,
  engineering: null,
  contact: {
    title: 'Pedir uma informação',
    kicker: '04 · Contato',
    intro: 'Descreva o que você precisa saber e para que é. Eu respondo com o escopo, o formato e o preço.',
    whatsappMessage: 'Oi, Davi! Quero pedir uma informação: ',
    copyEmail: 'Copiar e-mail',
    copied: 'Copiado!',
  },
  footer: pt.footer,
  menu: pt.menu,
};
