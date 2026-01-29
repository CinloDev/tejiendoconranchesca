import React from 'react'

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="py-4 border-b">
        <div className="container mx-auto px-4 flex justify-between">
          <a href="/" className="font-bold">Tejiendo con Ranchesca</a>
          <div className="space-x-4">
            <a href="/blog">Blog</a>
            <a href="/patrones">Patrones</a>
            <a href="/packs">Packs</a>
            <a href="/recomendados">Recomendados</a>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  )
}
