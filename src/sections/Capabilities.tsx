import { capabilities } from '../data/content'
import PhotoImage from '../components/PhotoImage'
import { IconArrowRight } from '../components/icons'
import { useRevealOnScroll } from '../hooks/useReveal'

export default function Capabilities() {
  const ref = useRevealOnScroll<HTMLElement>()
  return (
    <section id="capabilities" ref={ref} className="bg-offwhite py-24 lg:py-32">
      <div className="container-adw">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-line" />
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-bronze-600">Capabilities</span>
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl text-charcoal-950 leading-tight">
            Our Capabilities
          </h2>
          <p className="reveal mt-5 text-charcoal-600 text-lg" style={{ transitionDelay: '80ms' }}>
            Areas where ADW supports clients across contracting, trading and industrial requirements. Project-
            specific details can be added here as work is completed.
          </p>
        </div>

        <div className="flex flex-col gap-px bg-charcoal-800/10">
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className="reveal group relative grid sm:grid-cols-[220px_1fr] items-stretch bg-white"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative h-40 sm:h-auto overflow-hidden">
                <PhotoImage
                  photo={c.photo}
                  alt={`${c.title} — ADW capability area`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal-950/25" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="text-[11px] tracking-[0.25em] uppercase text-bronze-600 font-semibold mb-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-charcoal-950 mb-2 flex items-center gap-3">
                  {c.title}
                  <IconArrowRight className="w-4 h-4 text-bronze-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400" />
                </h3>
                <p className="text-charcoal-600 leading-relaxed max-w-xl">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
