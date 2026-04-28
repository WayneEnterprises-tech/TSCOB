import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import { CONTACT } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie den TSC Oberbecksen — Adresse, Telefon, E-Mail und Kontaktformular.',
}

export default function KontaktPage() {
  return (
    <>
      <HeroSection
        title="Kontakt"
        subtitle="Haben Sie Fragen? Wir freuen uns auf Ihre Nachricht."
        height="small"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: Contact Info */}
          <div className="glass-panel p-8 h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Daten</h2>
            <address className="not-italic space-y-4 text-gray-600 mb-8">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Verein</p>
                <p className="font-medium text-gray-800 text-sm leading-relaxed">{CONTACT.clubName}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Adresse</p>
                <p className="text-sm">{CONTACT.address}</p>
                <p className="text-sm">{CONTACT.city}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">E-Mail</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-accent-teal hover:text-tennis-green text-sm font-medium transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Telefon</p>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-sm font-medium text-gray-700 hover:text-tennis-green transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Instagram</p>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent-teal hover:text-tennis-green transition-colors"
                >
                  @tscob_tennis
                </a>
              </div>
            </address>

            {/* Google Maps Placeholder */}
            <div
              className="rounded-2xl h-52 flex items-center justify-center text-sm text-gray-400 font-medium"
              style={{
                background: 'linear-gradient(135deg, rgba(124,74,0,0.05), rgba(217,119,6,0.04))',
                border: '1px solid rgba(124,74,0,0.1)',
              }}
              aria-label="Kartenplatzhalter — Google Maps wird hier eingebettet"
            >
              <div className="text-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(124,74,0,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Google Maps Karte
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Schreiben Sie uns</h2>
            <ContactForm />
          </div>

        </div>
      </div>
    </>
  )
}
