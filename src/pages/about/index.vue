<script setup lang="ts"></script>

<template>
  <UPage>
    <UPageBody>
      <UPageSection title="About me" :ui="{ container: 'py-10 sm:py-18 lg:py-25' }">
        <template #description>
          Full-stack developer with a DevOps mindset. I build with
          <span class="font-bold italic text-primary-700">Go</span> and
          <span class="font-bold italic text-primary-700">Vue</span>, deploy on
          <span class="font-bold italic text-primary-700">Kubernetes</span> and
          <span class="font-bold italic text-primary-700">AWS</span> (sometimes on GCP), and live in
          the terminal running Linux. I care about clean code and infrastructure that just
          works.</template
        >
      </UPageSection>
      <USeparator />
      <UPageSection title="Experience" :ui="{ container: 'py-10 sm:py-18 lg:py-25' }">
        <template #description
          >I started out as an Electronic Engineer, working close to the hardware — writing Assembly
          to control circuits and understand systems at their lowest level. That hands-on curiosity
          for how things actually work pulled me toward software, and I never looked back.
          <br />
          What began as debugging registers and instruction sets grew into a passion for building
          full applications — from backend logic in Go to interactive interfaces in Vue, all the way
          through to the infrastructure that runs them. My engineering roots still shape how I code
          today: methodical, detail-oriented, and always curious about what's happening under the
          hood.</template
        >
      </UPageSection>
    </UPageBody>
  </UPage>
</template>

<style scoped></style>
