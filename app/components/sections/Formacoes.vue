<script setup lang="ts">
import { formacoes } from '~/mocks/formacoes'
import { certificacoes } from '~/mocks/certificacoes'
</script>
<template>
  <aside class="education" aria-labelledby="titulo-formacoes">
    <h3 id="titulo-formacoes" class="subtitle">Formação</h3>
    <div v-for="formacao in formacoes" :key="formacao.curso"><p class="study-date">Desde {{ formacao.inicio }}</p><h4>{{ formacao.curso }}</h4><p class="institution">{{ formacao.instituicao }}</p><p class="study-date study-end">Conclusão: {{ formacao.fim }}</p></div>
    <details class="certifications"><summary>Certificações e formação complementar <span>{{ certificacoes.length }}</span></summary><ul><li v-for="certificacao in certificacoes" :key="certificacao.curso"><h4>{{ certificacao.curso }}</h4><p>{{ certificacao.instituicao }} · {{ certificacao.periodo }}</p></li></ul></details>
    <a href="https://www.linkedin.com/in/stephany-oliveira01" target="_blank" rel="noopener noreferrer" class="text-link">Minha trajetória no LinkedIn <IconeInterface nome="externo" /></a>
  </aside>
</template>
