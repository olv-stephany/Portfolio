<template>
  <div class="site">
    <a class="pular-conteudo" href="#conteudo">Pular para o conteúdo</a>
    <div class="site-container">
      <Cabecalho />
      <main id="conteudo" tabindex="-1"><slot /></main>
      <Rodape />
    </div>
  </div>
</template>
