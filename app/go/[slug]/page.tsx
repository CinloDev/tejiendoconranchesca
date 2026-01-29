import { getItemBySlug } from '../../../../lib/content'
import affiliateLinks from '../../../content/affiliate-links.json'
import { redirect } from 'next/navigation'

interface Props { params: { slug: string } }

export default async function Go({ params }: Props) {
  const { slug } = params
  const url = (affiliateLinks as Record<string,string>)[slug]
  if (!url) {
    // Si no existe, mostrar 404
    return <div>Enlace no encontrado</div>
  }
  // redirigir (server component)
  redirect(url)
}
