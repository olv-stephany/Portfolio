<script setup lang="ts">
import type { IconeChave } from '~/types'
import { icones } from '~/lib/icones'
defineProps<{ chaves: IconeChave[]; compacta?: boolean }>()
</script>
<template>
  <ul :class="['tecnologias', { 'tecnologias--compactas': compacta }]" aria-label="Tecnologias">
    <li v-for="chave in chaves" :key="chave">
      <IconeTile :chave="chave" :tamanho="22" :raio="4" :escala-icone="0.88" fundo-padrao="#181b22" aria-hidden="true" />
      <span>{{ icones[chave].nome }}</span>
    </li>
  </ul>
</template>
