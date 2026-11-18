<script setup lang="ts">
import { perfil } from '~/mocks/perfil'
</script>
<template>
  <div class="hero-copy">
    <p class="eyebrow">Olá, eu sou a</p>
    <h1>{{ perfil.nome }}<span>.</span></h1>
    <p class="hero-role">Dev Fullstack, UI/UX designer<br>e Analista de Dados.</p>
    <p class="hero-bio">Sou curiosa por natureza. Conecto desenvolvimento, design e dados para construir soluções que fazem sentido para quem usa.</p>
    <div class="hero-actions">
      <NuxtLink to="/#projetos" class="button button--primary">Ver projetos <IconeInterface nome="baixo" /></NuxtLink>
      <a :href="perfil.curriculoUrl" download="Stephany_Oliveira_Curriculo.pdf" class="button">Baixar currículo <IconeInterface nome="externo" /></a>
    </div>
  </div>
</template>
