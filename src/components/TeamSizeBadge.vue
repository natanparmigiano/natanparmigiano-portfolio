<script setup>
defineProps({
  teamSize: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg)]/55 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-[var(--text-muted)]"
    :aria-label="`${label}: ${teamSize}`"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path stroke-linecap="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path stroke-linecap="round" d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
    <span>{{ label }}:</span>
    <span class="text-[var(--text)]">{{ teamSize }}</span>
  </span>
</template>
