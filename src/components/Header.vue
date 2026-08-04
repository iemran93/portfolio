<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'blog',
    to: '/blog',
    active: route.path.startsWith('/blog'),
  },
  {
    label: 'about',
    to: '/about',
    active: route.path.startsWith('/about'),
  },
  {
    label: 'uses',
    to: '/uses',
    active: route.path.startsWith('/uses'),
  },
])
</script>

<template>
  <UHeader title="Emran Dev">
    <UNavigationMenu :items="items" />
    <template #right>
      <UColorModeButton />
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
