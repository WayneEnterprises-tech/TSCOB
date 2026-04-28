'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CONTACT } from '@/lib/data'

type Props = {
  contact: typeof CONTACT
}

export default function KontaktTeaser({ contact }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" aria-labelledby="kontakt-teaser-heading">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="rounded-[28px] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8"
        style={{
          background: 'linear-gradient(135deg, rgba(124,74,0,0.07), rgba(217,119,6,0.05))',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid rgba(124,74,0,0.15)',
          boxShadow: '0 8px 32px rgba(124,74,0,0.08)',
        }}
      >
        <div className="flex-1">
          <h2 id="kontakt-teaser-heading" className="section-heading mb-4">Kontakt</h2>
          <address className="not-italic space-y-2 text-gray-600">
            <p className="font-medium text-gray-800">{contact.clubName}</p>
            <p>{contact.address}</p>
            <p>{contact.city}</p>
            <div className="flex flex-wrap gap-4 mt-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-accent-teal hover:text-tennis-green font-medium transition-colors"
                aria-label={`E-Mail: ${contact.email}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 text-gray-600 hover:text-tennis-green font-medium transition-colors"
                aria-label={`Telefon: ${contact.phone}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {contact.phone}
              </a>
            </div>
          </address>
        </div>
        <Link
          href="/kontakt"
          className="btn-primary flex-shrink-0 whitespace-nowrap"
        >
          Schreib uns
        </Link>
      </motion.div>
    </section>
  )
}
