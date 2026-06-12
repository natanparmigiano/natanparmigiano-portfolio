import PortfolioPage from './pages/PortfolioPage.vue'

export const routes = [
  { path: '/', component: PortfolioPage, meta: { lang: 'en' } },
  { path: '/pt', component: PortfolioPage, meta: { lang: 'pt' } },
]
