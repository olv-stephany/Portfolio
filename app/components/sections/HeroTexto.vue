<script setup lang="ts">
import { perfil } from '~/mocks/perfil'
</script>
<template>
  <div class="hero-copy">
    <h1><span class="hero-name">{{ perfil.nome }}<span class="brand-dot">.</span></span><span class="hero-profession">Desenvolvedora de software Fullstack</span></h1>
    <p class="hero-role">UI/UX designer com experiência em análise de dados.</p>
    <p class="hero-bio">Crio soluções tecnológicas para web e automações de processos com Python, conectando interfaces, APIs e dados.</p>
    <div class="hero-actions">
      <NuxtLink to="/#projetos" class="button button--primary">Ver projetos <IconeInterface nome="baixo" /></NuxtLink>
      <a :href="perfil.curriculoUrl" download="Stephany_Oliveira_Curriculo.pdf" class="button">Baixar currículo <IconeInterface nome="externo" /></a>
      <a href="https://www.linkedin.com/in/stephany-oliveira01" target="_blank" rel="noopener noreferrer" class="button">LinkedIn <IconeInterface nome="externo" /></a>
    </div>
  </div>
</template>
