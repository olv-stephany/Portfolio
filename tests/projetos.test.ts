import assert from 'node:assert/strict'
import test from 'node:test'
import { projetos } from '../app/mocks/projetos.ts'
import { filtrarProjetos } from '../app/utils/projetos.ts'

const tecnologias = { nextjs: 'Next.js', tailwindcss: 'Tailwind CSS', figma: 'Figma', nodejs: 'Node.js', prisma: 'Prisma', postgresql: 'PostgreSQL', python: 'Python', pandas: 'Pandas', html: 'HTML', css: 'CSS', javascript: 'JavaScript' }

test('pesquisa nomes sem diferenciar caixa, espaços ou pontuação', () => {
  assert.deepEqual(filtrarProjetos(projetos, '  VIBRANIUM core api ', 'todos', tecnologias).map(p => p.slug), ['vibraniumcore-api'])
})
test('pesquisa a tecnologia pelo nome apresentado na interface', () => {
  assert.deepEqual(filtrarProjetos(projetos, 'next js', 'todos', tecnologias).map(p => p.slug), ['umbrella-weather'])
  assert.deepEqual(filtrarProjetos(projetos, 'PYTHON', 'todos', tecnologias).map(p => p.slug), ['searchaddress'])
})
test('combina a origem com a pesquisa e não mistura os grupos', () => {
  assert.deepEqual(filtrarProjetos(projetos, 'node.js', 'hackathon', tecnologias).map(p => p.slug), ['surviving-in-mars'])
  assert.deepEqual(filtrarProjetos(projetos, 'python', 'hackathon', tecnologias), [])
})
test('encontra nomes alternativos e tecnologias relacionadas sem acentos', () => {
  assert.deepEqual(filtrarProjetos(projetos, 'cartograficos', 'todos', tecnologias).map(p => p.slug), ['hacarthon-sicar'])
  assert.deepEqual(filtrarProjetos(projetos, 'geopandas', 'todos', tecnologias).map(p => p.slug), ['searchaddress'])
})
test('busca vazia apresenta a galeria e acadêmicos permanece vazio', () => {
  assert.equal(filtrarProjetos(projetos, '  ', 'todos', tecnologias).length, 5)
  assert.deepEqual(filtrarProjetos(projetos, '', 'academico', tecnologias), [])
})
test('termo sem correspondência não altera os projetos originais', () => {
  assert.deepEqual(filtrarProjetos(projetos, 'tecnologia-inexistente', 'todos', tecnologias), [])
  assert.equal(projetos.length, 5)
})
