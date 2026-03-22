'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { getMissionDay } from '@/lib/mission'

export function MissionHUD() {
  const prefersReduced = useReducedMotion()
  const day = getMissionDay()

  const progressFilled = 8
  const progressEmpty = 2

  const lines = [
    { label: 'MISSION', value: 'MERIDIAN' },
    { label: 'STATUS', value: 'ACTIVE' },
    { label: 'OBJECTIVE', value: 'OPTIMIZE AND SIMPLIFY LIFE THROUGH TECHNOLOGY' },
  ]

  return (
    <div className="border border-outline-variant/30 bg-surface-container-lowest/80 backdrop-blur-sm p-6 sm:p-8 font-mono text-[10px] sm:text-[11px] leading-relaxed shadow-[0_0_40px_rgba(0,170,255,0.05)]">
      {/* Header row */}
      <div className="flex items-start justify-between mb-6">
        <div className="space-y-1 text-primary">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prefersReduced ? 0 : i * 0.3, duration: 0.4 }}
            >
              <span className="opacity-50">{line.label}:</span> {line.value}
            </motion.p>
          ))}
        </div>
        <motion.div
          initial={{ opacity: prefersReduced ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: prefersReduced ? 0 : 0.6, duration: 0.4 }}
          className="text-right text-tertiary shrink-0 ml-4"
        >
          <span className="material-symbols-outlined block" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>security</span>
          <p className="mt-1 text-[9px] tracking-widest">SECURE_LINK</p>
        </motion.div>
      </div>

      {/* Dashed divider */}
      <motion.div
        initial={{ opacity: prefersReduced ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReduced ? 0 : 1.0, duration: 0.4 }}
        className="border-t border-dashed border-outline-variant/30 my-4"
      />

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: prefersReduced ? 0 : 1.2, duration: 0.4 }}
        className="text-primary flex items-center gap-4 flex-wrap"
      >
        <span><span className="opacity-50">CURRENT BUILD:</span></span>
        <span className="text-primary-fixed-dim">ORION</span>
        <span className="inline-flex gap-0.5">
          {Array.from({ length: progressFilled }).map((_, i) => (
            <span key={`f-${i}`} className="inline-block w-2 h-3 bg-primary/80" />
          ))}
          {Array.from({ length: progressEmpty }).map((_, i) => (
            <span key={`e-${i}`} className="inline-block w-2 h-3 bg-outline-variant/30" />
          ))}
        </span>
        <span className="ml-2">80%</span>
      </motion.div>

      {/* Mission elapsed */}
      <motion.div
        initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: prefersReduced ? 0 : 1.5, duration: 0.4 }}
        className="text-primary mt-2"
      >
        <p><span className="opacity-50 inline-block w-36">MISSION ELAPSED:</span> {String(day).padStart(3, '0')} DAYS</p>
      </motion.div>

      {/* Mission reward */}
      <motion.div
        initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: prefersReduced ? 0 : 1.8, duration: 0.4 }}
        className="text-primary mt-2"
      >
        <p><span className="opacity-50 inline-block w-36">REWARD:</span> TIME WITH FAMILY / FREEDOM TO TRAVEL</p>
      </motion.div>
    </div>
  )
}
