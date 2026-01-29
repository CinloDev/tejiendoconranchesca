import React from 'react'
import { getItemBySlug, getAllItems } from '../../../lib/content'
import ContentRenderer from '../../../components/ContentRenderer'

export async function generateStaticParams() {
  const items = getAllItems('patrones')
  return items.map((i: any) => ({ slug: i.slug }))
}

export default async function Patron({ params }: { params: { slug: string } }) {
  const item = getItemBySlug('patrones', params.slug)
  if (!item) return <div>No encontrado</div>
  let MDXContent: any = null
  try {
    const mod = await import(`../../../../content/patrones/${params.slug}.mdx`)
    MDXContent = mod.default
  } catch (e) {
    MDXContent = null
  }

  return (
    <article>
      <h1 className="text-2xl font-bold">{item.meta.title}</h1>
      <p className="text-gray-600">{item.meta.description}</p>
      <div className="mt-6 prose">
        {MDXContent ? (
          <ContentRenderer>
            <MDXContent />
          </ContentRenderer>
        ) : (
          <div>{item.content}</div>
        )}
      </div>
    </article>
  )
}
