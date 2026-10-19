import type { SiteContent } from './types';

// TODO: all content below is placeholder — replace with your own.
export const pt: SiteContent = {
  meta: {
    title: 'Davi Coelho · Engenheiro de Software & Dados · Professor de Matemática e Física',
    description:
      'Engenheiro de Software e de Dados construindo sistemas escaláveis e pipelines confiáveis. Aulas particulares de Matemática e Física.',
  },
  nav: [
    { label: 'Sobre', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Aulas', id: 'tutoring' },
    { label: 'Contato', id: 'contact' },
  ],
  langSwitch: { label: 'EN', aria: 'View in English' },
  hero: {
    eyebrow: 'Disponível para novos projetos',
    greeting: 'Olá, eu sou',
    headline: 'Construo software, dados e conhecimento.',
    subheadline:
      'Engenheiro de Software e de Dados que transforma problemas complexos em sistemas simples e confiáveis — e professor de Matemática e Física nas horas vagas.',
    ctaPrimary: 'Fale comigo',
    ctaWhatsapp: 'WhatsApp',
  },
  pillars: [
    {
      icon: 'code',
      title: 'Engenharia de Software',
      description: 'APIs, back-ends e aplicações web robustas, testadas e prontas para escalar.',
    },
    {
      icon: 'data',
      title: 'Engenharia de Dados',
      description: 'Pipelines, data warehouses e modelagem que tornam dados em decisões.',
    },
    {
      icon: 'teach',
      title: 'Aulas de Matemática e Física',
      description: 'Aulas particulares com didática clara, do ensino médio ao ENEM e à faculdade.',
    },
  ],
  about: {
    title: 'Sobre mim',
    kicker: '01 · Sobre',
    paragraphs: [
      'Sou engenheiro de software e de dados com experiência em construir produtos digitais de ponta a ponta — da modelagem dos dados à aplicação em produção.',
      'Gosto de problemas difíceis, código limpo e de explicar ideias complexas de forma simples. Foi assim que o ensino entrou na minha vida: dou aulas particulares de Matemática e Física e ajudo alunos a ganharem confiança nas exatas.',
    ],
    photoAlt: 'Foto de perfil',
    facts: [
      { label: 'Experiência', value: '5+ anos' },
      { label: 'Localização', value: 'Brasil · Remoto' },
      { label: 'Idiomas', value: 'Português, Inglês' },
    ],
  },
  skills: {
    title: 'Stack & ferramentas',
    kicker: '02 · Skills',
    groups: [
      { name: 'Linguagens', items: ['Python', 'TypeScript', 'SQL', 'Go', 'Java'] },
      { name: 'Back-end & Web', items: ['Node.js', 'FastAPI', 'React', 'PostgreSQL', 'REST', 'GraphQL'] },
      { name: 'Dados', items: ['Apache Spark', 'Airflow', 'dbt', 'Kafka', 'BigQuery', 'Snowflake'] },
      { name: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
    ],
  },
  projects: {
    title: 'Projetos & experiência',
    kicker: '03 · Trabalho',
    linkLabel: 'Ver projeto',
    items: [
      {
        title: 'Plataforma de dados em tempo real',
        description: 'Pipeline de streaming processando milhões de eventos por dia com Kafka e Spark.',
        tags: ['Kafka', 'Spark', 'AWS'],
      },
      {
        title: 'API de pagamentos',
        description: 'Serviço de alta disponibilidade com observabilidade e testes automatizados.',
        tags: ['Node.js', 'PostgreSQL', 'Docker'],
      },
      {
        title: 'Data warehouse analítico',
        description: 'Modelagem dimensional com dbt reduzindo o tempo de relatórios de horas para minutos.',
        tags: ['dbt', 'BigQuery', 'Airflow'],
      },
    ],
    experienceTitle: 'Experiência',
    experience: [
      {
        period: '2023 — hoje',
        role: 'Engenheiro de Dados',
        description: 'Liderança da plataforma de dados e dos pipelines de ingestão.',
      },
      {
        period: '2020 — 2023',
        role: 'Engenheiro de Software',
        description: 'Desenvolvimento de APIs e serviços back-end em produção.',
      },
      {
        period: '2018 — hoje',
        role: 'Professor particular',
        description: 'Aulas de Matemática e Física para ensino médio, vestibular e graduação.',
      },
    ],
  },
  tutoring: {
    title: 'Aulas particulares',
    kicker: '04 · Aulas',
    intro:
      'Aulas de Matemática e Física com foco em entendimento real — não só decorar fórmulas. Plano de estudos personalizado para o seu objetivo.',
    subjects: [
      { name: 'Matemática', topics: ['Álgebra', 'Funções', 'Geometria', 'Trigonometria', 'Cálculo'] },
      { name: 'Física', topics: ['Cinemática', 'Dinâmica', 'Energia', 'Eletromagnetismo', 'Óptica'] },
    ],
    levelsTitle: 'Níveis',
    levels: ['Ensino Fundamental II', 'Ensino Médio', 'ENEM & Vestibulares', 'Ensino Superior'],
    formatTitle: 'Formato',
    formats: ['Online, ao vivo', 'Presencial (consulte a região)', 'Aulas avulsas ou pacotes'],
    cta: 'Agendar uma aula',
    whatsappMessage: 'Olá! Vi seu site e gostaria de saber mais sobre as aulas particulares.',
  },
  contact: {
    title: 'Vamos conversar?',
    kicker: '05 · Contato',
    intro: 'Projetos, oportunidades ou aulas — o caminho mais rápido é falar direto comigo.',
    whatsappMessage: 'Olá! Vi seu site e gostaria de conversar.',
    copyEmail: 'Copiar e-mail',
    copied: 'Copiado!',
  },
  footer: { rights: 'Todos os direitos reservados.', built: 'Feito com Astro.' },
  menu: { open: 'Abrir menu', close: 'Fechar menu' },
};
