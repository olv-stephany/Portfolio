import type { Experiencia } from '~/types'

export const experiencias: Experiencia[] = [
  {
    slug: 'oportuniza-ce', cargo: 'Desenvolvedora Front-end', empresa: 'Oportuniza CE (voluntário)', inicio: 'Set/2026', fim: null,
    resumo: 'Interfaces web, revisão de código e mentoria para uma plataforma de oportunidades.',
    tecnologias: ['nextjs', 'typescript', 'git', 'github'],
    competencias: ['Code review', 'Mentoria técnica', 'Trabalho em equipe'],
    relato: {
      contexto: 'Atuação voluntária no desenvolvimento de uma plataforma que conecta seu público a oportunidades acadêmicas e profissionais, em colaboração com outras pessoas do time.',
      problematica: 'Como ampliar o acesso a oportunidades por meio de interfaces web e manter o desenvolvimento organizado em uma equipe com diferentes níveis de familiaridade com as ferramentas?',
      solucao: 'Desenvolvi interfaces em Next.js e TypeScript e participei da organização do trabalho técnico: estrutura do repositório, versionamento, revisão de pull requests e orientação dos integrantes do time.',
      atividades: [
        'Desenvolvimento de interfaces front-end em Next.js e TypeScript para a plataforma Oportuniza CE.',
        'Organização do versionamento e da estrutura do repositório no GitHub para facilitar o acompanhamento das contribuições.',
        'Revisão de pull requests com atenção à qualidade, à padronização e às boas práticas de clean code.',
        'Mentoria de integrantes do time em Git, GitHub e Next.js durante o onboarding técnico.',
      ],
      resultados: [
        'Interfaces desenvolvidas para ampliar o acesso às oportunidades acadêmicas e profissionais apresentadas pela plataforma.',
        'Contribuições mais organizadas e práticas de revisão de código compartilhadas com a equipe.',
        'Maior autonomia técnica do time por meio da mentoria e do apoio ao onboarding.',
      ],
    },
  },
  {
    slug: 'pgs-tech', cargo: 'Analista de Dados', empresa: 'PGS Tech', inicio: 'Mar/2026', fim: null,
    resumo: 'Desenvolvimento fullstack, pipelines de dados e automações para apoiar a operação.',
    tecnologias: ['python', 'powerbi', 'figma', 'cypress', 'playwright', 'powerautomate'],
    competencias: ['APIs RESTful', 'Pipelines de dados', 'Levantamento de requisitos', 'Homologação'],
    relato: {
      contexto: 'Atuação em sistemas internos, dados e automação para apoiar projetistas de telecomunicações e facilitar o acesso da equipe às informações necessárias para suas entregas.',
      problematica: 'Como melhorar a rastreabilidade dos arquivos e das entregas dos projetistas, disponibilizar indicadores atualizados e reduzir o trabalho manual em processos recorrentes?',
      solucao: 'Construí uma aplicação web fullstack com integração de APIs e consulta ao histórico de arquivos. Desenvolvi pipelines em Python conectados a Excel e Power BI, dashboards, testes automatizados e automações de processos, além de colaborar com requisitos, prototipação e homologação.',
      atividades: [
        'Desenvolvimento do back-end e do front-end de um sistema web de apoio a projetistas de telecomunicações, com APIs RESTful e consulta ao histórico de arquivos.',
        'Automação da coleta de dados de APIs externas com pipelines em Python e padronização da disponibilização das informações em Excel e Power BI.',
        'Desenvolvimento de dashboards executivos no Power BI integrados aos pipelines de dados.',
        'Levantamento de requisitos, prototipação de interfaces no Figma e apoio à homologação de melhorias dos sistemas internos.',
        'Implementação de testes automatizados com Cypress e Playwright.',
        'Criação de automações de processos com Power Automate para tarefas repetitivas.',
      ],
      resultados: [
        'Maior rastreabilidade das entregas por meio da consulta ao histórico de arquivos.',
        'Coleta de dados automatizada e informações padronizadas para consumo em planilhas e dashboards.',
        'Acesso mais ágil aos indicadores usados pela equipe na tomada de decisão.',
        'Redução de retrabalho manual e maior aderência das melhorias às necessidades dos usuários.',
      ],
    },
  },
  {
    slug: 'alares-internet', cargo: 'Jovem Aprendiz de Projetos', empresa: 'Alares Internet', inicio: 'Set/2025', fim: 'Mar/2026',
    resumo: 'Scripts em Python, integração de APIs e apoio técnico a projetos de melhoria.',
    tecnologias: ['python'], competencias: ['APIs REST', 'JSON', 'Diagramação de rede'],
    relato: {
      contexto: 'Experiência de aprendizagem profissional com automação, integração de dados e apoio técnico às atividades de projetos e sistemas internos.',
      problematica: 'Como apoiar a equipe em processos internos repetitivos, integrar informações de serviços externos e contribuir tecnicamente com projetos de rede e sistemas?',
      solucao: 'Desenvolvi scripts em Python para automatizar processos, integrei APIs REST e tratei dados em JSON para alimentar sistemas internos. Também apoiei a diagramação de rede e iniciativas de melhoria de sistemas.',
      atividades: [
        'Automação de processos internos com scripts em Python.',
        'Integração de APIs REST e tratamento de dados em formato JSON para os sistemas internos.',
        'Apoio técnico em diagramação de rede e em projetos de melhoria de sistemas.',
      ],
      resultados: [
        'Redução de tarefas manuais da equipe por meio de scripts de automação.',
        'Dados de APIs tratados para alimentar os sistemas internos.',
        'Apoio às entregas técnicas de diagramação e melhoria de sistemas.',
      ],
    },
  },
]
