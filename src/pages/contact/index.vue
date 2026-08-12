<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { reactive } from 'vue'
import * as z from 'zod'

const FORM_URI = import.meta.env.VITE_FORMSPREE_URI

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
  try {
    const res = await fetch(FORM_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(event.data),
    })
    if (!res.ok) {
      throw new Error('Failed sending message')
    }
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  } catch (e) {
    toast.add({ title: 'Failed', description: 'Please try again later.', color: 'error' })
  }
}
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader title="Contact" :ui="{ root: 'flex flex-col items-center' }" />
      <h3 class="py-6 sm:py-8 text-center">
        Got an idea? Let's make it
        <span class="font-bold italic text-primary-700">real</span>.
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
