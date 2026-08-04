import { computed, ref, useTemplateRef } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export function useScrollReveal(refName: string) {
  const target = useTemplateRef<HTMLElement>(refName)
  const isVisible = ref(false)

  useIntersectionObserver(
    target,
    ([entry]) => {
      if (entry?.isIntersecting) isVisible.value = true
    },
    { threshold: 0.5 },
  )

  return { isVisible }
}
