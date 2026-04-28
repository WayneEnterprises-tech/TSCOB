import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tscob.de'),
  title: {
    default: 'Tennis-Sport-Club Oberbecksen – Bad Oeynhausen e.V.',
    template: '%s | TSCOB – Tennis Bad Oeynhausen',
  },
  description:
    'Tennis-Sport-Club Oberbecksen – Bad Oeynhausen e.V. Gemeinsam spielen, gemeinsam wachsen. Seit über 50 Jahren Tennis in Bad Oeynhausen.',
  keywords: [
    'Tennis',
    'Tennis Bad Oeynhausen',
    'TSC Oberbecksen',
    'TSCOB',
    'Tennisclub Bad Oeynhausen',
    'Tennis NRW',
    'Tennisverein',
  ],
  authors: [{ name: 'Tennis-Sport-Club Oberbecksen e.V.' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Tennis-Sport-Club Oberbecksen – Bad Oeynhausen e.V.',
    title: 'Tennis-Sport-Club Oberbecksen – Bad Oeynhausen e.V.',
    description: 'Gemeinsam spielen. Gemeinsam wachsen. Seit über 50 Jahren Tennis in Bad Oeynhausen.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TSC Oberbecksen – Tennis Bad Oeynhausen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TSC Oberbecksen – Tennis Bad Oeynhausen',
    description: 'Gemeinsam spielen. Gemeinsam wachsen. Seit über 50 Jahren in Bad Oeynhausen.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="flex flex-col min-h-screen bg-mesh">
        <Header />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
