export function buildPdfContent(data, lang = 'en') {
  const projectCount = String(data.projects.length)

  const shared = {
    en: {
      meta: {
        name: 'Natan Parmigiano',
        headline: 'Principal Engineer & Software Architect',
        location: 'São Caetano do Sul, São Paulo, Brazil',
        email: 'natan.parmigiano@gmail.com',
        linkedin: 'https://www.linkedin.com/in/natanparmigiano',
        focusAreas: ['Distributed Systems', 'Enterprise Software', 'Technical Leadership'],
        stats: [
          { value: projectCount, label: 'highlighted projects' },
          { value: '8+', label: 'years of experience' },
          { value: '2017', label: 'earliest highlighted project' },
        ],
      },
      aboutMe: { title: 'About Me' },
      aboutPortfolio: { title: 'About This Portfolio', disclosureTitle: 'Disclosure Levels' },
      projects: { title: 'Projects' },
      labels: {
        proudestProjects: 'My most relevant work',
        proudestShowcase: '🌟 Most Relevant Work',
        proudestRanking: 'Ranking',
        teamSize: 'Team size',
        rolesPlayed: 'Roles I Played',
        techStack: 'Tech Stack',
        challengesLessons: 'Challenges & Lessons',
        challenge: 'Challenge',
        solution: 'Solution',
        lessonsLearned: 'Lessons Learned',
      },
    },
    pt: {
      meta: {
        name: 'Natan Parmigiano',
        headline: 'Principal Engineer & Arquiteto de Software',
        location: 'São Caetano do Sul, São Paulo, Brasil',
        email: 'natan.parmigiano@gmail.com',
        linkedin: 'https://www.linkedin.com/in/natanparmigiano',
        focusAreas: ['Sistemas Distribuídos', 'Software Corporativo', 'Liderança Técnica'],
        stats: [
          { value: projectCount, label: 'projetos em destaque' },
          { value: '8+', label: 'anos de experiência' },
          { value: '2017', label: 'projeto em destaque mais antigo' },
        ],
      },
      aboutMe: { title: 'Sobre Mim' },
      aboutPortfolio: { title: 'Sobre Este Portfólio', disclosureTitle: 'Níveis de Divulgação' },
      projects: { title: 'Projetos' },
      labels: {
        proudestProjects: 'Meu trabalho mais relevante',
        proudestShowcase: '🌟 Trabalho Mais Relevante',
        proudestRanking: 'Ranking',
        teamSize: 'Tamanho do time',
        rolesPlayed: 'Papéis que Desempenhei',
        techStack: 'Stack Tecnológica',
        challengesLessons: 'Desafios e Aprendizados',
        challenge: 'Desafio',
        solution: 'Solução',
        lessonsLearned: 'Lições Aprendidas',
      },
    },
  }

  const content = shared[lang] ?? shared.en

  return {
    meta: content.meta,
    labels: content.labels,
    aboutMe: {
      title: content.aboutMe.title,
      paragraphs: data.aboutMeParagraphs,
    },
    aboutPortfolio: {
      title: content.aboutPortfolio.title,
      paragraphs: data.aboutPortfolioParagraphs,
      disclosureTitle: content.aboutPortfolio.disclosureTitle,
      disclosureLevels: data.disclosureLevels,
    },
    projects: {
      title: content.projects.title,
      items: data.projects,
    },
  }
}
