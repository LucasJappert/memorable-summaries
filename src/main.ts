import { createApp } from 'vue'
import { registerSW } from 'virtual:pwa-register'
import App from './App.vue'
import { initAppUpdates, setServiceWorkerRegistration } from './composables/useAppUpdate'
import { router } from './router'
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import '@fontsource/ibm-plex-sans/latin-700.css'
import '@fontsource/ibm-plex-sans/latin-ext-400.css'
import '@fontsource/ibm-plex-sans/latin-ext-500.css'
import '@fontsource/ibm-plex-sans/latin-ext-600.css'
import '@fontsource/ibm-plex-sans/latin-ext-700.css'
import './assets/styles.css'
import { preventPinchZoom } from './utils/preventPinchZoom'
import { initPressRipple } from './utils/pressRipple'

preventPinchZoom()
initPressRipple()

async function start(): Promise<void> {
  if (import.meta.env.PROD && 'serviceWorker' in navigator) {
    registerSW({
      immediate: true,
      onRegisteredSW(_swUrl, registration) {
        setServiceWorkerRegistration(registration)
      },
    })
    initAppUpdates()
    // Evita que el primer paint de portadas pase sin SW (no entrarían a Cache Storage).
    await Promise.race([
      navigator.serviceWorker.ready,
      new Promise<void>((resolve) => setTimeout(resolve, 1200)),
    ])
  }

  createApp(App).use(router).mount('#app')
}

void start()
