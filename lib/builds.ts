import fs from 'fs'
import path from 'path'
import { parseMdxFile } from './mdx'

const DEFAULT_BUILDS_DIR = path.join(process.cwd(), 'content/builds')

export interface DevLogEntry {
  date: string
  content: string
}

export interface Build {
  title: string
  description: string
  slug: string
  status: 'in-progress' | 'shipped' | 'paused'
  date_started: string
  date_shipped?: string
  hero_image?: string
  tags: string[]
  pinned?: boolean
  devlog?: DevLogEntry[]
  content: string
}

export function getAllBuilds(dir: string = DEFAULT_BUILDS_DIR): Build[] {
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'))
  return files
    .map(file => {
      const { frontmatter, content } = parseMdxFile(path.join(dir, file))
      return { ...(frontmatter as Omit<Build, 'content'>), content }
    })
    .sort((a, b) => (a.date_started < b.date_started ? 1 : -1))
}

export function getBuildBySlug(
  slug: string,
  dir: string = DEFAULT_BUILDS_DIR
): Build | null {
  const filePath = path.join(dir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const { frontmatter, content } = parseMdxFile(filePath)
  return { ...(frontmatter as Omit<Build, 'content'>), content }
}

export function getPinnedBuild(dir: string = DEFAULT_BUILDS_DIR): Build | null {
  const builds = getAllBuilds(dir)
  const pinned = builds.find(b => b.pinned)
  if (pinned) return pinned
  return builds.find(b => b.status === 'in-progress') ?? null
}
