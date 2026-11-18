import { robotsTxt } from '#shared/seo'

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return robotsTxt(useRuntimeConfig(event).public.siteUrl)
})
