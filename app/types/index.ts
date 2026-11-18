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
  slug: string
  cargo: string
  empresa: string
  inicio: string
  fim: string | null
  resumo: string
  tecnologias: IconeChave[]
  competencias?: string[]
  relato: EstudoDeCaso
}

export interface EstudoDeCaso {
  contexto: string
  problematica: string
  solucao: string
  atividades: string[]
  resultados: string[]
}

export interface Certificacao {
  curso: string
  instituicao: string
  periodo: string
}

export interface Formacao {
  curso: string
  instituicao: string
  inicio: string
  fim: string
}

export type CategoriaProjeto = 'Fullstack' | 'Front-end' | 'Back-end' | 'Dados' | 'UI/UX'
export type StatusProjeto = 'Concluído' | 'Em andamento' | 'Em produção' | 'Em breve' | 'Projeto Privado'
export type OrigemProjeto = 'hackathon' | 'academico' | 'pessoal'

export interface Projeto {
  slug: string
  origem: OrigemProjeto
  categoria: CategoriaProjeto
  status: StatusProjeto
  nome: string
  descricao: string
  resumo: string
  contexto: string
  participacao: string
  relato: EstudoDeCaso
  tecnologias: IconeChave[]
  termosBusca?: string[]
  demoUrl?: string
  prototipoUrl?: string
  githubUrl?: string
  imagem?: string
  capa?: {
    tipo: 'api' | 'dados' | 'marte'
    rotulo: string
    titulo: string[]
    subtitulo: string
  }
}

export interface LinkExterno {
  nome: string
  url: string
}

export interface Contatos {
  links: LinkExterno[]
  creditos: string
}
