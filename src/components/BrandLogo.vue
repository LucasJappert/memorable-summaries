<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number
    showBackground?: boolean
  }>(),
  {
    size: 40,
    showBackground: false,
  },
)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    class="brand-logo"
    role="img"
    aria-hidden="true"
  >
    <rect
      v-if="showBackground"
      width="64"
      height="64"
      rx="14"
      fill="#12182b"
    />

    <defs>
      <linearGradient id="logo-page-l" x1="8" y1="18" x2="32" y2="54" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7c8cf0" />
        <stop offset="1" stop-color="#5a6ad8" />
      </linearGradient>
      <linearGradient id="logo-page-r" x1="56" y1="18" x2="32" y2="54" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7cf0c8" />
        <stop offset="1" stop-color="#4ec4a8" />
      </linearGradient>
      <linearGradient id="logo-spine" x1="32" y1="22" x2="32" y2="52" gradientUnits="userSpaceOnUse">
        <stop stop-color="#f0a87c" />
        <stop offset="1" stop-color="#c87850" />
      </linearGradient>
      <radialGradient id="logo-glow" cx="32" cy="16" r="18" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7c8cf0" stop-opacity="0.35" />
        <stop offset="1" stop-color="#7c8cf0" stop-opacity="0" />
      </radialGradient>
    </defs>

    <circle cx="32" cy="16" r="18" fill="url(#logo-glow)" />

    <path
      d="M32 38 L32 24 M32 24 L22 14 M32 24 L42 14"
      stroke="#989cb8"
      stroke-width="1.5"
      stroke-linecap="round"
      opacity="0.7"
    />
    <circle cx="32" cy="38" r="3.5" fill="#7c8cf0" />
    <circle cx="22" cy="14" r="3" fill="#7cf0c8" />
    <circle cx="42" cy="14" r="3" fill="#f0a87c" />
    <circle cx="32" cy="24" r="2.5" fill="#e0e4f0" />

    <circle cx="48" cy="10" r="1" fill="#e0e4f0" opacity="0.9" />
    <circle cx="14" cy="20" r="0.8" fill="#7cf0c8" opacity="0.8" />
    <circle cx="50" cy="26" r="0.6" fill="#7c8cf0" opacity="0.7" />

    <path
      d="M32 48 C24 44 14 46 8 50 V28 C14 24 24 22 32 26 C40 22 50 24 56 28 V50 C50 46 40 44 32 48Z"
      fill="#12182b"
      stroke="#2a3050"
      stroke-width="1.2"
    />
    <path
      d="M32 26 C24 22 14 24 8 28 V50 C14 46 24 44 32 48 V26Z"
      fill="url(#logo-page-l)"
      opacity="0.95"
    />
    <path
      d="M32 26 C40 22 50 24 56 28 V50 C50 46 40 44 32 48 V26Z"
      fill="url(#logo-page-r)"
      opacity="0.95"
    />
    <path d="M32 26 V48" stroke="url(#logo-spine)" stroke-width="2" stroke-linecap="round" />
    <path
      d="M14 34 H22 M42 34 H50 M16 40 H23 M41 40 H48"
      stroke="#e0e4f0"
      stroke-width="1"
      stroke-linecap="round"
      opacity="0.25"
    />
  </svg>
</template>
