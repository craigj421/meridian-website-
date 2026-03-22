import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllBuilds } from '@/lib/builds'
import { getAllJourneyEntries } from '@/lib/journey'

export const metadata: Metadata = {
  title: 'Build Log — Meridian',
  description: 'A mission-critical archive of ongoing engineering efforts.',
}

const STATUS_BADGE: Record<string, { label: string; className: string }> = {
  'in-progress': {
    label: 'IN PROGRESS',
    className: 'bg-primary-container text-on-primary-container',
  },
  shipped: {
    label: 'SHIPPED',
    className: 'bg-secondary-container text-on-secondary-container shadow-[0_0_15px_rgba(254,203,0,0.3)]',
  },
  paused: {
    label: 'PAUSED',
    className: 'bg-surface-variant text-on-surface-variant',
  },
}

const LOG_COLORS: Record<string, string> = {
  health: 'text-tertiary',
  build: 'text-primary',
  milestone: 'text-secondary',
}

const LOG_LABELS: Record<string, string> = {
  health: '[SUCCESS]',
  build: '[INFO]',
  milestone: '[MILESTONE]',
}

export default function BuildsPage() {
  const builds = getAllBuilds()
  const journeyEntries = getAllJourneyEntries().slice(0, 4)

  const featured = builds.find(b => b.pinned) ?? builds[0]
  const rest = builds.filter(b => b.slug !== featured?.slug)

  return (
    <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-primary shadow-[0_0_8px_#93ccff] inline-block" />
          <span className="font-mono text-primary text-xs tracking-widest uppercase">BUILD LOG // HUD_v4.0.1</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-6 text-on-surface">
          All Builds
        </h1>
        <p className="max-w-2xl text-on-surface-variant leading-relaxed text-sm md:text-base border-l border-outline-variant/30 pl-6">
          A mission-critical archive of ongoing engineering efforts. Tracking telemetry, deployment status, and system architecture across the Meridian ecosystem.
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Featured Card */}
        {featured && (
          <Link href={`/builds/${featured.slug}`} className="md:col-span-8 group relative overflow-hidden machined-border bg-surface-container-low transition-all duration-500 hover:bg-surface-container block">
            <div className="aspect-[21/9] relative overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#0d0d17] via-[#1a1a2e] to-[#0d0d17]" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent" />
              <div className="absolute top-4 right-4">
                {STATUS_BADGE[featured.status] && (
                  <span className={`px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-widest ${STATUS_BADGE[featured.status].className}`}>
                    {STATUS_BADGE[featured.status].label}
                  </span>
                )}
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-display text-3xl font-bold tracking-tight text-primary">{featured.title}</h2>
                <span className="font-mono text-[10px] text-outline-variant">ID: 0X-ORION-99</span>
              </div>
              <p className="text-on-surface-variant mb-6 text-sm">{featured.description}</p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] px-2 py-1 border border-outline-variant/30 text-outline uppercase">
                    [ {tag} ]
                  </span>
                ))}
              </div>
            </div>
            <div className="scanline-bar" />
          </Link>
        )}

        {/* System Health Monitor */}
        <div className="md:col-span-4 machined-border bg-surface-container-highest p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="font-mono text-[10px] text-tertiary uppercase flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>sensors</span>
              System Health
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-mono uppercase">
                <span className="text-outline">Compute Load</span>
                <span className="text-primary">42.8%</span>
              </div>
              <div className="h-1 bg-surface-variant w-full flex gap-[2px]">
                {[...Array(4)].map((_, i) => <div key={i} className="h-full flex-1 bg-primary" />)}
                {[...Array(6)].map((_, i) => <div key={i} className="h-full flex-1 bg-surface-variant" />)}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-mono uppercase">
                <span className="text-outline">Uptime</span>
                <span className="text-tertiary">99.98%</span>
              </div>
              <div className="h-1 bg-surface-variant w-full flex gap-[2px]">
                {[...Array(9)].map((_, i) => <div key={i} className="h-full flex-1 bg-tertiary" />)}
                {[...Array(1)].map((_, i) => <div key={i} className="h-full flex-1 bg-surface-variant" />)}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-mono uppercase">
                <span className="text-outline">Mission Day</span>
                <span className="text-secondary-container">{String(Math.floor((Date.now() - new Date('2026-01-06').getTime()) / 86400000)).padStart(3, '0')}</span>
              </div>
              <div className="h-1 bg-surface-variant w-full flex gap-[2px]">
                {[...Array(8)].map((_, i) => <div key={i} className="h-full flex-1 bg-secondary-container/60" />)}
                {[...Array(2)].map((_, i) => <div key={i} className="h-full flex-1 bg-surface-variant" />)}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-outline-variant/20">
            <button className="w-full py-2 bg-transparent border border-outline-variant hover:border-primary transition-colors font-mono text-[10px] uppercase text-on-surface">
              [ Open Diagnostics ]
            </button>
          </div>
        </div>

        {/* Rest of builds - 6 col each */}
        {rest.map((build, idx) => (
          <Link key={build.slug} href={`/builds/${build.slug}`} className="md:col-span-6 machined-border bg-surface-container-low group block">
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d17] to-[#1f1f2a] flex items-center justify-center">
                <span className="material-symbols-outlined text-outline-variant opacity-20 group-hover:rotate-45 transition-transform duration-700" style={{ fontSize: '64px' }}>
                  {idx % 2 === 0 ? 'travel_explore' : 'settings_suggest'}
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                {STATUS_BADGE[build.status] && (
                  <span className={`px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-widest ${STATUS_BADGE[build.status].className}`}>
                    {STATUS_BADGE[build.status].label}
                  </span>
                )}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-on-surface mb-2">{build.title}</h3>
              <p className="text-on-surface-variant text-xs mb-6 line-clamp-1">{build.description}</p>
              <div className="flex flex-wrap gap-2">
                {build.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="font-mono text-[10px] text-outline">[ {tag} ]</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* System Output */}
      <section className="mt-24">
        <div className="flex items-end justify-between mb-8 border-b border-outline-variant/20 pb-4">
          <h2 className="font-display text-2xl uppercase tracking-tighter">System Output</h2>
          <span className="font-mono text-[10px] text-primary">LIVE_STREAM_ENABLED</span>
        </div>
        <div className="space-y-4 font-mono text-[11px] text-on-surface-variant max-w-4xl">
          {journeyEntries.map((entry, i) => (
            <div key={entry.date + entry.title} className={`flex gap-4 ${i >= 3 ? 'opacity-50' : ''}`}>
              <span className="text-outline shrink-0">{entry.date.replace(/-/g, '.')}</span>
              <span className={LOG_COLORS[entry.category] ?? 'text-outline'}>{LOG_LABELS[entry.category] ?? '[LOG]'}</span>
              <span>{entry.title}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
