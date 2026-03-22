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
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="material-symbols-outlined text-blue-400" style={{ fontSize: '14px' }}>signal_cellular_alt</span>
          <span className="font-mono font-bold text-blue-400 tracking-widest uppercase text-xs">◈ MRD</span>
        </Link>

        {/* Desktop links + day counter */}
        <div className="hidden sm:flex items-center gap-6 ml-auto">
          <nav className="flex gap-8 font-mono text-[10px] tracking-widest">
            {links.map(link => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition-colors duration-300 ${
                    isActive
                      ? 'text-yellow-400 after:content-[\'•\'] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:text-[8px]'
                      : 'text-slate-500 hover:text-blue-300'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <span className="font-mono tracking-tighter uppercase text-xs text-blue-400">
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
