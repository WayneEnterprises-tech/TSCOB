'use client'

import { motion } from 'framer-motion'

type Props = {
  title: string
  subtitle?: string
  height?: 'full' | 'small'
  imageSrc?: string
  videoSrc?: string
  children?: React.ReactNode
}

export default function HeroSection({
  title,
  subtitle,
  height = 'small',
  imageSrc = '/hero-tennis.jpg',
  videoSrc,
  children,
}: Props) {
  const isFullVh = height === 'full'

  return (
    <section
      className={`relative w-full overflow-hidden ${isFullVh ? 'min-h-screen' : 'h-[45vh] min-h-[320px]'}`}
      aria-label="Hero"
    >
      {/* Background */}
      {videoSrc ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div
          className="absolute inset-0 bg-tennis-green"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Color orbs for atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(135deg, rgba(120,70,0,0.72) 0%, rgba(180,120,0,0.5) 100%)',
        }}
      />
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(251,191,36,0.35) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Content */}
      <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isFullVh ? (
          <div className="py-32">
            {/* Full-screen glass overlay panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-xl"
              style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
              >
                {title}
              </motion.h1>
              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.7 }}
                  className="text-white/85 text-lg leading-relaxed mb-8"
                >
                  {subtitle}
                </motion.p>
              )}
              {children && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.94, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  transition={{
                    delay: 0.5,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-wrap gap-3"
                >
                  {children}
                </motion.div>
              )}
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="py-8"
          >
            <h1 className="text-4xl md:text-5xl font-black text-white">{title}</h1>
            {subtitle && (
              <p className="text-white/80 text-lg mt-3 max-w-xl">{subtitle}</p>
            )}
          </motion.div>
        )}
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #FFFBEB)' }}
        aria-hidden="true"
      />
    </section>
  )
}
