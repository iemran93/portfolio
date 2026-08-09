<script setup lang="ts">
import { useArticlesStore } from '@/stores/articles'
import type { PageCardProps } from '@nuxt/ui'
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const articlesStore = useArticlesStore()
const articleCards: PageCardProps[] = articlesStore.articles.slice(0, 3).map((article) => {
  return { title: article.title, description: article.description, to: article.path }
})
</script>

<template>
  <UContainer
    class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-15 lg:py-20 flex flex-col"
  >
    <h1 class="text-center pb-10">Latest Posts</h1>
    <div class="flex flex-col sm:flex-row">
      <div class="grow mx-2 sm:mx-4 lg:mx-6 flex flex-col">
        <h2 class="text-center text-2xl font-bold pb-5 text-primary">Articles</h2>
        <UPageCard
          v-if="articleCards.length > 0"
          v-for="(pr, i) in articleCards"
          :key="i"
          :title="pr.title"
          :description="pr.description"
          :to="pr.to"
          variant="soft"
          :ui="{ root: 'grow mb-2 sm:mb-4 lg:mb-6' }"
          ><template #footer>
            <UButton
              icon="i-simple-icons:github"
              size="md"
              color="neutral"
              variant="outline"
              :to="pr.to"
              target="_self"
            ></UButton>
          </template>
        </UPageCard>
        <p v-else class="text-center text-neutral-400">No blogs yet</p>
        <div class="flex justify-center my-2 sm:my-4 lg:my-6">
          <UButton trailing-icon="i-lucide-arrow-right" size="md" to="/blog" target="_self"
            >blogs</UButton
          >
        </div>
      </div>
      <div class="grow mx-2 sm:mx-4 lg:mx-6">
        <h2 class="text-center text-2xl font-bold pb-5 text-primary">Videos</h2>
        <UPageCard
          v-for="(pr, i) in articleCards"
          :key="i"
          :title="pr.title"
          :description="pr.description"
          variant="soft"
          :ui="{ root: 'grow mb-2 sm:mb-4 lg:mb-6' }"
          ><template #footer>
            <UButton
              icon="i-simple-icons:github"
              size="md"
              color="neutral"
              variant="outline"
              :to="pr.to"
              target="_blank"
            ></UButton> </template
        ></UPageCard>
      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>
