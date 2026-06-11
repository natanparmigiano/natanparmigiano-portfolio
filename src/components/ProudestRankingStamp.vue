<script setup>
defineProps({
  ranking: {
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
  <div
    class="proudest-ranking-stamp pointer-events-none absolute left-0 top-0 z-20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-400/55 bg-[var(--bg-elevated)] shadow-[0_4px_16px_rgba(212,160,23,0.22)]"
    :aria-label="`${label}: ${ranking}`"
  >
    <span class="font-mono text-lg font-bold leading-none text-amber-600 dark:text-amber-300">
      #{{ ranking }}
    </span>
  </div>
</template>

<style scoped>
.proudest-ranking-stamp {
  background:
    radial-gradient(circle at 30% 25%, rgba(212, 160, 23, 0.18), transparent 55%),
    var(--bg-elevated);
}

.proudest-ranking-stamp::after {
  content: "";
  position: absolute;
  inset: 3px;
  border-radius: 9999px;
  border: 1px dashed rgba(212, 160, 23, 0.35);
  pointer-events: none;
}
</style>
