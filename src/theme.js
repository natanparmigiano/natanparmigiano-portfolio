export const THEME_STORAGE_KEY = 'portfolio-theme'

export function resolveTheme(stored, prefersDark) {
  if (stored === 'light' || stored === 'dark') return stored
  return prefersDark ? 'dark' : 'light'
}
