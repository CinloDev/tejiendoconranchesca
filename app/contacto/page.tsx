import React from 'react'

export default function Contacto() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Contacto</h1>
      <p className="mt-4 text-gray-700">Escríbeme por WhatsApp o usa el formulario:</p>
      <div className="mt-4">
        <a href="https://wa.me/34123456789" className="inline-block bg-green-600 text-white px-4 py-2 rounded">Abrir WhatsApp</a>
      </div>
      <form className="mt-6 max-w-lg">
        <label className="block">
          <span className="text-sm">Nombre</span>
          <input className="mt-1 block w-full border rounded px-2 py-1" />
        </label>
        <label className="block mt-3">
          <span className="text-sm">Mensaje</span>
          <textarea className="mt-1 block w-full border rounded px-2 py-1" rows={4} />
        </label>
        <button type="submit" className="mt-3 inline-block bg-brand text-white px-4 py-2 rounded hover:bg-brand-light hover:text-brand-dark hover:shadow-sm">Enviar</button>
      </form>
    </section>
  )
}
