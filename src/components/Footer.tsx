import Link from 'next/link'
import { NAV_LINKS, CONTACT } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-mesh-dark mt-24" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="rounded-[28px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-10"
          style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center"
                style={{
                  background: 'rgba(255,248,200,0.15)',
                  border: '1px solid rgba(255,215,0,0.25)',
                }}
              >
                <img src="/logo.png" alt="TSCOB Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">TSC Oberbecksen</div>
                <div className="text-white/60 text-xs">Bad Oeynhausen e.V.</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Gemeinsam spielen. Gemeinsam wachsen.<br />Seit über 50 Jahren in Bad Oeynhausen.
            </p>
            <p className="text-white/30 text-xs">
              © 2025 TSC-Oberbecksen. Alle Rechte vorbehalten.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Navigation</h3>
            <nav aria-label="Footer Navigation" className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/datenschutz"
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                Datenschutz / Impressum
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Kontakt</h3>
            <address className="not-italic flex flex-col gap-2.5">
              <p className="text-white/60 text-sm">{CONTACT.clubName}</p>
              <p className="text-white/60 text-sm">{CONTACT.address}</p>
              <p className="text-white/60 text-sm">{CONTACT.city}</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-accent-teal hover:text-white text-sm transition-colors duration-200"
              >
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                {CONTACT.phone}
              </a>
            </address>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-200 group"
              aria-label="TSCOB auf Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
