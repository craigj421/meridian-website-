export const MISSION_START_DATE = new Date('2026-01-06T00:00:00.000Z')

/**
 * Returns the mission day number (1-indexed) for a given date.
 * Day 1 = Jan 6, 2026. Uses UTC to avoid timezone drift.
 */
export function getMissionDay(now: Date = new Date()): number {
  const msPerDay = 1000 * 60 * 60 * 24
  const diff = now.getTime() - MISSION_START_DATE.getTime()
  return Math.floor(diff / msPerDay) + 1
}
