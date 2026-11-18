<script setup lang="ts">
import { habilidades } from '~/mocks/habilidades'
const titulos = ['Linguagens', 'Desenvolvimento web', 'Bancos de dados', 'Dados e automação', 'Design e ferramentas']
</script>
<template>
  <section class="section skills" aria-labelledby="titulo-habilidades">
    <div class="section-heading"><div><p class="eyebrow">Minha caixa de ferramentas</p><h2 id="titulo-habilidades">Habilidades</h2></div><p class="section-caption">Tecnologias que conectam<br>desenvolvimento, design e dados.</p></div>
    <div class="skills-grid"><section v-for="(grupo, indice) in habilidades" :key="grupo.titulo" class="skill-group"><h3>{{ titulos[indice] ?? grupo.titulo }}</h3><Tecnologias :chaves="grupo.icones" /></section></div>
  </section>
</template>
