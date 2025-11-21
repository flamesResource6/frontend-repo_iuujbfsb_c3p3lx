import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Comprar from './pages/Comprar'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/exito" element={<Success />} />
        <Route path="/cancelado" element={<Cancel />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
