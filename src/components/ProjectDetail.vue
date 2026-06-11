<script setup>
import DisclosureBadge from './DisclosureBadge.vue'
import ProudestBadge from './ProudestBadge.vue'
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
  hideTitle: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div>
    <div class="mb-5">
      <h3
        v-if="!hideTitle"
        class="text-lg font-semibold tracking-tight text-[var(--text)] sm:text-xl"
      >
        {{ project.name }}
      </h3>
      <p class="text-sm font-medium text-[var(--accent)]" :class="{ 'mt-1': !hideTitle }">
        {{ project.role }} · {{ project.company }}
      </p>
      <div class="mt-3 flex flex-wrap items-center gap-2">
        <time class="rounded-full border border-[var(--border-subtle)] bg-[var(--bg)]/55 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
          {{ project.year }}
        </time>
        <TeamSizeBadge
          v-if="project.teamSize != null"
          :team-size="project.teamSize"
          :label="labels.teamSize"
        />
        <ProudestBadge
          v-if="project.proudestShowcase"
          :label="labels.proudestShowcase"
          :ranking="project.proudestRanking"
          :ranking-label="labels.proudestRanking"
        />
        <DisclosureBadge :level="project.disclosure" :levels="disclosureLevels" />
      </div>
    </div>

    <div class="mb-6 space-y-3 text-sm leading-7 text-[var(--text-muted)]">
      <p v-for="(paragraph, index) in project.description" :key="index">
        {{ paragraph }}
      </p>
    </div>

    <div class="mb-6">
      <h4 class="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
        {{ labels.rolesPlayed }}
      </h4>
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="role in project.roles"
          :key="role"
          class="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg)]/45 px-2.5 py-1.5 text-xs font-medium text-[var(--text-muted)]"
        >
          {{ role }}
        </li>
      </ul>
    </div>

    <div class="mb-6">
      <h4 class="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
        {{ labels.techStack }}
      </h4>
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="tech in project.techStack"
          :key="tech"
          class="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-muted)]"
        >
          {{ tech }}
        </li>
      </ul>
    </div>

    <div class="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg)]/45 p-4 sm:p-5">
      <h4 class="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
        {{ labels.challengesLessons }}
      </h4>

      <div class="space-y-5">
        <div>
          <h5 class="mb-2 text-sm font-semibold text-[var(--text)]">{{ labels.challenge }}</h5>
          <div class="space-y-2 text-sm leading-6 text-[var(--text-muted)]">
            <p v-for="(paragraph, index) in project.challenge" :key="`challenge-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div>
          <h5 class="mb-2 text-sm font-semibold text-[var(--text)]">{{ labels.solution }}</h5>
          <div class="space-y-2 text-sm leading-6 text-[var(--text-muted)]">
            <p v-for="(paragraph, index) in project.solution" :key="`solution-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div>
          <h5 class="mb-3 text-sm font-semibold text-[var(--text)]">{{ labels.lessonsLearned }}</h5>
          <ul class="grid gap-2">
            <li
              v-for="lesson in project.lessons"
              :key="lesson"
              class="flex items-start gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/70 p-3 text-sm text-[var(--text-muted)]"
            >
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              {{ lesson }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
