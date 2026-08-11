<script setup lang="ts"></script>

<template>
  <UError
    :error="{
      statusCode: 404,
      statusMessage: 'Page not found',
      message: 'The page you are looking for does not exist.',
    }"
  >
    <template #links>
      <UButton to="/" target="_self">Go to home</UButton>
    </template>
  </UError>
</template>

<style scoped></style>
