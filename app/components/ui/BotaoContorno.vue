<script setup lang="ts">

defineProps<{
  href?: string
  download?: boolean
}>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :download="download || undefined"
    :type="href ? undefined : 'button'"
    class="inline-flex h-10 cursor-pointer items-center justify-center rounded-[4px] border border-white text-xs font-semibold text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:h-[20px] xl:text-[11px]"
  >
    <slot />
  </component>
</template>
