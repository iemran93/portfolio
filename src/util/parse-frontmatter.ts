import * as yaml from 'js-yaml'

export function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}
  return yaml.load(match[1]!) as Record<string, any>
}
