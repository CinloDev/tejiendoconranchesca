import './globals.css'
import type { ReactNode } from 'react'
import LayoutShell from '../components/LayoutShell'

export const metadata = {
  title: 'Tejiendo con Ranchesca',
  description: 'Patrones, packs y recomendaciones para tejer con alma artesanal.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}
