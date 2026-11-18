interface SeoProject {
  slug: string
  nome: string
  categoria: string
  origem: string
  descricao: string
  resumo: string
  githubUrl?: string
  imagem?: string
}

interface SeoExperience {
  slug: string
  empresa: string
  cargo: string
  resumo: string
}

export const SITE_URL = 'https://www.stephanyportfolio.work'
export const SITE_NAME = 'Stephany Oliveira'
export const SOCIAL_IMAGE = '/images/og/portfolio.png'
export const PROFILE_DESCRIPTION = 'Desenvolvedora de software Fullstack com experiência em aplicações web, soluções tecnológicas, integração de APIs e automações de processos com Python.'
export const PROFILE_LINKS = ['https://www.linkedin.com/in/stephany-oliveira01', 'https://github.com/olv-stephany']

export const HOME_SEO = {
  title: 'Desenvolvedora de software e automações',
  description: 'Stephany Oliveira, desenvolvedora de software Fullstack em Fortaleza. Soluções tecnológicas, aplicações web, APIs e automações de processos com Python.',
}

const projectMetadata: Record<string, { title: string; description: string }> = {
  'umbrella-weather': { title: 'Umbrella W.I — Front-end e dados da NASA', description: 'Painel web com Next.js, Tailwind CSS e dados climáticos da NASA. Conheça os requisitos, a solução de UI/UX e o desenvolvimento de Stephany Oliveira.' },
  'hacarthon-sicar': { title: 'HaCARthon/SICAR — UI/UX para cadastro rural', description: 'Protótipo mobile de cadastro rural com mapa e demarcação por GPS. Veja a problemática, os fluxos de UI/UX e as entregas de Stephany Oliveira no HaCARthon.' },
  'surviving-in-mars': { title: 'Surviving in Mars — UI/UX e dados da NASA', description: 'UI/UX, organização de dados científicos da NASA e curadoria sonora para um simulador educacional. Conheça a participação de Stephany Oliveira no projeto.' },
  'vibraniumcore-api': { title: 'VibraniumCore-API — API REST com Node.js', description: 'API REST de investimentos com Node.js, autenticação JWT, Prisma e PostgreSQL. Veja a solução, as regras de negócio e o código de Stephany Oliveira.' },
  searchaddress: { title: 'SearchAddress — Automação de dados com Python', description: 'Automação com Python e GeoPandas para associar coordenadas a municípios e estados usando dados do IBGE, sem APIs pagas. Conheça o pipeline SearchAddress.' },
}

const experienceMetadata: Record<string, { title: string; description: string }> = {
  'oportuniza-ce': { title: 'Desenvolvimento Front-end na Oportuniza CE', description: 'Interfaces com Next.js e TypeScript, revisão de código e mentoria técnica. Conheça as atividades e as entregas de Stephany Oliveira na Oportuniza CE.' },
  'pgs-tech': { title: 'Automações e software Fullstack na PGS Tech', description: 'Aplicação web Fullstack, automações com Python e Power Automate, APIs REST e dashboards Power BI. Veja as soluções e entregas de Stephany Oliveira na PGS Tech.' },
  'alares-internet': { title: 'Automação de processos com Python na Alares', description: 'Scripts em Python, integração de APIs REST e tratamento de dados JSON para reduzir tarefas manuais. Conheça a experiência de Stephany Oliveira na Alares.' },
}

export function projectSeo(project: SeoProject) {
  return projectMetadata[project.slug] ?? { title: `${project.nome} — ${project.categoria}`, description: project.resumo }
}

export function experienceSeo(experience: SeoExperience) {
  return experienceMetadata[experience.slug] ?? { title: `${experience.cargo} na ${experience.empresa}`, description: experience.resumo }
}

export function normalizeSiteUrl(value: string): string {
  const url = new URL(value)
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) throw new Error('Configure uma URL pública HTTP ou HTTPS para o portfólio.')
  return url.origin
}

export function absoluteUrl(base: string, path = '/'): string {
  const url = new URL(path, `${normalizeSiteUrl(base)}/`)
  if (url.origin !== normalizeSiteUrl(base)) throw new Error('A URL deve pertencer ao domínio do portfólio.')
  url.search = ''
  url.hash = ''
  return url.href
}

export function publicPaths(projects: readonly SeoProject[], experiences: readonly SeoExperience[]): string[] {
  return ['/', ...projects.map(project => `/projetos/${project.slug}`), ...experiences.map(experience => `/experiencias/${experience.slug}`)]
}

export function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character]!)
}

export function sitemapXml(base: string, paths: readonly string[]): string {
  const urls = [...new Set(paths.map(path => absoluteUrl(base, path)))]
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n')}\n</urlset>\n`
}

