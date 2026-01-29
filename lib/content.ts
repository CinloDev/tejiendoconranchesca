import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_PATH = path.join(process.cwd(), 'content')

export function getContentFolders() {
  return fs.readdirSync(CONTENT_PATH, { withFileTypes: true }).filter(d=>d.isDirectory()).map(d=>d.name)
}

export function getAllItems(type: string) {
  const folder = path.join(CONTENT_PATH, type)
  if (!fs.existsSync(folder)) return []
  const items = fs.readdirSync(folder).filter(f => f.endsWith('.mdx') || f.endsWith('.md')).map(filename => {
    const raw = fs.readFileSync(path.join(folder, filename), 'utf-8')
    let data, content
    try {
      const parsed = matter(raw)
      data = parsed.data
      content = parsed.content
    } catch (err: any) {
      console.error('Error parsing frontmatter in', filename, err && err.message)
      throw new Error(`YAML parse error in ${filename}: ${err && err.message}`)
    }
    return { slug: filename.replace(/\.mdx?$/, ''), meta: data, content }
  })

  // Ordenar por campo `order` (numérico) si existe; si no, usar `date` como fallback
  items.sort((a: any, b: any) => {
    const ao = typeof a.meta?.order === 'number' ? a.meta.order : (a.meta?.date ? new Date(a.meta.date).getTime() : 0)
    const bo = typeof b.meta?.order === 'number' ? b.meta.order : (b.meta?.date ? new Date(b.meta.date).getTime() : 0)
    return ao - bo
  })

  return items
}

export function getItemBySlug(type: string, slug: string) {
  const file = path.join(CONTENT_PATH, type, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf-8')
  try {
    const { data, content } = matter(raw)
    return { slug, meta: data, content }
  } catch (err: any) {
    console.error('Error parsing frontmatter in', `${type}/${slug}.mdx`, err && err.message)
    throw new Error(`YAML parse error in ${type}/${slug}.mdx: ${err && err.message}`)
  }
}
