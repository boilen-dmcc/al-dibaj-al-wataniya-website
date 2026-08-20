import { whyChooseAdw } from '../data/content'
import { IconApproach, IconReliable, IconQuality, IconShield, IconIndustry, IconPartnership } from '../components/icons'
import { useRevealOnScroll } from '../hooks/useReveal'

const iconMap = {
  approach: IconApproach,
  reliable: IconReliable,
  quality: IconQuality,
  shield: IconShield,
  industry: IconIndustry,
  partnership: IconPartnership,
}

export default function WhyChoose() {
  const ref = useRevealOnScroll<HTMLElement>()
  return (
    <section ref={ref} className="relative bg-charcoal-950 py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.06]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-bronze-500/10 blur-3xl" />

      <div className="container-adw relative">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-line" />
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-bronze-300">Our Standing</span>
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl text-offwhite leading-tight">Why Choose ADW</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {whyChooseAdw.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.title} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <Icon className="w-9 h-9 text-bronze-400 mb-5" />
                <div className="gold-line mb-4" />
                <h3 className="font-display text-2xl text-offwhite mb-2">{item.title}</h3>
                <p className="text-offwhite/65 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
