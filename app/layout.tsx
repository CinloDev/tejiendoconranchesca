import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Tejiendo con Ranchesca',
  description: 'Patrones, packs y recomendaciones para tejer con alma artesanal.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="border-b py-4">
          <div className="container mx-auto px-4">Tejiendo con Ranchesca</div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="border-t py-6 mt-12">
          <div className="container mx-auto px-4 text-sm">© Ranchesca</div>
        </footer>
      </body>
    </html>
  )
}
