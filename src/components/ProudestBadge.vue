<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  ranking: {
    type: Number,
    default: null,
  },
  rankingLabel: {
    type: String,
    default: 'Ranking',
  },
})
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-amber-700 dark:text-amber-300"
  >
    {{ label }}
    <template v-if="ranking != null">
      <span class="text-amber-500/50" aria-hidden="true">·</span>
      <span>{{ rankingLabel }}: {{ ranking }}</span>
    </template>
  </span>
</template>
