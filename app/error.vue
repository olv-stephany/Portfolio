<script setup lang="ts">
import type { NuxtError } from '#app'
const props = defineProps<{ error: NuxtError }>()
useHead({ title: () => props.error.statusCode === 404 ? 'Página não encontrada' : 'Não foi possível abrir esta página' })
</script>
<template><div class="site"><main class="site-container error-page"><p class="eyebrow">{{ error.statusCode }}</p><h1>{{ error.statusCode === 404 ? 'Esta página não foi encontrada.' : 'Não foi possível abrir esta página.' }}</h1><p>Você pode voltar ao portfólio para conhecer meus projetos e minha trajetória.</p><button type="button" class="button button--primary" @click="clearError({ redirect: '/' })">Voltar ao portfólio <IconeInterface nome="voltar" /></button></main></div></template>
