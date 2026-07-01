<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { READING_PHASES } from '../books/reading-phases'

const emit = defineEmits<{
  navigate: []
}>()

const route = useRoute()

const phasesExpanded = computed(() => route.name === 'phase-recap')

function onNavigate() {
  emit('navigate')
}

function isPhaseActive(num: number): boolean {
  return route.name === 'phase-recap' && Number(route.params.num) === num
}
</script>

<template>
  <RouterLink
    v-if="route.name !== 'library'"
    to="/"
    class="nav-drawer__item nav-drawer__item--library"
    @click="onNavigate"
  >
    <span class="nav-drawer__num" aria-hidden="true">⌂</span>
    <span class="nav-drawer__label">Biblioteca</span>
  </RouterLink>

  <details class="nav-drawer__accordion" :open="phasesExpanded || undefined">
    <summary class="nav-drawer__accordion-trigger">
      <span class="nav-drawer__accordion-icon" aria-hidden="true">▸</span>
      <span class="nav-drawer__accordion-label">Fases</span>
      <span class="nav-drawer__accordion-hint">{{ READING_PHASES.length }} rutas</span>
    </summary>

    <div class="nav-drawer__accordion-panel">
      <RouterLink
        v-for="phase in READING_PHASES"
        :key="phase.num"
        :to="{ name: 'phase-recap', params: { num: String(phase.num) } }"
        class="nav-drawer__item nav-drawer__item--nested"
        :class="{ 'nav-drawer__item--active': isPhaseActive(phase.num) }"
        @click="onNavigate"
      >
        <span class="nav-drawer__num">{{ phase.num }}</span>
        <span class="nav-drawer__label">{{ phase.title }}</span>
      </RouterLink>
    </div>
  </details>

  <RouterLink
    to="/conceptos"
    class="nav-drawer__item"
    :class="{ 'nav-drawer__item--active': route.name === 'concepts' }"
    @click="onNavigate"
  >
    <span class="nav-drawer__num" aria-hidden="true">✦</span>
    <span class="nav-drawer__label">Conceptos</span>
  </RouterLink>

  <RouterLink
    to="/tensiones"
    class="nav-drawer__item"
    :class="{ 'nav-drawer__item--active': route.name === 'tensions' }"
    @click="onNavigate"
  >
    <span class="nav-drawer__num" aria-hidden="true">⚡</span>
    <span class="nav-drawer__label">Tensiones</span>
  </RouterLink>
</template>
