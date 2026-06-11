<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
  labels: {
    type: Object,
    required: true,
  },
})

const activeId = ref(null)
const visible = ref(false)

const groupedProjects = computed(() => {
  const groups = []
  let currentYear = null

  for (const project of props.projects) {
    if (project.year !== currentYear) {
      currentYear = project.year
      groups.push({ type: 'year', year: currentYear })
    }
    groups.push({ type: 'project', project })
  }

  return groups
})

function shortName(name, maxLength = 30) {
  if (name.length <= maxLength) return name
  return `${name.slice(0, maxLength).trimEnd()}…`
}

function scrollToProject(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  activeId.value = id
}

function updateActiveProject() {
  const marker = window.scrollY + window.innerHeight * 0.35

  let current = props.projects[0]?.id ?? null

  for (const project of props.projects) {
    const element = document.getElementById(project.id)
    if (element && element.offsetTop <= marker) {
      current = project.id
    }
  }

  activeId.value = current
}

function updateVisibility() {
  const projectsSection = document.getElementById('projects')
  if (!projectsSection) return
  visible.value = projectsSection.getBoundingClientRect().top < window.innerHeight * 0.75
}

function handleScroll() {
  updateVisibility()
  updateActiveProject()
}

onMounted(() => {
  updateVisibility()
  updateActiveProject()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<template>
  <aside
    class="project-timeline-gutter fixed inset-y-0 z-40 hidden transition-opacity duration-300 xl:flex xl:items-center xl:justify-center"
    :class="visible ? 'opacity-100' : 'pointer-events-none opacity-0'"
  >
    <nav
      class="w-52 max-h-[min(80vh,calc(100vh-4rem))] overflow-y-auto rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg)]/88 p-4 shadow-[var(--shadow)] backdrop-blur-xl 2xl:w-56"
      :aria-label="labels.projectTimelineNav"
    >
      <p class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-subtle)]">
        {{ labels.projectTimeline }}
      </p>

      <ol class="relative m-0 list-none p-0">
        <div
          class="absolute bottom-2 left-[7px] top-2 w-px bg-[var(--border)]"
          aria-hidden="true"
        />

        <li
          v-for="(item, index) in groupedProjects"
          :key="item.type === 'year' ? `year-${item.year}-${index}` : item.project.id"
          class="relative"
        >
          <p
            v-if="item.type === 'year'"
            class="mb-1 mt-3 first:mt-0 pl-6 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-subtle)]"
          >
            {{ item.year }}
          </p>

          <a
            v-else
            :href="`#${item.project.id}`"
            class="group flex cursor-pointer items-start gap-2.5 rounded-lg py-1.5 pl-1 pr-1 no-underline transition"
            :class="activeId === item.project.id
              ? 'text-[var(--accent)]'
              : 'text-[var(--text-muted)] hover:text-[var(--text)]'"
            :title="item.project.name"
            @click.prevent="scrollToProject(item.project.id)"
          >
            <span
              class="relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 transition"
              :class="item.project.proudestShowcase
                ? activeId === item.project.id
                  ? 'border-amber-400 bg-amber-400 shadow-[0_0_10px_rgba(212,160,23,0.45)]'
                  : 'border-amber-400/70 bg-[var(--bg)] group-hover:border-amber-400 group-hover:bg-amber-400/20'
                : activeId === item.project.id
                  ? 'border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_10px_var(--glow)]'
                  : 'border-[var(--border)] bg-[var(--bg-elevated)] group-hover:border-[var(--accent)]/50'"
              aria-hidden="true"
            />
            <span
              class="min-w-0 flex-1 text-[11px] leading-4 transition"
              :class="activeId === item.project.id ? 'font-medium text-[var(--text)]' : ''"
            >
              {{ shortName(item.project.name) }}
            </span>
          </a>
        </li>
      </ol>
    </nav>
  </aside>
</template>

<style scoped>
.project-timeline-gutter {
  left: calc(50% + 32rem);
  right: 0;
}

nav {
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}

nav::-webkit-scrollbar {
  width: 4px;
}

nav::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: var(--border);
}
</style>
