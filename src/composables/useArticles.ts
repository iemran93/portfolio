import * as yaml from 'js-yaml'

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}
  return yaml.load(match[1]!) as Record<string, any>
}

export function useArticles() {
  const modules = import.meta.glob('/src/blogs/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  })

  return Object.entries(modules)
    .map(([path, raw]) => {
      const data = parseFrontmatter(raw as string)
      const slug = path.split('/').pop()!.replace('.md', '')
      return {
        path: `/blog/${slug}`,
        title: data.title,
        date: data.meta[0],
        description: data.description,
        tags: data.tags ?? [],
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
