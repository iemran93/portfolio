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
    title: 'Social Network',
    description:
      'A Facebook-like social network application with a React/Next.js frontend and Go backend API',
    to: 'https://github.com/iemran93/social-network',
    target: '_blank',
  },
  {
    title: 'Code Keeper',
    description: 'Full CI/CD pipeline with GitLab(locally) and micro-services architecture',
    to: 'https://github.com/iemran93/code-keeper',
    target: '_blank',
  },
])
</script>
<template>
  <UContainer
    class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-15 lg:py-20 flex flex-col"
  >
    <h1 class="text-center text-4xl font-bold pb-10">Featured Projects</h1>
    <UPageGrid>
      <UPageCard
        v-for="(pr, i) in ProjectCards"
        :key="i"
        :title="pr.title"
        :description="pr.description"
        :to="pr.to"
        :target="pr.target"
        variant="soft"
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
    </UPageGrid>
    <div class="flex justify-center my-4 sm:my-6 lg:my-8">
      <UButton
        variant="outline"
        trailing-icon="i-lucide-arrow-right"
        size="md"
        to="http://github.com/iemran93"
        target="_blank"
        >Check all projects</UButton
      >
    </div>
  </UContainer>
</template>
