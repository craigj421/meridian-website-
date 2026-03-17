import { BuildCard } from './BuildCard'
import type { Build } from '@/lib/builds'

export function BuildGrid({ builds }: { builds: Build[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {builds.map(build => (
        <BuildCard key={build.slug} build={build} />
      ))}
    </div>
  )
}
