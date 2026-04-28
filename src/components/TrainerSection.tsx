'use client'

import { motion } from 'framer-motion'
import { Trainer } from '@/lib/data'

type Props = {
  trainers: Trainer[]
}

export default function TrainerSection({ trainers }: Props) {
  return (
    <section aria-labelledby="trainer-heading">
      <div className="mb-10">
        <h2 id="trainer-heading" className="section-heading">Trainer-Team</h2>
        <p className="text-gray-500 mt-2 text-lg">Unsere erfahrenen Trainer stehen Ihnen zur Seite.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
        {trainers.map((trainer, i) => (
          <motion.div
            key={trainer.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-panel p-6 flex items-center gap-5 transition-all duration-300 hover:shadow-glass-hover hover:-translate-y-1"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #B45309, #D97706)' }}
              aria-hidden="true"
            >
              {trainer.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">{trainer.name}</h3>
              <p className="text-accent-teal text-sm font-medium">Trainer</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
