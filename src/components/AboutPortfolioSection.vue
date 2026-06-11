<script setup>
import SectionBlock from './SectionBlock.vue'
import DisclosureBadge from './DisclosureBadge.vue'

defineProps({
  aboutPortfolio: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <SectionBlock id="about-portfolio" :title="aboutPortfolio.title">
    <div class="space-y-5">
      <div class="tech-card rounded-2xl p-6">
        <div class="space-y-4 text-[var(--text-muted)] leading-relaxed">
          <p v-for="(paragraph, index) in aboutPortfolio.paragraphs" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <div class="tech-card rounded-2xl p-6">
        <h3 class="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          {{ aboutPortfolio.disclosureTitle }}
        </h3>
        <ul class="grid gap-3 sm:grid-cols-3">
          <li
            v-for="level in aboutPortfolio.disclosureLevels"
            :key="level.level"
            class="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg)]/45 p-4"
          >
            <DisclosureBadge :level="level.level" :levels="aboutPortfolio.disclosureLevels" />
            <p class="mt-3 text-sm leading-6 text-[var(--text-muted)]">
              {{ level.description }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </SectionBlock>
</template>
