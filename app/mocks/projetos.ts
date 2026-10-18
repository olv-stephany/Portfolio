export const projetos: Projeto[] = [
  {
    imagem: '/projeto-umbrella.jpg',
    categoria: 'Front-end',
    status: 'Concluído',
    nome: 'Umbrella W.I',
    descricao:
      'Projeto desenvolvido em equipe para o NASA Space Apps Challenge 2025. A plataforma combina dados climáticos da NASA POWER API com um mapa interativo e permite que a comunidade reporte fenômenos ambientais, ajudando a identificar riscos e prevenir desastres que possam impactar muitas pessoas. Contribuí para o levantamento de requisitos, a prototipação no Figma e o desenvolvimento do front-end com Next.js e Tailwind CSS.',
    tecnologias: ['nextjs', 'figma'],
    demoUrl: 'https://www.figma.com/design/sFyMb53liHy1YqrtT9QUJs/UI-UX-MP-Solutions?node-id=0-1&t=7Ppr7PymvtLU34wS-1',
  },
  {
    imagem: '/projeto-cartograficos.jpg',
    categoria: 'UI/UX',
    status: 'Concluído',
    nome: 'HaCARthon/SICAR',
    descricao:
      'Solução desenvolvida em equipe para facilitar o cadastro no Cadastro Ambiental Rural (CAR). O aplicativo orienta o produtor durante o preenchimento, valida os dados para evitar erros e permite delimitar a área do terreno usando o GPS do celular, mesmo sem conexão com a internet. As coordenadas são salvas offline e usadas para reconstruir o formato da propriedade. A plataforma também oferece uma alternativa de delimitação manual, consulta de terrenos vizinhos e acompanhamento do status dos cadastros, com uma experiência simples e acessível para agricultores com diferentes níveis de familiaridade com a tecnologia. Contribuí para o levantamento de requisitos e a prototipação no Figma.',
    tecnologias: ['figma'],
  },
  {
    categoria: 'Back-end',
    status: 'Concluído',
    nome: 'VibraniumCore-API',
    descricao:
      'API RESTful para gestão de carteira de investimentos. Permite consultar a carteira, comprar e vender ativos, atualiza cotações pela BRAPI e mantém o histórico das transações íntegro.',
    tecnologias: ['nodejs', 'prisma', 'postgresql'],
    githubUrl: 'https://github.com/olv-stephany/VibraniumCore-API',
  },
  {
    categoria: 'Dados',
    status: 'Concluído',
    nome: 'SearchAddress',
    descricao:
      'Pipeline em Python que encontra endereços a partir de coordenadas geográficas em massa, sem depender de APIs pagas. Usa a malha territorial do IBGE e spatial join (GeoPandas) para associar cada ponto a município e estado.',
    tecnologias: ['python', 'pandas'],
    githubUrl: 'https://github.com/olv-stephany/SearchAddress',
  },
]