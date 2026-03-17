import type { Metadata } from 'next'
import { getAllJourneyEntries } from '@/lib/journey'
import { Timeline } from '@/components/journey/Timeline'

export const metadata: Metadata = {
  title: 'Journey — Meridian',
  description: 'The mission, documented in real time.',
}

export default function JourneyPage() {
  const entries = getAllJourneyEntries()

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-16">
        <p className="hud-text text-text-muted mb-3">TIMELINE</p>
        <h1 className="font-display font-extrabold text-4xl text-text-primary">
          The Journey
        </h1>
        <p className="text-text-muted mt-3">The mission, documented in real time.</p>
      </div>
      <Timeline entries={entries} />
    </div>
  )
}
