<script setup>
defineProps({
  language: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['change'])
</script>

<template>
  <div
    class="inline-flex rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-0.5"
    role="group"
    aria-label="Language"
  >
    <button
      type="button"
      class="rounded-md px-2.5 py-1 text-xs font-medium transition"
      :class="
        language === 'en'
          ? 'bg-[var(--accent)] text-white'
          : 'text-[var(--text-muted)] hover:text-[var(--text)]'
      "
      @click="emit('change', 'en')"
    >
      EN
    </button>
    <button
      type="button"
      class="rounded-md px-2.5 py-1 text-xs font-medium transition"
      :class="
        language === 'pt'
          ? 'bg-[var(--accent)] text-white'
          : 'text-[var(--text-muted)] hover:text-[var(--text)]'
      "
      @click="emit('change', 'pt')"
    >
      PT
    </button>
  </div>
</template>
