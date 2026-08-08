<script setup lang="ts">
import { useArticles } from '@/composables/useArticles'
import { useWindowScroll } from '@vueuse/core'
import { watch } from 'vue'
import { computed, ref } from 'vue'

const articles = useArticles()

const page = ref(1)
const PAGE_SIZE = 7
const paginatedArticles = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE
  return articles.slice(start, start + PAGE_SIZE)
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
        <UPageCard
          v-for="art in paginatedArticles"
          :key="art.path"
          :title="art.title"
          :description="art.description"
          :to="art.path"
          target="_self"
        />
      </UPageBody>
    </UPage>
    <UPagination v-model:page="page" :items-per-page="PAGE_SIZE" :total="articles.length" />
  </UContainer>
</template>

<style></style>
