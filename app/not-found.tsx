import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="font-mono space-y-3 text-accent-blue">
        <p className="hud-text">STATUS: SIGNAL LOST</p>
        <p className="hud-text">ERROR: PAGE NOT FOUND</p>
        <p className="hud-text text-text-muted">
          ACTION:{' '}
          <Link href="/" className="text-accent-gold hover:underline">
            Return to base →
          </Link>
        </p>
      </div>
    </div>
  )
}
