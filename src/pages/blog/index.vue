<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const blogPost = defineAsyncComponent(() => import('@/blogs/welcome.md'))
</script>

<template>
  <UPage>
    <component :is="blogPost" />
  </UPage>
</template>

<style></style>
