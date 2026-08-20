import { services } from '../data/content'
import PhotoImage from '../components/PhotoImage'
import { IconDerrick, IconContract, IconSupply, IconTrade, IconEnergy, IconProject, IconArrowRight } from '../components/icons'
import { useRevealOnScroll } from '../hooks/useReveal'

const iconMap = {
  derrick: IconDerrick,
  contract: IconContract,
  supply: IconSupply,
  trade: IconTrade,
  energy: IconEnergy,
  project: IconProject,
}

export default function Services() {
  const ref = useRevealOnScroll<HTMLElement>()
  return (
    <section id="services" ref={ref} className="bg-offwhite py-24 lg:py-32">
      <div className="container-adw">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-line" />
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-bronze-600">What We Do</span>
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl text-charcoal-950 leading-tight">Our Services</h2>
          <p className="reveal mt-5 text-charcoal-600 text-lg" style={{ transitionDelay: '80ms' }}>
            A focused range of contracting, trading and supply solutions built around the needs of the energy and
            industrial sectors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <div
                key={s.title}
                className="reveal group relative overflow-hidden bg-charcoal-950 aspect-[4/5]"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <PhotoImage
                  photo={s.photo}
                  alt={`${s.title} — ADW onshore Oil & Gas and industrial operations`}
                  className="absolute inset-0 w-full h-full object-cover opacity-95 object-bottom group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/65 to-charcoal-950/25" />
                <div className="relative h-full flex flex-col justify-end p-7">
                  <Icon className="w-9 h-9 text-bronze-300 mb-4 transition-transform duration-500 group-hover:-translate-y-1" />
                  <h3 className="font-display text-2xl text-offwhite mb-2">{s.title}</h3>
                  <p className="text-sm text-offwhite/75 leading-relaxed mb-4">{s.description}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-bronze-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-400">
                    Learn more <IconArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bronze-500 via-bronze-300 to-bronze-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
