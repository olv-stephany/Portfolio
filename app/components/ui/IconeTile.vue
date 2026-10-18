<script setup lang="ts">
import { type IconeChave, icones } from '~/lib/icones'

const props = withDefaults(
  defineProps<{
    chave: IconeChave
    tamanho?: number
    largura?: number
    raio?: number
    escalaIcone?: number
    fundoPadrao?: string
  }>(),
  { tamanho: 24, raio: 5, escalaIcone: 1, fundoPadrao: 'transparent' },
)

const icone = computed(() => icones[props.chave])
const fundo = computed(() => (icone.value.fundo === 'transparent' ? props.fundoPadrao : icone.value.fundo))
const lado = computed(() => `${icone.value.escala * props.escalaIcone * 100}%`)
</script>

<template>
  <span
    role="img"
    :aria-label="icone.nome"
    :title="icone.nome"
    class="inline-flex shrink-0 items-center justify-center overflow-hidden"
    :style="{
      width: `calc(${largura ?? tamanho}px * var(--k, 1))`,
      height: `calc(${tamanho}px * var(--k, 1))`,
      borderRadius: `${raio}px`,
      backgroundColor: fundo,
      color: icone.cor ?? '#000000',
    }"
  >
    <span
      class="block [&>svg]:block [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-current"
      :style="{ width: lado, height: lado }"
      v-html="icone.svg"
    />
  </span>
</template>
