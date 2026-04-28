'use client'

import { motion } from 'framer-motion'
import { Termin, Heimspiel } from '@/lib/data'

type TerminProps = {
  title: string
  items: Termin[]
  delay?: number
}

type HeimspielProps = {
  title: string
  items: Heimspiel[]
  delay?: number
}

function TerminRow({ date, title }: { date: string; title: string }) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0">
      <span
        className="text-xs font-bold text-white px-2.5 py-1 rounded-lg flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #7C4A00, #D97706)' }}
      >
        {date}
      </span>
      <span className="text-sm text-gray-700 font-medium">{title}</span>
    </div>
  )
}

function HeimspielRow({ date, team, time }: Heimspiel) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0">
      <span
        className="text-xs font-bold text-white px-2.5 py-1 rounded-lg flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #B45309, #D97706)' }}
      >
        {date}
      </span>
      <div className="min-w-0">
        <span className="text-sm text-gray-700 font-medium block truncate">{team}</span>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  )
}

export function TermineListCard({ title, items, delay = 0 }: TerminProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      className="glass-panel p-6 h-full"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-xl bg-tennis-green/10 flex items-center justify-center" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C4A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
      </div>
      <div>
        {items.map((item, i) => (
          <TerminRow key={i} {...item} />
        ))}
      </div>
    </motion.div>
  )
}

export function HeimspielCard({ title, items, delay = 0 }: HeimspielProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      className="glass-panel p-6 h-full"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-xl bg-accent-teal/10 flex items-center justify-center" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
      </div>
      <div>
        {items.map((item, i) => (
          <HeimspielRow key={i} {...item} />
        ))}
      </div>
    </motion.div>
  )
}
