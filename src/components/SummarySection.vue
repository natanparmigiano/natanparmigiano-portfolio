<script setup>
import SectionBlock from './SectionBlock.vue'

defineProps({
  summary: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <SectionBlock id="summary" :title="summary.title">
    <div class="tech-card rounded-2xl p-6">
      <div class="space-y-4 text-[var(--text-muted)] leading-relaxed">
        <p v-for="(paragraph, index) in summary.paragraphs" :key="index">
        {{ paragraph }}
        </p>
      </div>
    </div>
  </SectionBlock>
</template>
