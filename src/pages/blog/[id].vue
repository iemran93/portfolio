<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const articleName = (route.params as { id: string }).id

const articlePost = defineAsyncComponent({
  loader: () => import(`@/blogs/${articleName}.md`),
  onError(error, retry, fail) {
    fail()
    router.replace('/404') // trigger the redirect
  },
})
</script>

<template>
  <UPage>
    <UContainer>
      <component :is="articlePost" />
    </UContainer>
  </UPage>
</template>
