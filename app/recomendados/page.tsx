import React from 'react'
import { getAllItems } from '../../lib/content'
import AffiliateCard from '../../components/AffiliateCard'

export default function RecomendadosPage() {
  const items = getAllItems('recomendados')
  return (
    <section>
      <h1 className="text-2xl font-bold">Recomendados</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it: any) => (
          <AffiliateCard key={it.slug} title={it.meta.title} description={it.meta.description} slug={it.meta.affiliateSlug || it.slug} />
        ))}
      </div>
    </section>
  )
}
