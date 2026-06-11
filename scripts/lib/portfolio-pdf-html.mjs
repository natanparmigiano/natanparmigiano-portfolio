import { buildPdfContent } from './portfolio-pdf-content.mjs'

const CONTACT = {
  phone: '+55 (11) 95412-5910',
  website: 'https://natan.parmigiano.tech',
  websiteLabel: 'natan.parmigiano.tech',
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function paragraphsHtml(items) {
  return items.map((item) => `<p>${escapeHtml(item)}</p>`).join('')
}

function listHtml(items) {
  if (!items.length) return ''
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
}

function tagsHtml(items) {
  if (!items.length) return ''
  return `<p class="tags">${items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join('')}</p>`
}

function disclosureLabel(levels, level) {
  return levels.find((item) => item.level === level)?.label ?? level
}

function projectMetaBadges(project, labels, disclosureLevels) {
  const badges = [`<span class="tag">${project.year}</span>`]

  if (project.teamSize != null) {
    badges.push(`<span class="tag">${escapeHtml(labels.teamSize)}: ${project.teamSize}</span>`)
  }

  if (project.proudestShowcase) {
    let label = escapeHtml(labels.proudestShowcase)
    if (project.proudestRanking != null) {
      label += ` · ${escapeHtml(labels.proudestRanking)}: ${project.proudestRanking}`
    }
    badges.push(`<span class="tag tag-highlight">${label}</span>`)
  }

  badges.push(
    `<span class="tag">${escapeHtml(disclosureLabel(disclosureLevels, project.disclosure))}</span>`,
  )

  return `<p class="tags">${badges.join('')}</p>`
}

function projectHtml(project, labels, disclosureLevels) {
  return `
    <article class="project-entry">
      <h3 class="project-title">${escapeHtml(project.name)}</h3>
      <p class="project-role">${escapeHtml(project.role)} · ${escapeHtml(project.company)}</p>
      ${projectMetaBadges(project, labels, disclosureLevels)}
      <div class="project-body">
        ${paragraphsHtml(project.description)}
      </div>
      <div class="project-subsection">
        <h4>${escapeHtml(labels.rolesPlayed)}</h4>
        ${tagsHtml(project.roles)}
      </div>
      <div class="project-subsection">
        <h4>${escapeHtml(labels.techStack)}</h4>
        ${tagsHtml(project.techStack)}
      </div>
      <div class="project-subsection project-challenges">
        <h4>${escapeHtml(labels.challengesLessons)}</h4>
        <h5>${escapeHtml(labels.challenge)}</h5>
        ${paragraphsHtml(project.challenge)}
        <h5>${escapeHtml(labels.solution)}</h5>
        ${paragraphsHtml(project.solution)}
        <h5>${escapeHtml(labels.lessonsLearned)}</h5>
        ${listHtml(project.lessons)}
      </div>
    </article>
  `
}

function relevantWorkHtml(projects, labels, disclosureLevels) {
  const items = projects
    .filter((project) => project.proudestShowcase)
    .sort((a, b) => (a.proudestRanking ?? 99) - (b.proudestRanking ?? 99))

  if (!items.length) return ''

  return `
    <section class="section">
      <h2 class="section-title">${escapeHtml(labels.proudestProjects)}</h2>
      <div class="relevant-grid">
        ${items
          .map(
            (project) => `
          <div class="relevant-card">
            <div class="relevant-rank">#${project.proudestRanking ?? '—'}</div>
            <div class="relevant-content">
              <h3 class="project-title">${escapeHtml(project.name)}</h3>
              <p class="project-role">${escapeHtml(project.role)} · ${escapeHtml(project.company)} · ${project.year}</p>
              <p class="relevant-summary">${escapeHtml(project.description[0] ?? '')}</p>
              ${projectMetaBadges(project, labels, disclosureLevels)}
            </div>
          </div>
        `,
          )
          .join('')}
      </div>
    </section>
  `
}

export function buildPortfolioPdfHtml({
  lang = 'en',
  data = null,
} = {}) {
  if (!data) {
    throw new Error('Portfolio PDF generation requires parsed portfolio data.')
  }

  const content = buildPdfContent(data, lang)
  const parsed = data
  const { meta, labels } = content

  const disclosureHtml = parsed.disclosureLevels
    .map(
      (level) =>
        `<li><strong>${escapeHtml(level.icon)} ${escapeHtml(level.label)}</strong> — ${escapeHtml(level.description)}</li>`,
    )
    .join('')

  const contactParts = [
    escapeHtml(meta.location),
    `<a href="mailto:${escapeHtml(meta.email)}">${escapeHtml(meta.email)}</a>`,
    escapeHtml(CONTACT.phone),
    `<a href="${escapeHtml(meta.linkedin)}">${escapeHtml(meta.linkedin.replace('https://www.linkedin.com/in/', 'in/'))}</a>`,
    `<a href="${escapeHtml(CONTACT.website)}">${escapeHtml(CONTACT.websiteLabel)}</a>`,
  ]

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(meta.name)} — Portfolio</title>
  <style>
    @page {
      size: A4;
      margin: 0.6in 0.65in 0.55in;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      width: 100%;
    }

    body {
      color: #1a1f2e;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 9.5pt;
      line-height: 1.45;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    * {
      box-sizing: border-box;
    }

    a {
      color: #1572f2;
      text-decoration: none;
    }

    .top-bar {
      height: 7px;
      margin: 0 0 16px;
      background: #1b3f73;
    }

    .header {
      padding-top: 2px;
    }

    .header h1 {
      margin: 0 0 4px;
      font-size: 22pt;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .headline {
      margin: 0 0 8px;
      color: #4b5568;
      font-size: 10.5pt;
      font-weight: 600;
    }

    .contact {
      margin: 0 0 14px;
      color: #4b5568;
      font-size: 8.8pt;
      line-height: 1.5;
    }

    .contact span + span::before {
      content: " | ";
      color: #9aa3b2;
    }

    .focus-areas {
      margin: 0 0 6px;
    }

    .focus-areas .tag {
      margin-right: 6px;
      margin-bottom: 6px;
    }

    .stats {
      display: flex;
      gap: 12px;
      margin: 0 0 4px;
      color: #4b5568;
      font-size: 8.8pt;
    }

    .stats strong {
      color: #1572f2;
    }

    .section {
      margin-top: 16px;
    }

    .section:not(.projects-section) {
      page-break-inside: avoid;
      break-inside: avoid-page;
    }

    .section-title {
      margin: 0 0 10px;
      padding-bottom: 4px;
      border-bottom: 1px solid #c8d0dc;
      font-size: 10.5pt;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .projects-section .section-title {
      page-break-after: avoid;
      break-after: avoid-page;
    }

    .section p {
      margin: 0 0 8px;
      text-align: justify;
    }

    .section ul {
      margin: 0 0 8px;
      padding-left: 18px;
    }

    .section li {
      margin-bottom: 4px;
    }

    .relevant-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .relevant-card {
      display: flex;
      gap: 10px;
      padding: 10px;
      border: 1px solid #d4a01766;
      border-radius: 8px;
      background: #fffaf0;
      page-break-inside: avoid;
    }

    .relevant-rank {
      flex-shrink: 0;
      width: 34px;
      height: 34px;
      border: 2px solid #d4a017;
      border-radius: 999px;
      color: #9a6700;
      font-size: 10pt;
      font-weight: 700;
      line-height: 30px;
      text-align: center;
    }

    .relevant-content {
      min-width: 0;
    }

    .relevant-summary {
      margin: 0 0 6px;
      color: #4b5568;
      font-size: 8.8pt;
    }

    .project-entry {
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid #e5e9f0;
      page-break-inside: auto;
      break-inside: auto;
    }

    .projects-section .project-entry:first-child {
      margin-top: 0;
      padding-top: 0;
      border-top: 0;
      page-break-before: avoid;
      break-before: avoid-page;
    }

    .projects-section .project-entry + .project-entry {
      page-break-before: always;
      break-before: page;
    }

    .project-title {
      margin: 0 0 2px;
      font-size: 10.5pt;
      font-weight: 700;
    }

    .project-role {
      margin: 0 0 6px;
      color: #1572f2;
      font-size: 9pt;
      font-weight: 600;
    }

    .tags {
      margin: 0 0 8px;
    }

    .tag {
      display: inline-block;
      margin: 0 6px 6px 0;
      padding: 2px 7px;
      border: 1px solid #d8dee8;
      border-radius: 999px;
      background: #f7f9fc;
      color: #4b5568;
      font-size: 7.8pt;
      font-weight: 600;
      line-height: 1.3;
    }

    .tag-highlight {
      border-color: #d4a01766;
      background: #fff8e8;
      color: #9a6700;
    }

    .project-body p {
      margin: 0 0 7px;
      color: #374151;
      font-size: 9pt;
      text-align: justify;
    }

    .project-subsection {
      margin-top: 8px;
    }

    .project-subsection:not(.project-challenges) {
      page-break-inside: avoid;
      break-inside: avoid-page;
    }

    .project-subsection h4,
    .project-subsection h5 {
      margin: 0 0 4px;
      color: #1a1f2e;
      font-size: 8.5pt;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .project-subsection h5 {
      margin-top: 8px;
      color: #1572f2;
      text-transform: none;
      letter-spacing: 0;
      font-size: 9pt;
    }

    .project-challenges {
      padding: 10px;
      border: 1px solid #e5e9f0;
      border-radius: 8px;
      background: #fafbfd;
      page-break-inside: auto;
      break-inside: auto;
    }

    .project-challenges p,
    .project-challenges li {
      color: #4b5568;
      font-size: 8.8pt;
    }
  </style>
</head>
<body>
  <div class="top-bar"></div>

  <header class="header">
    <h1>${escapeHtml(meta.name)}</h1>
    <p class="headline">${escapeHtml(meta.headline)}</p>
    <p class="contact">${contactParts.map((part) => `<span>${part}</span>`).join('')}</p>
    <p class="focus-areas">${meta.focusAreas.map((area) => `<span class="tag">${escapeHtml(area)}</span>`).join('')}</p>
    <p class="stats">
      ${meta.stats.map((stat) => `<span><strong>${escapeHtml(stat.value)}</strong> ${escapeHtml(stat.label)}</span>`).join('')}
    </p>
  </header>

  <section class="section">
    <h2 class="section-title">${escapeHtml(content.aboutMe.title)}</h2>
    ${paragraphsHtml(parsed.aboutMeParagraphs)}
  </section>

  <section class="section">
    <h2 class="section-title">${escapeHtml(content.aboutPortfolio.title)}</h2>
    ${paragraphsHtml(parsed.aboutPortfolioParagraphs)}
    <h4 class="project-subsection">${escapeHtml(content.aboutPortfolio.disclosureTitle)}</h4>
    <ul>${disclosureHtml}</ul>
  </section>

  ${relevantWorkHtml(parsed.projects, labels, parsed.disclosureLevels)}

  <section class="section projects-section">
    <h2 class="section-title">${escapeHtml(content.projects.title)}</h2>
    ${parsed.projects.map((project) => projectHtml(project, labels, parsed.disclosureLevels)).join('')}
  </section>
</body>
</html>`
}
