<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { BookMeta } from '../types/book'
import { coverImageUrl } from '../utils/coverImage'
import { coverThemeFromSlug, monogramFrom } from '../utils/coverSeed'
import AudioIcon from './icons/AudioIcon.vue'

const props = defineProps<{
  slug: string
  meta: BookMeta
  done?: boolean
  hasAudio?: boolean
}>()

const theme = computed(() => coverThemeFromSlug(props.slug))
const motif = computed(() => props.meta.cover?.motif ?? theme.value.motif)

const displayTitle = computed(
  () => props.meta.titleEs?.trim() || props.meta.title,
)

const monogram = computed(() =>
  monogramFrom(displayTitle.value, props.meta.author, props.meta.cover?.monogram),
)

const photoSrc = computed(
  () => props.meta.cover?.image?.trim() || coverImageUrl(props.slug),
)

const photoOk = ref(false)
const photoFailed = ref(false)

watch(photoSrc, () => {
  photoOk.value = false
  photoFailed.value = false
})

const usePhoto = computed(() => photoOk.value && !photoFailed.value)

const nebulaStyle = computed(() => ({
  backgroundColor: '#0f1424',
  backgroundImage: theme.value.nebula,
}))

const orbitStyle = computed(() => ({
  transform: `rotate(${theme.value.orbitRotation}deg)`,
  stroke: theme.value.accent,
}))

function onPhotoLoad() {
  photoOk.value = true
}

function onPhotoError() {
  photoFailed.value = true
}
</script>

<template>
  <div
    class="cover-art"
    :class="{ 'cover-art--done': done, 'cover-art--photo': usePhoto }"
    :style="usePhoto ? undefined : nebulaStyle"
    aria-hidden="true"
  >
    <img
      class="cover-art__photo"
      :src="photoSrc"
      alt=""
      :class="{ 'cover-art__photo--visible': photoOk }"
      @load="onPhotoLoad"
      @error="onPhotoError"
    />

    <template v-if="!usePhoto">
      <svg class="cover-art__motif" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <ellipse
          class="cover-art__orbit"
          cx="50"
          cy="38"
          rx="34"
          ry="14"
          fill="none"
          stroke-width="0.6"
          stroke-opacity="0.35"
          :style="orbitStyle"
        />

        <template v-if="motif === 'constellation' || motif === 'orbit'">
          <line
            v-for="(line, i) in theme.lines"
            :key="`l-${i}`"
            :x1="line[0]"
            :y1="line[1]"
            :x2="line[2]"
            :y2="line[3]"
            :stroke="theme.accent"
            stroke-width="0.5"
            stroke-opacity="0.4"
          />
          <circle
            v-for="(star, i) in theme.stars"
            :key="`s-${i}`"
            :cx="star.x"
            :cy="star.y"
            :r="star.r"
            :fill="i % 2 === 0 ? theme.accent : theme.accent2"
            fill-opacity="0.85"
          />
        </template>

        <template v-else-if="motif === 'grid'">
          <g :stroke="theme.accent" stroke-width="0.35" stroke-opacity="0.25">
            <line x1="50" y1="8" x2="50" y2="92" />
            <line x1="8" y1="50" x2="92" y2="50" />
            <line x1="14" y1="14" x2="86" y2="86" />
            <line x1="86" y1="14" x2="14" y2="86" />
          </g>
          <circle cx="50" cy="38" r="2.2" :fill="theme.accent2" fill-opacity="0.7" />
        </template>

        <template v-else>
          <path
            :d="`M 8 55 Q 30 ${28 + (theme.seed % 20)} 50 42 T 92 ${48 + (theme.seed % 12)}`"
            fill="none"
            :stroke="theme.accent"
            stroke-width="0.7"
            stroke-opacity="0.45"
          />
          <circle cx="50" cy="42" r="1.8" :fill="theme.accent2" fill-opacity="0.75" />
        </template>
      </svg>

      <span class="cover-art__monogram">{{ monogram }}</span>
    </template>

    <span
      v-if="hasAudio"
      class="cover-art__badge cover-art__badge--audio"
      title="Narración en audio disponible"
      aria-hidden="true"
    >
      <AudioIcon class="cover-art__audio-icon" />
    </span>

    <span
      v-if="done"
      class="cover-art__badge cover-art__badge--done"
      aria-hidden="true"
    >
      <svg class="cover-art__check" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M2.5 6.2 4.8 8.5 9.5 3.5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>

    <slot />
  </div>
</template>
