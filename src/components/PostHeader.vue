<script setup lang="ts">
defineProps({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  meta: {
    type: Array,
    require: true,
  },
})
</script>

<template>
  <div class="flex flex-col items-center py-5 sm:py-10 lg:py-15 px-5 sm:px-10 lg:px-15">
    <h1 class="text-center py-5">{{ title }}</h1>
    <p class="text-center py-2 px-6 sm:px-10 lg:px-15 text-xl italic">{{ description }}</p>
    <div class="py-2 text-neutral-400">
      <template v-for="(data, index) in meta">
        <template v-if="index > 0">•</template>
        <span class="mx-2 text-sm">{{ data }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
