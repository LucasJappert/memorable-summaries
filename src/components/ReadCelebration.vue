<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'

const props = defineProps<{ active: boolean }>()
const emit = defineEmits<{ finished: [] }>()

const visible = ref(false)
const exiting = ref(false)

let enterTimer: ReturnType<typeof setTimeout> | null = null
let exitTimer: ReturnType<typeof setTimeout> | null = null

function clearTimers() {
  if (enterTimer) clearTimeout(enterTimer)
  if (exitTimer) clearTimeout(exitTimer)
  enterTimer = null
  exitTimer = null
}

function start() {
  clearTimers()
  visible.value = true
  exiting.value = false

  enterTimer = setTimeout(() => {
    exiting.value = true
    exitTimer = setTimeout(() => {
      visible.value = false
      exiting.value = false
      emit('finished')
    }, 400)
  }, 1600)
}

watch(
  () => props.active,
  (active) => {
    if (active) start()
  },
)

onUnmounted(clearTimers)
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="read-celebration"
      :class="{ 'read-celebration--exit': exiting }"
      role="status"
      aria-live="polite"
      aria-label="Libro marcado como leído"
    >
      <span class="read-celebration__badge" aria-hidden="true">
        <svg class="read-celebration__check" viewBox="0 0 24 24">
          <path
            d="M5.5 12.2 9.8 16.5 18.5 7.5"
            fill="none"
            stroke="currentColor"
            stroke-width="2.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
  </Teleport>
</template>
