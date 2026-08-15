<script setup lang="ts">
import LogoTerminal from '@/components/LogoTerminal.vue'
import type { ButtonProps } from '@nuxt/ui'
import { ref } from 'vue'

const links = ref<ButtonProps[]>([
  {
    to: 'https://github.com/iemran93',
    icon: 'i-simple-icons-github',
    variant: 'ghost',
    color: 'neutral',
    target: '_blank',
  },
  {
    to: 'https://x.com/@bytemran',
    icon: 'i-simple-icons:x',
    variant: 'ghost',
    color: 'neutral',
    target: '_blank',
  },
  {
    to: 'https://www.youtube.com/@bytemran',
    icon: 'i-simple-icons:youtube',
    variant: 'ghost',
    color: 'neutral',
    target: '_blank',
  },
  {
    label: 'Contact me',
    to: '/contact',
    icon: 'i-simple-icons:minutemailer',
    variant: 'soft',
    color: 'primary',
    target: '_self',
  },
])
</script>

<template>
  <UPageHero
    title="Hi, I'm Emran!"
    descriptio
    orientation="vertical"
    :links="links"
    :ui="{ container: 'py-10 sm:py-15 lg:py-20', title: 'text-4xl sm:text-6xl' }"
  >
    <template #headline>
      <div class="w-full flex justify-center">
        <LogoTerminal size="200px" />
      </div>
    </template>
    <template #description>
      <p>
        I'm <span class="font-bold italic text-primary-700">Full-stack developer</span>. I
        architect, build, and deploy end-to-end web platforms using the modern ecosystem.
      </p>
    </template>
  </UPageHero>
</template>

<style lang="scss" scoped></style>
