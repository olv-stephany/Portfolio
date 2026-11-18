<script setup lang="ts">
import type { Projeto } from '~/types'
withDefaults(defineProps<{ projeto: Projeto; prioridade?: boolean }>(), { prioridade: false })
</script>
<template>
  <div v-if="projeto.imagem" class="project-cover">
    <img :src="projeto.imagem" :alt="`Apresentação visual de ${projeto.nome}`" width="1280" height="720" :loading="prioridade ? 'eager' : 'lazy'" />
  </div>
  <div v-else :class="['project-cover', 'project-cover--type', `project-cover--${projeto.capa?.tipo ?? 'api'}`]" role="img" :aria-label="`Capa do projeto ${projeto.nome}`">
    <span class="cover-label">{{ projeto.capa?.rotulo ?? projeto.categoria }}</span>
    <span class="cover-name"><span v-for="linha in projeto.capa?.titulo ?? [projeto.nome]" :key="linha">{{ linha }}</span></span>
    <span v-if="projeto.capa" class="cover-caption">{{ projeto.capa.subtitulo }}</span>
  </div>
</template>
