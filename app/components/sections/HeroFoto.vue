<script setup lang="ts">
import fotoPadrao from '~/assets/perfil.png'
import { perfil } from '~/mocks/perfil'
</script>
<template>
  <figure class="hero-art">
    <img :src="perfil.foto ?? fotoPadrao" alt="Ilustração de uma pessoa abraçando um gato" width="218" height="218" fetchpriority="high" />
    <figcaption>Curiosidade, código<br>e criatividade.</figcaption>
  </figure>
</template>
