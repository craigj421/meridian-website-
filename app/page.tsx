import { StarField } from '@/components/hero/StarField'
import { MissionHUD } from '@/components/hero/MissionHUD'
import { CyclingVerb } from '@/components/hero/CyclingVerb'
import { getPinnedBuild } from '@/lib/builds'
import { getAllJourneyEntries } from '@/lib/journey'
import Link from 'next/link'
import Image from 'next/image'

const MISSION_PILLARS = [
  {
    icon: 'vital_signs',
    label: 'HEALTH',
    subtitle: 'Biological System Integrity',
  },
  {
    icon: 'architecture',
    label: 'BUILDS',
    subtitle: 'Active Engineering Projects',
  },
  {
    icon: 'bolt',
    label: 'OPTIMIZE',
    subtitle: 'Protocol Efficiency Tuning',
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  health: 'border-tertiary/40 text-tertiary',
  build: 'border-primary/40 text-primary',
  milestone: 'border-secondary-container/40 text-secondary-container',
}

export default async function HomePage() {
  const pinnedBuild = getPinnedBuild()
  const recentUpdates = getAllJourneyEntries().slice(0, 5)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <StarField />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-10 sm:opacity-20" />
        <div className="absolute inset-0 scanlines opacity-30" />
        <div className="relative z-10 w-full max-w-2xl px-4 sm:px-6">
          <MissionHUD />
          <CyclingVerb />
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-[9px] tracking-widest text-outline uppercase">Manual Descent</span>
          <span className="material-symbols-outlined text-outline text-lg">expand_more</span>
        </div>
      </section>

      {/* Mission Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24">
        <div className="border border-outline-variant/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {MISSION_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.label}
                className={`p-6 sm:p-10 transition-colors hover:bg-surface-container-low ${
                  idx < MISSION_PILLARS.length - 1
                    ? 'border-b md:border-b-0 md:border-r border-outline-variant/20'
                    : ''
                }`}
              >
                <span
                  className="material-symbols-outlined text-secondary-container mb-6 block"
                  style={{ fontSize: '32px' }}
                >
                  {pillar.icon}
                </span>
                <h3 className="font-display font-extrabold text-2xl tracking-tighter text-on-surface uppercase mb-2">
                  {pillar.label}
                </h3>
                <p className="font-mono text-[10px] tracking-widest text-outline uppercase">
                  {pillar.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Build */}
      {pinnedBuild && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-24">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-[10px] text-primary tracking-widest uppercase py-1 px-3 border border-primary/30 bg-primary/5 shrink-0">
              CURRENT BUILD
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-7">
              <div className="aspect-[16/9] bg-surface-container relative group overflow-hidden border border-outline-variant/20">
                {pinnedBuild.hero_image ? (
                  <Image
                    src={pinnedBuild.hero_image}
                    alt={pinnedBuild.title}
                    fill
                    className="object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-surface-container via-surface-container-low to-bg" />
                )}
                {/* HUD overlay badge */}
                <div className="absolute top-4 left-0 border-l-2 border-primary bg-bg/80 backdrop-blur-md p-3 sm:p-4">
                  <p className="font-mono text-[9px] tracking-widest text-outline uppercase">MODULE</p>
                  <p className="font-mono text-[11px] text-primary tracking-wider">CORE_ENGINE</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tighter uppercase text-on-surface">
                {pinnedBuild.title} Protocol
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-sm max-w-md">
                {pinnedBuild.description}
              </p>
              {pinnedBuild.tags.length > 0 && (
                <div className="space-y-4">
                  {pinnedBuild.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-tertiary shrink-0" />
                      <span className="font-mono text-[11px] uppercase tracking-wider">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <Link
                href={`/builds/${pinnedBuild.slug}`}
                className="inline-flex items-center gap-4 bg-primary text-on-primary font-mono text-[11px] font-bold tracking-widest px-6 sm:px-8 py-3 sm:py-4 uppercase hover:shadow-[0_0_20px_rgba(0,170,255,0.3)] transition-all group"
              >
                VIEW DOCUMENTATION
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Recent Updates */}
      {recentUpdates.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-24">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">RECENT UPDATES</span>
              <h2 className="font-display font-extrabold text-4xl tracking-tighter uppercase">
                Mission Logs
              </h2>
            </div>
            <Link
              href="/journey"
              className="font-mono text-[11px] text-primary-fixed-dim tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
            >
              VIEW ALL <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="border-t border-outline-variant/30">
            {recentUpdates.map(entry => (
              <div
                key={entry.date + entry.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-8 border-b border-outline-variant/10 group hover:bg-surface-container-low transition-colors px-4 -mx-4 cursor-pointer"
              >
                {/* Date */}
                <div className="md:col-span-2 self-center">
                  <span className="font-mono text-[11px] text-outline">{entry.date}</span>
                </div>
                {/* Category */}
                <div className="md:col-span-2 self-center">
                  <span
                    className={`font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border ${
                      CATEGORY_COLORS[entry.category] ?? 'border-outline/40 text-outline'
                    }`}
                  >
                    {entry.category.toUpperCase()}
                  </span>
                </div>
                {/* Title */}
                <div className="md:col-span-8 self-center">
                  <span className="font-display font-bold text-xl tracking-tight uppercase text-on-surface group-hover:text-primary transition-colors">
                    {entry.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
