<script setup lang="ts">
import { perfil } from '~/mocks/perfil'
import { contatos } from '~/mocks/contatos'
</script>
<template>
  <section id="contato" class="section contact" aria-labelledby="titulo-contato">
    <div><h2 id="titulo-contato">Vamos conversar<span>.</span></h2><p class="contact-intro">Projetos, parcerias e oportunidades profissionais.</p><p class="hero-location">Fortaleza, Ceará · Brasil</p><a :href="`mailto:${perfil.email}`" class="contact-email">{{ perfil.email }} <IconeInterface nome="externo" /></a></div>
    <div class="contact-actions"><a :href="`mailto:${perfil.email}`" class="button button--primary">Enviar e-mail <IconeInterface nome="externo" /></a><div><a v-for="link in contatos.links" :key="link.nome" :href="link.url" target="_blank" rel="noopener noreferrer" class="text-link">{{ link.nome }} <IconeInterface nome="externo" /></a></div></div>
  </section>
</template>
