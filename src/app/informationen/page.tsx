import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import DownloadCard from '@/components/DownloadCard'
import ArbeitseinsaetzeSection from '@/components/ArbeitseinsaetzeSection'
import { DOWNLOADS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Informationen',
  description: 'Wichtige Informationen für Mitglieder des TSC Oberbecksen — Arbeitseinsätze, Downloads, Beitrittserklärung.',
}

export default function InformationenPage() {
  return (
    <>
      <HeroSection
        title="Informationen"
        subtitle="Alles Wissenswerte für Mitglieder und Interessierte."
        height="small"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">

        {/* Arbeitseinsätze */}
        <ArbeitseinsaetzeSection />

        {/* Downloads */}
        <section aria-labelledby="downloads-heading">
          <div className="mb-10">
            <h2 id="downloads-heading" className="section-heading">Downloads</h2>
            <p className="text-gray-500 mt-2 text-lg">Wichtige Dokumente zum Herunterladen.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DOWNLOADS.map((item, i) => (
              <DownloadCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </section>

      </div>
    </>
  )
}
