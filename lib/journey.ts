import fs from 'fs'
import path from 'path'
import { parseMdxFile } from './mdx'

const DEFAULT_JOURNEY_DIR = path.join(process.cwd(), 'content/journey')

export interface JourneyEntry {
  title: string
  date: string
  category: 'health' | 'build' | 'milestone'
  description: string
  content: string
}

export function getAllJourneyEntries(
  dir: string = DEFAULT_JOURNEY_DIR
): JourneyEntry[] {
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'))
  return files
    .map(file => {
      const { frontmatter, content } = parseMdxFile(path.join(dir, file))
      const entry = frontmatter as Omit<JourneyEntry, 'content'>
      const rawDate = entry.date as string | Date
      return {
        ...entry,
        // Ensure date is a string (gray-matter may parse it as a Date)
        date: typeof rawDate === 'string' ? rawDate : rawDate.toISOString().split('T')[0],
        content,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
