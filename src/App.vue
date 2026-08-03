<script setup lang="ts">
import Header from '@/components/Header.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <UApp>
    <Header />

    <UMain>
      <RouterView />
    </UMain>

    <UFooter />
  </UApp>
</template>

<style scoped></style>
