'use client'
import { motion, useReducedMotion } from 'framer-motion'

const CATEGORY_STYLES: Record<string, string> = {
  health: 'bg-green-400/10 text-green-400 border-green-400/30',
  build: 'bg-accent-blue/10 text-accent-blue border-accent-blue/30',
  milestone: 'bg-accent-gold/10 text-accent-gold border-accent-gold/30',
}

interface TimelineEntryProps {
  title: string
  date: string
  category: string
  description: string
}

export function TimelineEntry({ title, date, category, description }: TimelineEntryProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: prefersReduced ? 1 : 0, x: prefersReduced ? 0 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative pl-8 pb-10"
    >
      {/* Node dot */}
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-accent-blue border-2 border-bg z-10" />

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <span className="hud-text text-text-muted">{date}</span>
        <span
          className={`hud-text px-2 py-0.5 rounded-sm border ${CATEGORY_STYLES[category] ?? 'text-text-muted border-panel-border'}`}
        >
          {category.toUpperCase()}
        </span>
      </div>
      <h3 className="font-display font-bold text-lg text-text-primary mb-1">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
