<script setup lang="ts">
import { experiencias } from '~/mocks/experiencias'

const POR_PAGINA = 2

const pagina = ref(0)

const totalPaginas = computed(() => Math.ceil(experiencias.length / POR_PAGINA))

const visiveis = computed(() =>
  experiencias.slice(pagina.value * POR_PAGINA, (pagina.value + 1) * POR_PAGINA),
)

function proxima() {
  pagina.value = (pagina.value + 1) % totalPaginas.value
}
</script>

<template>
  <section aria-labelledby="titulo-experiencias" class="xl:mb-[23px]">
    <h2 id="titulo-experiencias" class="text-[22px] leading-[1.25] font-bold xl:text-[24px]">Experiências</h2>

    <ul class="mt-2 min-h-[87px]" aria-live="polite">
      <li v-for="(exp, i) in visiveis" :key="`${exp.empresa}-${exp.cargo}`" :class="i > 0 && 'mt-[11px]'">
        <h3 class="text-[16px] leading-5 font-medium">{{ exp.cargo }}</h3>
        <p class="text-[12px] leading-[18px] font-medium">
          {{ exp.empresa }} - ( {{ exp.inicio }} - {{ exp.fim ?? 'Momento' }})
        </p>
      </li>
    </ul>

    <BotaoContorno
      v-if="totalPaginas > 1"
      aria-label="Ver próximas experiências"
      class="mt-3 w-16 xl:absolute xl:top-[calc(100%+12px)] xl:right-[1px] xl:mt-0"
      @click="proxima"
    >
      <svg width="8" height="13" viewBox="0 0 8 13" fill="none" aria-hidden="true">
        <path d="M1 1l5.5 5.5L1 12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </BotaoContorno>
  </section>
</template>
