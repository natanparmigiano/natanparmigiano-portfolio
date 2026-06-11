import parsedEn from './parsed-portfolio.json'
import parsedPt from './parsed-portfolio.pt.json'

const {
  aboutMeParagraphs,
  aboutPortfolioParagraphs,
  disclosureLevels,
  projects,
} = parsedEn

const {
  aboutMeParagraphs: aboutMeParagraphsPt,
  aboutPortfolioParagraphs: aboutPortfolioParagraphsPt,
  disclosureLevels: disclosureLevelsPt,
  projects: projectsPt,
} = parsedPt

export const portfolio = {
  en: {
    meta: {
      name: 'Natan Parmigiano',
      headline: 'Principal Engineer & Software Architect',
      location: 'São Caetano do Sul, São Paulo, Brazil',
      email: 'natan.parmigiano@gmail.com',
      linkedin: 'https://www.linkedin.com/in/natanparmigiano',
      resumeUrl: 'https://natan.parmigiano.tech/',
      focusAreas: ['Distributed Systems', 'Enterprise Software', 'Technical Leadership'],
      stats: [
        { value: String(projects.length), label: 'highlighted projects' },
        { value: '8+', label: 'years of experience' },
        { value: '2017', label: 'earliest highlighted project' },
      ],
    },
    nav: {
      aboutMe: 'About Me',
      aboutPortfolio: 'About This Portfolio',
      projects: 'Projects',
    },
    aboutMe: {
      title: 'About Me',
      paragraphs: aboutMeParagraphs,
    },
    aboutPortfolio: {
      title: 'About This Portfolio',
      paragraphs: aboutPortfolioParagraphs,
      disclosureTitle: 'Disclosure Levels',
      disclosureLevels,
    },
    hero: {
      eyebrow: 'Engineering Portfolio',
      tagline:
        'A curated collection of projects, systems, and engineering challenges — from data platforms and enterprise integrations to e-commerce and internal tools.',
      terminalFile: 'portfolio.sh',
      terminalPrompt: '$ ls projects/',
      terminalOutput: `${projects.length} highlighted projects`,
      terminalNote: 'Scroll down to explore each entry.',
    },
    projects: {
      title: 'Projects',
      items: projects,
    },
    labels: {
      viewProjects: 'View Projects',
      viewResume: 'My Resume',
      proudestProjects: 'My most relevant work',
      proudestShowcase: '🌟 Most Relevant Work',
      proudestRanking: 'Ranking',
      viewProject: 'View project',
      closeModal: 'Close project details',
      projectTimeline: 'Timeline',
      projectTimelineNav: 'Project navigation',
      teamSize: 'Team size',
      rolesPlayed: 'Roles I Played',
      techStack: 'Tech Stack',
      challengesLessons: 'Challenges & Lessons',
      challenge: 'Challenge',
      solution: 'Solution',
      lessonsLearned: 'Lessons Learned',
      viewOnLinkedIn: 'LinkedIn',
      email: 'Email',
      themeLight: 'Light mode',
      themeDark: 'Dark mode',
    },
  },
  pt: {
    meta: {
      name: 'Natan Parmigiano',
      headline: 'Principal Engineer & Arquiteto de Software',
      location: 'São Caetano do Sul, São Paulo, Brasil',
      email: 'natan.parmigiano@gmail.com',
      linkedin: 'https://www.linkedin.com/in/natanparmigiano',
      resumeUrl: 'https://natan.parmigiano.tech/',
      focusAreas: ['Sistemas Distribuídos', 'Software Corporativo', 'Liderança Técnica'],
      stats: [
        { value: String(projectsPt.length), label: 'projetos em destaque' },
        { value: '8+', label: 'anos de experiência' },
        { value: '2017', label: 'projeto em destaque mais antigo' },
      ],
    },
    nav: {
      aboutMe: 'Sobre Mim',
      aboutPortfolio: 'Sobre Este Portfólio',
      projects: 'Projetos',
    },
    aboutMe: {
      title: 'Sobre Mim',
      paragraphs: aboutMeParagraphsPt,
    },
    aboutPortfolio: {
      title: 'Sobre Este Portfólio',
      paragraphs: aboutPortfolioParagraphsPt,
      disclosureTitle: 'Níveis de Divulgação',
      disclosureLevels: disclosureLevelsPt,
    },
    hero: {
      eyebrow: 'Portfólio de Engenharia',
      tagline:
        'Uma coleção curada de projetos, sistemas e desafios de engenharia — de plataformas de dados e integrações corporativas a e-commerce e ferramentas internas.',
      terminalFile: 'portfolio.sh',
      terminalPrompt: '$ ls projetos/',
      terminalOutput: `${projectsPt.length} projetos em destaque`,
      terminalNote: 'Role para baixo para explorar cada entrada.',
    },
    projects: {
      title: 'Projetos',
      items: projectsPt,
    },
    labels: {
      viewProjects: 'Ver Projetos',
      viewResume: 'Meu Currículo',
      proudestProjects: 'Meu trabalho mais relevante',
      proudestShowcase: '🌟 Trabalho Mais Relevante',
      proudestRanking: 'Ranking',
      viewProject: 'Ver projeto',
      closeModal: 'Fechar detalhes do projeto',
      projectTimeline: 'Linha do tempo',
      projectTimelineNav: 'Navegação de projetos',
      teamSize: 'Tamanho do time',
      rolesPlayed: 'Papéis que Desempenhei',
      techStack: 'Stack Tecnológica',
      challengesLessons: 'Desafios e Aprendizados',
      challenge: 'Desafio',
      solution: 'Solução',
      lessonsLearned: 'Lições Aprendidas',
      viewOnLinkedIn: 'LinkedIn',
      email: 'E-mail',
      themeLight: 'Modo claro',
      themeDark: 'Modo escuro',
    },
  },
}

export const navSections = [
  { id: 'about-me', key: 'aboutMe' },
  { id: 'about-portfolio', key: 'aboutPortfolio' },
  { id: 'projects', key: 'projects' },
]
