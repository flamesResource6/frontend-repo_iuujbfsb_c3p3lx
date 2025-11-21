import { Link, NavLink } from 'react-router-dom'
import { WashingMachine, CreditCard, MapPin, Info, ShoppingCart } from 'lucide-react'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-blue-600' : 'text-slate-200 hover:text-white hover:bg-blue-600/30'}`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
              <WashingMachine size={20} />
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold">Lavandería & Vending</p>
              <p className="text-xs text-slate-300">Servicio 24/7</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <a href="#servicios" className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-blue-600/30 flex items-center gap-1"><Info size={16}/> Servicios</a>
            <a href="#tarjeta" className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-blue-600/30 flex items-center gap-1"><CreditCard size={16}/> Tarjeta Prepago</a>
            <a href="#beneficios" className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-blue-600/30">Beneficios</a>
            <a href="#ubicacion" className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-blue-600/30 flex items-center gap-1"><MapPin size={16}/> Ubicación</a>
          </nav>

          <div className="flex items-center gap-3">
            <NavLink to="/comprar" className={({isActive}) => `inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition ${isActive ? 'ring-2 ring-white/40' : ''}`}>
              <ShoppingCart size={18}/> Comprar Tarjeta
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}
