import { useEffect, useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function Success(){
  const [status, setStatus] = useState('validating')
  const [purchaseId, setPurchaseId] = useState('')

  useEffect(()=>{
    const params = new URLSearchParams(window.location.search)
    const session_id = params.get('session_id')
    const purchase_id = params.get('purchase_id')
    setPurchaseId(purchase_id || '')

    const run = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const url = new URL(base + '/api/prepaid/confirm')
      if(session_id) url.searchParams.set('session_id', session_id)
      if(purchase_id) url.searchParams.set('purchase_id', purchase_id)
      try{
        const res = await fetch(url)
        if(res.ok){
          setStatus('ok')
        }else{
          setStatus('error')
        }
      }catch(e){
        setStatus('error')
      }
    }
    run()
  },[])

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-slate-900 rounded-xl p-8 ring-1 ring-white/10 text-center">
        {status==='ok' ? (
          <>
            <CheckCircle className="mx-auto text-green-400" size={48}/>
            <h1 className="text-2xl font-bold mt-3">¡Compra confirmada!</h1>
            <p className="text-slate-300 mt-2">Hemos recibido tu pago correctamente. Recibirás un email con las instrucciones para recoger tu tarjeta en el local o solicitar envío.</p>
            {purchaseId && <p className="text-slate-400 text-sm mt-2">ID de compra: {purchaseId}</p>}
          </>
        ) : status==='validating' ? (
          <p>Validando pago...</p>
        ) : (
          <p>Ocurrió un problema validando tu pago. Si ya se realizó el cobro, nos pondremos en contacto.</p>
        )}
      </div>
    </div>
  )
}
