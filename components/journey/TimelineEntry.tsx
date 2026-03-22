'use client'
import { motion, useReducedMotion } from 'framer-motion'

const CATEGORY_STYLES: Record<string, string> = {
  health: 'border-tertiary/40 text-tertiary',
  build: 'border-primary/40 text-primary',
  milestone: 'border-secondary-container/40 text-secondary-container',
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
      className="relative border-l-2 border-primary/20 hover:border-primary pl-6 pb-10 group transition-colors"
    >
      {/* Node dot */}
      <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-primary/50 border-2 border-bg z-10 group-hover:bg-primary transition-colors" />

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <span className="font-mono text-[11px] text-outline">{date}</span>
        <span
          className={`font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border ${CATEGORY_STYLES[category] ?? 'border-outline/40 text-outline'}`}
        >
          {category.toUpperCase()}
        </span>
      </div>
      <h3 className="font-display font-bold text-lg text-on-surface uppercase mb-1 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
