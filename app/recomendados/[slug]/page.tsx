import React from 'react'
import { getItemBySlug, getAllItems } from '../../../lib/content'
import ContentRenderer from '../../../components/ContentRenderer'
import Link from 'next/link'

export async function generateStaticParams() {
  const items = getAllItems('recomendados')
  return items.map((i: any) => ({ slug: i.slug }))
}

export default async function Recom({ params }: { params: { slug: string } }) {
  const item = getItemBySlug('recomendados', params.slug)
  if (!item) return <div>No encontrado</div>
  let MDXContent: any = null
  try {
    const mod = await import(`../../../../content/recomendados/${params.slug}.mdx`)
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
      <div className="mt-6">
        <Link href={`/go/${item.meta.affiliateSlug || item.slug}`} className="inline-block bg-rose-600 text-white px-4 py-2 rounded">Ver oferta</Link>
      </div>
    </article>
  )
}
