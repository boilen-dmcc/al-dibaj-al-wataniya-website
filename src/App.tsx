import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Industries from './sections/Industries'
import WhyChoose from './sections/WhyChoose'
import Capabilities from './sections/Capabilities'
import HSE from './sections/HSE'
import CTA from './sections/CTA'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-charcoal-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyChoose />
        <Capabilities />
        <HSE />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
