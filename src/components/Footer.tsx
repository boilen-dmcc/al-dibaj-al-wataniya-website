import { company, navLinks, services } from '../data/content'
import logo from '../assets/adw-logo.png'
import { IconPhone, IconMail, IconGlobe, IconPin } from './icons'

export default function Footer() {
  const year = 2026
  return (
    <footer className="bg-charcoal-950 text-offwhite pt-20 pb-8 border-t border-bronze-700/30">
      <div className="container-adw grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">
        <div>
          <div className="inline-block bg-white px-4 py-3 mb-5">
            <img src={logo} alt="ADW — Al Dibaj Al Wataniya logo" className="h-9 w-auto" />
          </div>
          <p className="text-offwhite/60 text-sm leading-relaxed max-w-xs">
            {company.nameFull} — {company.tagline}.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5 text-bronze-300">Navigation</h4>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-offwhite/60 hover:text-bronze-300 transition-colors text-sm">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5 text-bronze-300">Services</h4>
          <ul className="space-y-2.5">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>
                <a href="#services" className="text-offwhite/60 hover:text-bronze-300 transition-colors text-sm">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5 text-bronze-300">Contact</h4>
          <ul className="space-y-3 text-sm text-offwhite/60">
            <li className="flex items-start gap-2.5">
              <IconPhone className="w-4 h-4 mt-0.5 text-bronze-400 shrink-0" />
              <span className="flex flex-col">
                {company.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-bronze-300 transition-colors">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <IconMail className="w-4 h-4 mt-0.5 text-bronze-400 shrink-0" />
              <a href={`mailto:${company.email}`} className="hover:text-bronze-300 transition-colors break-all">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconGlobe className="w-4 h-4 mt-0.5 text-bronze-400 shrink-0" />
              <a href={`https://${company.website}`} target="_blank" rel="noreferrer" className="hover:text-bronze-300 transition-colors break-all">
                {company.website}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconPin className="w-4 h-4 mt-0.5 text-bronze-400 shrink-0" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-800/60 pt-6">
        <div className="container-adw flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-offwhite/45">
          <p>© {year} Al Dibaj Al Wataniya. All Rights Reserved.</p>
          <p className="uppercase tracking-widest">Oil &amp; Gas · Contracting · General Trading</p>
        </div>
      </div>
    </footer>
  )
}
