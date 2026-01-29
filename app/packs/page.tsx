import React from 'react'
import { getAllItems } from '../../lib/content'
import Card from '../../components/Card'

export default function PacksPage() {
  const items = getAllItems('packs')
  return (
    <section>
      <h1 className="text-2xl font-bold">Pack de Patrones Amigurumis y Cursos</h1>
      <p className="mt-3 text-gray-700 max-w-3xl">Aquí encontrarás packs de patrones de distintas temáticas, digitales y 100% en español, con todo el paso a paso. Además, ofrecemos cursos para aprender a tejer tanto amigurumis como prendas.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it: any) => (
          <Card key={it.slug} title={it.meta.title} description={it.meta.description} href={`/packs/${it.slug}`} image={it.meta.image} />
        ))}
      </div>
    </section>
  )
}
