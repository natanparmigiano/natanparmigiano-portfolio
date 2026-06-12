import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router.js'
import './style.css'

export const createApp = ViteSSG(App, { routes }, ({ router, isClient }) => {
  if (!isClient) return

  const preferred = localStorage.getItem('portfolio-language')
  if (preferred === 'pt' && router.currentRoute.value.path === '/') {
    router.replace('/pt')
  }
})
