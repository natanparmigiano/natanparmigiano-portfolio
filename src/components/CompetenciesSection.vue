<script setup>
import SectionBlock from './SectionBlock.vue'

defineProps({
  competencies: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <SectionBlock id="competencies" :title="competencies.title">
    <div class="grid gap-4 sm:grid-cols-2">
      <article
        v-for="group in competencies.groups"
        :key="group.title"
        class="tech-card rounded-2xl p-5 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)]"
      >
        <h3 class="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          {{ group.title }}
        </h3>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="item in group.items"
            :key="item"
            class="rounded-full border border-[var(--border-subtle)] bg-[var(--bg)]/55 px-3 py-1 text-xs font-medium text-[var(--text-muted)]"
          >
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
  </SectionBlock>
</template>
