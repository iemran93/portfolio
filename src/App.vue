<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { RouterView } from 'vue-router'
import { useArticlesStore } from '@/stores/articles'
import { onMounted } from 'vue'
import { useYoutubeVideos } from '@/stores/youtube'

const articlesStore = useArticlesStore()
const youtubeVideos = useYoutubeVideos()
onMounted(() => {
  youtubeVideos.fetchYoutubeData()
  articlesStore.fetchArticlesData()
})
</script>

<template>
  <UApp>
    <Header />
    <UMain>
      <RouterView />
    </UMain>
    <Footer />
  </UApp>
</template>

<style scoped></style>
