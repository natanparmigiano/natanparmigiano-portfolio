import { ref, computed, watchEffect } from 'vue'
import { resume } from '../data/resume.js'

const STORAGE_KEY = 'cv-language'

const language = ref(localStorage.getItem(STORAGE_KEY) === 'pt' ? 'pt' : 'en')

watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, language.value)
  document.documentElement.lang = language.value === 'pt' ? 'pt-BR' : 'en'
})

export function useLanguage() {
  const content = computed(() => resume[language.value])

  function setLanguage(lang) {
    if (lang === 'en' || lang === 'pt') {
      language.value = lang
    }
  }

  return { language, content, setLanguage }
}
