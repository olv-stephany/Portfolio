import { sitemapXml } from '#shared/seo'

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  const config = useRuntimeConfig(event)
  return sitemapXml(config.public.siteUrl, config.seoPaths)
})
