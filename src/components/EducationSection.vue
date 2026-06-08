<script setup>
import SectionBlock from './SectionBlock.vue'

defineProps({
  education: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <SectionBlock id="education" :title="education.title">
    <div class="grid gap-4 md:grid-cols-2">
      <article
        v-for="item in education.items"
        :key="item.institution"
        class="tech-card rounded-2xl p-5"
      >
        <div class="mb-3 flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div>
            <h3 class="text-base font-semibold text-[var(--text)]">{{ item.degree }}</h3>
            <p class="text-sm text-[var(--text-muted)]">{{ item.institution }}</p>
          </div>
          <time class="shrink-0 rounded-full border border-[var(--border-subtle)] bg-[var(--bg)]/55 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-[var(--accent)]">
            {{ item.period }}
          </time>
        </div>
        <p class="text-sm text-[var(--text-muted)] leading-relaxed">{{ item.description }}</p>
      </article>
    </div>
  </SectionBlock>
</template>
