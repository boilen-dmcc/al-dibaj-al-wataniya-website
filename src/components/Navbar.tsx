import { useEffect, useState } from 'react'
import { navLinks, company } from '../data/content'
import { IconMenu, IconClose } from './icons'
import logo from '../assets/adw-logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-500 ${
        scrolled || open ? 'shadow-[0_4px_30px_rgba(0,0,0,0.12)]' : ''
      }`}
    >
      <nav className="container-adw flex items-center justify-between h-20 lg:h-24">
        <a href="#home" className="flex items-center gap-3 shrink-0" aria-label="ADW — Al Dibaj Al Wataniya, home">
          <img src={logo} alt="ADW — Al Dibaj Al Wataniya logo" className="h-9 lg:h-11 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-9 text-sm font-medium tracking-wide text-charcoal-900/90">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative py-2 transition-colors hover:text-bronze-600 group">
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-bronze-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 border border-bronze-500 text-bronze-600 px-6 py-2.5 text-sm font-semibold tracking-wide uppercase hover:bg-bronze-500 hover:text-white transition-colors duration-300"
        >
          Contact Us
        </a>

        <button
          className="lg:hidden text-charcoal-900 p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>
    </header>

    {/* Mobile menu — rendered outside the header so its `fixed` positioning
        stays relative to the viewport, not the header */}
    <div
      className={`lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-white transition-transform duration-400 ease-out overflow-y-auto ${
        open ? 'translate-y-0' : '-translate-y-[110%]'
      }`}
    >
      <ul className="flex flex-col px-6 py-8 gap-1">
        {navLinks.map((link, i) => (
          <li key={link.href} style={{ transitionDelay: `${i * 40}ms` }}>
            <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-4 text-xl font-display text-charcoal-900 border-b border-charcoal-800/10 hover:text-bronze-600 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="px-6 mt-4 flex flex-col gap-3">
        <a href={`tel:${company.phones[0].replace(/\s/g, '')}`} className="text-bronze-600 text-sm">
          {company.phones[0]}
        </a>
        <a href={`mailto:${company.email}`} className="text-bronze-600 text-sm">
          {company.email}
        </a>
      </div>
    </div>
    </>
  )
}
