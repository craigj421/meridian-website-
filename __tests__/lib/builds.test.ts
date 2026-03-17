import path from 'path'
import { getAllBuilds, getBuildBySlug, getPinnedBuild } from '@/lib/builds'

// Point builds lib at fixtures directory for testing
const FIXTURES_DIR = path.join(__dirname, '../fixtures/builds')

describe('getAllBuilds', () => {
  it('returns an array of builds from a directory', () => {
    const builds = getAllBuilds(FIXTURES_DIR)
    expect(builds).toHaveLength(1)
    expect(builds[0].title).toBe('Test Build')
    expect(builds[0].slug).toBe('test-build')
    expect(builds[0].status).toBe('in-progress')
    expect(builds[0].tags).toEqual(['TypeScript', 'Testing'])
  })
})

describe('getBuildBySlug', () => {
  it('returns a build matching the slug', () => {
    const build = getBuildBySlug('test-build', FIXTURES_DIR)
    expect(build).not.toBeNull()
    expect(build!.title).toBe('Test Build')
    expect(build!.content).toContain('test build body content')
  })

  it('returns null for unknown slug', () => {
    const build = getBuildBySlug('not-a-real-slug', FIXTURES_DIR)
    expect(build).toBeNull()
  })
})

describe('getPinnedBuild', () => {
  it('returns the pinned build when one exists', () => {
    const build = getPinnedBuild(FIXTURES_DIR)
    expect(build).not.toBeNull()
    expect(build!.pinned).toBe(true)
  })
})
