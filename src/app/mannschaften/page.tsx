import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import TeamCard from '@/components/TeamCard'
import { TEAMS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Mannschaften',
  description: 'Alle Mannschaften des TSC Oberbecksen — Spieltermine, Aufstellungen und Mannschaftsführer.',
}

export default function MannschaftenPage() {
  return (
    <>
      <HeroSection
        title="Unsere Mannschaften"
        subtitle="Von der Jugend bis zu den Erwachsenen — Tennis auf allen Ebenen."
        height="small"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <h2 className="section-heading">Alle Mannschaften</h2>
          <p className="text-gray-500 mt-2 text-lg">
            Klicken Sie auf &ldquo;Aufstellung / Spieltermine&rdquo; um zur aktuellen Ligaseite zu gelangen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAMS.map((team, i) => (
            <TeamCard key={team.name} team={team} index={i} />
          ))}
        </div>
      </div>
    </>
  )
}
