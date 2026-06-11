<script setup>
import { computed } from 'vue'

const props = defineProps({
  level: {
    type: String,
    required: true,
  },
  levels: {
    type: Array,
    required: true,
  },
})

const disclosure = computed(() => props.levels.find((item) => item.level === props.level))
</script>

<template>
  <span
    v-if="disclosure"
    class="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg)]/55 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-[var(--text-muted)]"
    :title="disclosure.description"
  >
    <span aria-hidden="true">{{ disclosure.icon }}</span>
    {{ disclosure.label }}
  </span>
</template>
