import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function LocationContact(){
  return (
    <section id="ubicacion" className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">Visítanos</h2>
          <p className="text-slate-300 mt-2">Acceso cómodo y rápido desde las principales vías. Estacionamiento disponible.</p>

          <div className="mt-6 space-y-4">
            <p className="flex items-center gap-3"><MapPin className="text-blue-400"/> <span><strong>Dirección:</strong> Calle Principal #123, Centro (Placeholder)</span></p>
            <p className="flex items-center gap-3"><Clock className="text-blue-400"/> <span><strong>Horarios:</strong> Abierto 24 horas, 7 días a la semana</span></p>
            <p className="flex items-center gap-3"><Phone className="text-blue-400"/> <span><strong>Teléfono:</strong> +34 123 456 789 (Placeholder)</span></p>
            <p className="flex items-center gap-3"><Mail className="text-blue-400"/> <span><strong>Email:</strong> info@lavanderia.com (Placeholder)</span></p>
          </div>
        </div>
        <div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1757233297886-f07bd0f626b5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnN0YWxhY2lvbmVzJTIwZGUlMjBsYSUyMGxhdmFuZGVyJUMzJUFEYXxlbnwwfDB8fHwxNzYzNzIxOTg5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Instalaciones de la lavandería" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  )
}
