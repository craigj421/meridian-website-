'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const links = [
  { href: '/builds', label: 'BUILDS' },
  { href: '/journey', label: 'JOURNEY' },
  { href: '/about', label: 'ABOUT' },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  currentPath: string
}

export function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 right-0 bg-[#05050e] border-b border-slate-800/30 z-40 backdrop-blur-md"
        >
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`block px-6 py-4 font-mono text-[10px] tracking-[0.15em] uppercase border-b border-outline-variant/10 last:border-b-0 ${
                currentPath.startsWith(link.href)
                  ? 'text-yellow-400'
                  : 'text-slate-500 hover:text-blue-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
