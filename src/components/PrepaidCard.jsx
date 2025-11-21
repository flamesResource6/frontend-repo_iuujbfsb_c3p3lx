import { Link } from 'react-router-dom'
import { CreditCard, Zap, PiggyBank, Wallet } from 'lucide-react'

export default function PrepaidCard(){
  return (
    <section id="tarjeta" className="bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">Tarjeta Prepago - Ahorra en Cada Uso</h2>
          <p className="text-slate-300 mt-3">Tarjeta personalizada con nuestro logo que ofrece descuentos exclusivos en todos los servicios. Más económico que pagar en efectivo o tarjeta directamente en las máquinas. Es recargable y reutilizable.</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            <li className="flex items-start gap-3"><PiggyBank className="text-blue-400"/><span>Ahorro en cada lavado y compra</span></li>
            <li className="flex items-start gap-3"><Wallet className="text-blue-400"/><span>Sin necesidad de llevar efectivo</span></li>
            <li className="flex items-start gap-3"><Zap className="text-blue-400"/><span>Proceso más rápido en las máquinas</span></li>
            <li className="flex items-start gap-3"><CreditCard className="text-blue-400"/><span>Descuentos exclusivos para usuarios de tarjeta</span></li>
          </ul>
          <p className="text-slate-300 mt-4">En las máquinas físicas aceptamos efectivo y tarjeta bancaria, pero recomendamos comprar nuestra tarjeta prepago para obtener mejores precios.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/comprar" className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-500">Comprar Tarjeta Prepago</Link>
            <a href="#beneficios" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20">Ver Beneficios</a>
          </div>
        </div>
        <div className="">
          <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 shadow-2xl ring-1 ring-white/10">
            <div className="text-white font-semibold">LAVANDERÍA & VENDING</div>
            <div className="mt-8 text-4xl font-bold tracking-wider">TARJETA PREPAGO</div>
            <div className="mt-10 flex items-center justify-between text-white/90">
              <div>
                <p className="text-xs">Nombre</p>
                <p className="font-medium">Cliente</p>
              </div>
              <CreditCard size={42} />
            </div>
          </div>
          <p className="text-slate-400 text-sm mt-3">Mockup de tarjeta con logo del negocio.</p>
        </div>
      </div>
    </section>
  )
}
