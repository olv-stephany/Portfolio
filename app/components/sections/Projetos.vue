<script setup lang="ts">
import { projetos } from '~/mocks/projetos'

const indice = ref(0)
const projeto = computed(() => projetos[indice.value])

function proximo() {
  indice.value = (indice.value + 1) % projetos.length
}

const botaoContorno =
  'flex h-10 min-w-[110px] flex-1 items-center justify-center rounded-[8px] border-2 border-white text-base text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-[140px] md:flex-none md:text-lg xl:h-[40px] xl:w-[200px] xl:min-w-0 xl:text-[20px]'
</script>

<template>
  <section aria-labelledby="titulo-projetos" class="relative mt-14 xl:mt-[87px] xl:h-[735px] xl:w-[1282px]">
    <div class="md:relative xl:contents">
      <h2
        id="titulo-projetos"
        class="z-10 mb-4 flex h-11 items-center justify-center rounded-[13px] bg-azul-projetos text-[24px] font-bold md:absolute md:top-0 md:right-0 md:mb-0 md:h-9 md:w-[29%] md:text-[20px] xl:top-[15px] xl:right-auto xl:left-[908px] xl:h-[45px] xl:w-[374px] xl:text-[30px]"
      >
        Projetos
      </h2>

      <div v-if="projeto" class="relative xl:contents">
        <ImagemRecortada
          :src="projeto.imagem"
          :alt="`Imagem do projeto ${projeto.nome}`"
          class="xl:absolute xl:top-0 xl:left-0"
        />

        <div class="absolute top-3 left-3 flex gap-2 md:top-4 md:left-4 xl:contents">
          <span
            id="projeto-categoria"
            class="flex h-8 items-center justify-center rounded-[10px] bg-azul-tag px-4 text-sm font-semibold text-black md:h-9 md:min-w-[150px] md:text-base xl:absolute xl:top-[18px] xl:left-[19px] xl:h-[45px] xl:w-[282px] xl:min-w-0 xl:px-0 xl:text-[24px]"
          >
            {{ projeto.categoria }}
          </span>
          <span
            id="projeto-status"
            class="flex h-8 items-center justify-center rounded-[14px] bg-azul-status/74 px-3 text-xs font-medium md:h-9 md:text-sm xl:absolute xl:top-[18px] xl:left-[323px] xl:h-[45px] xl:w-[152px] xl:px-0 xl:text-[16px]"
          >
            {{ projeto.status }}
          </span>
        </div>
      </div>
    </div>

    <template v-if="projeto">
      <div class="mt-6 grid gap-6 md:mt-8 md:grid-cols-[1fr_auto] md:gap-x-10 xl:contents">
        <div class="xl:absolute xl:top-[420px] xl:left-0 xl:w-[727px]">
          <h3
            id="projeto-nome"
            class="text-[26px] leading-[1.25] font-bold break-words md:text-[32px] xl:text-[40px]"
          >
            {{ projeto.nome }}
          </h3>
          <p
            id="projeto-descricao"
            class="mt-2 text-base leading-7 md:text-xl xl:w-full xl:text-[15px] xl:leading-8"
          >
            {{ projeto.descricao }}
          </p>
        </div>

        <div class="xl:contents">
          <h3
            id="titulo-tecnologias"
            class="text-[24px] leading-[1.25] font-semibold md:text-[28px] xl:absolute xl:top-[476px] xl:left-[765px] xl:text-[30px]"
          >
            Tecnologias
          </h3>
          <ul class="mt-3 flex flex-wrap gap-3 [--k:0.85] xl:absolute xl:top-[530px] xl:left-[765px] xl:mt-0 xl:gap-[19px] xl:[--k:1]">
            <li v-for="chave in projeto.tecnologias" :key="chave">
              <IconeTile :chave="chave" :tamanho="40" :largura="55" :raio="8" :escala-icone="0.62" fundo-padrao="#1f1f1f" />
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between xl:contents">
        <div class="flex flex-wrap gap-3 xl:absolute xl:top-[690px] xl:left-[6px] xl:flex-nowrap xl:gap-[16px]">
          <a v-if="projeto.demoUrl" :href="projeto.demoUrl" target="_blank" rel="noopener noreferrer" :class="botaoContorno">
            Ver Demo
          </a>
          <a v-if="projeto.githubUrl" :href="projeto.githubUrl" target="_blank" rel="noopener noreferrer" :class="botaoContorno">
            GitHub
          </a>
        </div>

        <button
          v-if="projetos.length > 1"
          type="button"
          class="h-10 w-full cursor-pointer rounded-[8px] bg-azul-proximo text-base font-semibold transition-colors hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-[150px] xl:absolute xl:top-[690px] xl:left-[1126px] xl:h-[40px] xl:w-[150px] xl:text-[18px]"
          @click="proximo"
        >
          Próximo
        </button>
      </div>
    </template>
  </section>
</template>
