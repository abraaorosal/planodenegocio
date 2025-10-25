export const navigation = [
  { id: "contexto", label: "Contexto" },
  { id: "trilhas", label: "Trilhas" },
  { id: "operacao", label: "Operação" },
  { id: "financeiro", label: "Finanças" },
  { id: "impacto", label: "Impacto" },
  { id: "investidores", label: "Investidores" }
];

export const marketHighlights = [
  {
    title: "População Atendida",
    metric: "355.679",
    description: "habitantes em Caucaia (Censo 2022). Nova Metrópole é polo urbano em expansão."
  },
  {
    title: "Área de Influência",
    metric: "42,7 mil",
    description: "residentes em Nova Metrópole, Araturi, Jurema e Planalto. Público direto 20,5 mil (8-45 anos)."
  },
  {
    title: "Mercado Potencial",
    metric: "1.025",
    description: "alunos com 5% de captação. Alta demanda por educação tecnológica local."
  }
];

export const tracks = [
  {
    id: "digital",
    name: "Crescer no Digital",
    icon: "Sparkles",
    audience: "Crianças e adolescentes (8–14 anos)",
    description: "Jornadas lúdicas para despertar criatividade, lógica e protagonismo.",
    courses: [
      { name: "Despertar Digital", duration: "4 meses", focus: "Alfabetização digital e primeiros passos no computador." },
      { name: "Criadores Digitais", duration: "5 meses", focus: "Pensamento computacional e criação de jogos." },
      { name: "Desenvolvedor do Futuro", duration: "6 meses", focus: "Robótica educativa e primeiros códigos." }
    ]
  },
  {
    id: "dados",
    name: "Inteligência e Dados",
    icon: "LineChart",
    audience: "Jovens e adultos (15–40 anos)",
    description: "Formação aplicada em automação, análise e projetos baseados em dados reais.",
    courses: [
      { name: "Profissional de Dados", duration: "6 meses", focus: "Python, BI, dashboards e análise de dados." },
      { name: "Automação e IA Aplicada", duration: "6 meses", focus: "Agentes inteligentes e automação de processos." }
    ]
  },
  {
    id: "negocios",
    name: "Carreiras e Negócios",
    icon: "BriefcaseBusiness",
    audience: "Adultos e gestores",
    description: "Atualização profissional e crescimento de negócios com tecnologia.",
    courses: [
      { name: "Carreiras Tech", duration: "4 meses", focus: "Upskilling para transição para tecnologia." },
      { name: "Negócios e Tecnologia", duration: "5 meses", focus: "Gestão digital, marketing e produtividade." }
    ]
  },
  {
    id: "avancada",
    name: "Especialização Avançada",
    icon: "Cpu",
    audience: "Alunos avançados e profissionais",
    description: "Construção de sistemas completos e automações inteligentes.",
    courses: [
      { name: "Desenvolvedor Full Stack", duration: "8 meses", focus: "Aplicações web e mobile end-to-end." },
      { name: "Automação e IA Avançada", duration: "6 meses", focus: "APIs, automações empresariais e IA generativa." }
    ]
  }
];

export const operationHighlights = [
  {
    title: "Infraestrutura Premium",
    items: [
      "Sala equipada com 15 computadores e monitores de 27\"",
      "Espaço maker com kits de robótica e impressora 3D",
      "Mini auditório para masterclasses, meetups e pitch days"
    ]
  },
  {
    title: "Modelo Híbrido",
    items: [
      "12 turmas iniciais (manhã, tarde e noite) + estúdio EAD",
      "Calendário modular e diário interativo para alunos",
      "Capacidade ativa de 144 alunos/mês"
    ]
  },
  {
    title: "Stack Operacional",
    items: [
      "LMS proprietário com trilhas adaptativas",
      "CRM educacional com NPS, churn e MRR",
      "Dashboards em tempo real integrados a Power BI"
    ]
  }
];

export const costStructure = [
  { category: "Aluguel", value: 3000 },
  { category: "Energia e utilidades", value: 1500 },
  { category: "Professores/Monitores", value: 5000 },
  { category: "Recepção/Administrativo", value: 3000 },
  { category: "Internet e Softwares", value: 500 },
  { category: "Marketing Local", value: 1000 },
  { category: "Manutenção e Limpeza", value: 500 }
];

export const financialScenarios = [
  {
    name: "Conservador",
    alunos: 120,
    receita: 14400,
    lucro: -100,
    margem: "-",
    alert: "Ativar campanhas de bolsas corporativas e parcerias com escolas."
  },
  {
    name: "Base (Meta)",
    alunos: 160,
    receita: 19200,
    lucro: 4700,
    margem: "24%",
    alert: "Escala saudável com ocupação de 85% e upsell em cursos avançados."
  },
  {
    name: "Expansão",
    alunos: 240,
    receita: 28800,
    lucro: 14300,
    margem: "50%",
    alert: "Demanda requer segunda sala, docentes extras e célula EAD dedicada."
  }
];

export const growthPlan = [
  {
    year: 2025,
    alunos: 160,
    receita: 230000,
    estrategia: "Consolidação das trilhas e indicadores de recorrência."
  },
  {
    year: 2026,
    alunos: 320,
    receita: 460000,
    estrategia: "Lançamento EAD híbrido e segunda sala para expansão."
  },
  {
    year: 2027,
    alunos: 600,
    receita: 864000,
    estrategia: "Escala com franquia social ou nova unidade regional."
  }
];

export const impactHighlights = [
  {
    title: "Inclusão Digital",
    description: "Programas de bolsa com ONGs e escolas; meta de 30% das vagas subsidiadas."
  },
  {
    title: "Empregabilidade",
    description: "Geração de renda e inserção em carreiras tech com mentorias e trilhas de carreira."
  },
  {
    title: "Desenvolvimento Local",
    description: "Projetos de automação para pequenos negócios e consultoria digital para empreendedores."
  }
];

export const investorProposal = [
  {
    title: "Investimento Alvo",
    metric: "R$ 120k – 140k",
    description: "Equipamentos, reforma, marketing e capital de giro para 6 meses."
  },
  {
    title: "Participação Societária",
    metric: "≈ 30%",
    description: "Governança com comitê consultivo trimestral e relatórios indicadores chave."
  },
  {
    title: "Retorno Projetado",
    metric: "ROI ~50% a.a.",
    description: "Payback em 18–24 meses com expansão gradual e segunda unidade em 2027."
  }
];
