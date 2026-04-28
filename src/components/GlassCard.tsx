'use client'

import { motion } from 'framer-motion'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  hover?: boolean
  delay?: number
  animate?: boolean
}

export default function GlassCard({ children, hover = true, delay = 0, animate = true, className = '', ...props }: Props) {
  const base = (
    <div
      className={`glass-panel p-6 ${hover ? 'transition-all duration-300 hover:shadow-glass-hover hover:-translate-y-1' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )

  if (!animate) return base

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {base}
    </motion.div>
  )
}
