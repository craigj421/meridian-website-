'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { getMissionDay } from '@/lib/mission'

const HUD_LINES = [
  'MISSION: MERIDIAN',
  'STATUS: ACTIVE',
  'OBJECTIVE: Optimize and simplify life through technology',
  'CURRENT BUILD: Orion  ████████░░  80%',
  '', // filled dynamically with mission day
  'MISSION REWARD: Time with family. Freedom to travel.',
]

export function MissionHUD() {
  const prefersReduced = useReducedMotion()
  const day = getMissionDay()

  const lines = HUD_LINES.map((line, i) =>
    i === 4 ? `DAYS ON MISSION: ${String(day).padStart(3, '0')}` : line
  )

  return (
    <div className="font-mono space-y-1.5">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: prefersReduced ? 0 : i * 0.3,
            duration: 0.4,
          }}
          className="text-accent-blue text-xs sm:text-sm tracking-wider"
        >
          {line}
        </motion.div>
      ))}
    </div>
  )
}
