import type { SiteContent } from './types';

export const aulas: SiteContent = {
  meta: {
    title: 'Aulas particulares de Matemática e Física · Davi Coelho · Nova Friburgo e online',
    description:
      'Aulas particulares de Matemática e Física para Ensino Fundamental II e Ensino Médio, presenciais em Nova Friburgo (RJ) ou online. Professor desde 2018.',
  },
  nav: [
    { label: 'Aulas', id: 'tutoring' },
    { label: 'Planos', id: 'plans' },
    { label: 'Sobre', id: 'about' },
    { label: 'Contato', id: 'contact' },
  ],
  langSwitch: { label: 'Engenharia', aria: 'Engenharia de Software e Dados' },
  hero: {
    eyebrow: 'Vagas abertas · Nova Friburgo e online',
    greeting: 'Olá, eu sou',
    headline: 'Matemática e Física com entendimento de verdade.',
    subheadline:
      'Professor particular desde 2018, para Ensino Fundamental II e Ensino Médio. Aulas presenciais em Nova Friburgo ou online, com um plano de estudos feito para o objetivo de cada aluno.',
    ctaPrimary: 'Ver planos',
    ctaHref: '#plans',
    ctaWhatsapp: 'WhatsApp',
  },
  pillars: [
    {
      icon: 'teach',
      title: 'Aulas de Matemática e Física',
      description: 'Do Ensino Fundamental II ao Ensino Médio e ENEM — foco em entender, não em decorar fórmulas.',
    },
    {
      icon: 'code',
      title: 'Engenharia de Software e Dados',
      description: 'Sistemas, automações, dados e integrações com IA para empresas e projetos.',
    },
  ],
  about: {
    title: 'Sobre mim',
    kicker: '04 · Sobre',
    paragraphs: [
      'Dou aulas de Matemática e Física desde 2018. Meu foco é fazer o aluno entender o porquê de cada conteúdo — quando a lógica fica clara, as notas e a confiança vêm junto.',
      'Cada aluno tem um plano de estudos próprio, montado a partir das dificuldades e dos objetivos dele: recuperar uma nota, acompanhar a escola com tranquilidade ou se preparar para o ENEM.',
      'Também sou engenheiro de software e de dados — a mesma forma de pensar que uso para resolver problemas em sistemas, levo para a sala de aula.',
    ],
    photoAlt: 'Foto de perfil',
    facts: [
      { label: 'Experiência', value: 'Professor desde 2018' },
      { label: 'Local', value: 'Nova Friburgo · Online' },
      { label: 'Matérias', value: 'Matemática e Física' },
    ],
  },
  skills: null,
  projects: null,
  tutoring: {
    title: 'Aulas particulares',
    kicker: '01 · Aulas',
    intro:
      'Aulas de Matemática e Física com foco em entendimento real — não só decorar fórmulas. Plano de estudos personalizado para o seu objetivo.',
    subjects: [
      { name: 'Matemática', topics: ['Álgebra', 'Funções', 'Geometria', 'Trigonometria', 'Estatística'] },
      { name: 'Física', topics: ['Cinemática', 'Dinâmica', 'Energia', 'Eletromagnetismo', 'Óptica'] },
    ],
    levelsTitle: 'Níveis',
    levels: ['Ensino Fundamental II', 'Ensino Médio', 'ENEM & Vestibulares'],
    formatTitle: 'Formato',
    formats: ['Presencial em Nova Friburgo', 'Online, ao vivo', 'Aulas de 1h30'],
    cta: 'Agendar aula diagnóstica grátis',
    whatsappMessage: 'Olá! Vi seu site e gostaria de agendar a aula diagnóstica gratuita.',
  },
  plans: {
    title: 'Planos',
    kicker: '02 · Planos',
    intro: 'Planos mensais com aulas de 1h30. Escolha o ritmo que combina com o momento do aluno.',
    perMonth: '/mês',
    cta: 'Quero este plano',
    whatsappMessage: 'Olá! Vi seu site e tenho interesse no plano {plan}.',
    items: [
      {
        name: 'Essencial',
        tagline: 'Para manter o ritmo e tirar as dúvidas da semana.',
        price: 'R$ 360',
        perHour: '≈ R$ 60 por hora',
        features: ['1 aula por semana', '4 aulas por mês · 6 horas', 'Revisão do conteúdo da escola'],
      },
      {
        name: 'Regular',
        tagline: 'Acompanhamento contínuo ao longo do ano letivo.',
        price: 'R$ 650',
        perHour: '≈ R$ 54 por hora',
        features: ['2 aulas por semana', '8 aulas por mês · 12 horas', 'Acompanhamento de provas e trabalhos'],
        badge: 'Mais escolhido',
        highlight: true,
      },
      {
        name: 'Intensivo',
        tagline: 'Para provas, recuperação e ENEM.',
        price: 'R$ 900',
        perHour: '≈ R$ 50 por hora',
        features: ['3 aulas por semana', '12 aulas por mês · 18 horas', 'Preparação focada em provas, recuperação e ENEM'],
        badge: 'Vagas limitadas',
      },
    ],
    extrasTitle: 'Bom saber',
    extras: [
      'Aula diagnóstica online de 30 min grátis',
      'Aula avulsa: R$ 75 por hora',
      'Indicado por um aluno? Ganhe 10% de desconto',
      'Presencial em Nova Friburgo ou online, mesmo valor',
      'Pagamento mensal antecipado via PIX, até o dia 5',
      'Remarcação com 24h de antecedência; faltas sem aviso contam como aula dada',
    ],
  },
  testimonials: {
    title: 'O que dizem os alunos',
    kicker: '03 · Depoimentos',
    items: [
      {
        name: 'Beatriz',
        message:
          'Oiii, passando pra te avisar que eu acabei de pegar a correção da prova e tirei a nota que eu precisava!!! Inclusive caiu um exercício muito parecido com o que você passou de revisão. Muito obrigada!!',
        role: 'Aluna do Primeiro Ano do Ensino Médio',
      },
      {
        name: 'Larissa',
        message:
          'Achei o jeito que você explica muito diferente do que eu vi na escola! Lá é tudo meio aleatório e sem conexão com o que está sendo passado. Com você eu finalmente consegui ter uma noção do que é matemática de fato. Adorei!!',
        role: 'Aluna do Ensino Fundamental II',
      },
      {
        name: 'Gabriel',
        message:
          'Perguntei no meu professor da escola uma definição que você passou na primeira aula e ele não conseguiu explicar no mesmo nível kkkk Acabou que a minha aula principal de matemática está sendo com você e a escola virou só algo que eu preciso fazer pra passar de ano.',
        role: 'Aluno do Segundo Ano do Ensino Médio em preparação para faculdade',
      },
    ],
  },
  engineering: {
    title: 'Também sou engenheiro de software e de dados',
    kicker: 'Para empresas',
    text: 'Desenvolvo sistemas, automações, pipelines de dados e integrações com IA. Se a sua empresa ou projeto precisa disso, veja meu portfólio.',
    cta: 'Ver portfólio',
  },
  contact: {
    title: 'Vamos conversar?',
    kicker: '05 · Contato',
    intro: 'Agende a aula diagnóstica gratuita ou tire suas dúvidas — o caminho mais rápido é o WhatsApp.',
    whatsappMessage: 'Olá! Vi seu site e gostaria de saber mais sobre as aulas particulares.',
    copyEmail: 'Copiar e-mail',
    copied: 'Copiado!',
  },
  footer: { rights: 'Todos os direitos reservados.', built: 'Feito com Astro.' },
  menu: { open: 'Abrir menu', close: 'Fechar menu' },
};
