<script setup lang="ts">
import type { EstudoDeCaso } from '~/types'
defineProps<{ relato: EstudoDeCaso }>()
</script>
<template>
  <div class="case-narrative">
    <section id="contexto" aria-labelledby="titulo-contexto"><h2 id="titulo-contexto">Contexto</h2><p>{{ relato.contexto }}</p></section>
    <section id="problematica" aria-labelledby="titulo-problematica"><h2 id="titulo-problematica">Problemática</h2><p>{{ relato.problematica }}</p></section>
    <section id="solucao" aria-labelledby="titulo-solucao"><h2 id="titulo-solucao">Solução</h2><p>{{ relato.solucao }}</p></section>
    <section id="atividades" aria-labelledby="titulo-atividades"><h2 id="titulo-atividades">Atividades e entregas</h2><ul class="case-activities"><li v-for="atividade in relato.atividades" :key="atividade">{{ atividade }}</li></ul></section>
    <section id="resultados" aria-labelledby="titulo-resultados" class="case-results"><h2 id="titulo-resultados">Resultados</h2><ul><li v-for="resultado in relato.resultados" :key="resultado"><IconeInterface nome="check" /><span>{{ resultado }}</span></li></ul></section>
  </div>
</template>
