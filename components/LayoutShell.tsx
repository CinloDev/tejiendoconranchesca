"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Container from './Container'

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-3 py-2 rounded shadow">Saltar al contenido</a>

      <header className="bg-white border-b">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-rose-600 font-semibold text-lg">Tejiendo con Ranchesca</Link>
              <span className="text-sm text-gray-500 hidden sm:inline">Patrones, packs y recomendaciones</span>
            </div>

            <nav aria-label="Principal" className="hidden sm:block">
              <ul className="flex items-center gap-4">
                <li><Link href="/" className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-rose-300">Inicio</Link></li>
                <li><Link href="/blog" className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-rose-300">Blog</Link></li>
                <li><Link href="/patrones" className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-rose-300">Patrones</Link></li>
                <li><Link href="/packs" className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-rose-300">Packs</Link></li>
                <li><Link href="/recomendados" className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-rose-300">Recomendados</Link></li>
              </ul>
            </nav>

            <div className="sm:hidden">
              <button
                aria-controls="mobile-menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-300"
              >
                <span className="sr-only">Abrir menú</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </Container>

        {open && (
          <div id="mobile-menu" className="sm:hidden border-t">
            <Container>
              <ul className="flex flex-col py-3">
                <li className="py-1"><Link href="/" className="block px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300">Inicio</Link></li>
                <li className="py-1"><Link href="/blog" className="block px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300">Blog</Link></li>
                <li className="py-1"><Link href="/patrones" className="block px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300">Patrones</Link></li>
                <li className="py-1"><Link href="/packs" className="block px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300">Packs</Link></li>
                <li className="py-1"><Link href="/recomendados" className="block px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300">Recomendados</Link></li>
              </ul>
            </Container>
          </div>
        )}
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-50 border-t mt-12">
        <Container>
          <div className="py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold">Tejiendo con Ranchesca</h4>
              <p className="text-sm text-gray-600 mt-2">Proyectos, patrones y recomendaciones con cariño artesanal.</p>
            </div>

            <div>
              <h5 className="font-medium">Navegación</h5>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                <li><Link href="/patrones" className="hover:underline">Patrones</Link></li>
                <li><Link href="/packs" className="hover:underline">Packs</Link></li>
                <li><Link href="/recomendados" className="hover:underline">Recomendados</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium">Legal</h5>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li><Link href="/transparencia" className="hover:underline">Transparencia</Link></li>
                <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
              </ul>
            </div>
          </div>

          <div className="py-4 border-t text-center text-sm text-gray-500">© {new Date().getFullYear()} Ranchesca — Hecho a mano con ❤️</div>
        </Container>
      </footer>
    </div>
  )
}
