type Status = 'in-progress' | 'shipped' | 'paused'

const config: Record<Status, { label: string; className: string }> = {
  'in-progress': {
    label: 'IN PROGRESS',
    className: 'border-primary/40 text-primary',
  },
  shipped: {
    label: 'SHIPPED',
    className: 'border-secondary-container/40 text-secondary-container',
  },
  paused: {
    label: 'PAUSED',
    className: 'border-outline/40 text-outline',
  },
}

export function StatusBadge({ status }: { status: Status }) {
  const { label, className } = config[status]
  return (
    <span className={`font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border ${className}`}>
      {label}
    </span>
  )
}
