<script setup lang="ts">
import { experiencias } from '~/mocks/experiencias'
</script>
<template>
  <section aria-labelledby="titulo-experiencias" class="experiences">
    <h3 id="titulo-experiencias" class="subtitle">Experiência</h3>
    <ol>
      <li v-for="experiencia in experiencias" :key="experiencia.slug">
        <NuxtLink :to="`/experiencias/${experiencia.slug}`" target="_blank" rel="noopener noreferrer" class="experience-link" :aria-label="`Conhecer minha experiência na ${experiencia.empresa} (abre em nova aba)`">
          <div><h4>{{ experiencia.cargo }}</h4><p class="experience-company">{{ experiencia.empresa }}</p><p class="experience-date">{{ experiencia.inicio }} — {{ experiencia.fim ?? 'Atual' }}</p><p class="experience-summary">{{ experiencia.resumo }}</p><span class="experience-action">Atividades e resultados <IconeInterface nome="externo" /></span></div>
        </NuxtLink>
      </li>
    </ol>
  </section>
</template>
