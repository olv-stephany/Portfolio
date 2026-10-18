<template>
  <main
    class="mx-auto max-w-[1440px] px-5 pt-10 pb-16 font-sans text-white md:px-8 md:pt-14 md:pb-20 xl:pt-[109px] xl:pr-[72px] xl:pb-[108px] xl:pl-[86px]"
  >
    <section class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-[366px_1fr_262px] xl:gap-x-[55px] xl:gap-y-0">
      <HeroFoto class="order-1 xl:order-none" />

      <div class="contents xl:relative xl:flex xl:h-[501px] xl:flex-col xl:justify-between">
        <HeroTexto class="order-2 xl:order-none" />
        <Experiencias class="order-4 xl:order-none" />
      </div>

      <div class="contents xl:flex xl:h-[501px] xl:flex-col xl:justify-between">
        <Habilidades class="order-3 md:col-span-2 xl:order-none xl:col-span-1" />
        <Formacoes class="order-5 xl:order-none" />
      </div>
    </section>

    <Projetos />
  </main>

  <Rodape />
</template>
