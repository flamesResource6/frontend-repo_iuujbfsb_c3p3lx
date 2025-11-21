import { WashingMachine } from 'lucide-react'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
            <WashingMachine size={22} />
          </div>
          <div>
            <p className="text-white font-semibold">Lavandería & Vending</p>
            <p className="text-xs text-slate-400">Servicio 24/7</p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Enlaces rápidos</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
            <li><a href="/comprar" className="hover:text-white">Comprar Tarjeta</a></li>
            <li><a href="#ubicacion" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <p>© {year} Lavandería & Vending. Todos los derechos reservados.</p>
          <p className="text-slate-400 mt-1">Información legal básica y políticas del sitio (placeholder).</p>
        </div>
      </div>
    </footer>
  )
}
