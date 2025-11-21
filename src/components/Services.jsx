export default function Services(){
  return (
    <section id="servicios" className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold">Servicios</h2>
        <p className="text-slate-300 mt-2">Disponibles 24/7 para tu comodidad.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Lavandería Autoservicio */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1648116853709-6018f289c080?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYXZhZG9yYXMlMjBtb2Rlcm5hc3xlbnwwfDB8fHwxNzYzNzIxOTg5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Lavadoras modernas" className="h-56 w-full object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Lavandería Autoservicio</h3>
              <p className="text-slate-300 mt-2">Máquinas lavadoras y secadoras modernas para autoservicio.</p>
              <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
                <li>Máquinas de alta capacidad</li>
                <li>Detergentes de calidad incluidos</li>
                <li>Secado rápido y eficiente</li>
                <li>Ambiente limpio y seguro</li>
                <li>Disponibilidad 24/7</li>
              </ul>
            </div>
          </div>

          {/* Máquinas Expendedoras */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1200&auto=format&fit=crop" alt="Máquinas expendedoras" className="h-56 w-full object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Máquinas Expendedoras</h3>
              <p className="text-slate-300 mt-2">Snacks, bebidas y productos disponibles al instante.</p>
              <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
                <li>Variedad de snacks y dulces</li>
                <li>Bebidas frías y calientes</li>
                <li>Disponibilidad 24/7</li>
                <li>Precios competitivos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
