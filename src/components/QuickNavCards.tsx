'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CARDS = [
  {
    title: 'Unsere Mannschaften',
    href: '/mannschaften',
    description: 'Alle Teams, Spieltermine und Aufstellungen',
    emoji: '🎾',
    external: false,
  },
  {
    title: 'Informationen',
    href: '/informationen',
    description: 'Arbeitseinsätze, Downloads, Mitgliedschaft',
    emoji: '📋',
    external: false,
  },
  {
    title: 'Unser Club',
    href: '/unser-club',
    description: 'Vorstand, Trainer und Geschichte des Vereins',
    emoji: '🏆',
    external: false,
  },
  {
    title: 'Folgt uns auf Instagram',
    href: 'https://www.instagram.com/tscob_tennis/',
    description: '@tscob_tennis — Bilder, News und mehr',
    emoji: '📸',
    external: true,
  },
]

export default function QuickNavCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" aria-labelledby="quick-nav-heading">
      <div className="mb-10">
        <h2 id="quick-nav-heading" className="section-heading">Schnellnavigation</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CARDS.map((card, i) => {
          const Comp = card.external ? 'a' : Link
          const extraProps = card.external
            ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' }
            : { href: card.href }

          return (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
            >
              <Comp
                {...(extraProps as any)}
                className="glass-panel p-6 flex flex-col gap-4 h-full transition-all duration-300 hover:shadow-glass-hover hover:-translate-y-1.5 group block"
              >
                {/* Placeholder image area */}
                <div
                  className="h-32 rounded-xl flex items-center justify-center text-4xl mb-1"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124,74,0,0.08), rgba(217,119,6,0.06))',
                  }}
                  aria-hidden="true"
                >
                  {card.emoji}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-base mb-1.5 group-hover:text-tennis-green transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                </div>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-tennis-green group-hover:text-accent-teal transition-colors">
                  Mehr erfahren
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </Comp>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
