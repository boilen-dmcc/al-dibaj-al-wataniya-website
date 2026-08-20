import HeroScene from '../components/illustrations/HeroScene'
import { IconArrowRight } from '../components/icons'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-charcoal-950">
      <HeroScene className="absolute inset-0 w-full h-full" />

      {/* cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/40 to-transparent" />
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30" />

      <div className="relative z-10 h-full container-adw flex flex-col justify-center pt-20">
        <div className="max-w-3xl">
          <div className="reveal is-visible flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-bronze-300">
              Al Dibaj Al Wataniya
            </span>
          </div>

          <h1 className="reveal is-visible font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-offwhite">
            Powering Industry Through
            <span className="block text-gradient-bronze mt-1">Expertise, Reliability &amp; Excellence</span>
          </h1>

          <p
            className="reveal is-visible mt-7 text-lg sm:text-xl text-offwhite/80 max-w-xl font-light"
            style={{ transitionDelay: '150ms' }}
          >
            Contracting and General Trading Solutions for the Energy &amp; Industrial Sector
          </p>

          <div className="reveal is-visible mt-10 flex flex-wrap items-center gap-4" style={{ transitionDelay: '260ms' }}>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-bronze-400 text-charcoal-950 px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-bronze-300 transition-colors duration-300"
            >
              Our Services
              <IconArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-offwhite/40 text-offwhite px-8 py-4 text-sm font-bold uppercase tracking-wider hover:border-bronze-300 hover:text-bronze-200 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-offwhite/50">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-bronze-400 to-transparent" />
      </div>
    </section>
  )
}
