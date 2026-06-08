<script setup>
import SectionBlock from './SectionBlock.vue'

defineProps({
  certifications: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <SectionBlock id="certifications" :title="certifications.title">
    <div class="grid gap-4 sm:grid-cols-2">
      <article
        v-for="item in certifications.items"
        :key="`${item.issuer}-${item.name}`"
        class="tech-card rounded-2xl p-5"
      >
        <h3 class="text-base font-semibold text-[var(--text)]">{{ item.name }}</h3>
        <p v-if="item.issuer" class="text-sm font-medium text-[var(--accent)]">{{ item.issuer }}</p>
        <p v-if="item.credential" class="mt-2 inline-flex rounded-full border border-[var(--border-subtle)] bg-[var(--bg)]/55 px-3 py-1 font-mono text-xs text-[var(--text-subtle)]">
          {{ item.credential }}
        </p>
        <p v-if="item.description" class="mt-2 text-sm text-[var(--text-muted)]">
          {{ item.description }}
        </p>
      </article>
    </div>
  </SectionBlock>
</template>
