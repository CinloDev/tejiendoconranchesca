import React from 'react'
import Link from 'next/link'

export default function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-block bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400">
      {children}
    </Link>
  )
}
