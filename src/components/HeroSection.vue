<script setup>
defineProps({
  meta: {
    type: Object,
    required: true,
  },
  hero: {
    type: Object,
    required: true,
  },
  labels: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="grid gap-8 border-b border-[var(--border-subtle)] pb-12 pt-12 sm:pt-18 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
    <div>
      <div class="mb-5 flex flex-wrap gap-2">
        <span
          v-for="area in meta.focusAreas"
          :key="area"
          class="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--accent)]"
        >
          {{ area }}
        </span>
      </div>

      <p class="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
        {{ hero.eyebrow }}
      </p>
      <h1 class="mb-2 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-[var(--text)] sm:text-6xl">
        {{ meta.name }}
      </h1>
      <p class="mb-3 text-sm font-medium text-[var(--text-muted)]">{{ meta.headline }}</p>
      <p class="mb-4 text-sm font-medium text-[var(--text-subtle)]">{{ meta.location }}</p>
      <p class="mb-7 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
        {{ hero.tagline }}
      </p>

      <div class="flex flex-wrap gap-3">
        <a
          href="#projects"
          class="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold !text-white no-underline shadow-[0_16px_40px_var(--glow)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:!text-white"
        >
          {{ labels.viewProjects }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m0 0-7-7m7 7 7-7" />
          </svg>
        </a>
        <a
          :href="`mailto:${meta.email}`"
          class="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-4 py-2.5 text-sm font-semibold text-[var(--text)] no-underline shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="h-4 w-4" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path stroke-linecap="round" d="m2 7 10 7 10-7" />
          </svg>
          {{ labels.email }}
        </a>
        <a
          :href="meta.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-4 py-2.5 text-sm font-semibold text-[var(--text)] no-underline shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          {{ labels.viewOnLinkedIn }}
        </a>
      </div>
    </div>

    <aside class="tech-card rounded-2xl p-5">
      <div class="mb-5 flex items-center gap-2 border-b border-[var(--border-subtle)] pb-4">
        <span class="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span class="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span class="h-3 w-3 rounded-full bg-[#28c840]" />
        <span class="ml-2 font-mono text-xs text-[var(--text-subtle)]">{{ hero.terminalFile }}</span>
      </div>

      <div class="space-y-5">
        <div class="font-mono text-sm">
          <p class="text-[var(--text-subtle)]">{{ hero.terminalPrompt }}</p>
          <p class="text-[var(--text)]">{{ hero.terminalOutput }}</p>
        </div>

        <p class="font-mono text-xs leading-6 text-[var(--text-subtle)]">
          {{ hero.terminalNote }}
        </p>

        <dl class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <div
            v-for="stat in meta.stats"
            :key="stat.label"
            class="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg)]/45 p-4"
          >
            <dt class="font-mono text-2xl font-bold text-[var(--accent)]">{{ stat.value }}</dt>
            <dd class="text-sm text-[var(--text-muted)]">{{ stat.label }}</dd>
          </div>
        </dl>
      </div>
    </aside>
  </section>
</template>
