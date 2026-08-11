<script setup lang="ts">
import type { YoutubeVideo } from '@/types/youtube'
defineProps({
  youtubeVideo: {
    type: Array<YoutubeVideo>,
    required: true,
  },
  ui: {
    type: Object,
    required: false,
  },
})
</script>

<template>
  <UPageCard
    v-if="youtubeVideo.length > 0"
    v-for="yv in youtubeVideo"
    orientation="horizontal"
    icon="i-simple-icons-youtube"
    :key="yv.id"
    :title="yv.title"
    :to="yv.url"
    :ui="{ ...ui }"
    target="_blank"
  >
    <img :src="`${yv.thumbnail}`" alt="Tailwind CSS" class="w-full" />
  </UPageCard>
  <p v-else class="text-center text-neutral-400 my-2 sm:my-4 lg:my-6">No videos yet</p>
</template>

<style scoped></style>
