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
          className="absolute top-full left-0 right-0 bg-panel border-b border-panel-border z-40"
        >
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`block px-6 py-4 hud-text border-b border-panel-border last:border-b-0 ${
                currentPath.startsWith(link.href)
                  ? 'text-accent-gold border-l-2 border-l-accent-gold pl-5'
                  : 'text-text-muted hover:text-text-primary'
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
