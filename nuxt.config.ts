import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: [{ path: '~/components', pathPrefix: false }],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'Stephany | Portfólio',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' }],
    },
  },
})
