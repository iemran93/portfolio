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
  },
  {
    to: 'https://x.com/iemran',
    icon: 'i-simple-icons:x',
    variant: 'ghost',
    color: 'neutral',
  },
  {
    to: 'https://youtube.com',
    icon: 'i-simple-icons:youtube',
    variant: 'ghost',
    color: 'neutral',
  },
  {
    label: 'Contact me',
    to: 'https://youtube.com',
    icon: 'i-lucide-mail',
    variant: 'soft',
    color: 'primary',
  },
])
</script>

<template>
  <UPageHero
    title="Hello there"
    orientation="vertical"
    :links="links"
    :ui="{ container: 'py-10 sm:py-15 lg:py-20' }"
  >
    <template #headline>
      <div class="w-full flex justify-center">
        <LogoTerminal size="200px" />
      </div>
    </template>
    <template #description>
      <p>
        My name is
        <span class="font-bold italic text-primary-700">Emran</span>
        and I'm <span class="font-bold italic text-primary-700">Full-stack developer</span>, I enjoy
        coding and making website
      </p>
    </template>
  </UPageHero>
</template>

<style lang="scss" scoped></style>
