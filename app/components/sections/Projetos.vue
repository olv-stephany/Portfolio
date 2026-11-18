<script setup lang="ts">
import type { OrigemProjeto } from '~/types'
import { projetos } from '~/mocks/projetos'
import { icones } from '~/lib/icones'
import { filtrarProjetos } from '~/utils/projetos'

const busca = useState('projetos-busca', () => '')
const origem = useState<OrigemProjeto | 'todos'>('projetos-origem', () => 'todos')
const campoBusca = useTemplateRef<HTMLInputElement>('campoBusca')
const origens: { valor: OrigemProjeto | 'todos'; nome: string }[] = [
  { valor: 'todos', nome: 'Todos' }, { valor: 'hackathon', nome: 'Hackathons' },
  { valor: 'academico', nome: 'Acadêmicos' }, { valor: 'pessoal', nome: 'Pessoais' },
]
const nomesTecnologias = Object.fromEntries(Object.entries(icones).map(([chave, icone]) => [chave, icone.nome]))
const filtrados = computed(() => filtrarProjetos(projetos, busca.value, origem.value, nomesTecnologias))
const grupos = computed(() => origens.filter(item => item.valor !== 'todos').map(item => ({ ...item, projetos: filtrados.value.filter(projeto => projeto.origem === item.valor) })).filter(item => item.projetos.length))
const temProjetosAcademicos = projetos.some(projeto => projeto.origem === 'academico')
const filtroAtivo = computed(() => Boolean(busca.value.trim()) || origem.value !== 'todos')
function quantidade(valor: OrigemProjeto | 'todos') { return valor === 'todos' ? projetos.length : projetos.filter(projeto => projeto.origem === valor).length }
function limpar(apenasBusca = false) {
  busca.value = ''
  if (!apenasBusca) origem.value = 'todos'
  nextTick(() => campoBusca.value?.focus())
}
</script>
<template>
  <section id="projetos" class="section projects" aria-labelledby="titulo-projetos">
    <div class="section-heading"><div><p class="eyebrow">Da ideia à construção</p><h2 id="titulo-projetos">Projetos</h2></div><p class="section-caption">Diferentes contextos.<br>A mesma vontade de resolver.</p></div>
    <div class="project-toolbar">
      <label class="project-search"><IconeInterface nome="busca" /><span class="sr-only">Buscar projetos por nome ou tecnologia</span><input ref="campoBusca" v-model="busca" type="search" placeholder="Nome do projeto ou tecnologia" autocomplete="off" /><button v-if="busca" type="button" aria-label="Limpar busca" @click="limpar(true)"><IconeInterface nome="fechar" /></button></label>
      <p class="results-count" role="status" aria-live="polite">{{ filtrados.length }} {{ filtrados.length === 1 ? 'projeto' : 'projetos' }}{{ filtroAtivo ? (filtrados.length === 1 ? ' encontrado' : ' encontrados') : ' para explorar' }}</p>
    </div>
    <div class="project-filters" role="group" aria-label="Filtrar projetos por origem">
      <button v-for="item in origens" :key="item.valor" type="button" :aria-pressed="origem === item.valor" @click="origem = item.valor">{{ item.nome }} <span>{{ quantidade(item.valor) }}</span></button>
    </div>
    <div v-if="filtrados.length" class="project-groups">
      <section v-for="grupo in grupos" :key="grupo.valor" class="project-group" :aria-label="grupo.nome">
        <div class="category-heading"><h3>{{ grupo.nome }}</h3><span>{{ grupo.projetos.length }} {{ grupo.projetos.length === 1 ? 'projeto' : 'projetos' }}</span></div>
        <div :class="['project-grid', { 'project-grid--three': grupo.projetos.length === 3 }]">
          <article v-for="projeto in grupo.projetos" :key="projeto.slug" class="project-card">
            <NuxtLink :to="`/projetos/${projeto.slug}`" target="_blank" rel="noopener noreferrer" class="project-cover-link" :aria-label="`Conhecer ${projeto.nome} (abre em nova aba)`"><CapaProjeto :projeto="projeto" /></NuxtLink>
            <div class="project-meta"><span>{{ projeto.categoria }}</span><span>{{ projeto.contexto }}</span><span v-if="projeto.status !== 'Concluído'" class="project-status">{{ projeto.status }}</span></div>
            <h4>{{ projeto.nome }}</h4><p class="project-brief">{{ projeto.resumo }}</p>
            <Tecnologias :chaves="projeto.tecnologias" compacta />
            <NuxtLink :to="`/projetos/${projeto.slug}`" target="_blank" rel="noopener noreferrer" class="project-case-link" :aria-label="`Ver atividades e resultados de ${projeto.nome} (abre em nova aba)`">Ver projeto <IconeInterface nome="externo" /></NuxtLink>
          </article>
        </div>
      </section>
      <div v-if="origem === 'todos' && !busca.trim() && !temProjetosAcademicos" class="academic-note"><h3>Acadêmicos</h3><p>Os trabalhos da graduação terão seu espaço por aqui.</p></div>
    </div>
    <div v-else class="empty-state">
      <h3>{{ origem === 'academico' && !busca.trim() ? 'Projetos acadêmicos' : 'Nenhum projeto encontrado.' }}</h3>
      <p>{{ origem === 'academico' && !busca.trim() ? 'Nenhum trabalho da graduação adicionado por enquanto.' : 'Tente outro nome ou tecnologia, ou altere a origem selecionada.' }}</p>
      <button class="button" type="button" @click="limpar()">{{ origem === 'academico' && !busca.trim() ? 'Explorar outros projetos' : 'Limpar filtros' }}</button>
    </div>
  </section>
</template>
