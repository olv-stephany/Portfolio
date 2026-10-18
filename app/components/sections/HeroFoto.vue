<script setup lang="ts">
import fotoPadrao from '~/assets/perfil.png'
import { perfil } from '~/mocks/perfil'

const foto = computed(() => perfil.foto ?? fotoPadrao)
</script>

<template>
  <div>
    <img
      :src="foto"
      :alt="`Foto de ${perfil.nome}`"
      class="aspect-[366/501] w-full max-w-[366px] rounded-[14px] object-cover xl:h-[501px] xl:w-[366px]"
    />

    <div class="mt-4 flex gap-3 xl:mt-[17px] xl:gap-[21px]">
      <BotaoContorno :href="perfil.curriculoUrl" download class="flex-1 xl:w-[112px] xl:flex-none">
        Baixar currículo
      </BotaoContorno>
      <BotaoContorno :href="`mailto:${perfil.email}`" class="flex-1 xl:w-[112px] xl:flex-none">
        Enviar e-mail
      </BotaoContorno>
    </div>
  </div>
</template>
