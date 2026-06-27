import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { superintelligence } from '../src/data/superintelligence'
import { universoNada } from '../src/data/universo-nada'
import { enrichBook, bookToTypeScript } from './book-enrich'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const books = [
  {
    source: superintelligence,
    exportName: 'superintelligence',
    outFile: resolve(root, 'src/data/superintelligence.ts'),
  },
  {
    source: universoNada,
    exportName: 'universoNada',
    outFile: resolve(root, 'src/data/universo-nada.ts'),
  },
] as const

for (const { source, exportName, outFile } of books) {
  const enriched = enrichBook(source)
  writeFileSync(outFile, bookToTypeScript(enriched, exportName), 'utf8')
  console.log(`Regenerado: ${outFile}`)
}
