import tailwindcss from '@tailwindcss/vite'
import { SITE_URL, publicPaths } from './shared/seo'
import { projetos } from './app/mocks/projetos'
import { experiencias } from './app/mocks/experiencias'

export default defineNuxtConfig({
  modules: ['@vercel/analytics'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: { seoPaths: publicPaths(projetos, experiencias), public: { siteUrl: SITE_URL } },
  nitro: { prerender: { routes: [...publicPaths(projetos, experiencias), '/sitemap.xml', '/robots.txt'], crawlLinks: false } },
  components: [{ path: '~/components', pathPrefix: false }],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'Desenvolvedora de software e automações',
      titleTemplate: '%s | Stephany Oliveira',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' }],
    },
  },
})
