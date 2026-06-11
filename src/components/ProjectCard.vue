<script setup>
import ProjectDetail from './ProjectDetail.vue'

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
</script>

<template>
  <article
    :id="project.id"
    class="tech-card scroll-mt-24 rounded-2xl p-5 sm:p-6"
    :class="{ 'proudest-card': project.proudestShowcase }"
  >
    <ProjectDetail
      :project="project"
      :labels="labels"
      :disclosure-levels="disclosureLevels"
    />
  </article>
</template>
