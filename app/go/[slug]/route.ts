import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug
  const file = path.join(process.cwd(), 'content', 'affiliate-links.json')
  if (!fs.existsSync(file)) return new NextResponse('No encontrado', { status: 404 })
  const map = JSON.parse(fs.readFileSync(file, 'utf-8'))
  const dest = map[slug]
  if (!dest) return new NextResponse('No encontrado', { status: 404 })

  try {
    const url = new URL(dest)
    // Añadir UTM si no existe
    if (!url.searchParams.has('utm_source')) {
      url.searchParams.set('utm_source', 'tejiendo')
      url.searchParams.set('utm_medium', 'redirect')
      url.searchParams.set('utm_campaign', slug)
    }
    return NextResponse.redirect(url.toString(), 302)
  } catch (e) {
    // Si URL inválida, devolver 500
    return new NextResponse('URL inválida', { status: 500 })
  }
}
