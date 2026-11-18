# SEO e publicação

O portfólio apresenta a atuação de Stephany Oliveira em desenvolvimento de
software Fullstack, soluções tecnológicas e automações de processos. Os termos
aparecem em conteúdo visível e contextualizado, sem listas de palavras-chave
ocultas ou alegações de resultados que não foram comprovados.

## Implementação

- `shared/seo.ts` reúne títulos, descrições, URLs e os dados estruturados.
- `usePortfolioSeo` gera uma canonical por página, Open Graph, Twitter Cards e JSON-LD.
- A página inicial identifica a pessoa, o site, o perfil e a lista real de projetos.
- Os relatos de experiência têm autoria e contexto profissional; os projetos
  distinguem autoria individual e contribuição em equipe.
- Breadcrumbs identificam a posição de cada relato no portfólio.
- O sitemap inclui a página inicial, os projetos e as experiências a partir dos
  mesmos dados usados pelas páginas. Não inclui filtros, PDFs ou páginas de erro.
- O robots.txt permite o rastreamento e aponta para o sitemap canônico.
- As páginas de erro retornam HTTP 404 e usam `noindex`.
- O build pré-renderiza as páginas públicas, `/sitemap.xml` e `/robots.txt`.
- A imagem padrão de compartilhamento fica em `public/images/og/portfolio.png`.
  As capas SVG têm versões PNG para as plataformas de compartilhamento.

As orientações seguem o [Google Search Essentials](https://developers.google.com/search/docs/essentials)
e a documentação de [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
Dados estruturados ajudam a descrever o conteúdo; sua presença não garante um
formato especial nos resultados da busca.

## Domínio de produção

O domínio padrão é `https://www.stephanyportfolio.work`. Se ele mudar, configure
`NUXT_PUBLIC_SITE_URL` **antes de executar o build**. As páginas pré-renderizadas
contêm o domínio configurado nessa etapa. Não use localhost, URLs de preview ou
parâmetros de campanha como domínio canônico.

Se outro domínio ou o endereço da Vercel servir uma cópia pública, configure o
redirecionamento permanente para o domínio escolhido na plataforma de hospedagem.
O código não altera DNS, contas ou redirecionamentos da hospedagem.

## Conferência após publicar

1. Abra a página inicial, um projeto e uma experiência diretamente por suas URLs.
2. Confirme que `/sitemap.xml` contém as nove URLs públicas atuais no domínio correto.
3. Confirme que `/robots.txt` aponta para esse sitemap e permite o rastreamento.
4. Verifique a propriedade do domínio no Google Search Console e envie o sitemap.
5. Use a Inspeção de URL do Search Console para conferir a canonical e a indexação.
6. Valide o JSON-LD no Rich Results Test e no Schema Markup Validator. Nem todos
   os tipos de schema correspondem a um resultado especial do Google.
7. Acompanhe consultas, impressões e cliques no Search Console, especialmente os
   termos ligados a desenvolvimento de software, automações e integrações.
8. Avalie a página publicada no PageSpeed Insights para observar o desempenho no
   ambiente real, inclusive no celular.

Essas ações dependem da publicação e do acesso à propriedade no Search Console.
Este trabalho não publica a branch nem verifica a propriedade do domínio.
O Google determina o rastreamento, a indexação e a classificação; nenhuma posição
nas buscas é garantida por alterações de código.
