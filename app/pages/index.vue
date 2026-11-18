<script setup lang="ts">
const siteUrl = useRuntimeConfig().public.siteUrl
useSeoMeta({ title: 'Portfólio', description: 'Conheça os projetos e a trajetória de Stephany Oliveira: desenvolvimento fullstack, UI/UX e dados. Veja as atividades, soluções e resultados de cada experiência.', ogTitle: 'Stephany Oliveira | Desenvolvimento, design e dados', ogDescription: 'Projetos de hackathons, projetos pessoais e experiências em desenvolvimento, UI/UX e dados.', ogType: 'website' })
useHead({ link: [{ rel: 'canonical', href: siteUrl }] })
</script>
<template>
  <section class="hero" aria-label="Apresentação"><HeroTexto /><HeroFoto /></section>
  <Projetos />
  <section id="trajetoria" class="section career" aria-labelledby="titulo-trajetoria"><div class="section-heading"><div><p class="eyebrow">O que venho construindo</p><h2 id="titulo-trajetoria">Trajetória</h2></div><p class="section-caption">Conheça as atividades e os resultados<br>de cada experiência.</p></div><div class="career-grid"><Experiencias /><Formacoes /></div></section>
  <Habilidades />
  <Contato />
</template>
