<script setup lang="ts">
import { useScrollProgress } from '../composables/useScrollProgress'

const { progress } = useScrollProgress()
</script>

<template>
  <div
    class="reading-progress"
    :style="{ width: `${progress}%` }"
    aria-hidden="true"
  />
</template>

<style src="./ReadingProgress.css"></style>
