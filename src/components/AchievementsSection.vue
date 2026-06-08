<script setup>
import SectionBlock from './SectionBlock.vue'

defineProps({
  achievements: {
    type: Object,
    required: true,
  },
})

const icons = {
  production: {
    label: 'Production systems',
    path: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
  },
  team: {
    label: 'Team growth',
    path: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  standards: {
    label: 'Engineering standards',
    path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  delivery: {
    label: 'Product delivery',
    path: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  },
  migration: {
    label: 'Stack migration',
    path: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
  security: {
    label: 'DDoS mitigation',
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
}
</script>

<template>
  <SectionBlock id="achievements" :title="achievements.title">
    <ul class="grid gap-4 sm:grid-cols-2">
      <li
        v-for="item in achievements.items"
        :key="item.text"
        class="tech-card flex h-full flex-col gap-4 rounded-2xl p-5 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)]"
      >
        <span
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--accent-soft)] text-[var(--accent)] shadow-[0_10px_28px_var(--glow)]"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            class="h-5 w-5"
            :aria-label="icons[item.icon]?.label"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              :d="icons[item.icon]?.path"
            />
          </svg>
        </span>
        <p class="text-sm leading-relaxed text-[var(--text-muted)]">
          {{ item.text }}
        </p>
      </li>
    </ul>
  </SectionBlock>
</template>
