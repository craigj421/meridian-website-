'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { StatusBadge } from '@/components/ui/StatusBadge'
import type { Build } from '@/lib/builds'

export function BuildCard({ build }: { build: Build }) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      whileHover={prefersReduced ? {} : { y: -2 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link href={`/builds/${build.slug}`} className="block">
        <div className="border border-outline-variant/20 bg-surface-container group hover:bg-surface-container-high transition-all duration-500 overflow-hidden">
          {/* Hero image */}
          <div className="aspect-video bg-surface-container-low relative overflow-hidden">
            {build.hero_image ? (
              <Image
                src={build.hero_image}
                alt={build.title}
                fill
                className="object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-surface-container via-surface-container-low to-bg flex items-center justify-center">
                <span className="material-symbols-outlined text-outline-variant/30" style={{ fontSize: '48px' }}>deployed_code</span>
              </div>
            )}
          </div>
          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-display font-bold text-lg text-on-surface uppercase group-hover:text-primary transition-colors">
                {build.title}
              </h3>
              <StatusBadge status={build.status} />
            </div>
            <p className="text-on-surface-variant text-sm mb-4">{build.description}</p>
            <div className="flex flex-wrap gap-2">
              {build.tags.map(tag => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border border-outline-variant/20 text-outline"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
