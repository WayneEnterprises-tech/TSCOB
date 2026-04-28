import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Datenschutz & Impressum',
  description: 'Datenschutzerklärung und Impressum des Tennis-Sport-Club Oberbecksen – Bad Oeynhausen e.V.',
}

export default function DatenschutzPage() {
  return (
    <>
      <HeroSection
        title="Datenschutz & Impressum"
        height="small"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className="glass-panel p-8 md:p-12"
        >
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Impressum</h2>
            <p className="text-gray-500 text-sm mb-6">Angaben gemäß § 5 TMG</p>

            <div className="bg-tennis-green/5 border border-tennis-green/10 rounded-2xl p-6 mb-8">
              <p className="text-gray-700 font-medium">Tennis-Sport-Club Oberbecksen-Bad Oeynhausen e.V.</p>
              <p className="text-gray-600 text-sm mt-1">Lienweg 29</p>
              <p className="text-gray-600 text-sm">32547 Bad Oeynhausen</p>
              <p className="text-gray-600 text-sm mt-2">
                E-Mail:{' '}
                <a href="mailto:TSCOB@gmx.de" className="text-accent-teal hover:text-tennis-green transition-colors">
                  TSCOB@gmx.de
                </a>
              </p>
              <p className="text-gray-600 text-sm">Telefon: 05731 20644</p>
            </div>

            <div
              className="rounded-2xl p-6 text-center"
              style={{
                background: 'rgba(124,74,0,0.04)',
                border: '1px dashed rgba(124,74,0,0.15)',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(124,74,0,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-gray-500 text-sm leading-relaxed">
                Hier stehen die Datenschutzerklärung und das Impressum des Vereins.<br />
                <span className="font-medium text-gray-600">Inhalt wird noch eingepflegt.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
