import resumeMd from '../RESUME.md'
import resumePdf from '../RESUME.pdf'

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)

    if (pathname === '/resume.md') {
      return new Response(resumeMd, {
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
        },
      })
    }

    if (pathname === '/resume.pdf') {
      return new Response(resumePdf, {
        headers: {
          'Content-Type': 'application/pdf',
          'Cache-Control': 'public, max-age=3600',
        },
      })
    }

    return env.ASSETS.fetch(request)
  },
}
