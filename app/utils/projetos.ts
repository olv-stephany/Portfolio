import type { OrigemProjeto, Projeto } from '../types/index'

export function normalizarBusca(valor: string): string {
  return valor.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').replace(/[^a-z0-9]/g, '')
}

export function filtrarProjetos(projetos: readonly Projeto[], busca: string, origem: OrigemProjeto | 'todos', nomesTecnologias: Readonly<Record<string, string>>): Projeto[] {
  const termo = normalizarBusca(busca)
  return projetos.filter((projeto) => {
    if (origem !== 'todos' && projeto.origem !== origem) return false
    if (!termo) return true
    const termos = [projeto.nome, ...projeto.tecnologias.map((chave) => nomesTecnologias[chave] ?? chave), ...(projeto.termosBusca ?? [])]
    return termos.some((valor) => normalizarBusca(valor).includes(termo))
  })
}
