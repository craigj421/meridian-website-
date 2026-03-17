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

function dateToString(val: string | Date | undefined): string | undefined {
  if (val === undefined || val === null) return undefined
  if (typeof val === 'string') return val
  return (val as Date).toISOString().split('T')[0]
}

function normalizeBuild(frontmatter: Omit<Build, 'content'>, content: string): Build {
  const fm = frontmatter as Record<string, unknown>
  return {
    ...(fm as Omit<Build, 'content' | 'date_started' | 'date_shipped' | 'devlog'>),
    content,
    date_started: dateToString(fm.date_started as string | Date) ?? '',
    date_shipped: dateToString(fm.date_shipped as string | Date | undefined),
    devlog: Array.isArray(fm.devlog)
      ? (fm.devlog as Array<{ date: string | Date; content: string }>).map(entry => ({
          content: entry.content,
          date: dateToString(entry.date as string | Date) ?? '',
        }))
      : undefined,
  }
}

export function getAllBuilds(dir: string = DEFAULT_BUILDS_DIR): Build[] {
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'))
  return files
    .map(file => {
      const { frontmatter, content } = parseMdxFile(path.join(dir, file))
      return normalizeBuild(frontmatter as Omit<Build, 'content'>, content)
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
  return normalizeBuild(frontmatter as Omit<Build, 'content'>, content)
}

export function getPinnedBuild(dir: string = DEFAULT_BUILDS_DIR): Build | null {
  const builds = getAllBuilds(dir)
  const pinned = builds.find(b => b.pinned)
  if (pinned) return pinned
  return builds.find(b => b.status === 'in-progress') ?? null
}
