import React from 'react'
import { getAllItems } from '../../lib/content'
import Card from '../../components/Card'

export default function PatronesPage() {
  const items = getAllItems('patrones')
  return (
    <section>
      <h1 className="text-2xl font-bold">Patrones</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it: any) => (
          <Card key={it.slug} title={it.meta.title} description={it.meta.description} href={`/patrones/${it.slug}`} />
        ))}
      </div>
    </section>
  )
}
