import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@vercel/analytics'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: { public: { siteUrl: 'https://www.stephanyportfolio.work' } },
  components: [{ path: '~/components', pathPrefix: false }],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'Stephany | Portfólio',
      titleTemplate: '%s | Stephany Oliveira',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' }],
    },
  },
})
