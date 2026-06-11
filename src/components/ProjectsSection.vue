<script setup>
import { computed, ref } from 'vue'
import SectionBlock from './SectionBlock.vue'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'
import ProudestProjectCard from './ProudestProjectCard.vue'

const props = defineProps({
  projects: {
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

const modalOpen = ref(false)
const selectedProject = ref(null)

const proudestProjects = computed(() =>
  props.projects.items
    .filter((project) => project.proudestShowcase)
    .sort((a, b) => (a.proudestRanking ?? 99) - (b.proudestRanking ?? 99)),
)

function openProject(project) {
  selectedProject.value = project
  modalOpen.value = true
}
</script>

<template>
  <SectionBlock id="projects" :title="projects.title">
    <div v-if="proudestProjects.length" class="mb-12">
      <h3 class="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
        {{ labels.proudestProjects }}
      </h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProudestProjectCard
          v-for="project in proudestProjects"
          :key="project.id"
          :project="project"
          :labels="labels"
          :disclosure-levels="disclosureLevels"
          @select="openProject"
        />
      </div>
    </div>

    <ProjectModal
      v-model:open="modalOpen"
      :project="selectedProject"
      :labels="labels"
      :disclosure-levels="disclosureLevels"
    />

    <div class="space-y-6">
      <ProjectCard
        v-for="project in projects.items"
        :key="project.id"
        :project="project"
        :labels="labels"
        :disclosure-levels="disclosureLevels"
      />
    </div>
  </SectionBlock>
</template>
