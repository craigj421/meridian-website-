import type { Metadata } from 'next'
import { getAllBuilds } from '@/lib/builds'
import { BuildGrid } from '@/components/builds/BuildGrid'

export const metadata: Metadata = {
  title: 'Builds — Meridian',
  description: 'Tools built to solve real problems. Take what works.',
}

export default function BuildsPage() {
  const builds = getAllBuilds()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="hud-text text-text-muted mb-3">BUILD LOG</p>
        <h1 className="font-display font-extrabold text-4xl text-text-primary">
          All Builds
        </h1>
        <p className="text-text-muted mt-3">
          Tools built to solve real problems. Take what works.
        </p>
      </div>
      <BuildGrid builds={builds} />
    </div>
  )
}
