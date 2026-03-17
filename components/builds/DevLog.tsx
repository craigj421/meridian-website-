import type { DevLogEntry } from '@/lib/builds'

export function DevLog({ entries }: { entries: DevLogEntry[] }) {
  const sorted = [...entries].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div>
      <p className="hud-text text-text-muted mb-6">DEVLOG</p>
      <div className="space-y-6">
        {sorted.map((entry, i) => (
          <div key={i} className="flex gap-6 border-b border-panel-border pb-6">
            <span className="hud-text text-text-muted shrink-0 w-28">{entry.date}</span>
            <p className="text-text-primary text-sm leading-relaxed">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
