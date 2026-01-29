export const metadata = {
  title: 'Sobre Nosotros',
  description: 'Conoce la misión y la historia detrás de Tejiendo con Ranchesca.'
}

export default function SobreNosotros() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Sobre Nosotros</h1>

      <p className="mt-4 text-gray-700">Soy Ranchesca, creadora de este espacio donde comparto patrones, packs y recomendaciones para tejer con cariño. Aquí encontrarás proyectos paso a paso, recursos y recomendaciones pensadas para quienes disfrutan del tejido artesanal.</p>

      <h2 className="mt-6 text-2xl font-semibold">Nuestra misión</h2>
      <p className="mt-2 text-gray-700">Fomentar una comunidad creativa y accesible que inspire a tejer, aprender y compartir conocimientos, cuidando los detalles y apoyando la artesanía local.</p>

      <h2 className="mt-6 text-2xl font-semibold">¿Quieres colaborar o preguntar algo?</h2>
      <p className="mt-2 text-gray-700">Escríbeme en la página de <a href="/contacto" className="text-brand underline">Contacto</a> o búscame en redes sociales. ¡Me encantaría saber de tu proyecto!</p>
    </section>
  )
}
