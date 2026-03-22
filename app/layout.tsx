import type { Metadata } from 'next'
import { Inter, Syne, Space_Grotesk } from 'next/font/google'
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

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://meridian-mrd.netlify.app'),
  title: 'Meridian',
  description:
    'A mission in progress. Systems for health, builds, and life — documented in public.',
  openGraph: {
    title: 'Meridian',
    description: 'A mission in progress.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
        />
      </head>
      <body className="bg-bg text-text-primary min-h-screen">
        <NavBar />
        <main className="pt-[44px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
