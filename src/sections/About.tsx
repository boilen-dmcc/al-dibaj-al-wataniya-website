import { aboutValues, company } from '../data/content'
import { photos } from '../components/PhotoImage'
import { IconReliable, IconQuality, IconShield, IconPartnership } from '../components/icons'
import { useRevealOnScroll } from '../hooks/useReveal'

const iconMap = { reliable: IconReliable, quality: IconQuality, shield: IconShield, partnership: IconPartnership }

export default function About() {
  const ref = useRevealOnScroll<HTMLElement>()
  return (
    <section id="about" ref={ref} className="bg-paper py-24 lg:py-32">
      <div className="container-adw grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden border border-charcoal-800/10 shadow-2xl">
            <img
              src={photos.pumpjackAlt}
              alt="Onshore oil field landscape reflecting ADW's roots in Iraq's land-based energy sector"
              className="photo-grade w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 to-transparent" />
          </div>
          <div className="hidden sm:flex absolute -bottom-8 -right-6 lg:-right-10 bg-charcoal-950 text-offwhite px-8 py-6 max-w-[240px] shadow-xl border-l-2 border-bronze-400">
            <p className="text-sm leading-relaxed text-offwhite/80">
              Rooted in Iraq&rsquo;s land-based energy and industrial landscape.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-line" />
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-bronze-600">About Us</span>
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl text-charcoal-950 leading-tight">
            {company.nameEn} — {company.nameFull}
          </h2>
          <p className="reveal mt-6 text-charcoal-700 text-lg leading-relaxed" style={{ transitionDelay: '100ms' }}>
            ADW is an Iraq-based contracting and general trading company serving the Oil &amp; Gas, energy and
            industrial sectors. We focus on reliable supply, professional execution and quality across our
            contracting and trading activities, working to build long-term partnerships with our clients and
            suppliers.
          </p>
          <p className="reveal mt-4 text-charcoal-700 text-lg leading-relaxed" style={{ transitionDelay: '160ms' }}>
            Our approach is grounded in safety, dependability and a clear understanding of the demands of energy
            and industrial environments — supporting clients with the contracting and trading solutions their
            projects require.
          </p>

          <div className="reveal grid sm:grid-cols-2 gap-5 mt-10" style={{ transitionDelay: '220ms' }}>
            {aboutValues.map((v) => {
              const Icon = iconMap[v.icon]
              return (
                <div key={v.title} className="group border border-charcoal-800/10 p-6 hover:border-bronze-400/60 transition-colors duration-300 bg-white">
                  <Icon className="w-8 h-8 text-bronze-500 mb-4" />
                  <h3 className="font-display text-xl text-charcoal-950 mb-1.5">{v.title}</h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
