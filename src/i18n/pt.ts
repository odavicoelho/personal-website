import type { SiteContent } from './types';

export const pt: SiteContent = {
  meta: {
    title: 'Davi Coelho · Engenheiro de Software e Dados',
    description:
      'Engenheiro de Software e de Dados autônomo. Back-ends em Python, automações, pipelines de dados e integrações com IA. No Brasil, trabalhando remotamente.',
  },
  nav: [
    { label: 'Sobre', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Contato', id: 'contact' },
  ],
  langSwitch: { label: 'EN', aria: 'View in English' },
  tutoringLink: { label: 'Aulas', aria: 'Aulas de Matemática e Física' },
  hero: {
    eyebrow: 'Autônomo · Disponível para projetos',
    greeting: 'Olá, eu sou',
    headline: 'Sistemas de software e dados que simplesmente funcionam.',
    subheadline:
      'Engenheiro de Software e de Dados. Projeto e construo back-ends, automações, pipelines de dados e integrações com IA — arquitetura limpa, confiável em produção. No Brasil, trabalhando remotamente com clientes de qualquer lugar.',
    ctaPrimary: 'Fale comigo',
    ctaHref: '#contact',
    ctaWhatsapp: 'WhatsApp',
  },
  pillars: [
    {
      icon: 'code',
      title: 'Engenharia de Software',
      description: 'APIs, back-ends, automações e as aplicações web em volta deles — testados, documentados, feitos para durar.',
    },
    {
      icon: 'data',
      title: 'Engenharia de Dados',
      description: 'Pipelines, bancos de dados e integrações com IA que transformam dados espalhados em decisões confiáveis.',
    },
  ],
  about: {
    title: 'Sobre mim',
    kicker: '01 · Sobre',
    paragraphs: [
      'Sou engenheiro de software e de dados autônomo. Projeto sistemas de ponta a ponta — da modelagem dos dados ao serviço rodando em produção — com foco em arquitetura limpa e em coisas que continuam funcionando depois da entrega.',
      'Minha base é matemática e física, que ensino desde 2018. Isso define como eu trabalho: quebrar problemas difíceis em partes, raciocinar a partir dos fundamentos e explicar o resultado com clareza para quem depende dele.',
    ],
    photoAlt: 'Foto de perfil',
    facts: [
      { label: 'Foco', value: 'Python · Dados · IA' },
      { label: 'Local', value: 'Brasil · Remoto' },
      { label: 'Idiomas', value: 'Português, Inglês' },
    ],
  },
  skills: {
    title: 'Stack & ferramentas',
    kicker: '02 · Skills',
    groups: [
      { name: 'Linguagens', items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'C'] },
      { name: 'Back-end & Web', items: ['FastAPI', 'Node.js', 'REST', 'React', 'Astro'] },
      { name: 'Dados & IA', items: ['PostgreSQL', 'pandas', 'DuckDB', 'Pipelines ETL', 'APIs de LLM', 'RAG'] },
      { name: 'Ferramentas', items: ['Git', 'Docker', 'Linux', 'CI/CD', 'Vercel'] },
    ],
  },
  projects: {
    title: 'Projetos',
    kicker: '03 · Trabalho',
    labels: { problem: 'O problema', value: 'Por que tem valor', live: 'Dashboard ao vivo', repo: 'Código-fonte' },
    items: [
      {
        title: 'Watchtower',
        status: 'No ar · roda todo dia',
        tagline: 'Um pipeline de monitoramento que acompanha sites e APIs, guarda o histórico e avisa quando algo muda.',
        description:
          'Todo dia ele coleta as cotações do Banco Central, os preços de criptomoedas da Kraken e um catálogo de 200 livros. Guarda todo o histórico em SQLite, compara hoje com ontem e abre um alerta quando uma regra dispara. Roda sozinho no GitHub Actions e publica um dashboard ao vivo, sem custo.',
        problem:
          'Informações importantes, como preços da concorrência, estoque de fornecedores e câmbio, ficam em sites que ninguém tem tempo de checar todo dia. Checar na mão é lento e coisas passam batido. Não checar é descobrir tarde demais. E como ninguém anota, não existe histórico para enxergar uma tendência.',
        value: [
          'Ninguém mais precisa checar na mão: roda todo dia e não esquece. 30 minutos por dia de checagem manual são cerca de 11 horas por mês de volta.',
          'Você fica sabendo da mudança no mesmo dia: uma queda de preço, um item de volta ao estoque, o dólar passando da sua cotação.',
          'Ele constrói um histórico que a maioria dos sites não mostra, para enxergar tendências e padrões depois.',
          'Praticamente de graça para rodar: sem servidor, sem assinatura.',
        ],
        tags: ['Python', 'Web scraping', 'httpx', 'pydantic', 'SQLite', 'GitHub Actions'],
        liveUrl: 'https://odavicoelho.github.io/watchtower/',
        repoUrl: 'https://github.com/odavicoelho/watchtower',
      },
    ],
    building: {
      title: 'Mais em andamento',
      text: 'Próximos: um pipeline de dados públicos brasileiros e um assistente de documentos com IA. Cada um é publicado com o código-fonte e uma explicação da arquitetura.',
      cta: 'Acompanhar no GitHub',
    },
    experienceTitle: 'Trajetória',
    experience: [
      {
        period: 'Hoje',
        role: 'Engenheiro de Software e Dados',
        company: 'Autônomo',
        description: 'Back-ends, automações, pipelines de dados e integrações com IA para clientes, de forma remota.',
      },
      {
        period: '2018 — hoje',
        role: 'Professor de Matemática e Física',
        company: 'Autônomo',
        description: 'Aulas particulares para Ensino Fundamental e Médio — explicando ideias complexas de forma simples, toda semana.',
      },
      {
        period: 'Certificação',
        role: 'Desenvolvedor Web Full-Stack',
        company: 'SENAI',
        description: 'Desenvolvimento web full-stack: back-end, bancos de dados e front-end.',
      },
    ],
  },
  tutoring: null,
  plans: null,
  engineering: null,
  contact: {
    title: 'Vamos conversar?',
    kicker: '04 · Contato',
    intro: 'Projetos, contratos ou parcerias — o caminho mais rápido é falar direto comigo.',
    whatsappMessage: 'Olá! Vi seu site e gostaria de conversar sobre um projeto.',
    copyEmail: 'Copiar e-mail',
    copied: 'Copiado!',
  },
  footer: { rights: 'Todos os direitos reservados.', built: 'Feito com Astro.' },
  menu: { open: 'Abrir menu', close: 'Fechar menu' },
};
