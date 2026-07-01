/** "2026-07-01" → "1 de julio de 2026" (es-AR) */
export function formatYYYYMMDDToLongEsAR(input: string): string {
  const [year, month, day] = input.split('-').map((value) => Number(value))
  if (!year || !month || !day) return input

  const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0))
  return date.toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Argentina/Buenos_Aires',
  })
}
