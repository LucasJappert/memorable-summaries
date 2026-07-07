<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    meta?: string
    variant?: 'default' | 'concepts' | 'tensions' | 'library'
  }>(),
  { variant: 'default' },
)
</script>

<template>
  <header
    class="section-hero"
    :class="variant !== 'default' ? `section-hero--${variant}` : undefined"
  >
    <div class="section-hero__panel">
      <div class="section-hero__title-row">
        <h1 class="section-hero__title">
          <span class="section-hero__title-text">{{ title }}</span>
          <span class="section-hero__title-glow" aria-hidden="true" />
        </h1>
        <div v-if="$slots['title-aside']" class="section-hero__title-aside">
          <slot name="title-aside" />
        </div>
      </div>
      <p v-if="subtitle" class="section-hero__subtitle">{{ subtitle }}</p>
      <p v-if="meta" class="section-hero__meta">{{ meta }}</p>
      <slot />
    </div>
  </header>
</template>
