<script setup lang="ts">
withDefaults(defineProps<{ nome: 'externo' | 'baixo' | 'voltar' | 'seguir' | 'busca' | 'fechar' | 'check' }>(), { nome: 'externo' })
</script>
<template>
  <svg class="icone-interface" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path v-if="nome === 'externo'" d="M7 17 17 7M7 7h10v10" />
    <path v-else-if="nome === 'baixo'" d="M12 4v16m-6-6 6 6 6-6" />
    <path v-else-if="nome === 'voltar'" d="M20 12H4m6-6-6 6 6 6" />
    <path v-else-if="nome === 'seguir'" d="M4 12h16m-6-6 6 6-6 6" />
    <template v-else-if="nome === 'busca'"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></template>
    <path v-else-if="nome === 'fechar'" d="m6 6 12 12M6 18 18 6" />
    <path v-else d="m5 12 4 4L19 6" />
  </svg>
</template>
