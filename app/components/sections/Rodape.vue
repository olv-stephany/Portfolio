<script setup lang="ts">
import { contatos } from '~/mocks/contatos'
</script>

<template>
  <footer class="bg-cinza-claro text-black">
    <div
      class="mx-auto flex max-w-[1440px] flex-col items-center gap-2 px-5 py-4 text-[12px] md:flex-row md:justify-between md:px-8 md:py-2 xl:h-[30px] xl:py-0 xl:pr-[72px] xl:pl-[86px]"
    >
      <p>{{ contatos.creditos }}</p>

      <nav aria-label="Redes sociais">
        <ul class="flex gap-6">
          <li v-for="link in contatos.links" :key="link.url">
            <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
            >
              {{ link.nome }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
