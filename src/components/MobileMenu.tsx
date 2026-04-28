'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/data'

type Props = {
  onClose: () => void
}

export default function MobileMenu({ onClose }: Props) {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-tennis-green/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute right-0 top-0 bottom-0 w-72 glass-panel rounded-l-[28px] rounded-r-none flex flex-col p-8"
        style={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Menü schließen"
          className="self-end w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Logo text */}
        <div className="mb-8">
          <div className="text-tennis-green font-bold text-lg">TSC Oberbecksen</div>
          <div className="text-gray-500 text-sm">Bad Oeynhausen e.V.</div>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-1 flex-1" aria-label="Mobile Navigation">
          {NAV_LINKS.map((link, i) => {
            const isActive = pathname === link.href
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 + 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-tennis-green text-white'
                      : 'text-gray-700 hover:bg-tennis-green/10 hover:text-tennis-green'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            )
          })}
        </nav>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/informationen"
            onClick={onClose}
            className="btn-primary w-full justify-center"
          >
            Mitglied werden
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
