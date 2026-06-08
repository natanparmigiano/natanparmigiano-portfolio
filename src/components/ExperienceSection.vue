<script setup>
import SectionBlock from './SectionBlock.vue'
import PrimaryStack from './PrimaryStack.vue'

defineProps({
  experience: {
    type: Object,
    required: true,
  },
  primaryStackLabel: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <SectionBlock id="experience" :title="experience.title">
    <div class="space-y-5">
      <article
        v-for="role in experience.roles"
        :key="`${role.company}-${role.title}-${role.period}`"
        class="tech-card relative rounded-2xl p-5 sm:p-6"
      >
        <div class="mb-4 flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div>
            <h3 class="text-lg font-semibold tracking-tight text-[var(--text)]">
              {{ role.title }}
            </h3>
            <p class="text-sm font-medium text-[var(--accent)]">{{ role.company }}</p>
            <p class="text-xs text-[var(--text-subtle)]">{{ role.location }}</p>
          </div>
          <time class="rounded-full border border-[var(--border-subtle)] bg-[var(--bg)]/55 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
            {{ role.period }}
          </time>
        </div>

        <div class="mb-4 space-y-2 text-sm leading-6 text-[var(--text-muted)]">
          <p v-for="(paragraph, index) in role.intro" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <ul v-if="role.highlights?.length" class="mb-4 grid gap-2 sm:grid-cols-2">
          <li
            v-for="highlight in role.highlights"
            :key="highlight"
            class="flex items-start gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg)]/45 p-3 text-sm text-[var(--text-muted)]"
          >
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            {{ highlight }}
          </li>
        </ul>

        <p v-if="role.closing" class="mb-4 text-sm leading-6 text-[var(--text-muted)]">
          {{ role.closing }}
        </p>

        <PrimaryStack
          v-if="role.stack?.length"
          :items="role.stack"
          :label="primaryStackLabel"
          :language="language"
        />
      </article>
    </div>
  </SectionBlock>
</template>
