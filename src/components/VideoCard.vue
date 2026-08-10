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
    orientation="horizontal"
    icon="i-simple-icons-youtube"
    v-for="yv in youtubeVideo"
    :key="yv.id"
    :title="yv.title"
    :to="yv.url"
    :ui="{ ...ui }"
    target="_blank"
  >
    <img :src="`${yv.thumbnail}`" alt="Tailwind CSS" class="w-full" />
  </UPageCard>
</template>

<style scoped></style>
