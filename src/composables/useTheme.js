import { ref, watchEffect } from 'vue'
import { THEME_STORAGE_KEY, resolveTheme } from '../theme.js'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'

  const existing = document.documentElement.dataset.theme
  if (existing === 'light' || existing === 'dark') return existing

  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  return resolveTheme(
    stored,
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  )
}

const theme = ref(getInitialTheme())

if (typeof document !== 'undefined') {
  document.documentElement.dataset.theme = theme.value
}

watchEffect(() => {
  if (typeof document === 'undefined') return

  document.documentElement.dataset.theme = theme.value

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(THEME_STORAGE_KEY, theme.value)
  }
})

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return { theme, toggleTheme }
}
