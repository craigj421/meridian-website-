'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { TimelineEntry } from './TimelineEntry'
import type { JourneyEntry } from '@/lib/journey'

export function Timeline({ entries }: { entries: JourneyEntry[] }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end end'],
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={sectionRef} className="relative">
      {/* Static track line */}
      <div className="absolute left-1.5 top-0 bottom-0 w-px bg-panel-border" />
      {/* Scroll-linked animated line */}
      <motion.div
        className="absolute left-1.5 top-0 w-px bg-accent-blue origin-top"
        style={{
          scaleY: prefersReduced ? 1 : scaleY,
          height: '100%',
        }}
      />

      {/* Entries */}
      <div className="relative">
        {entries.map(entry => (
          <TimelineEntry
            key={entry.date + entry.title}
            title={entry.title}
            date={entry.date}
            category={entry.category}
            description={entry.description}
          />
        ))}
      </div>
    </div>
  )
}
