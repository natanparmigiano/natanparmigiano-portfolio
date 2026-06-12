import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'portfolio-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const theme = ref(getInitialTheme())

if (typeof document !== 'undefined') {
  document.documentElement.dataset.theme = theme.value
}

watchEffect(() => {
  if (typeof document === 'undefined') return

  document.documentElement.dataset.theme = theme.value

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, theme.value)
  }
})

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return { theme, toggleTheme }
}
