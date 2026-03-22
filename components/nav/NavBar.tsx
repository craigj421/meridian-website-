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
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-[#05050e] border-b border-slate-800/30 shadow-[0_0_20px_rgba(0,170,255,0.05)] backdrop-blur-md h-[44px] flex items-center px-5">
        {/* Callsign */}
        <Link href="/" className="flex items-center gap-2 mr-6 shrink-0">
          <span className="material-symbols-outlined text-blue-400 text-sm" style={{ fontSize: '16px' }}>signal_cellular_alt</span>
          <span className="font-mono text-xs text-blue-400 tracking-wider uppercase">MRD</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-1 flex-1 justify-center">
          {links.map(link => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-mono text-[10px] tracking-[0.15em] uppercase px-4 py-2 transition-colors ${
                  isActive
                    ? 'text-yellow-400'
                    : 'text-slate-500 hover:text-blue-300'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-yellow-400" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Mission day counter */}
        <div className="ml-auto hidden sm:block">
          <span className="font-mono text-xs text-blue-400 tracking-tighter uppercase">
            DAY / [{String(day).padStart(3, '0')}]
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
