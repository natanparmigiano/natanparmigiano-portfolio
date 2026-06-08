<script setup>
defineProps({
  path: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="h-4 w-4 shrink-0"
    :fill="`#${color}`"
    role="img"
    :aria-label="title"
  >
    <title>{{ title }}</title>
    <path :d="path" />
  </svg>
</template>
