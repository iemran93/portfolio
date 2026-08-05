<script setup lang="ts">
import MainHero from '@/components/MainHero.vue'
import ProjectsView from '@/components/ProjectsView.vue'
import PostsView from '@/components/PostsView.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { isVisible: projectsVisibility } = useScrollReveal('pojectsTarget')
const { isVisible: postsVisibility } = useScrollReveal('postsTarget')
</script>

<template>
  <div>
    <section>
      <MainHero />
    </section>
    <section
      ref="pojectsTarget"
      :class="projectsVisibility ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      class="transition-opacity duration-900"
    >
      <ProjectsView :show="projectsVisibility" />
    </section>
    <section
      ref="postsTarget"
      :class="postsVisibility ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      class="transition-opacity duration-900"
    >
      <PostsView :show="postsVisibility" />
    </section>
  </div>
</template>
