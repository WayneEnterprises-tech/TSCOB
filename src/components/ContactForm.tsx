'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-8 flex flex-col items-center text-center gap-4"
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #7C4A00, #D97706)' }}
            aria-hidden="true"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Vielen Dank für Ihre Nachricht!</h3>
          <p className="text-gray-500 text-sm">Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-sm text-accent-teal hover:text-tennis-green transition-colors mt-2"
          >
            Weitere Nachricht senden
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="glass-panel p-6 md:p-8 flex flex-col gap-5"
          aria-label="Kontaktformular"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Name <span aria-hidden="true" className="text-red-400">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Ihr Name"
                className="w-full px-4 py-2.5 rounded-xl text-sm border border-gray-200 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                E-Mail-Adresse <span aria-hidden="true" className="text-red-400">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="ihre@email.de"
                className="w-full px-4 py-2.5 rounded-xl text-sm border border-gray-200 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                aria-required="true"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
              Telefonnummer
            </label>
            <input
              id="contact-phone"
              type="tel"
              placeholder="0571 ..."
              className="w-full px-4 py-2.5 rounded-xl text-sm border border-gray-200 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1.5">
              Betreff <span aria-hidden="true" className="text-red-400">*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              required
              placeholder="Worum geht es?"
              className="w-full px-4 py-2.5 rounded-xl text-sm border border-gray-200 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">
              Nachricht <span aria-hidden="true" className="text-red-400">*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              placeholder="Ihre Nachricht an uns..."
              className="w-full px-4 py-2.5 rounded-xl text-sm border border-gray-200 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all resize-none"
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            aria-busy={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Wird gesendet...
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Nachricht senden
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
