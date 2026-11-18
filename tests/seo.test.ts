import assert from 'node:assert/strict'
import test from 'node:test'
import { projetos } from '../app/mocks/projetos.ts'
import { experiencias } from '../app/mocks/experiencias.ts'
import { absoluteUrl, normalizeSiteUrl, publicPaths, sitemapXml, robotsTxt, jsonLd, homeGraph, projectGraph, projectSeo, experienceSeo, HOME_SEO, SITE_URL } from '../shared/seo.ts'

test('URLs canônicas normalizam o domínio e descartam parâmetros e fragmentos', () => {
  assert.equal(normalizeSiteUrl(`${SITE_URL}/?utm_source=teste#projetos`), SITE_URL)
  assert.equal(absoluteUrl(`${SITE_URL}/`, '/projetos/searchaddress?utm_source=teste#contexto'), `${SITE_URL}/projetos/searchaddress`)
  assert.throws(() => absoluteUrl(SITE_URL, '//outro-dominio.example/'))
  assert.throws(() => normalizeSiteUrl('javascript:alert(1)'))
})

test('sitemap inclui todas as páginas públicas sem filtros, PDFs ou datas inventadas', () => {
  const paths = publicPaths(projetos, experiencias)
  const xml = sitemapXml(SITE_URL, [...paths, '/'])
  assert.equal(paths.length, 9)
  assert.equal((xml.match(/<url>/g) ?? []).length, 9)
  for (const path of paths) assert.ok(xml.includes(`<loc>${absoluteUrl(SITE_URL, path)}</loc>`))
  assert.doesNotMatch(xml, /lastmod|changefreq|priority|\.pdf|localhost/)
})

test('sitemap escapa caracteres reservados de XML', () => {
  assert.ok(sitemapXml(SITE_URL, ["/projetos/d'agua"]).includes('d&apos;agua'))
})

test('robots permite rastreamento e aponta para o sitemap canônico', () => {
  const robots = robotsTxt(`${SITE_URL}/`)
  assert.ok(robots.includes('Allow: /'))
  assert.ok(robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`))
  assert.doesNotMatch(robots, /Disallow: \/|localhost/)
})

test('JSON-LD preserva os dados sem permitir encerrar a tag de script', () => {
  const value = { text: '</script><script>alert(1)</script>', extra: 'A & B\u2028C' }
  const serialized = jsonLd(value)
  assert.doesNotMatch(serialized, /<script|<\/script/)
  assert.deepEqual(JSON.parse(serialized), value)
})

test('perfil estruturado identifica a pessoa e os projetos efetivamente apresentados', () => {
  const graph = homeGraph(SITE_URL, projetos)
  const profile = graph.find(entity => entity['@type'] === 'ProfilePage')
  const person = graph.find(entity => entity['@type'] === 'Person')
  const list = graph.find(entity => entity['@type'] === 'ItemList')
  assert.ok(profile && person && list)
  assert.deepEqual(profile.mainEntity, { '@id': person['@id'] })
  assert.equal(list.itemListElement?.length, projetos.length)
  assert.ok(person.sameAs?.includes('https://github.com/olv-stephany'))
})

test('projetos em equipe registram contribuição sem atribuir autoria exclusiva', () => {
  const hackathon = projetos.find(project => project.origem === 'hackathon')!
  const individual = projetos.find(project => project.origem === 'pessoal')!
  const groupWork = projectGraph(SITE_URL, hackathon).find(entity => entity['@type'] === 'CreativeWork')!
  const sourceCode = projectGraph(SITE_URL, individual).find(entity => entity['@type'] === 'SoftwareSourceCode')!
  assert.ok(groupWork.contributor)
  assert.equal(groupWork.creator, undefined)
  assert.equal(sourceCode.codeRepository, individual.githubUrl)
})

test('cada página tem título e descrição próprios alinhados a seu conteúdo', () => {
  const pages = [HOME_SEO, ...projetos.map(projectSeo), ...experiencias.map(experienceSeo)]
  assert.equal(new Set(pages.map(page => page.title)).size, 9)
  assert.equal(new Set(pages.map(page => page.description)).size, 9)
  assert.match(HOME_SEO.title, /software e automações/)
  for (const page of pages) assert.ok(page.description.length > 70)
})
