import { getAllItems } from '../../lib/content'
import { NextResponse } from 'next/server'

function url(path: string) {
  const base = process.env.SITE_URL || 'https://tejiendoconranchesca.example'
  return `${base}${path}`
}

export async function GET() {
  const pages = ['/', '/blog', '/patrones', '/packs', '/recomendados', '/transparencia', '/contacto']
  const blog = getAllItems('blog')
  const patrones = getAllItems('patrones')
  const packs = getAllItems('packs')
  const recs = getAllItems('recomendados')

  const all = [
    ...pages.map(p => ({ loc: url(p) })),
    ...blog.map((b: any) => ({ loc: url(`/blog/${b.slug}`), lastmod: b.meta.date })),
    ...patrones.map((p: any) => ({ loc: url(`/patrones/${p.slug}`), lastmod: p.meta.date })),
    ...packs.map((p: any) => ({ loc: url(`/packs/${p.slug}`), lastmod: p.meta.date })),
    ...recs.map((r: any) => ({ loc: url(`/recomendados/${r.slug}`), lastmod: r.meta.date }))
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${all
      .map(a => `
      <url>
        <loc>${a.loc}</loc>
        ${a.lastmod ? `<lastmod>${a.lastmod}</lastmod>` : ''}
      </url>
    `)
      .join('')}
  </urlset>`

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } })
}
