import { ref } from 'vue'
import { defineStore } from 'pinia'
import { parseFrontmatter } from '@/util/parse-frontmatter'
import type { Article } from '@/types/Article'

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref<Article[]>([])

  const fetchArticlesData = () => {
    const modules = import.meta.glob('/src/blogs/*.md', {
      query: '?raw',
      import: 'default',
      eager: true,
    })

    articles.value = Object.entries(modules)
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

  return { articles, fetchArticlesData }
})
