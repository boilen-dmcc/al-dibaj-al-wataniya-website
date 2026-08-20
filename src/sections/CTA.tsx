import { DesertRigScene } from '../components/illustrations/Scenes'

export default function CTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-charcoal-950">
      <DesertRigScene className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-charcoal-950/60" />

      <div className="relative container-adw text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="gold-line" />
          <span className="uppercase tracking-[0.3em] text-xs font-semibold text-bronze-300">Get In Touch</span>
          <span className="gold-line" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-offwhite leading-tight">
          Let&rsquo;s Build Reliable Solutions Together
        </h2>
        <p className="mt-6 text-offwhite/75 text-lg">
          Talk to ADW about your contracting, trading and industrial requirements.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 mt-10 bg-bronze-400 text-charcoal-950 px-9 py-4 text-sm font-bold uppercase tracking-wider hover:bg-bronze-300 transition-colors duration-300"
        >
          Contact ADW
        </a>
      </div>
    </section>
  )
}
