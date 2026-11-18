<script setup lang="ts">
import { projetos } from '~/mocks/projetos'
import { HOME_SEO, homeGraph } from '#shared/seo'
const siteUrl = useRuntimeConfig().public.siteUrl
usePortfolioSeo({ path: '/', ...HOME_SEO, graph: homeGraph(siteUrl, projetos) })
</script>
<template>
  <section class="hero" aria-label="Apresentação"><HeroTexto /><HeroFoto /></section>
  <Projetos />
  <section id="trajetoria" class="section career" aria-labelledby="titulo-trajetoria"><div class="section-heading"><h2 id="titulo-trajetoria">Trajetória</h2></div><div class="career-grid"><Experiencias /><Formacoes /></div></section>
  <Habilidades />
  <Contato />
</template>
