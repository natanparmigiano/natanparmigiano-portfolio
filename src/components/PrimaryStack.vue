<script setup>
import { computed } from 'vue'
import { getTechLabel, technologies } from '../data/techStack.js'
import TechIcon from './TechIcon.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'en',
  },
})

const stackItems = computed(() =>
  props.items
    .map((key) => {
      const tech = technologies[key]
      if (!tech) return null
      return {
        key,
        label: getTechLabel(key, props.language),
        icon: tech.icon,
      }
    })
    .filter(Boolean),
)
</script>

<template>
  <div class="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg)]/45 p-4">
    <p class="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
      {{ label }}
    </p>
    <ul class="flex flex-wrap gap-2">
      <li
        v-for="item in stackItems"
        :key="item.key"
        class="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-muted)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
        :title="item.label"
      >
        <span
          class="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--bg)]/80"
          aria-hidden="true"
        >
          <TechIcon
            :path="item.icon.path"
            :color="item.icon.hex"
            :title="item.label"
          />
        </span>
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>
