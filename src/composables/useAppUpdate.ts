/**
 * Detecta deploys nuevos comparando la versión embebida en el bundle contra
 * `app-version.json`. El reload nunca es directo: se le pide al service worker
 * que actualice (al tomar control, `registerType: 'autoUpdate'` recarga solo) y
 * el reload propio queda como último recurso, una única vez por versión remota.
 *
 * El endpoint se llama `app-version.json` (no `version.json`) a propósito: los
 * clientes atrapados en el bucle del checker viejo siguen pidiendo `version.json`;
 * al recibir 404, ese código hace early-return y deja de recargar, así el SW
 * nuevo puede instalarse sin que el usuario limpie storage.
 */
const VERSION_ENDPOINT = 'app-version.json'
const RELOADED_FOR_VERSION_KEY = 'app-reloaded-for-version'
/** Clave que escribía el checker viejo; ya no se usa. */
const LEGACY_VERSION_STORAGE_KEY = 'app-version'
/** Margen para que el SW nuevo instale, active y dispare su propio reload. */
const SW_UPDATE_GRACE_MS = 15_000

let swRegistration: ServiceWorkerRegistration | undefined
let pendingVersion: string | undefined

export function setServiceWorkerRegistration(registration: ServiceWorkerRegistration | undefined): void {
  swRegistration = registration
}

function alreadyReloadedFor(version: string): boolean {
  try {
    return sessionStorage.getItem(RELOADED_FOR_VERSION_KEY) === version
  } catch {
    return true
  }
}

function markReloadedFor(version: string): void {
  try {
    sessionStorage.setItem(RELOADED_FOR_VERSION_KEY, version)
  } catch {
    // Sin sessionStorage no hay guarda posible: mejor no recargar.
  }
}

function reloadOnceFor(version: string): void {
  if (alreadyReloadedFor(version)) return
  markReloadedFor(version)
  location.reload()
}

function clearLegacyVersionMarker(): void {
  try {
    localStorage.removeItem(LEGACY_VERSION_STORAGE_KEY)
  } catch {
    // ignore
  }
}

async function handleVersionMismatch(remoteVersion: string): Promise<void> {
  if (pendingVersion === remoteVersion) return
  pendingVersion = remoteVersion

  const registration = swRegistration ?? (await navigator.serviceWorker?.getRegistration())

  if (!registration) {
    reloadOnceFor(remoteVersion)
    return
  }

  try {
    await registration.update()
  } catch {
    // Sin red o SW inaccesible: el fallback de abajo decide.
  }

  window.setTimeout(() => {
    if (__APP_VERSION__ !== remoteVersion) reloadOnceFor(remoteVersion)
  }, SW_UPDATE_GRACE_MS)
}

export async function checkForAppUpdate(): Promise<void> {
  if (import.meta.env.DEV) return

  const base = import.meta.env.BASE_URL
  const url = `${base}${VERSION_ENDPOINT}?_=${Date.now()}`

  try {
    const response = await fetch(url, { cache: 'no-store' })
    if (!response.ok) return

    const { version: remoteVersion } = (await response.json()) as { version: string }
    if (!remoteVersion || remoteVersion === __APP_VERSION__) return

    await handleVersionMismatch(remoteVersion)
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

  clearLegacyVersionMarker()
  runUpdateChecks()

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') runUpdateChecks()
  })

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) runUpdateChecks()
  })
}
