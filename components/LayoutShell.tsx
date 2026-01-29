"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Container from './Container'
import { SiInstagram, SiPinterest, SiYoutube, SiTiktok } from 'react-icons/si'

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-3 py-2 rounded shadow">Saltar al contenido</a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-light border-b border-brand-light">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                <img src="/assets/logo.png" alt="Tejiendo con Ranchesca" className="h-14 w-auto" />
                <div className="flex flex-col leading-none">
                  <span className="text-brand font-bold text-lg">Tejiendo con Ranchesca</span>
                  <span className="text-sm text-gray-500 hidden sm:block">Patrones, packs y recomendaciones</span>
                </div>
              </Link>
            </div>

            <nav aria-label="Principal" className="hidden sm:block text-gray-700">
              <ul className="flex items-center gap-4">
                <li><Link href="/" className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-brand-light font-medium">Inicio</Link></li>
                <li><Link href="/blog" className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-brand-light font-medium">Blog</Link></li>
                <li><Link href="/patrones" className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-brand-light font-medium">Patrones</Link></li>
                <li><Link href="/packs" className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-brand-light font-medium">Packs</Link></li>
                <li><Link href="/recomendados" className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-brand-light font-medium">Recomendados</Link></li>
                <li><Link href="/sobre-nosotros" className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-brand-light font-medium">Sobre Nosotros</Link></li>
              </ul>
            </nav>

            <div className="sm:hidden">
              <button
                aria-controls="mobile-menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-light"
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
          <div id="mobile-menu" className="sm:hidden border-t bg-brand-light border-brand-light text-gray-700">
            <Container>
              <ul className="flex flex-col py-3">
                <li className="py-1"><Link href="/" onClick={() => setOpen(false)} className="block px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-light font-medium">Inicio</Link></li>
                <li className="py-1"><Link href="/blog" onClick={() => setOpen(false)} className="block px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-light font-medium">Blog</Link></li>
                <li className="py-1"><Link href="/patrones" onClick={() => setOpen(false)} className="block px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-light font-medium">Patrones</Link></li>
                <li className="py-1"><Link href="/packs" onClick={() => setOpen(false)} className="block px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-light font-medium">Packs</Link></li>
                <li className="py-1"><Link href="/recomendados" onClick={() => setOpen(false)} className="block px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-light font-medium">Recomendados</Link></li>
                <li className="py-1"><Link href="/sobre-nosotros" onClick={() => setOpen(false)} className="block px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-light font-medium">Sobre Nosotros</Link></li>
              </ul>
            </Container>
          </div>
        )}
      </header>

      <main id="main" className="flex-1 site-section pt-28">
        {children}
      </main>

      <footer className="bg-brand-light border-t mt-12 border-brand-light">
        <Container>
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            <div>
              <h4 className="font-semibold">Tejiendo con Ranchesca</h4>
              <p className="text-sm text-gray-600 mt-2">Proyectos, patrones y recomendaciones con cariño artesanal.</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium">Navegación</h5>
                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                  <li><Link href="/blog" className="hover:no-underline hover:text-brand-dark">Blog</Link></li>
                  <li><Link href="/patrones" className="hover:no-underline hover:text-brand-dark">Patrones</Link></li>
                  <li><Link href="/packs" className="hover:no-underline hover:text-brand-dark">Packs</Link></li>
                  <li><Link href="/recomendados" className="hover:no-underline hover:text-brand-dark">Recomendados</Link></li>
                  <li><Link href="/sobre-nosotros" className="hover:no-underline hover:text-brand-dark">Sobre Nosotros</Link></li>
                </ul>
              </div>

              <div>
                <h5 className="font-medium">Legal</h5>
                <ul className="mt-2 text-sm text-gray-700 space-y-1">
                  <li><Link href="/transparencia" className="hover:no-underline hover:text-brand-dark">Transparencia</Link></li>
                  <li><Link href="/contacto" className="hover:no-underline hover:text-brand-dark">Contacto</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-4 border-t">
            <div className="flex items-center justify-center gap-6 py-3">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-brand-dark">
                <SiInstagram className="h-6 w-6" />
              </a>

              <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-gray-600 hover:text-brand-dark">
                <SiPinterest className="h-6 w-6" />
              </a>

              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-600 hover:text-brand-dark">
                <SiYoutube className="h-6 w-6" />
              </a>

              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-600 hover:text-brand-dark">
                <SiTiktok className="h-6 w-6" />
              </a>
            </div>

            <div className="text-center text-sm text-gray-500">© {new Date().getFullYear()} Ranchesca — Hecho a mano con ❤️</div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
