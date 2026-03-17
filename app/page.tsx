import { StarField } from '@/components/hero/StarField'
import { MissionHUD } from '@/components/hero/MissionHUD'
import { CyclingVerb } from '@/components/hero/CyclingVerb'
import { BuildCard } from '@/components/builds/BuildCard'
import { getPinnedBuild } from '@/lib/builds'
import { getAllJourneyEntries } from '@/lib/journey'
import Link from 'next/link'

const MISSION_PILLARS = [
  {
    icon: '⬡',
    label: 'Health',
    body: 'What actually moves the needle. Real experiments, real results.',
  },
  {
    icon: '⬢',
    label: 'Builds',
    body: 'Tools built to solve real problems. Take what works.',
  },
  {
    icon: '◈',
    label: 'Optimize',
    body: "The shortcuts took years to find. They're yours.",
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  health: 'text-green-400',
  build: 'text-accent-blue',
  milestone: 'text-accent-gold',
}

export default async function HomePage() {
  const pinnedBuild = getPinnedBuild()
  const recentUpdates = getAllJourneyEntries().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <StarField />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <MissionHUD />
          <CyclingVerb />
        </div>
      </section>

      {/* Mission Strip */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {MISSION_PILLARS.map((pillar) => (
          <div
            key={pillar.label}
            className="border border-panel-border bg-surface p-8 rounded-sm"
          >
            <p className="text-2xl mb-4 text-accent-gold">{pillar.icon}</p>
            <h3 className="font-display font-bold text-xl text-text-primary mb-3">
              {pillar.label}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">{pillar.body}</p>
          </div>
        ))}
      </section>

      {/* Latest Build */}
      {pinnedBuild && (
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <p className="hud-text text-text-muted mb-6">CURRENT BUILD</p>
          <BuildCard build={pinnedBuild} />
        </section>
      )}

      {/* Recent Updates */}
      {recentUpdates.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="flex items-center justify-between mb-8">
            <p className="hud-text text-text-muted">RECENT UPDATES</p>
            <Link href="/journey" className="hud-text text-accent-blue hover:underline text-xs">
              VIEW ALL →
            </Link>
          </div>
          <div className="space-y-4">
            {recentUpdates.map(entry => (
              <div
                key={entry.date + entry.title}
                className="flex items-start gap-6 py-4 border-b border-panel-border"
              >
                <span className="hud-text text-text-muted shrink-0 w-24">
                  {entry.date}
                </span>
                <span
                  className={`hud-text shrink-0 ${CATEGORY_COLORS[entry.category] ?? 'text-text-muted'}`}
                >
                  {entry.category.toUpperCase()}
                </span>
                <span className="text-text-primary text-sm">{entry.title}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
