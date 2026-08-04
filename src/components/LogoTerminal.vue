<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: '40px',
  },
})
</script>

<template>
  <svg
    :style="{ height: size, width: 'auto' }"
    viewBox="0 0 670 180"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
  >
    <title>Terminal-style logo for Emran</title>
    <rect
      x="180"
      y="60"
      width="320"
      height="60"
      rx="8"
      fill="none"
      stroke="var(--ui-text-muted)"
      stroke-width="1"
    />
    <circle cx="200" cy="75" r="4" fill="var(--color-red-500)" />
    <circle cx="214" cy="75" r="4" fill="var(--color-yellow-500)" />
    <circle cx="228" cy="75" r="4" fill="var(--color-green-500)" />
    <text
      x="200"
      y="105"
      font-family="var(--font-mono)"
      font-size="20"
      font-weight="500"
      fill="var(--ui-text-toned)"
    >
      @emran
    </text>
    <text
      x="270"
      y="105"
      font-family="var(--font-mono)"
      font-size="20"
      font-weight="400"
      fill="var(--ui-text-muted)"
    >
      :~$
    </text>
    <rect x="310" y="88" width="11" height="20" fill="var(--ui-text-muted)">
      <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
    </rect>
  </svg>
</template>
