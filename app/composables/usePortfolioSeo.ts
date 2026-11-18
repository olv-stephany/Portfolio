import { absoluteUrl, jsonLd, SITE_NAME, SOCIAL_IMAGE } from '#shared/seo'

interface PortfolioSeo {
  path: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
  graph?: unknown[]
}

export function usePortfolioSeo(options: PortfolioSeo) {
  const base = useRuntimeConfig().public.siteUrl
  const canonical = absoluteUrl(base, options.path)
  const image = absoluteUrl(base, options.image ?? SOCIAL_IMAGE)
  const imageAlt = options.imageAlt ?? 'Stephany Oliveira — Desenvolvimento de software Fullstack e automações'
  const title = `${options.title} | ${SITE_NAME}`

  useSeoMeta({
    title: options.title,
    description: options.description,
    robots: 'index, follow, max-image-preview:large',
    ogTitle: title,
    ogDescription: options.description,
    ogUrl: canonical,
    ogType: options.type ?? 'website',
    ogSiteName: `${SITE_NAME} — Portfólio`,
    ogLocale: 'pt_BR',
    ogImage: image,
    ogImageAlt: imageAlt,
    ...(!options.image ? { ogImageWidth: 1200, ogImageHeight: 630 } : {}),
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: options.description,
    twitterImage: image,
    twitterImageAlt: imageAlt,
  })

  useHead({
    link: [{ key: 'canonical', rel: 'canonical', href: canonical }],
    ...(options.graph?.length ? { script: [{ key: 'portfolio-jsonld', type: 'application/ld+json', innerHTML: jsonLd({ '@context': 'https://schema.org', '@graph': options.graph }) }] } : {}),
  })
}
