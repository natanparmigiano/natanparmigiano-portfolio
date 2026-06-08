import portfolioMd from '../PORTFOLIO.md'
import portfolioPdf from '../PORTFOLIO.pdf'

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)

    if (pathname === '/portfolio.md') {
      return new Response(portfolioMd, {
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
        },
      })
    }

    if (pathname === '/portfolio.pdf') {
      return new Response(portfolioPdf, {
        headers: {
          'Content-Type': 'application/pdf',
          'Cache-Control': 'public, max-age=3600',
        },
      })
    }

    return env.ASSETS.fetch(request)
  },
}
