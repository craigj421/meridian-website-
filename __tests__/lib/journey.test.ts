import path from 'path'
import { getAllJourneyEntries } from '@/lib/journey'

const FIXTURES_DIR = path.join(__dirname, '../fixtures/journey')

describe('getAllJourneyEntries', () => {
  it('returns journey entries sorted by date descending', () => {
    const entries = getAllJourneyEntries(FIXTURES_DIR)
    expect(entries).toHaveLength(1)
    expect(entries[0].title).toBe('Mission Start')
    expect(entries[0].date).toBe('2026-01-06')
    expect(entries[0].category).toBe('milestone')
  })
})
