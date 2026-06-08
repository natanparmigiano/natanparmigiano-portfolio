<script setup>
import SectionBlock from './SectionBlock.vue'

defineProps({
  languages: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <SectionBlock id="languages" :title="languages.title">
    <div class="flex flex-wrap gap-4">
      <article
        v-for="item in languages.items"
        :key="item.name"
        class="tech-card min-w-[200px] flex-1 rounded-2xl p-5"
      >
        <h3 class="text-base font-semibold text-[var(--text)]">{{ item.name }}</h3>
        <p class="text-sm text-[var(--text-muted)]">{{ item.level }}</p>
      </article>
    </div>
  </SectionBlock>
</template>
