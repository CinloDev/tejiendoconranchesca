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
  return fs.readdirSync(folder).filter(f => f.endsWith('.mdx') || f.endsWith('.md')).map(filename => {
    const raw = fs.readFileSync(path.join(folder, filename), 'utf-8')
    const { data, content } = matter(raw)
    return { slug: filename.replace(/\.mdx?$/, ''), meta: data, content }
  })
}

export function getItemBySlug(type: string, slug: string) {
  const file = path.join(CONTENT_PATH, type, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf-8')
  const { data, content } = matter(raw)
  return { slug, meta: data, content }
}
