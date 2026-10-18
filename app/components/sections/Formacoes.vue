<script setup lang="ts">
import { formacoes } from '~/mocks/formacoes'
</script>

<template>
  <section aria-labelledby="titulo-formacoes" class="xl:mb-[23px] xl:min-h-[125px]">
    <h2 id="titulo-formacoes" class="text-[22px] leading-[1.25] font-bold xl:-ml-px xl:text-[24px]">Formações</h2>

    <ul class="mt-2 xl:mt-[5px]">
      <li v-for="(f, i) in formacoes" :key="`${f.instituicao}-${f.curso}`" :class="i > 0 && 'mt-[11px]'">
        <h3 class="text-[13px] leading-[18px] font-semibold xl:text-[12px]">{{ f.curso }}</h3>
        <p class="mt-[2px] text-xs leading-4 font-medium xl:text-[11px]">{{ f.instituicao }}</p>
        <p class="mt-px text-xs leading-4 font-medium xl:text-[11px]">{{ f.inicio }} - {{ f.fim }}</p>
      </li>
    </ul>
  </section>
</template>
