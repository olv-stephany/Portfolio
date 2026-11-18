<script setup lang="ts">
import { contatos } from '~/mocks/contatos'
</script>
<template><footer class="site-footer"><p>{{ contatos.creditos }}</p><NuxtLink to="/#conteudo">Voltar ao início <IconeInterface nome="externo" /></NuxtLink></footer></template>
