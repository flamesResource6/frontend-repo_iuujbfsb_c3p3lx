import { Clock, BadgeCheck, MapPin, Percent } from 'lucide-react'

export default function Benefits(){
  const items = [
    { icon: Clock, title: 'Disponibilidad 24/7', desc: 'Abierto todos los días, todas las horas. Acceso sin restricciones.' },
    { icon: BadgeCheck, title: 'Equipos modernos', desc: 'Máquinas de última tecnología. Resultados de calidad garantizados.' },
    { icon: MapPin, title: 'Ubicación céntrica', desc: 'Fácil acceso y estacionamiento disponible.' },
    { icon: Percent, title: 'Tarjeta prepago con descuentos', desc: 'Ahorra en cada uso, más económico que el pago directo.' },
  ]

  return (
    <section id="beneficios" className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold">Beneficios</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="bg-slate-900 rounded-xl p-6 ring-1 ring-white/10">
              <it.icon className="text-blue-400"/>
              <h3 className="mt-4 font-semibold">{it.title}</h3>
              <p className="text-slate-300 mt-1 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
