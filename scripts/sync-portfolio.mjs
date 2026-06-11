import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const md = fs.readFileSync(path.join(root, 'PORTFOLIO.md'), 'utf8')
const lines = md.split('\n')

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function parseDisclosure(line) {
  if (line.includes('🟢')) return 'public'
  if (line.includes('🟡')) return 'partial'
  if (line.includes('🔴')) return 'confidential'
  return 'partial'
}

function parseTeamSize(line) {
  const match = line.match(/^team\s*size:\s*(\d+)/i)
  return match ? Number(match[1]) : null
}

function parseRanking(line) {
  const match = line.match(/^ranking:\s*(\d+)/i)
  return match ? Number(match[1]) : null
}

function parseList(block) {
  return block.split('\n').map((line) => line.replace(/^\* /, '').trim()).filter(Boolean)
}

function parseParagraphs(block) {
  return block.split('\n\n').map((p) => p.replace(/\n/g, ' ').trim()).filter(Boolean)
}

const aboutMeStart = lines.findIndex((l) => l === '## About Me')
const aboutPortfolioStart = lines.findIndex((l) => l === '## About This Portfolio')
const firstProjectStart = lines.findIndex((l) => l.startsWith('# ') && l.includes('|') && !l.startsWith('# Natan'))

const aboutMeBlock = lines.slice(aboutMeStart + 1, aboutPortfolioStart).join('\n').trim()
const aboutPortfolioBlock = lines.slice(aboutPortfolioStart + 1, firstProjectStart).join('\n').trim()

const aboutMeParagraphs = aboutMeBlock
  .split('\n\n')
  .map((p) => p.trim())
  .filter((p) => p && !p.startsWith('---'))

const disclosureStart = aboutPortfolioBlock.indexOf('### Disclosure Levels')
const aboutPortfolioParagraphs = parseParagraphs(aboutPortfolioBlock.slice(0, disclosureStart).trim())

const disclosureLevels = []
for (const line of aboutPortfolioBlock.slice(disclosureStart).split('\n')) {
  const match = line.match(/^(🟢|🟡|🔴) (.+?) — (.+)$/)
  if (match) {
    const [, icon, label, description] = match
    const level = icon === '🟢' ? 'public' : icon === '🟡' ? 'partial' : 'confidential'
    disclosureLevels.push({ level, icon, label, description })
  }
}

const projectStart = md.indexOf(lines[firstProjectStart])
const projectChunks = md
  .slice(projectStart)
  .split('\n---\n')
  .map((chunk) => chunk.trim())
  .filter((chunk) => chunk.startsWith('# ') && chunk.includes('|'))

const projects = []
const seen = new Set()

for (const chunk of projectChunks) {
  const metaEndIndex = chunk.indexOf('## Description')
  const metaBlock = metaEndIndex === -1 ? chunk : chunk.slice(0, metaEndIndex)
  const metaLines = metaBlock.split('\n').map((l) => l.trim()).filter(Boolean)

  const titleLine = metaLines[0].replace(/^#\s+/, '')
  const [name, yearRaw] = titleLine.split('|').map((s) => s.trim())
  const year = Number(yearRaw)
  const roleLine = metaLines[1]
  const disclosureLine = metaLines[2]

  let teamSize = null
  let proudestShowcase = false
  let proudestRanking = null

  for (let i = 3; i < metaLines.length; i++) {
    const line = metaLines[i]
    if (/^team\s*size:/i.test(line)) {
      teamSize = parseTeamSize(line)
    } else if (/^ranking:/i.test(line)) {
      proudestRanking = parseRanking(line)
    } else if (line.includes('Proudest Projects Showcase')) {
      proudestShowcase = true
    }
  }

  const [role, company] = roleLine.split('|').map((s) => s.trim())

  const key = `${name}-${year}`
  if (seen.has(key)) {
    const existing = projects.find((p) => p.id === slugify(`${name}-${year}`))
    if (existing && teamSize != null && existing.teamSize == null) {
      existing.teamSize = teamSize
    }
    continue
  }
  seen.add(key)

  const sections = {}
  let current = null
  let currentSub = null
  let buffer = []

  const flush = () => {
    if (!current) return
    const text = buffer.join('\n').trim()
    if (!text) return
    if (currentSub) {
      sections[current] ??= {}
      sections[current][currentSub] =
        currentSub === 'lessons' ? parseList(text) : parseParagraphs(text)
    } else if (current === 'roles' || current === 'techStack') {
      sections[current] = parseList(text)
    } else {
      sections[current] = parseParagraphs(text)
    }
    buffer = []
  }

  const bodyStart = chunk.indexOf('## Description')
  const body = chunk.slice(bodyStart)
  for (const line of body.split('\n')) {
    if (line === '## Description') {
      flush()
      current = 'description'
      currentSub = null
      continue
    }
    if (line === '## Roles I Played') {
      flush()
      current = 'roles'
      currentSub = null
      continue
    }
    if (line === '## Tech Stack') {
      flush()
      current = 'techStack'
      currentSub = null
      continue
    }
    if (line === '## Challenges & Lessons') {
      flush()
      current = 'challenges'
      currentSub = null
      continue
    }
    if (line === '### Challenge') {
      flush()
      current = 'challenges'
      currentSub = 'challenge'
      continue
    }
    if (line === '### Solution') {
      flush()
      current = 'challenges'
      currentSub = 'solution'
      continue
    }
    if (line === '### Lessons Learned') {
      flush()
      current = 'challenges'
      currentSub = 'lessons'
      continue
    }
    buffer.push(line)
  }
  flush()

  projects.push({
    id: slugify(`${name}-${year}`),
    name,
    year,
    role,
    company,
    disclosure: parseDisclosure(disclosureLine),
    teamSize,
    proudestShowcase,
    proudestRanking,
    description: (sections.description || []).filter((p) => !/^[🟢🟡🔴]/.test(p)),
    roles: sections.roles || [],
    techStack: sections.techStack || [],
    challenge: sections.challenges?.challenge || [],
    solution: sections.challenges?.solution || [],
    lessons: sections.challenges?.lessons || [],
  })
}

const output = { aboutMeParagraphs, aboutPortfolioParagraphs, disclosureLevels, projects }
const outPath = path.join(root, 'src/data/parsed-portfolio.json')
fs.writeFileSync(outPath, `${JSON.stringify(output, null, 2)}\n`)
console.log(`Wrote ${projects.length} projects to ${outPath}`)
console.log(projects.map((p) => `${p.year} ${p.name} (team: ${p.teamSize})`).join('\n'))
