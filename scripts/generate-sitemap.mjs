import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { bookCatalog } from '../src/books/catalog.ts'
import { buildAbsoluteUrl, getBuildSiteUrl } from './seo-build-utils.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')

function buildSitemapXml() {
  const siteUrl = getBuildSiteUrl()
  const urls = [
    buildAbsoluteUrl(''),
    ...bookCatalog.map((book) => buildAbsoluteUrl(`libro/${book.slug}`)),
  ]

  const body = urls
    .map(
      (loc) => `  <url>
    <loc>${loc}</loc>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`
}

function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${buildAbsoluteUrl('sitemap.xml')}
`
}

function main() {
  const sitemap = buildSitemapXml()
  const robots = buildRobotsTxt()

  writeFileSync(resolve(rootDir, 'public', 'sitemap.xml'), sitemap, 'utf8')
  writeFileSync(resolve(rootDir, 'public', 'robots.txt'), robots, 'utf8')

  console.log(`Sitemap: ${bookCatalog.length + 1} URLs → public/sitemap.xml`)
  console.log(`Robots: public/robots.txt (Sitemap: ${buildAbsoluteUrl('sitemap.xml')})`)
}

main()
