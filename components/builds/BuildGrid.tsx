import { BuildCard } from './BuildCard'
import type { Build } from '@/lib/builds'

export function BuildGrid({ builds }: { builds: Build[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-outline-variant/20">
      {builds.map(build => (
        <BuildCard key={build.slug} build={build} />
      ))}
    </div>
  )
}
