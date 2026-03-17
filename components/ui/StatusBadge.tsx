type Status = 'in-progress' | 'shipped' | 'paused'

const config: Record<Status, { label: string; className: string }> = {
  'in-progress': {
    label: 'IN PROGRESS',
    className: 'bg-accent-blue/10 text-accent-blue border border-accent-blue/30',
  },
  shipped: {
    label: 'SHIPPED',
    className: 'bg-accent-gold/10 text-accent-gold border border-accent-gold/30',
  },
  paused: {
    label: 'PAUSED',
    className: 'bg-text-muted/10 text-text-muted border border-text-muted/30',
  },
}

export function StatusBadge({ status }: { status: Status }) {
  const { label, className } = config[status]
  return (
    <span className={`hud-text px-2 py-0.5 rounded-sm ${className}`}>
      {label}
    </span>
  )
}
