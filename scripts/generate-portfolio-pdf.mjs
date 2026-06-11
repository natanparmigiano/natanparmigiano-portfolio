import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import puppeteer from 'puppeteer'
import { buildPortfolioPdfHtml } from './lib/portfolio-pdf-html.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SYSTEM_CHROME_CANDIDATES = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean)

function resolveChromeExecutable() {
  for (const candidate of SYSTEM_CHROME_CANDIDATES) {
    if (fs.existsSync(candidate)) return candidate
  }
  return null
}

function parseArgs(argv) {
  const args = {
    lang: 'en',
    output: path.join(root, 'PORTFOLIO.pdf'),
    html: null,
  }

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--lang' && argv[i + 1]) {
      args.lang = argv[++i]
    } else if (arg === '--output' && argv[i + 1]) {
      args.output = path.resolve(argv[++i])
    } else if (arg === '--html' && argv[i + 1]) {
      args.html = path.resolve(argv[++i])
    } else if (arg === '--help' || arg === '-h') {
      console.log(`Usage: node scripts/generate-portfolio-pdf.mjs [options]

Options:
  --lang en|pt     Language to render (default: en)
  --output PATH    Output PDF path (default: ./PORTFOLIO.pdf)
  --html PATH      Also write the intermediate HTML file
`)
      process.exit(0)
    }
  }

  return args
}

async function main() {
  const args = parseArgs(process.argv)
  const parsedPath = path.join(root, 'src/data', args.lang === 'pt' ? 'parsed-portfolio.pt.json' : 'parsed-portfolio.json')

  if (!fs.existsSync(parsedPath)) {
    throw new Error(`Missing parsed portfolio data at ${parsedPath}. Run pnpm run sync:portfolio first.`)
  }

  const data = JSON.parse(fs.readFileSync(parsedPath, 'utf8'))
  const html = buildPortfolioPdfHtml({ lang: args.lang, data })

  if (args.html) {
    fs.writeFileSync(args.html, html)
    console.log(`Wrote HTML preview to ${args.html}`)
  }

  const launchOptions = {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  }

  const chromeExecutable = resolveChromeExecutable()
  if (chromeExecutable) {
    launchOptions.executablePath = chromeExecutable
  }

  const browser = await puppeteer.launch(launchOptions)

  try {
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'networkidle0' })
    await page.emulateMediaType('print')
    await page.pdf({
      path: args.output,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    })
  } finally {
    await browser.close()
  }

  console.log(`Wrote portfolio PDF to ${args.output}`)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
