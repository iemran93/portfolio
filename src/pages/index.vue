<script setup lang="ts">
import MainHero from '@/components/MainHero.vue'
import ProjectsView from '@/components/ProjectsView.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
const { isVisible } = useScrollReveal('target')
</script>

<template>
  <div>
    <section>
      <MainHero />
    </section>
    <section
      ref="target"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      class="transition-opacity duration-900"
    >
      <ProjectsView :show="isVisible" />
    </section>
  </div>
</template>
