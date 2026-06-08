<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section :id="id" class="scroll-mt-20 py-10">
    <h2 class="mb-6 flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text)]">
      <span class="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_24px_var(--glow)]" aria-hidden="true" />
      <span>{{ title }}</span>
      <span class="h-px flex-1 bg-gradient-to-r from-[var(--border)] to-transparent" aria-hidden="true" />
    </h2>
    <slot />
  </section>
</template>
