<script setup lang="ts">
import { projetos } from '~/mocks/projetos'

definePageMeta({ key: route => route.path })
const route = useRoute()
const projeto = projetos.find(item => item.slug === route.params.slug)
if (!projeto) throw createError({ statusCode: 404, statusMessage: 'Not Found', message: 'Projeto não encontrado' })
const origem = { hackathon: 'Hackathon', academico: 'Projeto acadêmico', pessoal: 'Projeto pessoal' }[projeto.origem]
const siteUrl = useRuntimeConfig().public.siteUrl
useSeoMeta({ title: projeto.nome, description: projeto.resumo, ogTitle: `${projeto.nome} | Stephany Oliveira`, ogDescription: projeto.resumo, ogType: 'article' })
useHead({ link: [{ rel: 'canonical', href: `${siteUrl}/projetos/${projeto.slug}` }] })
</script>
<template>
  <article class="case-page">
    <NuxtLink to="/#projetos" class="text-link case-back"><IconeInterface nome="voltar" />Voltar aos projetos</NuxtLink>
    <header class="case-header case-header--project"><div><p class="eyebrow">{{ origem }} · {{ projeto.categoria }}</p><h1>{{ projeto.nome }}</h1><p class="case-period">{{ projeto.contexto }} · {{ projeto.status }}</p><p class="case-intro">{{ projeto.descricao }}</p><div class="case-external-links"><a v-if="projeto.prototipoUrl" :href="projeto.prototipoUrl" target="_blank" rel="noopener noreferrer" class="button">Ver protótipo <IconeInterface nome="externo" /></a><a v-if="projeto.demoUrl" :href="projeto.demoUrl" target="_blank" rel="noopener noreferrer" class="button">Ver projeto online <IconeInterface nome="externo" /></a><a v-if="projeto.githubUrl" :href="projeto.githubUrl" target="_blank" rel="noopener noreferrer" class="button">GitHub <IconeInterface nome="externo" /></a></div></div><CapaProjeto :projeto="projeto" prioridade /></header>
    <div class="case-layout"><EstudoCaso :relato="projeto.relato" /><aside class="case-sidebar"><NavegacaoRelato /><section aria-labelledby="titulo-participacao"><h2 id="titulo-participacao">Minha participação</h2><p>{{ projeto.participacao }}</p></section><section aria-labelledby="titulo-tecnologias"><h2 id="titulo-tecnologias">Tecnologias</h2><Tecnologias :chaves="projeto.tecnologias" /></section></aside></div>
    <div class="case-bottom"><NuxtLink to="/#projetos" class="button"><IconeInterface nome="voltar" />Explorar outros projetos</NuxtLink><NuxtLink to="/#contato" class="text-link">Vamos conversar <IconeInterface nome="externo" /></NuxtLink></div>
  </article>
</template>
