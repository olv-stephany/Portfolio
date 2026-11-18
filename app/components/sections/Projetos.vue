<script setup lang="ts">
import { projetos } from '~/mocks/projetos'
import { icones } from '~/lib/icones'
import { filtrarProjetos } from '~/utils/projetos'

const busca = useState('projetos-busca', () => '')
const campoBusca = useTemplateRef<HTMLInputElement>('campoBusca')
const mostrarBusca = projetos.length > 10
const nomesTecnologias = Object.fromEntries(Object.entries(icones).map(([chave, icone]) => [chave, icone.nome]))
const filtrados = computed(() => mostrarBusca ? filtrarProjetos(projetos, busca.value, 'todos', nomesTecnologias) : projetos)

function limparBusca() {
  busca.value = ''
  nextTick(() => campoBusca.value?.focus())
}
</script>

<template>
  <section id="projetos" class="section projects" aria-labelledby="titulo-projetos">
    <div class="section-heading"><h2 id="titulo-projetos">Projetos</h2></div>
    <div v-if="mostrarBusca" class="project-toolbar">
      <label class="project-search">
        <IconeInterface nome="busca" />
        <span class="sr-only">Buscar projetos por nome ou tecnologia</span>
        <input ref="campoBusca" v-model="busca" type="search" placeholder="Nome do projeto ou tecnologia" autocomplete="off" />
        <button v-if="busca" type="button" aria-label="Limpar busca" @click="limparBusca"><IconeInterface nome="fechar" /></button>
      </label>
      <p class="sr-only" role="status" aria-live="polite">{{ filtrados.length }} projetos encontrados</p>
    </div>
    <div v-if="filtrados.length" class="project-grid">
      <article v-for="projeto in filtrados" :key="projeto.slug" class="project-card">
        <NuxtLink :to="`/projetos/${projeto.slug}`" class="project-cover-link" :aria-label="`Conhecer ${projeto.nome}`">
          <CapaProjeto :projeto="projeto" />
        </NuxtLink>
        <div class="project-meta">
          <span>{{ projeto.categoria }}</span>
          <span v-if="projeto.contexto !== 'Projeto pessoal'">{{ projeto.contexto }}</span>
          <span v-if="projeto.status !== 'Concluído'" class="project-status">{{ projeto.status }}</span>
        </div>
        <h3>{{ projeto.nome }}</h3>
        <p class="project-brief">{{ projeto.resumo }}</p>
        <Tecnologias :chaves="projeto.tecnologias" compacta />
        <div v-if="projeto.githubUrl || projeto.demoUrl || projeto.prototipoUrl" class="project-shortcuts" aria-label="Links externos do projeto">
          <a v-if="projeto.githubUrl" :href="projeto.githubUrl" target="_blank" rel="noopener noreferrer" :aria-label="`Código de ${projeto.nome} no GitHub (nova aba)`">GitHub <IconeInterface nome="externo" /></a>
          <a v-if="projeto.demoUrl" :href="projeto.demoUrl" target="_blank" rel="noopener noreferrer" :aria-label="`Abrir ${projeto.nome} online (nova aba)`">Ver online <IconeInterface nome="externo" /></a>
          <a v-if="projeto.prototipoUrl" :href="projeto.prototipoUrl" target="_blank" rel="noopener noreferrer" :aria-label="`Protótipo de ${projeto.nome} no Figma (nova aba)`">Protótipo <IconeInterface nome="externo" /></a>
        </div>
        <NuxtLink :to="`/projetos/${projeto.slug}`" class="project-case-link" :aria-label="`Ver atividades e resultados de ${projeto.nome}`">Ver projeto <IconeInterface nome="seguir" /></NuxtLink>
      </article>
    </div>
    <div v-else class="empty-state"><h3>Nenhum projeto encontrado.</h3><p>Tente outro nome ou tecnologia.</p><button class="button" type="button" @click="limparBusca">Limpar busca</button></div>
  </section>
</template>
