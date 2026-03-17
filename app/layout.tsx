import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import { NavBar } from '@/components/nav/NavBar'
import { Footer } from '@/components/footer/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Meridian',
  description:
    'A mission in progress. Systems for health, builds, and life — documented in public.',
  openGraph: {
    title: 'Meridian',
    description: 'A mission in progress.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-bg text-text-primary min-h-screen">
        <NavBar />
        <main className="pt-11">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
