<script setup lang="ts">
import { useArticlesStore } from '@/stores/articles'
import { useWindowScroll } from '@vueuse/core'
import { watch } from 'vue'
import { computed, ref } from 'vue'
import ArticleCard from '@/components/ArticleCard.vue'

const articlesStore = useArticlesStore()

const page = ref(1)
const PAGE_SIZE = 7
const paginatedArticles = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE
  return articlesStore.articles.slice(start, start + PAGE_SIZE)
})

const { y } = useWindowScroll()
watch(page, () => {
  y.value = 0
})
</script>

<template>
  <UContainer class="w-full max-w-(--ui-container) flex flex-col items-center">
    <UPage>
      <UPageHeader title="Blogs" :ui="{ root: 'flex flex-col items-center' }" />
      <UPageBody>
        <ArticleCard :articles="paginatedArticles" />
      </UPageBody>
    </UPage>
    <UPagination
      v-model:page="page"
      :items-per-page="PAGE_SIZE"
      :total="articlesStore.articles.length"
    />
  </UContainer>
</template>

<style></style>
