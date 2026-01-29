import Link from 'next/link'
import React from 'react'

export default function Card({ title, description, href }: { title: string; description?: string; href: string }) {
  return (
    <article className="border rounded-lg p-4 hover:shadow-md focus-within:ring-2 ring-offset-2 ring-brand-light">
      <h3 className="text-lg font-semibold">
        <Link href={href} className="block text-brand-dark">{title}</Link>
      </h3>
      {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
    </article>
  )
}
