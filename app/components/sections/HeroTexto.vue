<script setup lang="ts">
import { descricao } from '~/mocks/descricao'
import { perfil } from '~/mocks/perfil'
</script>

<template>
  <div>
    <h1 class="text-[28px] leading-[1.25] font-bold md:text-[32px] xl:mt-[2px] xl:-ml-[5px] xl:text-[36px]">
      Olá, eu sou a {{ perfil.nome }}
    </h1>
    <p class="mt-1 text-[15px]">{{ perfil.subtitulo }}</p>
    <p class="mt-3 text-[15px]">{{ descricao }}</p>
  </div>
</template>
