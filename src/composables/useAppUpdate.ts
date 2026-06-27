const VERSION_STORAGE_KEY = 'app-version'

let swRegistration: ServiceWorkerRegistration | undefined

export function setServiceWorkerRegistration(registration: ServiceWorkerRegistration | undefined): void {
  swRegistration = registration
}

export async function checkForAppUpdate(): Promise<void> {
  if (import.meta.env.DEV) return

  const base = import.meta.env.BASE_URL
  const url = `${base}version.json?_=${Date.now()}`

  try {
    const response = await fetch(url, { cache: 'no-store' })
    if (!response.ok) return

    const { version: remoteVersion } = (await response.json()) as { version: string }
    const embeddedVersion = __APP_VERSION__
    const storedVersion = localStorage.getItem(VERSION_STORAGE_KEY)

    if (embeddedVersion !== remoteVersion || (storedVersion && storedVersion !== remoteVersion)) {
      localStorage.setItem(VERSION_STORAGE_KEY, remoteVersion)
      location.reload()
      return
    }

    localStorage.setItem(VERSION_STORAGE_KEY, remoteVersion)
  } catch {
    // Sin red: seguir con la versión cacheada
  }
}

function runUpdateChecks(): void {
  void checkForAppUpdate()
  void swRegistration?.update()
}

export function initAppUpdates(): void {
  if (import.meta.env.DEV) return

  runUpdateChecks()

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') runUpdateChecks()
  })

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) runUpdateChecks()
  })
}
