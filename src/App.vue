<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <UApp>
    <UHeader />

    <UMain>
      <RouterView />
    </UMain>

    <UFooter />
  </UApp>
</template>

<style scoped></style>
