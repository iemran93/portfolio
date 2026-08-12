<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { reactive } from 'vue'
import * as z from 'zod'

const schema = z.object({
  email: z.email('Invalid email'),
  title: z.string('Title invalid').min(2, 'Must be at least 2 characters'),
  message: z.string('Message invalid').min(10, 'Must be at least 10 characters'),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  title: undefined,
  message: undefined,
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader title="Contact" :ui="{ root: 'flex flex-col items-center' }" />
      <h3 class="py-6 sm:py-8 text-center">
        Let me build you somthing
        <span class="font-bold italic text-primary-700">amazing!</span>
      </h3>
      <UForm
        :schema="schema"
        :state="state"
        class="py-7 sm:py-10 px-4 sm:px-8 space-y-4 flex flex-col"
        @submit="onSubmit"
      >
        <UFormField label="Email" name="email" orientation="horizontal" class="w-full sm:w-100">
          <UInput v-model="state.email" />
        </UFormField>

        <UFormField label="Title" name="title" orientation="horizontal" class="w-full sm:w-100">
          <UInput v-model="state.title" type="text" />
        </UFormField>

        <UFormField label="Message" name="message" orientation="horizontal" class="w-full sm:w-200">
          <UTextarea v-model="state.message" :rows="12" />
        </UFormField>

        <div class="flex justify-between items-center w-full sm:w-200">
          <span></span>
          <UButton type="submit" class=""> Submit </UButton>
        </div>
      </UForm>
    </UPage>
  </UContainer>
</template>

<style scoped></style>
