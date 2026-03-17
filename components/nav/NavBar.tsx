'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getMissionDay } from '@/lib/mission'
import { MobileMenu } from './MobileMenu'

const links = [
  { href: '/builds', label: 'BUILDS' },
  { href: '/journey', label: 'JOURNEY' },
  { href: '/about', label: 'ABOUT' },
]

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const day = getMissionDay()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 relative">
      <nav className="bg-panel border-b border-panel-border h-11 flex items-center px-5">
        {/* Callsign */}
        <Link href="/" className="hud-text text-accent-blue mr-6 shrink-0">
          ◈ MRD
        </Link>

        {/* Divider */}
        <div className="w-px h-5 bg-panel-border mr-6 hidden sm:block" />

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-1 flex-1">
          {links.map(link => {
            const isActive = pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hud-text px-3 py-1 flex items-center gap-2 transition-colors ${
                  isActive
                    ? 'text-text-primary border-l-2 border-l-accent-gold pl-2.5'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                )}
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Mission day counter */}
        <div className="ml-auto hidden sm:flex flex-col items-end">
          <span className="hud-text text-text-muted" style={{ fontSize: '0.6rem' }}>
            DAY
          </span>
          <span className="hud-text text-accent-blue" style={{ fontSize: '0.75rem' }}>
            {String(day).padStart(3, '0')}
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden ml-auto p-2 text-accent-gold"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </nav>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        currentPath={pathname}
      />
    </header>
  )
}
