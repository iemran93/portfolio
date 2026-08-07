<script setup lang="ts">
import type { PageCardProps } from '@nuxt/ui'
import { ref } from 'vue'
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const ProjectCards = ref<PageCardProps[]>([
  {
    title: 'DevMatch',
    description: 'Connect developer and build up teams',
    to: 'https://github.com',
  },
  {
    title: 'Deer',
    description: 'Expense Management',
    to: 'https://github.com',
  },
  {
    title: 'Deer',
    description: 'Expense Management',
    to: 'https://github.com',
  },
])
</script>

<template>
  <UContainer
    class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-15 lg:py-20 flex flex-col"
  >
    <h1 class="text-center pb-10">Latest Posts</h1>
    <div class="flex flex-col sm:flex-row">
      <div class="grow mx-2 sm:mx-4 lg:mx-6">
        <h2 class="text-center text-2xl font-bold pb-5 text-primary">Articles</h2>
        <UPageCard
          v-for="(pr, i) in ProjectCards"
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
      <div class="grow mx-2 sm:mx-4 lg:mx-6">
        <h2 class="text-center text-2xl font-bold pb-5 text-primary">Videos</h2>
        <UPageCard
          v-for="(pr, i) in ProjectCards"
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
