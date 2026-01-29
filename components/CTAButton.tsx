import React from 'react'
import Link from 'next/link'

export default function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block bg-brand text-white px-4 py-2 rounded hover:bg-brand-light hover:text-brand-dark hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-light"
    >
      {children}
    </Link>
  )
}
