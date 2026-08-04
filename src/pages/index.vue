<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import { useScrollReveal } from '@/composables/useScrollReveal';
const { isVisible } = useScrollReveal('target')
</script>

<template>
  <div>
    <section
     class="min-h-screen flex  justify-center"
     >
      <Hero />
    </section>
    <section
    ref="target"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
     class="min-h-screen flex  justify-center transition-opacity duration-800"
    >
      <Projects class="min-h-screen flex  justify-center"/>
    </section>
  </div>
</template>
