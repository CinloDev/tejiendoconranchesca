import Link from 'next/link'
import React from 'react'

type CardProps = {
  title: string
  description?: string
  href: string
  image?: string
}

export default function Card({ title, description, href, image }: CardProps) {
  return (
    <article className="border rounded-lg overflow-hidden bg-white hover:shadow-md focus-within:ring-2 ring-offset-2 ring-brand-light">
      {image && (
        <Link href={href} className="block">
          <div style={{ aspectRatio: '1.25 / 1' }} className="w-full bg-gray-100 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </Link>
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold">
          <Link href={href} className="block text-brand-dark">{title}</Link>
        </h3>
        {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
      </div>
    </article>
  )
}
