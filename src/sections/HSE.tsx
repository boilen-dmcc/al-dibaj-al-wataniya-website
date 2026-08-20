import { hsePoints } from '../data/content'
import { photos } from '../components/PhotoImage'
import { IconShield, IconApproach, IconAlert, IconLeaf } from '../components/icons'
import { useRevealOnScroll } from '../hooks/useReveal'

const iconMap = { shield: IconShield, approach: IconApproach, alert: IconAlert, leaf: IconLeaf }

export default function HSE() {
  const ref = useRevealOnScroll<HTMLElement>()
  return (
    <section id="hse" ref={ref} className="bg-charcoal-900 py-24 lg:py-32">
      <div className="container-adw grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-line" />
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-bronze-300">HSE</span>
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl text-offwhite leading-tight">
            Health, Safety &amp; Environment
          </h2>
          <p className="reveal mt-6 text-offwhite/70 text-lg leading-relaxed" style={{ transitionDelay: '100ms' }}>
            ADW takes a safety-first approach to its contracting and trading activities across the energy and
            industrial sectors. We maintain awareness of the risks present in industrial environments and work
            responsibly toward the safety of our people, our partners and the environments in which we operate.
          </p>

          <div className="reveal grid sm:grid-cols-2 gap-5 mt-10" style={{ transitionDelay: '180ms' }}>
            {hsePoints.map((p) => {
              const Icon = iconMap[p.icon as keyof typeof iconMap]
              return (
                <div key={p.title} className="border border-offwhite/10 p-6 hover:border-bronze-400/50 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-bronze-400 mb-3" />
                  <h3 className="font-display text-lg text-offwhite mb-1.5">{p.title}</h3>
                  <p className="text-sm text-offwhite/60 leading-relaxed">{p.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="reveal relative">
          <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
            <img
              src={photos.ppeWorkers}
              alt="Workers wearing PPE and hard hats at an onshore industrial site"
              className="photo-grade w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-bronze-400" />
        </div>
      </div>
    </section>
  )
}
