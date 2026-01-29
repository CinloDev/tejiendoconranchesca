import Link from 'next/link'
import React from 'react'
import { getAllItems } from '../../lib/content'
import Card from '../../components/Card'

export default function BlogPage() {
  const items = getAllItems('blog')

  return (
    <section>
      <h1 className="text-2xl font-bold">Blog</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it: any) => (
          <Card key={it.slug} title={it.meta.title} description={it.meta.description} href={`/blog/${it.slug}`} />
        ))}
      </div>
    </section>
  )
}
