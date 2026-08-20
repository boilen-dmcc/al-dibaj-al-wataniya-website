import { useState } from 'react'
import { company } from '../data/content'
import { IconPhone, IconMail, IconGlobe, IconPin } from '../components/icons'
import { useRevealOnScroll } from '../hooks/useReveal'

const mapQuery = encodeURIComponent('Baghdad Road, opposite Great Noor Mosque, Kirkuk, Iraq')

export default function Contact() {
  const ref = useRevealOnScroll<HTMLElement>()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Website enquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" ref={ref} className="bg-paper py-24 lg:py-32">
      <div className="container-adw">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-line" />
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-bronze-600">Contact</span>
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl text-charcoal-950 leading-tight">Get In Touch</h2>
          <p className="reveal mt-5 text-charcoal-600 text-lg" style={{ transitionDelay: '80ms' }}>
            Reach out to ADW for contracting, trading and industrial supply enquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <div className="reveal bg-charcoal-950 text-offwhite p-8">
            <IconPhone className="w-8 h-8 text-bronze-400 mb-5" />
            <h3 className="font-display text-xl mb-3">Call Us</h3>
            {company.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block text-offwhite/75 hover:text-bronze-300 transition-colors py-0.5">
                {p}
              </a>
            ))}
          </div>

          <div className="reveal bg-charcoal-950 text-offwhite p-8" style={{ transitionDelay: '80ms' }}>
            <IconMail className="w-8 h-8 text-bronze-400 mb-5" />
            <h3 className="font-display text-xl mb-3">Email</h3>
            <a href={`mailto:${company.email}`} className="block text-offwhite/75 hover:text-bronze-300 transition-colors break-all">
              {company.email}
            </a>
          </div>

          <div className="reveal bg-charcoal-950 text-offwhite p-8" style={{ transitionDelay: '160ms' }}>
            <IconGlobe className="w-8 h-8 text-bronze-400 mb-5" />
            <h3 className="font-display text-xl mb-3">Website</h3>
            <a href={`https://${company.website}`} target="_blank" rel="noreferrer" className="block text-offwhite/75 hover:text-bronze-300 transition-colors break-all">
              {company.website}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="reveal bg-white border border-charcoal-800/10 p-8 sm:p-10">
            <h3 className="font-display text-2xl text-charcoal-950 mb-6">Send a Message</h3>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-charcoal-500 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-charcoal-800/20 px-4 py-3 text-charcoal-900 focus:outline-none focus:border-bronze-400 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-charcoal-500 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-charcoal-800/20 px-4 py-3 text-charcoal-900 focus:outline-none focus:border-bronze-400 transition-colors"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-charcoal-500 mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border border-charcoal-800/20 px-4 py-3 text-charcoal-900 focus:outline-none focus:border-bronze-400 transition-colors"
              />
            </div>
            <div className="mb-7">
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-charcoal-500 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full border border-charcoal-800/20 px-4 py-3 text-charcoal-900 focus:outline-none focus:border-bronze-400 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-charcoal-950 text-offwhite px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-bronze-500 transition-colors duration-300"
            >
              Send Message
            </button>
            <p className="text-xs text-charcoal-500 mt-4">
              Submitting opens your email app with this message addressed to {company.email}.
            </p>
          </form>

          <div className="reveal flex flex-col gap-6" style={{ transitionDelay: '100ms' }}>
            <div className="bg-charcoal-950 text-offwhite p-8 flex gap-4">
              <IconPin className="w-8 h-8 text-bronze-400 shrink-0" />
              <div>
                <h3 className="font-display text-xl mb-2">Location</h3>
                <p className="text-offwhite/75 leading-relaxed">{company.address}</p>
              </div>
            </div>
            <div className="flex-1 min-h-[260px] border border-charcoal-800/10 overflow-hidden">
              <iframe
                title="ADW location map — Kirkuk, Iraq"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="w-full h-full min-h-[260px] grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
