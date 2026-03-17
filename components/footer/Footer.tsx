import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-panel-border bg-panel mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-xl text-text-primary tracking-widest">
            MERIDIAN
          </p>
          <p className="text-text-muted text-sm mt-1">A mission in progress.</p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="https://x.com/MeridianOSX"
            target="_blank"
            rel="noopener noreferrer"
            className="hud-text text-text-muted hover:text-accent-blue transition-colors"
          >
            @MeridianOSX
          </Link>
          <Link
            href="/builds"
            className="hud-text text-text-muted hover:text-accent-gold transition-colors"
          >
            Builds
          </Link>
          <Link
            href="/journey"
            className="hud-text text-text-muted hover:text-accent-gold transition-colors"
          >
            Journey
          </Link>
        </div>
      </div>
    </footer>
  )
}
