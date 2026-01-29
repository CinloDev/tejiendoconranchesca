import Link from 'next/link'
import React from 'react'

export default function AffiliateCard({ title, description, slug }: { title: string; description?: string; slug: string }) {
  return (
    <div className="border rounded-lg p-4">
      <h4 className="font-semibold text-sm">{title}</h4>
      {description && <p className="text-sm text-gray-600 mt-2">{description}</p>}
      <div className="mt-4">
        <Link href={`/go/${slug}`} className="inline-block bg-rose-600 text-white px-3 py-1 rounded hover:bg-rose-700">Ver oferta</Link>
      </div>
    </div>
  )
}
