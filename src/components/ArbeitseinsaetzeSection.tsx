'use client'

import { motion } from 'framer-motion'

export default function ArbeitseinsaetzeSection() {
  return (
    <section aria-labelledby="arbeit-heading">
      <div className="mb-8">
        <h2 id="arbeit-heading" className="section-heading">Arbeitseinsätze</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="glass-panel p-8 md:p-10 max-w-4xl"
      >
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, rgba(124,74,0,0.12), rgba(217,119,6,0.08))' }}
            aria-hidden="true"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C4A00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Pflicht für aktive Mitglieder</h3>
            <p className="text-gray-500 text-sm mt-0.5">6 Stunden pro Jahr zur Unterhaltung der Clubanlage</p>
          </div>
        </div>

        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
          <p>
            Jedes aktive Mitglied hat pro Jahr <strong className="text-gray-800">6 Stunden Arbeitseinsatz</strong> zur Unterhaltung der Clubanlage zu leisten. Nur bei Nichterbringung wird das Entgelt fällig. 6 Std. je EUR 15,–, geleistete Teilstunden werden angerechnet, d.h. die 6 Stunden können auch auf zwei mal 3 Stunden etc. verteilt werden. Arbeitseinsätze werden per Email, auf der Homepage und per Aushang am Clubhaus vorher angekündigt.
          </p>
          <p>
            Das Mitglied ist verpflichtet, sich selbst nach den Arbeitseinsätzen zu erkundigen. Mithilfe bei Turnieren oder Veranstaltungen, die als Arbeitseinsatz zählen, werden separat per Email und auf der Homepage angekündigt. Beim jeweiligen Arbeitseinsatz muss sich das Mitglied in eine Liste eintragen und die geleistete Zeit mit Unterschrift bestätigen.
          </p>
          <p>
            Einzelarbeitseinsatzwünsche können nur in Abstimmung und in absoluten Ausnahmefällen mit dem Technischen Vereinswart oder mit dem 1. Vorsitzenden abgeklärt und genehmigt werden.
          </p>
          <p className="font-medium text-gray-700 bg-tennis-green/5 border border-tennis-green/10 rounded-xl px-4 py-3">
            Jugendliche bis einschließlich 15 Jahre und Mitglieder ab 80 Jahre sind davon ausgeschlossen.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
