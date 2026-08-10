<script setup lang="ts">
import { useArticlesStore } from '@/stores/articles'
import ArticleCard from './ArticleCard.vue'
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const articlesStore = useArticlesStore()
const articleCards = articlesStore.articles.slice(0, 3)
</script>

<template>
  <UContainer
    class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-15 lg:py-20 flex flex-col"
  >
    <h1 class="text-center pb-10">Latest Posts</h1>
    <div class="flex flex-col sm:flex-row">
      <div class="grow mx-2 sm:mx-4 lg:mx-6 flex flex-col">
        <h2 class="text-center text-2xl font-bold pb-5 text-primary">Articles</h2>
        <ArticleCard
          v-if="articleCards.length > 0"
          :articles="articleCards"
          :ui="{ root: 'my-2 sm:my-4 lg:my-6' }"
        />
        <p v-else class="text-center text-neutral-400">No blogs yet</p>
        <div class="flex justify-center my-2 sm:my-4 lg:my-6">
          <UButton
            variant="outline"
            trailing-icon="i-lucide-arrow-right"
            size="md"
            to="/blog"
            target="_self"
            >blogs</UButton
          >
        </div>
      </div>
      <div class="grow mx-2 sm:mx-4 lg:mx-6 mt-4 sm:mt-0 flex flex-col">
        <h2 class="text-center text-2xl font-bold pb-5 text-primary">Videos</h2>
        <ArticleCard
          v-if="articleCards.length > 0"
          :articles="articleCards"
          :ui="{ root: 'my-2 sm:my-4 lg:my-6' }"
        />
        <p v-else class="text-center text-neutral-400">No blogs yet</p>
        <div class="flex justify-center my-2 sm:my-4 lg:my-6">
          <UButton
            variant="outline"
            trailing-icon="i-lucide-arrow-right"
            size="md"
            to="/blog"
            target="_self"
            >videos</UButton
          >
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>
