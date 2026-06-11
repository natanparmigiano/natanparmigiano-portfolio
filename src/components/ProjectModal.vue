<script setup>
import { ref, watch, nextTick } from 'vue'
import ProjectDetail from './ProjectDetail.vue'

const props = defineProps({
  project: {
    type: Object,
    default: null,
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

const open = defineModel('open', { type: Boolean, default: false })
const dialogRef = ref(null)

watch(open, async (isOpen) => {
  await nextTick()
  if (!dialogRef.value) return
  if (isOpen) {
    dialogRef.value.showModal()
  } else {
    dialogRef.value.close()
  }
})

function handleClose() {
  open.value = false
}

function handleCancel(event) {
  event.preventDefault()
  handleClose()
}

function handleDialogClose() {
  open.value = false
}
</script>

<template>
  <dialog
    ref="dialogRef"
    class="project-modal fixed inset-0 z-50 m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    @cancel="handleCancel"
    @close="handleDialogClose"
  >
    <div
      v-if="project"
      class="flex min-h-full cursor-pointer items-end justify-center p-4 sm:items-center sm:p-6"
      @click="handleClose"
    >
      <div
        class="tech-card relative flex max-h-[min(90vh,960px)] w-full max-w-3xl cursor-auto flex-col overflow-hidden rounded-2xl shadow-[var(--shadow)]"
        role="document"
        @click.stop
      >
        <div class="flex shrink-0 items-start gap-4 border-b border-[var(--border-subtle)] px-5 py-4 sm:px-6">
          <h2 class="min-w-0 flex-1 text-base font-semibold leading-snug tracking-tight text-[var(--text)] sm:text-lg">
            {{ project.name }}
          </h2>
          <button
            type="button"
            class="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg)]/80 text-[var(--text-muted)] transition hover:border-[var(--border)] hover:text-[var(--text)]"
            :aria-label="labels.closeModal"
            @click="handleClose"
          >
            <span aria-hidden="true" class="text-lg leading-none">&times;</span>
          </button>
        </div>

        <div class="overflow-y-auto p-5 sm:p-6">
          <ProjectDetail
            :project="project"
            :labels="labels"
            :disclosure-levels="disclosureLevels"
            hide-title
          />
        </div>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.project-modal::backdrop {
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
}
</style>