export function robotsTxt(base: string): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl(base, '/sitemap.xml')}\n`
}

export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')
}

function person(base: string) {
  return {
    '@type': 'Person', '@id': `${absoluteUrl(base)}#stephany`, name: SITE_NAME,
    alternateName: 'Stephany Oliveira da Silva', url: absoluteUrl(base), jobTitle: 'Desenvolvedora de software Fullstack',
    description: PROFILE_DESCRIPTION, sameAs: PROFILE_LINKS,
    knowsAbout: ['Desenvolvimento de software', 'Soluções tecnológicas', 'Automação de processos', 'Aplicações web', 'APIs REST', 'Python', 'UI/UX', 'Análise de dados'],
    homeLocation: { '@type': 'City', name: 'Fortaleza' },
  }
}

function website(base: string) {
  return { '@type': 'WebSite', '@id': `${absoluteUrl(base)}#website`, url: absoluteUrl(base), name: `${SITE_NAME} — Portfólio`, inLanguage: 'pt-BR', publisher: { '@id': `${absoluteUrl(base)}#stephany` } }
}

function breadcrumbs(base: string, path: string, name: string, section: 'projetos' | 'trajetoria') {
  return {
    '@type': 'BreadcrumbList', '@id': `${absoluteUrl(base, path)}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Portfólio', item: absoluteUrl(base) },
      { '@type': 'ListItem', position: 2, name: section === 'projetos' ? 'Projetos' : 'Trajetória', item: `${absoluteUrl(base)}#${section}` },
      { '@type': 'ListItem', position: 3, name, item: absoluteUrl(base, path) },
    ],
  }
}

export function homeGraph(base: string, projects: readonly SeoProject[]) {
  const root = absoluteUrl(base)
  return [person(base), website(base), {
    '@type': 'ProfilePage', '@id': `${root}#perfil`, url: root, name: `${SITE_NAME} — ${HOME_SEO.title}`,
    description: HOME_SEO.description, inLanguage: 'pt-BR', mainEntity: { '@id': `${root}#stephany` },
    isPartOf: { '@id': `${root}#website` }, primaryImageOfPage: { '@type': 'ImageObject', url: absoluteUrl(base, SOCIAL_IMAGE), width: 1200, height: 630 },
  }, {
    '@type': 'ItemList', '@id': `${root}#projetos`, name: 'Projetos de desenvolvimento, design e dados',
    itemListElement: projects.map((project, index) => ({ '@type': 'ListItem', position: index + 1, name: project.nome, url: absoluteUrl(base, `/projetos/${project.slug}`) })),
  }]
}

export function projectGraph(base: string, project: SeoProject) {
  const path = `/projetos/${project.slug}`
  const url = absoluteUrl(base, path)
  const work = {
    '@type': project.githubUrl ? 'SoftwareSourceCode' : 'CreativeWork', '@id': `${url}#projeto`, name: project.nome,
    description: project.descricao, url, inLanguage: 'pt-BR', genre: project.categoria,
    ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
    ...(project.imagem ? { image: absoluteUrl(base, project.imagem) } : {}),
    [project.origem === 'pessoal' ? 'creator' : 'contributor']: { '@id': `${absoluteUrl(base)}#stephany` },
  }
  return [person(base), website(base), work, {
    '@type': 'WebPage', '@id': `${url}#pagina`, url, name: projectSeo(project).title, description: projectSeo(project).description,
    inLanguage: 'pt-BR', about: { '@id': `${url}#projeto` }, isPartOf: { '@id': `${absoluteUrl(base)}#website` }, breadcrumb: { '@id': `${url}#breadcrumb` },
  }, breadcrumbs(base, path, project.nome, 'projetos')]
}

export function experienceGraph(base: string, experience: SeoExperience) {
  const path = `/experiencias/${experience.slug}`
  const url = absoluteUrl(base, path)
  return [person(base), website(base), {
    '@type': 'Article', '@id': `${url}#relato`, url, headline: `${experience.cargo} — ${experience.empresa}`,
    description: experienceSeo(experience).description, inLanguage: 'pt-BR', articleSection: 'Experiência profissional',
    author: { '@id': `${absoluteUrl(base)}#stephany` }, about: { '@type': 'Organization', name: experience.empresa.replace(' (voluntário)', '') },
    mainEntityOfPage: { '@id': `${url}#pagina` },
  }, {
    '@type': 'WebPage', '@id': `${url}#pagina`, url, name: experienceSeo(experience).title,
    description: experienceSeo(experience).description, inLanguage: 'pt-BR', mainEntity: { '@id': `${url}#relato` },
    isPartOf: { '@id': `${absoluteUrl(base)}#website` }, breadcrumb: { '@id': `${url}#breadcrumb` },
  }, breadcrumbs(base, path, experience.empresa, 'trajetoria')]
}
