<script setup lang="ts">
import { habilidades } from '~/mocks/habilidades'

interface LayoutLinha {
  tamanho: number
  espaco: number
  topo: number
  titulo: number
}

const layouts: LayoutLinha[] = [
  { tamanho: 24, espaco: 5, topo: 7, titulo: 7 },
  { tamanho: 24, espaco: 7, topo: 3, titulo: 7 },
  { tamanho: 24, espaco: 7, topo: 2, titulo: 2 },
  { tamanho: 20, espaco: 8, topo: 5, titulo: 4 },
  { tamanho: 20, espaco: 5, topo: 0, titulo: 3 },
]
const padrao: LayoutLinha = { tamanho: 24, espaco: 7, topo: 6, titulo: 4 }

const layoutDe = (indice: number) => layouts[indice] ?? padrao

const TAMANHO_MOBILE = 32

function variaveis(indice: number) {
  const l = layoutDe(indice)
  return {
    '--topo-d': `${l.topo}px`,
    '--titulo-d': `${l.titulo}px`,
    '--gap-d': `${l.espaco}px`,
    '--k-m': TAMANHO_MOBILE / l.tamanho,
  }
}
</script>

<template>
  <section aria-labelledby="titulo-habilidades">
    <h2 id="titulo-habilidades" class="text-[28px] leading-[1.25] font-bold md:text-[32px] xl:mt-px xl:ml-px">
      Habilidades
    </h2>

    <div v-for="(grupo, i) in habilidades" :key="grupo.titulo" :style="variaveis(i)" class="mt-4 xl:mt-(--topo-d)">
      <h3 class="text-xs leading-4 xl:text-[10px]">{{ grupo.titulo }}</h3>

      <ul class="mt-2 flex flex-wrap gap-2 [--k:var(--k-m)] xl:mt-(--titulo-d) xl:ml-px xl:gap-(--gap-d) xl:[--k:1]">
        <li v-for="chave in grupo.icones" :key="chave">
          <IconeTile :chave="chave" :tamanho="layoutDe(i).tamanho" />
        </li>
      </ul>
    </div>
  </section>
</template>
