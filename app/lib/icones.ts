import {
  siArcgis,
  siDocker,
  siJavascript,
  siNodedotjs,
  siPrisma,
  siTrello,
  siTypescript,
} from 'simple-icons'

import csharpSvg from '~/assets/icones/csharp.svg?raw'
import figmaSvg from '~/assets/icones/figma.svg?raw'
import gitSvg from '~/assets/icones/git.svg?raw'
import githubSvg from '~/assets/icones/github.svg?raw'
import javaSvg from '~/assets/icones/java.svg?raw'
import mongodbSvg from '~/assets/icones/mongodb.svg?raw'
import nestjsSvg from '~/assets/icones/nestjs.svg?raw'
import nextjsSvg from '~/assets/icones/nextjs.svg?raw'
import pandasSvg from '~/assets/icones/pandas.svg?raw'
import playwrightSvg from '~/assets/icones/playwright.svg?raw'
import postgresqlSvg from '~/assets/icones/postgresql.svg?raw'
import powerBiSvg from '~/assets/icones/power-bi.svg?raw'
import pythonSvg from '~/assets/icones/python.svg?raw'
import vueSvg from '~/assets/icones/vue.svg?raw'

export interface Icone {
  nome: string
  svg: string
  fundo: string
  cor?: string
  escala: number
}

const CREME = '#f4f2ed'
const SEM_FUNDO = 'transparent'

function simples(
  icone: { title: string; svg: string; hex: string },
  fundo: string,
  cor: string = `#${icone.hex}`,
  escala = 1,
): Icone {
  return { nome: icone.title, svg: icone.svg, fundo, cor, escala }
}

function colorido(nome: string, svg: string, fundo = SEM_FUNDO, escala = 1): Icone {
  return { nome, svg, fundo, escala }
}

const powerAutomateSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80"><polygon fill="#2f8cf5" points="0,0 63,0 100,36 67,80 0,80 30,38"/><polygon fill="#1c58d6" points="0,0 63,0 30,36"/><polygon fill="#6cb4fb" points="63,0 100,36 67,80 34,80"/></svg>`

export const icones = {
  javascript: simples(siJavascript, '#000000', '#f0db4f'),
  nodejs: simples(siNodedotjs, '#ffffff', '#339933', 0.9),
  typescript: simples(siTypescript, '#ffffff', '#007acc'),
  python: colorido('Python', pythonSvg, CREME, 0.72),
  java: colorido('Java', javaSvg, CREME, 0.72),
  csharp: colorido('C#', csharpSvg, SEM_FUNDO, 1),

  nestjs: colorido('NestJS', nestjsSvg, CREME, 0.72),
  nextjs: colorido('Next.js', nextjsSvg, SEM_FUNDO, 0.95),
  vue: colorido('Vue.js', vueSvg, SEM_FUNDO, 0.95),

  postgresql: colorido('PostgreSQL', postgresqlSvg, CREME, 0.72),
  mongodb: colorido('MongoDB', mongodbSvg, '#023430', 0.8),
  prisma: simples(siPrisma, '#677eeb', '#ffffff', 0.62),

  powerbi: colorido('Power BI', powerBiSvg, SEM_FUNDO, 0.9),
  powerautomate: colorido('Power Automate', powerAutomateSvg),
  pandas: colorido('pandas', pandasSvg),
  playwright: colorido('Playwright', playwrightSvg),

  figma: colorido('Figma', figmaSvg, CREME, 0.75),
  github: colorido('GitHub', githubSvg, '#ffffff', 0.8),
  git: colorido('Git', gitSvg),
  trello: simples(siTrello, '#ffffff', '#2583fe'),
  arcgis: simples(siArcgis, SEM_FUNDO),
  docker: simples(siDocker, '#1e83cf', '#ffffff', 0.7),
} satisfies Record<string, Icone>

export type IconeChave = keyof typeof icones
