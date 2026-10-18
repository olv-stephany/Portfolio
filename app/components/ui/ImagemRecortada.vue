<script setup lang="ts">
import imagemPadrao from '~/assets/projeto-padrao.png'
import imagemPadraoCelular from '~/assets/projeto-padrao-celular.jpg'

const props = defineProps<{
  src?: string
  alt?: string
}>()

const estilo = { '--mascara': `url("${imagemPadrao}")` }

const classes =
  'block aspect-[16/10] w-full rounded-2xl object-cover md:aspect-[1282/456] md:rounded-none md:[-webkit-mask-image:var(--mascara)] md:[-webkit-mask-repeat:no-repeat] md:[-webkit-mask-size:100%_100%] md:[mask-image:var(--mascara)] md:[mask-repeat:no-repeat] md:[mask-size:100%_100%] xl:h-[456px] xl:w-[1282px]'
</script>

<template>
  <picture v-if="!props.src" class="contents">
    <source media="(min-width: 768px)" :srcset="imagemPadrao" />
    <img :src="imagemPadraoCelular" :alt="alt ?? ''" :style="estilo" :class="classes" />
  </picture>
  <img v-else :src="props.src" :alt="alt ?? ''" :style="estilo" :class="classes" />
</template>
