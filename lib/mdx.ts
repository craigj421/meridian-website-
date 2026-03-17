import fs from 'fs'
import matter from 'gray-matter'

export interface MdxParseResult {
  frontmatter: Record<string, unknown>
  content: string
}

export function parseMdxFile(filePath: string): MdxParseResult {
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data: frontmatter, content } = matter(raw)
  return { frontmatter, content }
}
