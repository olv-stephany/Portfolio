<script setup lang="ts">
import { experiencias } from '~/mocks/experiencias'

definePageMeta({ key: route => route.path })
const route = useRoute()
const experiencia = experiencias.find(item => item.slug === route.params.slug)
if (!experiencia) throw createError({ statusCode: 404, statusMessage: 'Not Found', message: 'Experiência não encontrada' })
const siteUrl = useRuntimeConfig().public.siteUrl
useSeoMeta({ title: `${experiencia.empresa} — ${experiencia.cargo}`, description: experiencia.resumo, ogTitle: `${experiencia.empresa} | Stephany Oliveira`, ogDescription: experiencia.resumo, ogType: 'article' })
useHead({ link: [{ rel: 'canonical', href: `${siteUrl}/experiencias/${experiencia.slug}` }] })
</script>
<template>
  <article class="case-page">
    <NuxtLink to="/#trajetoria" class="text-link case-back"><IconeInterface nome="voltar" />Voltar à trajetória</NuxtLink>
    <header class="case-header"><p class="eyebrow">Experiência profissional</p><h1>{{ experiencia.empresa }}</h1><p class="case-role">{{ experiencia.cargo }}</p><p class="case-period">{{ experiencia.inicio }} — {{ experiencia.fim ?? 'Atual' }}</p><p class="case-intro">{{ experiencia.resumo }}</p></header>
    <div class="case-layout"><EstudoCaso :relato="experiencia.relato" /><aside class="case-sidebar"><NavegacaoRelato /><section aria-labelledby="titulo-ferramentas"><h2 id="titulo-ferramentas">Ferramentas</h2><Tecnologias :chaves="experiencia.tecnologias" /></section><section v-if="experiencia.competencias?.length" aria-labelledby="titulo-frentes"><h2 id="titulo-frentes">Frentes de atuação</h2><ul class="case-tags"><li v-for="competencia in experiencia.competencias" :key="competencia">{{ competencia }}</li></ul></section><a href="/curriculo.pdf" download="Stephany_Oliveira_Curriculo.pdf" class="button">Baixar currículo <IconeInterface nome="externo" /></a></aside></div>
    <div class="case-bottom"><NuxtLink to="/#trajetoria" class="button"><IconeInterface nome="voltar" />Outras experiências</NuxtLink><NuxtLink to="/#contato" class="text-link">Vamos conversar <IconeInterface nome="externo" /></NuxtLink></div>
  </article>
</template>
