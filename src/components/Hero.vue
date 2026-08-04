<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';
import { ref } from 'vue';

const links = ref<ButtonProps[]>([
  {
    to: 'https://github.com/iemran93',
    icon: 'i-simple-icons-github',
    variant: 'ghost',
    color: 'neutral'
  },
  {
    to: 'https://x.com/iemran',
    icon: 'i-simple-icons:x',
    variant: 'ghost',
    color: 'neutral'
  },
])
</script>

<template>
  <UPageHero
    title="Hello there"
    description="My name is Emran and I'm Full-stack developer, I enjoy coding and making website"
    orientation="vertical"
    :links="links"
  >
  </UPageHero>
  </template>

<style lang="scss" scoped>

</style>
