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
    <component :is="articlePost" />
  </UPage>
</template>

<style>
.blogBody {
  padding: 1rem 3rem;
}
pre:has(> code[class^='language-']) {
  border-radius: 8px;
  padding: 1rem 1.25rem;
  margin: 1rem;
  overflow-x: auto;
  background: var(--color-neutral-800);
  border: 1px solid var(--color-neutral-600);
}
.header-anchor {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  margin-right: 0.1em;
  color: var(--ui-color-primary-200);
}

/* Solid line */
hr.divider-solid {
  width: 40%;
  border: none;
  border-top: 2px solid var(--color-neutral-800);
  margin: 20px 0;
}

/* Dashed line */
hr.divider-dashed {
  width: 40%;
  border: none;
  border-top: 2px dashed var(--color-neutral-800);
  margin: 20px 0;
}
</style>
