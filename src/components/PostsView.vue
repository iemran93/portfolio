<script setup lang="ts">
import { useArticlesStore } from '@/stores/articles'
import ArticleCard from '@/components/ArticleCard.vue'
import { computed } from 'vue'
import VideoCard from '@/components/VideoCard.vue'
import { useYoutubeVideos } from '@/stores/youtube'
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const youtubeVideos = useYoutubeVideos()
const articlesStore = useArticlesStore()
const articleCards = computed(() => articlesStore.articles.slice(0, 3))
</script>

<template>
  <UContainer
    class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-15 lg:py-20 flex flex-col"
  >
    <h1 class="text-center pb-10">Latest Posts</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      <div class="flex flex-col">
        <h2 class="text-center text-2xl font-bold pb-5 text-primary">Articles</h2>
        <ArticleCard
          v-if="articleCards.length > 0"
          :articles="articleCards"
          :ui="{ root: 'my-2 sm:my-4 lg:my-6' }"
        />
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

      <div class="flex flex-col">
        <h2 class="text-center text-2xl font-bold pb-5 text-primary">Videos</h2>
        <VideoCard
          v-if="youtubeVideos.videos.length > 0"
          :youtubeVideo="youtubeVideos.videos"
          :ui="{ root: 'my-2 sm:my-4 lg:my-6' }"
        />
        <div class="flex justify-center my-2 sm:my-4 lg:my-6">
          <UButton
            variant="outline"
            trailing-icon="i-lucide-arrow-right"
            size="md"
            to="https://www.youtube.com/@byte-emran"
            target="_blank"
            >channel</UButton
          >
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>
