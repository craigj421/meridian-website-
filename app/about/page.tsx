import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Meridian',
  description: 'No guru. No lifestyle brand. Just systems that work.',
}

const PILLARS = [
  {
    label: 'Health',
    body: 'The body is the foundation. Fasting, training, cutting stimulants — treating biology like a system worth optimizing. Every experiment is documented. Every result is shared.',
  },
  {
    label: 'Builds',
    body: 'Software built to solve real problems. An AI notes app that knows your life. Tools that track what matters. Everything is built in public and available to copy.',
  },
  {
    label: 'Optimize',
    body: "Fewer decisions. Less friction. Systems that run in the background so you can focus on what actually moves things forward. The shortcuts took years to find — they're yours now.",
  },
]

const CURRENT_BUILDS = [
  'Orion — AI-powered personal notes app',
  'Health tracking system (workouts, fasting, nutrition)',
  'Meridian — this site',
]

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Opening statement */}
      <div className="mb-16">
        <p className="hud-text text-text-muted mb-6">THE MISSION</p>
        <p className="font-display font-bold text-2xl sm:text-3xl text-text-primary leading-tight">
          No guru. No lifestyle brand. Just systems that work, documented as
          they&apos;re built, available to anyone who wants them. Meridian is
          the operating system. You&apos;re the one who runs it.
        </p>
      </div>

      {/* Three pillars */}
      <div className="mb-16 space-y-10">
        <p className="hud-text text-text-muted">THE THREE PILLARS</p>
        {PILLARS.map(pillar => (
          <div key={pillar.label}>
            <h3 className="font-display font-bold text-xl text-accent-gold mb-3">
              {pillar.label}
            </h3>
            <p className="text-text-muted leading-relaxed">{pillar.body}</p>
          </div>
        ))}
      </div>

      {/* What's being built */}
      <div className="mb-16">
        <p className="hud-text text-text-muted mb-6">WHAT&apos;S BEING BUILT</p>
        <ul className="space-y-3">
          {CURRENT_BUILDS.map(item => (
            <li key={item} className="flex items-start gap-3 text-text-muted">
              <span className="text-accent-blue mt-0.5">◈</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Where to follow */}
      <div>
        <p className="hud-text text-text-muted mb-6">WHERE TO FOLLOW</p>
        <div className="space-y-3">
          <Link
            href="https://x.com/MeridianOSX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-accent-blue hover:underline"
          >
            <span className="hud-text">X (Twitter)</span>
            <span className="text-text-muted">@MeridianOSX</span>
          </Link>
          <Link href="/builds" className="flex items-center gap-3 hover:text-accent-gold transition-colors">
            <span className="hud-text text-text-muted">BUILDS</span>
            <span className="text-text-muted">→ /builds</span>
          </Link>
          <Link href="/journey" className="flex items-center gap-3 hover:text-accent-gold transition-colors">
            <span className="hud-text text-text-muted">JOURNEY</span>
            <span className="text-text-muted">→ /journey</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
