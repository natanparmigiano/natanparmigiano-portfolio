<script setup>
import SectionBlock from './SectionBlock.vue'

defineProps({
  achievements: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <SectionBlock id="achievements" :title="achievements.title">
    <ul class="grid gap-3 sm:grid-cols-2">
      <li
        v-for="item in achievements.items"
        :key="item"
        class="tech-card flex items-start gap-3 rounded-2xl p-4 text-sm text-[var(--text-muted)]"
      >
        <span
          class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)] text-white shadow-[0_10px_28px_var(--glow)]"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-3 w-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        {{ item }}
      </li>
    </ul>
  </SectionBlock>
</template>
