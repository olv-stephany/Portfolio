import type { IconeChave } from '~/lib/icones'

export type { IconeChave }

export interface Perfil {
  nome: string
  subtitulo: string
  foto?: string
  curriculoUrl: string
  email: string
}

export interface GrupoHabilidades {
  titulo: string
  icones: IconeChave[]
}

export interface Experiencia {
  cargo: string
  empresa: string
  inicio: string
  fim: string | null
}

export interface Formacao {
  curso: string
  instituicao: string
  inicio: string
  fim: string
}

export type CategoriaProjeto = 'Fullstack' | 'Front-end' | 'Back-end' | 'Dados' | 'UI/UX'
export type StatusProjeto = 'Concluído' | 'Em andamento' | 'Em breve' | 'Projeto Privado'

export interface Projeto {
  categoria: CategoriaProjeto
  status: StatusProjeto
  nome: string
  descricao: string
  tecnologias: IconeChave[]
  demoUrl?: string
  githubUrl?: string
  imagem?: string
}

export interface LinkExterno {
  nome: string
  url: string
}

export interface Contatos {
  links: LinkExterno[]
  creditos: string
}
