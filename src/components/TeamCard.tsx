'use client'

import { motion } from 'framer-motion'
import { Team } from '@/lib/data'

type Props = {
  team: Team
  index: number
}

export default function TeamCard({ team, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="glass-panel overflow-hidden transition-all duration-300 hover:shadow-glass-hover hover:-translate-y-1"
    >
      {/* Image placeholder */}
      <div
        className="h-36 w-full relative"
        style={{
          background: 'linear-gradient(135deg, rgba(124,74,0,0.15), rgba(217,119,6,0.1))',
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(124,74,0,0.3)" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a10 10 0 0 1 0 20A10 10 0 0 1 12 2z" />
            <path d="M2 12c3.33-2 6.67-3 10-3s6.67 1 10 3" />
            <path d="M2 12c3.33 2 6.67 3 10 3s6.67-1 10-3" />
          </svg>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-gray-900 text-lg mb-3">{team.name}</h3>

        <div className="space-y-1.5 mb-4">
          <div className="flex items-start gap-2">
            <span className="text-xs font-medium text-gray-400 w-28 flex-shrink-0 pt-0.5">Mannschaftsführer/in</span>
            <span className="text-sm text-gray-700 font-medium">{team.leader}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-xs font-medium text-gray-400 w-28 flex-shrink-0 pt-0.5">E-Mail</span>
            <a
              href={`mailto:${team.email}`}
              className="text-sm text-accent-teal hover:text-tennis-green transition-colors duration-200 break-all"
            >
              {team.email}
            </a>
          </div>
        </div>

        <a
          href={team.ligaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-tennis-green hover:text-accent-teal transition-colors duration-200 group"
          aria-label={`Aufstellung und Spieltermine für ${team.name}`}
        >
          Aufstellung / Spieltermine
          <svg
            width="16"
            height="16"
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
        </a>
      </div>
    </motion.div>
  )
}
