<script setup>
import DisclosureBadge from './DisclosureBadge.vue'
import ProudestRankingStamp from './ProudestRankingStamp.vue'
import TeamSizeBadge from './TeamSizeBadge.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
  labels: {
    type: Object,
    required: true,
  },
  disclosureLevels: {
    type: Array,
    required: true,
  },
})

defineEmits(['select'])
</script>

<template>
  <div class="relative pt-3 pl-3">
    <ProudestRankingStamp
      v-if="project.proudestRanking != null"
      :ranking="project.proudestRanking"
      :label="labels.proudestRanking"
    />

    <button
      type="button"
      class="tech-card proudest-card group relative z-0 flex h-full w-full cursor-pointer flex-col rounded-2xl p-5 text-left transition sm:p-6"
      @click="$emit('select', project)"
    >
      <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div class="min-w-0 flex-1">
          <h3 class="text-base font-semibold tracking-tight text-[var(--text)] transition group-hover:text-[var(--accent)] sm:text-lg">
            {{ project.name }}
          </h3>
          <p class="mt-1 text-sm font-medium text-[var(--accent)]">
            {{ project.role }} · {{ project.company }}
          </p>
        </div>
        <time class="shrink-0 rounded-full border border-[var(--border-subtle)] bg-[var(--bg)]/55 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
          {{ project.year }}
        </time>
      </div>

      <p class="mb-5 line-clamp-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">
        {{ project.description[0] }}
      </p>

      <div class="mt-auto flex flex-wrap items-center gap-2">
        <TeamSizeBadge
          v-if="project.teamSize != null"
          :team-size="project.teamSize"
          :label="labels.teamSize"
        />
        <DisclosureBadge :level="project.disclosure" :levels="disclosureLevels" />
        <span class="ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-subtle)] transition group-hover:text-[var(--accent)]">
          {{ labels.viewProject }}
        </span>
      </div>
    </button>
  </div>
</template>
