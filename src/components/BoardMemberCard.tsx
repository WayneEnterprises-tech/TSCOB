'use client'

import { motion } from 'framer-motion'
import { BoardMember } from '@/lib/data'

type Props = {
  member: BoardMember
  index: number
}

export default function BoardMemberCard({ member, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass-panel p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-glass-hover hover:-translate-y-1"
    >
      {/* Avatar */}
      <div
        className="w-20 h-20 rounded-full mb-4 flex items-center justify-center text-2xl font-black text-white flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, #7C4A00, #D97706)',
          boxShadow: '0 4px 14px rgba(124,74,0,0.3)',
        }}
        aria-hidden="true"
      >
        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
      </div>

      <h3 className="font-bold text-gray-900 text-base leading-tight mb-1">{member.name}</h3>
      <p className="text-tennis-green text-sm font-medium mb-3">{member.role}</p>
      <a
        href={`mailto:${member.email}`}
        className="text-xs text-gray-500 hover:text-accent-teal transition-colors duration-200 break-all"
        aria-label={`E-Mail an ${member.name}`}
      >
        {member.email}
      </a>
    </motion.div>
  )
}
