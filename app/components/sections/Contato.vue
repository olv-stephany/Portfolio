<script setup lang="ts">
import { perfil } from '~/mocks/perfil'
import { contatos } from '~/mocks/contatos'
</script>
<template>
  <section id="contato" class="section contact" aria-labelledby="titulo-contato">
    <div><p class="eyebrow">Vamos conversar</p><h2 id="titulo-contato">Uma ideia começa<br>com uma conversa<span>.</span></h2><a :href="`mailto:${perfil.email}`" class="contact-email">{{ perfil.email }} <IconeInterface nome="externo" /></a></div>
    <div class="contact-actions"><a :href="`mailto:${perfil.email}`" class="button button--primary">Enviar e-mail <IconeInterface nome="externo" /></a><div><a v-for="link in contatos.links" :key="link.nome" :href="link.url" target="_blank" rel="noopener noreferrer" class="text-link">{{ link.nome }} <IconeInterface nome="externo" /></a></div></div>
  </section>
</template>
