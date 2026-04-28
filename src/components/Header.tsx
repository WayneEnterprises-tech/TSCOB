'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/data'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav-scrolled' : 'glass-nav'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden flex items-center justify-center"
                style={{
                  background: 'rgba(255, 248, 200, 0.5)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 215, 0, 0.4)',
                  boxShadow: '0 2px 8px rgba(180,120,0,0.12)',
                }}
              >
                <Image
                  src="/logo.png"
                  alt="TSCOB Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="hidden sm:block">
                <div className={`font-bold text-sm leading-tight transition-colors duration-300 ${scrolled ? 'text-tennis-green' : 'text-white drop-shadow-sm'}`}>
                  TSC Oberbecksen
                </div>
                <div className={`text-xs transition-colors duration-300 ${scrolled ? 'text-gray-500' : 'text-white/80 drop-shadow-sm'}`}>
                  Bad Oeynhausen e.V.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      scrolled
                        ? isActive
                          ? 'text-tennis-green bg-tennis-green/10'
                          : 'text-gray-700 hover:text-tennis-green hover:bg-tennis-green/8'
                        : isActive
                        ? 'text-white bg-white/20'
                        : 'text-white/90 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-teal"
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA + Burger */}
            <div className="flex items-center gap-3">
              <Link
                href="/informationen"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: '#D97706',
                  boxShadow: '0 4px 14px rgba(217, 119, 6, 0.35)',
                }}
              >
                Mitglied werden
              </Link>

              <button
                className={`lg:hidden w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all duration-200 ${
                  scrolled ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white/20 hover:bg-white/30'
                }`}
                onClick={() => setMenuOpen(true)}
                aria-label="Menü öffnen"
              >
                <span className={`block w-5 h-0.5 rounded-full transition-colors ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
                <span className={`block w-5 h-0.5 rounded-full transition-colors ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
                <span className={`block w-3.5 h-0.5 rounded-full transition-colors ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
