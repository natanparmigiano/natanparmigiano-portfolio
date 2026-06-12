export const SITE_URL = 'https://portfolio.natan.parmigiano.tech'
export const SITE_NAME = 'Natan Parmigiano Portifolio'
export const OG_IMAGE_PATH = '/og-image.png'
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630

const seoByLanguage = {
  en: {
    title: 'Natan Parmigiano — Portfolio',
    description:
      'Natan Parmigiano — Portfolio of projects, achievements, and engineering work across distributed systems, enterprise software, and cloud platforms.',
    ogImageAlt: 'Natan Parmigiano — Engineering Portfolio',
    locale: 'en_US',
    alternateLocale: 'pt_BR',
    pageUrl: `${SITE_URL}/`,
  },
  pt: {
    title: 'Natan Parmigiano — Portfólio',
    description:
      'Portfólio de projetos, sistemas e desafios de engenharia de Natan Parmigiano — de plataformas de dados e integrações corporativas a e-commerce e ferramentas internas.',
    ogImageAlt: 'Natan Parmigiano — Portfólio de Engenharia',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    pageUrl: `${SITE_URL}/pt`,
  },
}

export function buildPageHead(language) {
  const seo = seoByLanguage[language === 'pt' ? 'pt' : 'en']

  return {
    htmlAttrs: { lang: language === 'pt' ? 'pt-BR' : 'en' },
    title: seo.title,
    meta: [
      { name: 'description', content: seo.description },
      { name: 'author', content: SITE_NAME },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: seo.pageUrl },
      { property: 'og:locale', content: seo.locale },
      { property: 'og:locale:alternate', content: seo.alternateLocale },
      { property: 'og:image', content: OG_IMAGE_URL },
      { property: 'og:image:secure_url', content: OG_IMAGE_URL },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: String(OG_IMAGE_WIDTH) },
      { property: 'og:image:height', content: String(OG_IMAGE_HEIGHT) },
      { property: 'og:image:alt', content: seo.ogImageAlt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:image', content: OG_IMAGE_URL },
      { name: 'twitter:image:alt', content: seo.ogImageAlt },
    ],
    link: [
      { rel: 'canonical', href: seo.pageUrl },
      { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/` },
      { rel: 'alternate', hreflang: 'pt-BR', href: `${SITE_URL}/pt` },
      { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/` },
    ],
  }
}
