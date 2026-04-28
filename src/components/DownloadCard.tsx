'use client'

import { motion } from 'framer-motion'
import { DownloadItem } from '@/lib/data'

type Props = {
  item: DownloadItem
  index: number
}

export default function DownloadCard({ item, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.09 }}
      className="glass-panel p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-glass-hover hover:-translate-y-1"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, rgba(124,74,0,0.1), rgba(217,119,6,0.08))' }}
        aria-hidden="true"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C4A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="12" y1="18" x2="12" y2="12" />
          <polyline points="9 15 12 18 15 15" />
        </svg>
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-gray-900 text-base mb-1">{item.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
      </div>

      <a
        href={item.href}
        download
        className="inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: 'linear-gradient(135deg, #7C4A00, #D97706)',
          boxShadow: '0 4px 12px rgba(124,74,0,0.25)',
        }}
        aria-label={`${item.title} herunterladen`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Herunterladen
      </a>
    </motion.div>
  )
}
