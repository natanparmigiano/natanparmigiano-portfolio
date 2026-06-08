<script setup>
import ThemeToggle from './ThemeToggle.vue'
import LanguagePicker from './LanguagePicker.vue'

defineProps({
  meta: {
    type: Object,
    required: true,
  },
  nav: {
    type: Object,
    required: true,
  },
  labels: {
    type: Object,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  sections: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['language-change'])
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg)]/82 backdrop-blur-xl"
  >
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
      <a href="#" class="min-w-0 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text)] no-underline hover:text-[var(--accent)]">
        {{ meta.name }}
      </a>

      <nav class="hidden items-center gap-5 md:flex" aria-label="Sections">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          class="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)] no-underline transition hover:text-[var(--accent)]"
        >
          {{ nav[section.key] }}
        </a>
      </nav>

      <div class="flex shrink-0 items-center gap-2">
        <LanguagePicker :language="language" @change="emit('language-change', $event)" />
        <ThemeToggle :labels="labels" />
      </div>
    </div>
  </header>
</template>
