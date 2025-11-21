import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-slate-900 to-slate-900" />

      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Lavandería y Máquinas Expendedoras en un Solo Lugar
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Abierto 24/7. Lava tu ropa y compra snacks y bebidas cuando lo necesites, en un espacio limpio, moderno y seguro.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#servicios" className="px-5 py-3 rounded-md bg-white/10 text-white hover:bg-white/20">Ver Servicios</a>
            <Link to="/comprar" className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-500">Comprar Tarjeta</Link>
            <a href="#ubicacion" className="px-5 py-3 rounded-md bg-slate-800 text-white hover:bg-slate-700">Ver Ubicación</a>
          </div>

          <p className="mt-4 text-xs text-slate-400">Dirección y precios son placeholders y se pueden actualizar fácilmente.</p>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?q=80&w=1600&auto=format&fit=crop"
              alt="Instalaciones de lavandería modernas"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
