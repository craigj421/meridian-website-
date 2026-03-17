'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: prefersReduced ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: prefersReduced ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
