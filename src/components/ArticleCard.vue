<script setup lang="ts">
import type { Article } from '@/types/Article'
defineProps({
  articles: {
    type: Array<Article>,
    required: true,
  },
  ui: {
    type: Object,
    require: false,
  },
})
</script>

<template>
  <UPageCard
    v-for="art in articles"
    :key="art.path"
    :title="art.title"
    :description="art.description"
    :to="art.path"
    :ui="{ ...ui }"
    target="_self"
  >
    <template #header
      ><UBadge v-for="tag in art.tags" variant="outline" :ui="{ base: 'mx-1' }" :key="tag">{{
        tag
      }}</UBadge></template
    >
    <template #footer
      ><span class="text-neutral-500 text-sm"> {{ art.date }}</span>
    </template>
  </UPageCard>
</template>

<style scoped></style>
