'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { TagChip } from '@/components/ui/TagChip'
import type { Build } from '@/lib/builds'

export function BuildCard({ build }: { build: Build }) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      whileHover={prefersReduced ? {} : { scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link href={`/builds/${build.slug}`} className="block">
        <div className="border border-panel-border bg-surface rounded-sm overflow-hidden hover:border-accent-gold/40 transition-colors">
          {/* Hero image */}
          <div className="aspect-video bg-panel relative overflow-hidden">
            {build.hero_image ? (
              <Image
                src={build.hero_image}
                alt={build.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl text-panel-border">◈</span>
              </div>
            )}
          </div>
          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-accent-gold transition-colors">
                {build.title}
              </h3>
              <StatusBadge status={build.status} />
            </div>
            <p className="text-text-muted text-sm mb-4">{build.description}</p>
            <div className="flex flex-wrap gap-2">
              {build.tags.map(tag => (
                <TagChip key={tag} label={tag} />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
