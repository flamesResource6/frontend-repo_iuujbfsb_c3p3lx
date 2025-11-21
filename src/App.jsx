import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import PrepaidCard from './components/PrepaidCard'
import Benefits from './components/Benefits'
import LocationContact from './components/LocationContact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <PrepaidCard />
      <Benefits />
      <LocationContact />
      <Footer />
    </div>
  )
}

export default App
