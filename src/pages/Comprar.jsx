import { useEffect, useState } from 'react'

export default function Comprar(){
  const [config, setConfig] = useState(null)
  const [form, setForm] = useState({name:'', email:'', phone:'', amount:'', delivery_method:'recogida'})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try{
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(base + '/api/config')
        const data = await res.json()
        setConfig(data)
        if(data.topup_options?.length){
          setForm(f => ({...f, amount: data.topup_options[0]}))
        }
      }catch(e){
        setError('No se pudo cargar la configuración')
      }
    }
    load()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try{
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(base + '/api/prepaid/create-checkout', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({...form, amount: Number(form.amount)})
      })
      const data = await res.json()
      if(!res.ok){
        throw new Error(data.detail || 'Error iniciando el pago')
      }
      if(data.url){
        window.location.href = data.url
      }else{
        // Mock mode: go to success URL
        window.location.href = data.url || '/exito'
      }
    }catch(e){
      setError(e.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Comprar Tarjeta Prepago</h1>
        <p className="text-slate-300 mt-2">Más económico que pagar directamente en las máquinas. La tarjeta física se entrega en el local o se envía a domicilio (según tu elección). Tras la compra recibirás un email de confirmación.</p>

        {config && (
          <div className="mt-6 bg-slate-900 rounded-xl p-6 ring-1 ring-white/10">
            <h2 className="font-semibold">Detalles y precios (placeholders)</h2>
            <ul className="list-disc list-inside text-slate-300 mt-2 text-sm">
              <li>Precio de emisión de tarjeta: €{config.card_issue_price}</li>
              <li>Opciones de recarga inicial: {config.topup_options.join(', ').replaceAll(',', ', €')} €</li>
              <li>Moneda: EUR</li>
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 bg-slate-900 p-6 rounded-xl ring-1 ring-white/10">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Nombre completo</label>
              <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full bg-slate-800 rounded-md px-3 py-2 outline-none ring-1 ring-white/10"/>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" required value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="w-full bg-slate-800 rounded-md px-3 py-2 outline-none ring-1 ring-white/10"/>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Teléfono</label>
              <input required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="w-full bg-slate-800 rounded-md px-3 py-2 outline-none ring-1 ring-white/10"/>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Monto de recarga</label>
              <select value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})} className="w-full bg-slate-800 rounded-md px-3 py-2 outline-none ring-1 ring-white/10">
                {config?.topup_options?.map(opt => (
                  <option key={opt} value={opt}>€{opt}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Entrega de tarjeta</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm"><input type="radio" name="delivery" checked={form.delivery_method==='recogida'} onChange={()=>setForm({...form, delivery_method:'recogida'})}/> Recogida en local</label>
              <label className="flex items-center gap-2 text-sm"><input type="radio" name="delivery" checked={form.delivery_method==='envio'} onChange={()=>setForm({...form, delivery_method:'envio'})}/> Envío a domicilio</label>
            </div>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button disabled={loading} className="mt-2 px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 disabled:opacity-60">
            {loading ? 'Procesando...' : 'Pagar y finalizar'}
          </button>
        </form>
      </div>
    </div>
  )
}
