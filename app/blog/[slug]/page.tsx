import React from 'react'
import { getItemBySlug, getAllItems } from '../../../lib/content'
import ContentRenderer from '../../../components/ContentRenderer'

export async function generateStaticParams() {
  const items = getAllItems('blog')
  return items.map((i: any) => ({ slug: i.slug }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params
  const item = getItemBySlug('blog', slug)
  if (!item) return <div>Entrada no encontrada</div>

  // Importar el MDX como componente para SSR/SSG
  let MDXContent: any = null
  try {
    const mod = await import(`../../../../content/blog/${slug}.mdx`)
    MDXContent = mod.default
  } catch (e) {
    MDXContent = null
  }

  return (
    <article>
      <header>
        <h1 className="text-2xl font-bold">{item.meta.title}</h1>
        {item.meta.description && <p className="text-gray-600 mt-2">{item.meta.description}</p>}
      </header>
      <main className="mt-6 prose max-w-none">
        {MDXContent ? (
          <ContentRenderer>
            <MDXContent />
          </ContentRenderer>
        ) : (
          <div>{item.content}</div>
        )}
      </main>
    </article>
  )
}
