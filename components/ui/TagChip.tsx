export function TagChip({ label }: { label: string }) {
  return (
    <span className="hud-text px-2 py-0.5 rounded-sm bg-surface text-text-muted border border-panel-border">
      {label}
    </span>
  )
}
