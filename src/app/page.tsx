import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import { TermineListCard, HeimspielCard } from '@/components/TermineCard'
import { TERMINE, HEIMSPIELE, CONTACT } from '@/lib/data'
import QuickNavCards from '@/components/QuickNavCards'
import KontaktTeaser from '@/components/KontaktTeaser'

export const metadata: Metadata = {
  title: 'Startseite',
  description: 'Tennis-Sport-Club Oberbecksen – Bad Oeynhausen e.V. Aktuelle Termine, Heimspiele und Informationen.',
}

export default function StartseitePage() {
  return (
    <>
      <HeroSection
        title="Tennis-Sport-Club Oberbecksen"
        subtitle="Gemeinsam spielen. Gemeinsam wachsen. Seit über 50 Jahren in Bad Oeynhausen."
        height="full"
        videoSrc="/hero-video.mov"
      >
        <Link href="/informationen" className="btn-primary">
          Mitglied werden
        </Link>
        <Link href="#termine" className="btn-glass">
          Termine ansehen
        </Link>
      </HeroSection>

      {/* Aktuelles Section */}
      <section
        id="termine"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        aria-labelledby="aktuelles-heading"
      >
        <div className="mb-10">
          <h2 id="aktuelles-heading" className="section-heading">Aktuelles</h2>
          <p className="text-gray-500 mt-2 text-lg">Termine und Heimspiele auf einen Blick.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TermineListCard title="Termine" items={TERMINE} delay={0} />
          <HeimspielCard title="Heimspiele" items={HEIMSPIELE} delay={0.15} />
        </div>
      </section>

      {/* Quick Nav Cards */}
      <QuickNavCards />

      {/* Kontakt Teaser */}
      <KontaktTeaser contact={CONTACT} />
    </>
  )
}
