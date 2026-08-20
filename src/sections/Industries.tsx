import { industries } from '../data/content'
import SceneImage from '../components/SceneImage'
import { useRevealOnScroll } from '../hooks/useReveal'

export default function Industries() {
  const ref = useRevealOnScroll<HTMLElement>()
  return (
    <section id="industries" ref={ref} className="bg-paper py-24 lg:py-32">
      <div className="container-adw">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-line" />
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-bronze-600">Where We Work</span>
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl text-charcoal-950 leading-tight">
            Industries We Serve
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-800/10">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className="reveal group relative overflow-hidden bg-charcoal-950 aspect-square"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <SceneImage
                scene={ind.scene}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-charcoal-950/50 group-hover:bg-charcoal-950/30 transition-colors duration-500" />
              <div className="relative h-full flex flex-col justify-between p-7">
                <span className="text-[11px] tracking-[0.25em] uppercase text-bronze-300/80 font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="w-8 h-px bg-bronze-400 mb-3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <h3 className="font-display text-2xl sm:text-3xl text-offwhite">{ind.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
