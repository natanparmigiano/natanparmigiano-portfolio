import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { portfolio } from '../data/portfolio.js'

const STORAGE_KEY = 'portfolio-language'

export function useLanguage() {
  const route = useRoute()
  const router = useRouter()

  const language = computed(() => (route.meta.lang === 'pt' ? 'pt' : 'en'))
  const content = computed(() => portfolio[language.value])

  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'pt') return
    if (lang === language.value) return

    router.push(lang === 'pt' ? '/pt' : '/')

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang)
    }
  }

  return { language, content, setLanguage }
}
