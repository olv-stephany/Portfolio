# Portfólio

Portfólio profissional desenvolvido para apresentar minha experiência como
Desenvolvedora Fullstack, UI/UX Designer e Analista de Dados.

O projeto reúne informações sobre minha trajetória profissional, formação,
habilidades técnicas e principais projetos em desenvolvimento web, design,
back-end e análise de dados.

## Sobre o projeto

O portfólio foi construído com Nuxt e Vue, com uma interface responsiva
inspirada em um layout editorial. A página apresenta:

- apresentação profissional e formas de contato;
- experiências profissionais com relatos completos em novas abas;
- formação acadêmica;
- grupos de habilidades e tecnologias;
- galeria separada por hackathons, projetos acadêmicos e pessoais;
- pesquisa por nome, tecnologia e nomes alternativos dos projetos;
- páginas de projetos com contexto, problemática, solução, atividades e resultados;
- navegação responsiva, currículo para download e links de contato.

## Desenvolvimento

Requer Node.js 22.18 ou superior e as dependências instaladas com `npm install`.

```sh
npm run dev
npm run test
npm run typecheck
npm run build
```

## Conteúdo

Os relatos ficam em `app/mocks/experiencias.ts` e `app/mocks/projetos.ts`.
Cada item tem um `slug` estável para sua página, um resumo para a página inicial
e um `relato` com contexto, problemática, solução, atividades e resultados.
Os resultados são qualitativos e baseados no material profissional fornecido.
Ao adicionar conteúdo, preserve a distinção entre entregas, protótipos e resultados observados.

Em projetos, `origem` aceita `hackathon`, `academico` ou `pessoal`; `categoria`
representa a área de atuação. `tecnologias` e `termosBusca` alimentam a pesquisa.
A categoria acadêmica já está disponível e permanece vazia até receber projetos.

As páginas `/experiencias/[slug]` e `/projetos/[slug]` podem ser acessadas
diretamente e retornam 404 para endereços inexistentes. Os cartões abrem os
relatos em novas abas. O currículo de download está em `public/curriculo.pdf`.

`NUXT_PUBLIC_SITE_URL` permite configurar a URL usada nas tags canônicas.

## Versão em produção

Acesse o portfólio publicado:

[stephanyportfolio.work](https://www.stephanyportfolio.work/)


## Contato

- E-mail: [stephanyodev@outlook.com](mailto:stephanyodev@outlook.com)
- GitHub: [github.com/olv-stephany](https://github.com/olv-stephany)
