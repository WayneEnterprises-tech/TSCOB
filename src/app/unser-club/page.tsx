import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import BoardMemberCard from '@/components/BoardMemberCard'
import { BOARD_MEMBERS, TRAINER } from '@/lib/data'
import TrainerSection from '@/components/TrainerSection'

export const metadata: Metadata = {
  title: 'Unser Club',
  description: 'Lernen Sie den Vorstand und das Trainer-Team des TSC Oberbecksen kennen.',
}

export default function UnserClubPage() {
  return (
    <>
      <HeroSection
        title="Unser Club"
        subtitle="Tennis-Sport-Club Oberbecksen — seit über 50 Jahren vereint durch Leidenschaft für Tennis."
        height="small"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

        {/* Vorstand */}
        <section aria-labelledby="vorstand-heading">
          <div className="mb-10">
            <h2 id="vorstand-heading" className="section-heading">Der Vorstand</h2>
            <p className="text-gray-500 mt-2 text-lg">Lernen Sie uns kennen.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BOARD_MEMBERS.map((member, i) => (
              <BoardMemberCard key={member.email} member={member} index={i} />
            ))}
          </div>
        </section>

        {/* Trainer */}
        <TrainerSection trainers={TRAINER} />

      </div>
    </>
  )
}
