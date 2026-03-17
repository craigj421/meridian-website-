import { MISSION_START_DATE, getMissionDay } from '@/lib/mission'

describe('getMissionDay', () => {
  it('returns 1 on mission start date', () => {
    expect(getMissionDay(new Date('2026-01-06'))).toBe(1)
  })

  it('returns 2 on the day after start', () => {
    expect(getMissionDay(new Date('2026-01-07'))).toBe(2)
  })

  it('returns 70 on 2026-03-16 (69 days after start)', () => {
    expect(getMissionDay(new Date('2026-03-16'))).toBe(70)
  })

  it('MISSION_START_DATE is January 6 2026', () => {
    expect(MISSION_START_DATE.toISOString().startsWith('2026-01-06')).toBe(true)
  })
})
